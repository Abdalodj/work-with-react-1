import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from "./CareScale";

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
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name} {plant.isBestSale ? <span>🔥</span> : null}
                        {
                            plant.isSpecialOffer &&
                            <div className="lmj-sales">Solde</div>
                        }
                        <CareScale careType='water' scaleValue={plant.water} />
                        <CareScale careType='light' scaleValue={plant.light} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList