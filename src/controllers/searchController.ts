import { Request,Response } from "express";

import { createMenuObject } from "../helpers/createMenuObjects";
import { Pet } from "../models/pets";

export const search = (req:Request,res:Response) => {

    let query:string = req.query.q as string;

    if(!query){
        res.redirect('/');
        return
    }

    let list = Pet.getFromName(query);


    res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        query
    })

}