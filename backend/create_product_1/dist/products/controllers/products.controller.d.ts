import { ProductsService } from '../services/products.service';
import { CreateProductDto } from '../dto/create-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("../entities/product.entity").Product>;
}
