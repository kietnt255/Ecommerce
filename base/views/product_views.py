# Django Import
from django.core import paginator
from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
#from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
from rest_framework import status
from sentence_transformers import SentenceTransformer
import numpy as np

# Rest Framework Import
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework.serializers import Serializer


# Local Import
from base.products import products
from base.models import *
from base.serializers import ProductSerializer


# Top Products


@api_view(['GET'])
def getTopProducts(request):
    products = Product.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# Get single products
@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


# Create a new Product
@api_view(['POST'])
@permission_classes([IsAdminUser])
def createProduct(request):

    user = request.user
    product = Product.objects.create(
        user=user,
        name=" Product Name ",
        price=0,
        brand="Sample brand ",
        countInStock=0,
        category="Sample category",
        description=" "
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

# Update single products


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateProduct(request, pk):
    data = request.data
    product = Product.objects.get(_id=pk)

    product.name = data["name"]
    product.price = data["price"]
    product.brand = data["brand"]
    product.countInStock = data["countInStock"]
    product.category = data["category"]
    product.description = data["description"]

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


# Delete a product
@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteProduct(request, pk):
    product = Product.objects.get(_id=pk)
    product.delete()
    return Response("Product deleted successfully")


# Upload Image
@api_view(['POST'])
def uploadImage(request):
    data = request.data
    product_id = data['product_id']
    product = Product.objects.get(_id=product_id)
    product.image = request.FILES.get('image')
    product.save()
    return Response("Image was uploaded")


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createProductReview(request, pk):
    user = request.user
    product = Product.objects.get(_id=pk)
    data = request.data

    # 1 Review already exists
    alreadyExists = product.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {'detail': 'Product already reviewed'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Please Select a rating'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 Create review
    else:
        review = Review.objects.create(
            user=user,
            product=product,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0

        for i in reviews:
            total += i.rating
        product.rating = total / len(reviews)
        product.save()

        return Response('Review Added')


# Get all the products with query
# Search function with updated django's ORM (Object-Relational Mapper)


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('keyword')
    if query == None:
        query = ''
    
    # Try keyword search first
    products = Product.objects.filter(name__icontains=query).order_by('-_id')
    
    # If no results found and query is not empty, try semantic search
    if not products.exists() and query.strip():
        # Initialize the model (this will be cached after first load)
        model = SentenceTransformer('all-MiniLM-L6-v2')
        
        # Get all products and convert to list
        all_products = list(Product.objects.all())
        
        # Create product descriptions by combining relevant fields
        product_descriptions = []
        for product in all_products:
            desc = f"{product.name} {product.description} {product.brand} {product.category}"
            product_descriptions.append(desc)
        
        # Get embeddings for the search query and all products
        query_embedding = model.encode(query)
        product_embeddings = model.encode(product_descriptions)
        
        # Calculate cosine similarity
        similarities = np.dot(product_embeddings, query_embedding) / (
            np.linalg.norm(product_embeddings, axis=1) * np.linalg.norm(query_embedding)
        )
        
        # Get indices of products sorted by similarity
        similar_indices = np.argsort(similarities)[::-1]  # Reverse to get highest first
        products = [all_products[int(i)] for i in similar_indices]  # Convert numpy.int64 to Python int
        
        # Add similarity scores to products
        for product, score in zip(products, similarities[similar_indices]):
            product.similarity_score = float(score)
            product.is_semantic_match = True  # Flag to indicate this was a semantic match

    # Pagination
    page = request.query_params.get('page')
    paginator = Paginator(products, 8)

    try:
        products = paginator.page(page)
    except PageNotAnInteger:
        products = paginator.page(1)
    except EmptyPage:
        products = paginator.page(paginator.num_pages)

    if page == None:
        page = 1
    page = int(page)

    serializer = ProductSerializer(products, many=True)
    return Response({
        'products': serializer.data, 
        'page': page, 
        'pages': paginator.num_pages,
        'search_type': 'semantic' if hasattr(products[0], 'is_semantic_match') else 'keyword' if query else 'all'
    })

# Try full text search
# @api_view(['GET'])
# def getProducts(request):
#     query = request.query_params.get('keyword')
#     if query is None:
#         query = ''

#     vector = SearchVector('name')  # Define which fields to search against
#     search_query = SearchQuery(query)

#     products = Product.objects.annotate(
#         search=vector,
#         rank=SearchRank(vector, search_query)
#     ).filter(search=search_query).order_by('-rank', '-_id')

#     page = request.query_params.get('page')
#     paginator = Paginator(products, 8)

#     try:
#         products = paginator.page(page)
#     except PageNotAnInteger:
#         products = paginator.page(1)
#     except EmptyPage:
#         products = paginator.page(paginator.num_pages)

#     if page is None:
#         page = 1
#     page = int(page)

#     serializer = ProductSerializer(products, many=True)
#     return Response({'products': serializer.data, 'page': page, 'pages': paginator.num_pages})

@api_view(['GET'])
def semanticSearch(request):
    description = request.query_params.get('description')
    if not description:
        return Response({'error': 'Please provide a description'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Initialize the model (this will be cached after first load)
    model = SentenceTransformer('all-MiniLM-L6-v2')
    
    # Get all products
    products = Product.objects.all()
    
    # Create product descriptions by combining relevant fields
    product_descriptions = []
    for product in products:
        desc = f"{product.name} {product.description} {product.brand} {product.category}"
        product_descriptions.append(desc)
    
    # Get embeddings for the search query and all products
    query_embedding = model.encode(description)
    product_embeddings = model.encode(product_descriptions)
    
    # Calculate cosine similarity
    similarities = np.dot(product_embeddings, query_embedding) / (
        np.linalg.norm(product_embeddings, axis=1) * np.linalg.norm(query_embedding)
    )
    
    # Get the index of the most similar product
    most_similar_idx = np.argmax(similarities)
    most_similar_product = products[most_similar_idx]
    
    serializer = ProductSerializer(most_similar_product, many=False)
    return Response({
        'product': serializer.data,
        'similarity_score': float(similarities[most_similar_idx])
    })