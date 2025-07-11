/* REACT BOOTSTRAP */
import { Container } from "react-bootstrap";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import ReturnsScreen from "./screens/ReturnsScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import TermsScreen from "./screens/TermsScreen";

/* REACT ROUTER */
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/products" component={HomeScreen} />
          <Route path="/categories" component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />

          <Route path="/register" component={RegisterScreen} />

          <Route path="/profile" component={ProfileScreen} />

          <Route path="/shipping" component={ShippingScreen} />

          <Route path="/payment" component={PaymentScreen} />

          <Route path="/placeorder" component={PlaceOrderScreen} />

          <Route path="/order/:id" component={OrderScreen} />

          <Route path="/product/:id" component={ProductScreen} />

          <Route path="/cart/:id?" component={CartScreen} />

          <Route path="/admin/userlist" component={UserListScreen} />

          <Route path="/admin/user/:id/edit" component={UserEditScreen} />

          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

          <Route path="/admin/productlist" component={ProductListScreen} />

          <Route path="/admin/orderlist" component={OrderListScreen} />

          <Route path="/contact" component={ContactScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/returns" component={ReturnsScreen} />
          <Route path="/privacy" component={PrivacyScreen} />
          <Route path="/terms" component={TermsScreen} />
        </main>
      </Container>
      <Footer />
      <ChatBot />
    </Router>
  );
}

export default App;
