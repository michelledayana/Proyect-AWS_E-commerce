import { ProductsService } from '../services/products.service';
import { Product } from '../entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
}
