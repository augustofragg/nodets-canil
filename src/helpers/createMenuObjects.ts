type menuOptions = '' | 'all' | 'dogs' | 'cats' | 'fishes';

export const createMenuObject = (activMenu: menuOptions) => {

    let returnObject = {
        all:false,
        dogs:false,
        cats:false,
        fishes:false
    }

    if(activMenu != '') {
        returnObject[activMenu] = true;
    }

    return returnObject
}