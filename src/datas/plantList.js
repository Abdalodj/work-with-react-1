import monstera from "../assets/monstera.jpg";
import lyrata from "../assets/lyrata.jpg";
import basil from "../assets/basil.jpg";
import cactus from "../assets/cactus.jpg";
import calathea from "../assets/calathea.jpg";
import mint from "../assets/mint.jpg";
import olivier from "../assets/olivier.jpg";
import pothos from "../assets/pothos.jpg";
import succulent from "../assets/succulent.jpg";


export const plantList = [
    {
        name: 'monstera',
        cover: monstera,
        category: 'classique',
        id: '1ed',
        isBestSale: true,
        light: 2,
        water: 3
    },
    {
        name: 'ficus lyrata',
        cover: lyrata,
        category: 'classique',
        id: '2ab',
        light: 3,
        water: 1
    },
    {
        name: 'pothos argenté',
        cover: pothos,
        category: 'classique',
        id: '3sd',
        isSpecialOffer: true,
        light: 1,
        water: 2
    },
    {
        name: 'calathea',
        category: 'classique',
        id: '4kk',
        light: 2,
        water: 3,
        cover: calathea
    },
    {
        name: 'olivier',
        cover: olivier,
        category: 'extérieur',
        id: '5pl',
        light: 3,
        water: 1
    },
    {
        name: 'basilique',
        cover: basil,
        category: 'extérieur',
        id: '7ie',
        isBestSale: true,
        isSpecialOffer: true,
        light: 2,
        water: 3
    },
    {
        name: 'succulente',
        cover: succulent,
        category: 'plante grasse',
        id: '9vn',
        light: 2,
        water: 1
    },

    {
        name: 'cactus',
        category: 'plante grasse',
        id: '8fp',
        light: 2,
        water: 1,
        cover: cactus
    },

    {
        name: 'menthe',
        category: 'extérieur',
        id: '6uo',
        light: 2,
        water: 2,
        cover: mint
    }
]