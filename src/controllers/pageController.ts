import { Request,Response} from "express";
import { createMenuObject } from "../helpers/createMenuObjects";
import { Pet } from "../models/pets";

export const home = (req:Request, res:Response) => {
    
    let list = Pet.getAll(); 

    res.render('pages/page',{
        banner: {
            menu:createMenuObject('all'),
            title:'Todos os animais',
            background:'allanimals.jpg',
        },
        list
    })
}

export const dogs = (req:Request, res:Response) => {
    let list = Pet.getFromType("dog");
    res.render('pages/page',{
        banner: {
            menu:createMenuObject('dogs'),
            title:'Cachorros',
            background:'banner_dog.jpg',
        },
        list
    })
}

export const cats = (req:Request, res:Response) => {
    let list = Pet.getFromType("cat");
    res.render('pages/page',{
        banner: {
            menu:createMenuObject('cats'),
            title:'Gatos',
            background:'banner_cat.jpg',
        },
        list
    })
}

export const fishes = (req:Request, res:Response) => {
    let list = Pet.getFromType("fish");
    res.render('pages/page',{
        banner: {
            menu:createMenuObject('fishes'),
            title:'Peixes',
            background:'banner_fish.jpg',
        },
        list
    })
}
