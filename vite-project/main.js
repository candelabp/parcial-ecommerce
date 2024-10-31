import { renderCategories } from "./src/services/categories";
import { handleGetProductLocalStorage, setInLocalStorage } from "./src/persistence/localStorage";
import './style.css'
import { handleGetProductsToStore } from "./src/view/store";
import { closeModal, openModal } from "./src/view/modal";
import { handleSearchProductByName } from "./src/services/searchBar";

//aplicacion
export let categoriaActiva=null;
export const setCategoriaActiva = (categoriaIn)=>{
categoriaActiva = categoriaIn;
}

export let productoActivo=null;

export const setProductoActivo= (productoIn)=>{
productoActivo = productoIn;
}


handleGetProductsToStore();

renderCategories();





const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click',()=>{
handleCancelButton();
})
const handleCancelButton = ()=>{
  closeModal();
}

//header
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click',()=>{
openModal();
});

//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click",()=>{
  handleSearchProductByName();
})