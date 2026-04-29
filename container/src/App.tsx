import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar';
import Page from './Page';

import './App.css';

const LoginApp = lazy(() => import('login/LoginApp'))
const ProductApp = lazy(() => import('product/ProductApp'))
const CartApp = lazy(() => import('cart/CartApp'))
const CheckoutApp = lazy(() => import('checkout/CheckoutApp'))
const PaymentApp = lazy(() => import('checkout/PaymentApp'))

function App() {
    return (
        <Router>
            <Navbar />

            <Suspense fallback={<div>Loading remote...</div>}>
                <Routes>
                    <Route path="/login" element={<LoginApp />} />
                    <Route path="/product" element={<ProductApp />} />
                    <Route path="/cart" element={<CartApp />} />
                    <Route path="/checkout" element={<CheckoutApp />} />
                    <Route path="/payment" element={<PaymentApp />} />
                    <Route path="*" element={<Page />} />
                </Routes>
            </Suspense>
        </Router>
    )
}

export default App
