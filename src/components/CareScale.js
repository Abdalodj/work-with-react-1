import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function handleOnClick(scaleValue, careType) {
    const appreciations = {
        "1": "peu",
        "2": "modérement",
        "3": "beaucoup"
    }

    alert(`Cette plante requiert ${appreciations[scaleValue.toString()]}  ${careType === 'light' ? 'de lumière' : "d'arrosage"}
    \n Ceci est un composant CareScale de type ${careType}.`);
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon' />
    ) : (
        <img src={Water} alt='water-icon' />
    );

    return (
        <div onClick={() => handleOnClick(scaleValue, careType)}>
            {range.map((rangeElem) => scaleValue >= rangeElem && <span key={rangeElem.toString()}>{scaleType}</span>
            )}
        </div>
    )
}

export default CareScale