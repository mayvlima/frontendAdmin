import Products from "views/admin/Products/index.jsx";
import Product from "views/admin/Products/Product/index.jsx";


var routes = [ 
  {
    path: "/products",
    name: "Produtos",
    icon: "fas fa-box",
    component: Products,
    layout: "/admin",
  },
  {
    path: "/product",
    invisible: true,
    component: Product,
    layout: "/admin",
  },  
  
];
export default routes;
