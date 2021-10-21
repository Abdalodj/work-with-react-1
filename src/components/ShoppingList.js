
const plantLists = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
];

function ShoppingList() {
    return (
        <ul>
            {plantLists.map((plant, index) => (
                <li key={index}>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList