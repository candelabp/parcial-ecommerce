//Local storage

export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products
    }else{
        return[];
    }
};

//guardar en el localstorage

export const setInLocalStorage = (productIn)=>{
    //traer elementos
    
    let productsInLocal = handleGetProductLocalStorage();

    const existingIndex = productsInLocal.findIndex((productsLocal)=>
    productsLocal.id === productIn.id
    )
    if(existingIndex !== -1){
        productsInLocal[existingIndex] = productIn;
    }else{
        productsInLocal.push(productIn);
    }
    //setear el nuevo array
    localStorage.setItem('products', JSON.stringify(productsInLocal));
};