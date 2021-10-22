import {useState} from "react";

export function Categories({updatePlants, categories}) {
    const [categ, updateCateg] = useState('default')
    function change(category) {
        updateCateg(category);
        updatePlants(category);
    }

    return (
        <div style={{margin: '20px'}}>
            <label htmlFor="cars">Choisir une catégorie:</label>
            <br/>
            <select
                name="cars"
                id="cars"
                style={{width: '150px', margin: '10px', padding: '3px'}}
                value={categ}
                onChange={(e) => change(e.target.value)}
            >
                <option value="default">Tous</option>
                {categories.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}