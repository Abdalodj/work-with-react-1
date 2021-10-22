import {useState} from "react";
import '../styles/Cart.css';


export default function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className='lmj-cart'>
            <button onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}€</h3>
            {
                cart > 0 && <button onClick={() => updateCart(0)}>
                    Vider le panier
                </button>
            }
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
    )
}