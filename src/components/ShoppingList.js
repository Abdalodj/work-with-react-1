import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import {PlantItem} from "./PlantItem";
import {Categories} from "./Categories";
import {useState} from "react";


function ShoppingList({cart, updateCart}) {
    const categoryList = Array.from(
        new Set(
            plantList.map(x => x.category)
        )
    );
    const [plants, updatePlants] = useState(plantList)

    function updateListPlants(category) {
        if (category === 'default') {
            updatePlants(plantList);
        } else {
            updatePlants(plantList.filter(x => x.category === category));
        }
    }

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div>
            <Categories updatePlants={updateListPlants} categories={categoryList}/>
            <ul className='lmj-plant-list'>
                {plants.map(({ id, cover, name, water, light, price }) => (
                    <div key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList