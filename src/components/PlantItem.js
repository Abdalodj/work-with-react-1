import CareScale from "./CareScale";
import "../styles/PlantItem.css";



export function PlantItem({name, cover, id, light, water, isSpecialOffer}) {
    return (
        <li className='lmj-plant-item' key={id}>
            <img src={cover} alt={`${name} cover`} className="lmj-plant-item-cover"/>
            {name}
            {
                isSpecialOffer &&
                <div className="lmj-sales">Solde</div>
            }
            <CareScale careType='water' scaleValue={water} />
            <CareScale careType='light' scaleValue={light} />
        </li>
    );
}