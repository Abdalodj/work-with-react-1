import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(e) {
    console.log('✨ Ceci est mon event :', e)
}

export function PlantItem({name, cover, water, light, price}) {
    return (
        <li className='lmj-plant-item' onClick={handleClick}>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover"/>
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    );
}