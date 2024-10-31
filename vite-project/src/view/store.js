import {  setProductoActivo } from "../../main";
import { openModal } from "./modal";
import { handleGetProductLocalStorage } from "../persistence/localStorage"

//store
export const handleGetProductsToStore =() =>{
    const products = handleGetProductLocalStorage();
    handleRenderList(products);
};
 export const handleRenderList = (productosIn) =>{

    const burgers = productosIn.filter((el)=> el.categories === "Hamburguesa");
    const papas = productosIn.filter((el)=> el.categories === "Papas");
    const gaseosas = productosIn.filter((el)=> el.categories === "Gaseosa");

const renderProductGroup = (productos, title) =>{
    console.log(productos);
   if(
    productos.length>0
   ){
    const productosHTML = productos.map((producto,index)=>{
        return `<div class="containerTargetItem" id="product-${producto.categories}-${index}">
        <div>
        <img src=${producto.imagen} />
        
        <div>
        <h2>${producto.nombre} </h2>
        </div>
        <div class="targetProps">
        <p><b>Precio:</b> $ ${producto.precio}</p>
       

        </div>
        </div>
        </div>`;
    });
    return `
    <section class="sectionStore">
    <div class="containerTitleSection">
    <h3>${title}</h3>
    </div>
    <div class="containerProductStore">
    ${productosHTML.join("")}
    </div>
    </section>
    `;
   } else{
    return ""
   }

};

//renderizar c/u de los prod

const appContainer = document.getElementById("storeContainer");
appContainer.innerHTML = `
${renderProductGroup(burgers,"Hamburguesas")}
${renderProductGroup(papas,"Papas")}
${renderProductGroup(gaseosas,"Gaseosas")}

`
;
const addEvents = (productsIn)=>{
    if(productosIn){
productsIn.forEach((element,index)=>{
const productContainer = document.getElementById(
    `product-${element.categories}-${index}`);
productContainer.addEventListener('click', ()=>{
    setProductoActivo(element);
    openModal();
});
});
}
};
addEvents(burgers);
addEvents(papas);
addEvents(gaseosas);
 };