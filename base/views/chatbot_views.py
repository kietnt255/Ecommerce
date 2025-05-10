from django.shortcuts import render
import json
import requests
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from base.models import ChatbotConversation
import os
from pathlib import Path
from dotenv import load_dotenv

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

@csrf_exempt
def chat_with_gemini(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_message = data.get("message", "")

            # Create a suitable prompt for e-commerce customer support
            prompt = f"""Bạn là trợ lý ảo hỗ trợ khách hàng của website thương mại điện tử TechShop.
Cung cấp những thông tin sau cho khách hàng một cách lịch sự, thân thiện và chuyên nghiệp:

- Thông tin về sản phẩm (điện thoại, laptop, máy tính bảng, phụ kiện điện tử)
- Chính sách đổi trả: 30 ngày đổi trả miễn phí nếu sản phẩm lỗi, 7 ngày đổi trả với lý do khác
- Thông tin vận chuyển: Miễn phí cho đơn hàng trên 500,000đ, giao hàng trong 2-3 ngày làm việc
- Phương thức thanh toán: COD, thẻ tín dụng, chuyển khoản ngân hàng, ví điện tử
- Khuyến mãi hiện tại: Giảm 10% cho đơn hàng từ 1,000,000đ, tặng phiếu mua hàng 100,000đ cho khách hàng mới

Nếu khách hàng hỏi về chi tiết sản phẩm cụ thể mà bạn không có thông tin, hãy đề nghị họ cung cấp link sản phẩm hoặc mã sản phẩm để được hỗ trợ tốt hơn.

Nếu câu hỏi không liên quan đến thương mại điện tử, vẫn trả lời theo cách thân thiện nhưng hướng cuộc trò chuyện về các sản phẩm và dịch vụ của TechShop.

Phản hồi ngắn gọn tối đa trong 5 câu.

Câu hỏi của khách hàng: {user_message}"""

            payload = {
                "contents": [{
                    "parts": [{"text": prompt}]
                }]
            }

            # Use gemini-2.0-flash model instead of gemini-2.0-pro (based on successful curl)
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"

            headers = {"Content-Type": "application/json"}
            response = requests.post(url, headers=headers, json=payload)

            # Check response status
            if response.status_code != 200:
                return JsonResponse({"error": f"API error: {response.status_code}", "details": response.text}, status=500)

            result = response.json()

            # Safely handle and extract response content
            candidates = result.get("candidates", [])
            if candidates and len(candidates) > 0:
                content = candidates[0].get("content", {})
                parts = content.get("parts", [])
                if parts and len(parts) > 0:
                    reply = parts[0].get("text", "No response available.")
                else:
                    reply = "No response content found."
            else:
                reply = "No response received from the API."

            return JsonResponse({"reply": reply})

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON data received"}, status=400)
        except requests.RequestException as e:
            return JsonResponse({"error": f"Connection error: {str(e)}"}, status=500)
        except Exception as e:
            return JsonResponse({"error": f"Unexpected error: {str(e)}"}, status=500)

    return JsonResponse({"error": "Method not allowed"}, status=405)
