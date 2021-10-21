import {plantList} from '../datas/plantList'


const plantLists = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
];

function CategoryList() {
    const categoryList = Array.from(
        new Set(
            plantList.map(x => x.category)
        )
    );

    return (
        <ul>
            {categoryList.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

function ShoppingList() {
    return (
        <div>
            <CategoryList/>
            <ul>
                {plantLists.map((plant, index) => (
                    <li key={index}>{plant}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList