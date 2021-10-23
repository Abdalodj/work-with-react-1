import Banner from './Banner';
import logo from '../assets/logo.png'
import Cart from './Cart';
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import '../styles/Layout.css'

function App() {

    const initialCart = JSON.parse(localStorage.getItem('cart')) ?? [];
    const [cart, updateCart] = useState(initialCart);

    useEffect(
        () => {localStorage.setItem('cart', JSON.stringify(cart))}
    )

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>);
}

export default App;
