import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import {PlantItem} from "./PlantItem";

function CategoryList() {
    const categoryList = Array.from(
        new Set(
            plantList.map(x => x.category)
        )
    );

    return (
        <ul>
            {categoryList.map((item) => (
                <li key={item}>
                    {item}
                </li>
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
                    <PlantItem {...plant}/>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList