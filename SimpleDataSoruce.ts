import { Product } from "./Products";

export class SimleDataSoruce{
    private products:Array<Product>;

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Mi Note 5 pro","Telefon",8000),
            new Product(2,"Mi Note 6 pro","Telefon",3000),
            new Product(3,"Mi Note 7 pro","Telefon",4000),
            new Product(4,"Mi Note 8 pro","Telefon",5000),
        );

    }
    getProducts():Product[]{
        return this.products;
    }
}