import { IProductService } from "./IPorductService";
import { Product } from "./Products";
import { SimleDataSoruce } from "./SimpleDataSoruce";
export class ProductService implements IProductService{

    private dataSoruce:SimleDataSoruce;
    private product: Array<Product>;

    constructor(){
        this.dataSoruce=new SimleDataSoruce();
        this.product=new Array<Product>();
        this.dataSoruce.getProducts().forEach(p=> this.product.push(p))
    }

    getById(id: number): Product {
        return this.product.filter(p=>p.id===id)[0];
    }
    getProducts(): Product[] {
        return this.product;
    }
    saveProduct(product: Product): void {
        if(product.id==0 || product.id==null){
            product.id = this.generateId();
        }else{
            let index = this.product.indexOf(product);
            this.product.splice(index,1,product)
        }
        this.product.push(product);
    }
    deleteProduct(product: Product): void {
        let index = this.product.indexOf(product);
        if(index>0){
            this.product.splice(index,1);
        }
    }
    private generateId():number{
        let key = 1;
        while(this.getById(key) != null){
            key++;
        }
        return key;
    }

}