import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'

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
            <ul className='lmj-plant-list'>
                {plantList.map((plant, index) => (
                    <li key={plant.id} className='lmj-plant-item'>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList