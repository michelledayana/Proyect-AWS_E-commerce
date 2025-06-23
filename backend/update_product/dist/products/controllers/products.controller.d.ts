import { ProductsService } from '../services/products.service';
import { UpdateProductDto } from '../dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    update(id: number, updateProductDto: UpdateProductDto): Promise<import("../entities/product.entity").Product>;
}
