import ProductServices from "../model/product-services.js";
import Product from "../model/product.js";
import Fillterproduct from "../model/validation.js";
const validation=new Fillterproduct();
const productServices = new ProductServices();
const geID = (id) => document.getElementById(id);
const getListProductApi = () => {
  geID("loader").style.display = "block";
  const promise = productServices.getListProductApi();
  promise
    .then((result) => {
      geID("loader").style.display = "none";
      rederListProduct(result.data);
    })
    .catch((error) => {
      geID("loader").style.display = "none";
      console.log(error);
    });
};
const rederListProduct = (data) => {
  let contenHTML = "";
  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    contenHTML += `<tr  
    style="border:1px">
             <td style="border-radius:1px">${i + 1}</td>
             <td>${product.name}</td>
             <td>${product.price}</td>
             <td>${product.screen}</td>
             <td>${product.blackCamera}</td>
             <td>${product.frontCamera}</td>
             <td>${product.type}</td>
             <td><img src="${product.img}" alt="Product Image" width="50"></td>
             <td>${product.description}</td>
             <td>
             <button type="button" 
                style="color: white;
                       background: linear-gradient(to right, #3b82f6, #2563eb, #1e40af);
                       border-radius: 8px;
                       padding: 8px 16px;
                       box-shadow: 2px 4px 6px rgba(59, 130, 246, 0.5);
                       cursor: pointer;
                       margin-right: 8px;
                       border: none;"
                onclick="onEdtit('${product.id}')">Edit</button>
              
             <button type="button" 
                style="color: white;
                       background: linear-gradient(to right, #ef4444, #dc2626, #b91c1c);
                       border-radius: 8px;
                       padding: 8px 16px;
                       box-shadow: 2px 4px 6px rgba(239, 68, 68, 0.5);
                       cursor: pointer;
                       border: none;"
                onclick="onDeleate('${product.id}')">Delete</button>
             </td>
             </tr>`;
  }
  geID("hStblDanachSP").innerHTML = contenHTML;
};
const toggleModal = () => {
  const modal = document.getElementById("modalForm");
  modal.classList.toggle("hidden");
};
window.toggleModal = toggleModal;

document.getElementById("btnThemSP").onclick = function () {
  document.getElementById("modal-title").innerText = "Add Product";
  const btnAdd = `<button style="
      color: white;
      background: linear-gradient(to right, #3b82f6, #2563eb, #1e40af);
      border-radius: 8px;
      padding: 8px 16px;
      box-shadow: 2px 4px 6px rgba(59, 130, 246, 0.5);
      cursor: pointer;
      margin-right: 8px;
      border: none;" onclick="onAddProduct()"> Add </button>`;
  document.getElementsByClassName("btnThem")[0].innerHTML = btnAdd;
  toggleModal();
};
const getValue = () => {
  const name = geID("name").value;
  const price = geID("price").value;
  const screen = geID("screns").value;
  const backCamera = geID("balckcamera").value;
  const frontCamera = geID("froncamera").value;
  const type = geID("category").value;
  const img = geID("images").value;
  const desc = geID("description").value;
let isValid=true;
isValid&=validation.checkEmpty(name,"tbName","(*) vui long nhap ten san pham")
if(!isValid) return ;
  return new Product(
    "",
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    type,
    img,
    desc
  );
};
const onAddProduct = () => {
  const product = getValue();
  if(!product) return;
  const promise = productServices.addProductApi(product);
  promise
    .then((result) => {
      alert(`Add product ${result.data.name} success!`);
      toggleModal();
      resetFrom();
      getListProductApi();
    })
    .catch((error) => {
      console.log(error);
    });
};
const resetFrom=()=>{
  geID("productFrom").reset();
}
getListProductApi();
const onDeleate = (id) => {
  console.log(id);
  const promeis = productServices.deleteProcudtApi(id);
  promeis
    .then((result) => {
      alert(`Delete product ${result.data.name} Succes`);
      getListProductApi();
    })
    .catch((error) => {
      console.log(error);
    });
};
const onEdtit = (id) => {
  const promeis = productServices.getProductById(id);
  promeis
    .then((result) => {
      const product = result.data;
      geID("name").value = product.name;
      geID("price").value = product.price;
      geID("screns").value = product.screen;
      geID("balckcamera").value = product.blackCamera;
      geID("froncamera").value = product.frontCamera;
      geID("category").value = product.category;
      geID("images").value = product.images;
      geID("description").value = product.description;
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("modal-title").innerHTML = "Edit Product";

  const btnUpdate = `<button style="color: white;
                       background: linear-gradient(to right, #3b82f6, #2563eb, #1e40af);
                       border-radius: 8px;
                       padding: 8px 16px;
                       box-shadow: 2px 4px 6px rgba(59, 130, 246, 0.5);
                       cursor: pointer;
                       margin-right: 8px;
                       border: none;" onclick="onUpdateProduct(event,'${id}')">Update</button>`;

  document.getElementsByClassName("btnThem")[0].innerHTML = btnUpdate;
  toggleModal();
};

const onUpdateProduct = (e, id) => {
  e.preventDefault();
  const product = getValue();
  product.id = id;
  const promise = productServices.updateProductApi(product);
  promise
    .then((result) => {
      alert(`Update${result.data.name} success!`);
      document.getElementById("crud-modal").click();
      getListProductApi();
    })
    .catch((error) => {
      console.log(error);
    });
};
window.onEdtit = onEdtit;
window.onDeleate = onDeleate;
window.onAddProduct = onAddProduct;
window.onUpdateProduct = onUpdateProduct;
