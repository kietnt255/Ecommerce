import React from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { FaShoppingCart, FaUser, FaSearch, FaHeart } from "react-icons/fa";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import logo from "../logo.png";

const StyledNavbar = styled(Navbar)`
  background-color: #343a40;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavbarBrand = styled(Navbar.Brand)`
  padding: 0;
  margin-right: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    height: 40px;
  }
`;

const NavLink = styled(Nav.Link)`
  color: #adb5bd !important;
  font-weight: 500;
  padding: 0.5rem 1rem !important;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #fff !important;
    transform: translateY(-2px);
  }

  &.active {
    color: #fff !important;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background-color: #fff;
      border-radius: 2px;
    }
  }
`;

const CartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .cart-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: #dc3545;
    color: white;
    border-radius: 50%;
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const SearchContainer = styled.div`
  flex-grow: 1;
  max-width: 500px;
  margin: 0 2rem;

  @media (max-width: 991px) {
    margin: 1rem 0;
    max-width: 100%;
  }
`;

const UserDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    color: #adb5bd !important;
    font-weight: 500;
    padding: 0.5rem 1rem !important;
    transition: all 0.3s ease;

    &:hover {
      color: #fff !important;
    }

    &::after {
      display: none;
    }
  }

  .dropdown-menu {
    background-color: #343a40;
    border: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  .dropdown-item {
    color: #adb5bd;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
    }

    &.active {
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
  }
`;

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <StyledNavbar expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <NavbarBrand>
            <img src={logo} alt="CloudKiddie" />
          </NavbarBrand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchContainer>
            <SearchBox />
          </SearchContainer>

          <Nav className="ms-auto align-items-center">
            <LinkContainer to="/cart">
              <NavLink>
                <CartIcon>
                  <FaShoppingCart />
                  {cartItems.length > 0 && (
                    <Badge className="cart-badge">{cartItems.length}</Badge>
                  )}
                  <span>Cart</span>
                </CartIcon>
              </NavLink>
            </LinkContainer>

            <LinkContainer to="/wishlist">
              <NavLink>
                <FaHeart />
                <span>Wishlist</span>
              </NavLink>
            </LinkContainer>

            {userInfo ? (
              <UserDropdown
                title={
                  <span className="d-flex align-items-center">
                    <FaUser />
                    <span className="ms-2">{userInfo.name}</span>
                  </span>
                }
                id="username"
              >
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>

                {userInfo.isAdmin && (
                  <>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/productlist">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </UserDropdown>
            ) : (
              <LinkContainer to="/login">
                <NavLink>
                  <FaUser />
                  <span>Sign In</span>
                </NavLink>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;
