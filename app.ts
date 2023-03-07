import { Product } from "./Products";
import {ProductService} from "./ProductService";

let _productService = new ProductService();

let result;


result = _productService.getById(2);

let p = new Product();
p.id=2;
p.name="Samsung S20 Ultra";
p.category="Telefon";
p.price=12500;
_productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result);