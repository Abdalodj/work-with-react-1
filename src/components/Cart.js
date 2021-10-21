const prixMonstera = 8;
const prixLierre = 10;
const prixBouqetFleurs = 15;

const Total = () => <p>Total : {prixMonstera + prixLierre + prixBouqetFleurs} £</p>

function Cart() {

    return (
    <div>
        <h2>Pannier</h2>
        <ul>
            <li>Monstera: {prixMonstera} £</li>
            <li>Lierrre: {prixLierre} £</li>
            <li>Bouquet de fleurs: {prixBouqetFleurs} £</li>
        </ul>
        <Total/>
    </div>)
}

export default Cart;