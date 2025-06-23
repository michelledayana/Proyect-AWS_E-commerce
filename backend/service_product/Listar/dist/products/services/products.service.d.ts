import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
export declare class ProductsService {
    private readonly productRepo;
    constructor(productRepo: Repository<Product>);
    findAll(): Promise<Product[]>;
}
