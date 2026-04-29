import { Link } from 'react-router-dom';

import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar elem-center">
            <Link className="navlist" to="/product">Product</Link>
            <Link className="navlist" to="/cart">Cart</Link>
            <Link className="navlist" to="/checkout">Checkout</Link>
            <Link className="navlist" to="/login">Login</Link>
        </nav>
    )
}

export default Navbar