
import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/product";

//funciones abrir y cerrar el modal
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
    if(productoActivo){
      const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoriess = document.getElementById("categoria");
    nombre.value = productoActivo.nombre
    imagen.value = productoActivo.imagen
    precio.value = productoActivo.precio
    categoriess.value = productoActivo.categories;
    }
  };
  
  export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
  };
  const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    nombre.value = ""
    imagen.value = ""
    precio.value = 0
    categories.value = ""
  }
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click",()=>{
    handleButtonDelete();
  })
  const handleButtonDelete = ()=>{
    handleDeleteProduct();
  }