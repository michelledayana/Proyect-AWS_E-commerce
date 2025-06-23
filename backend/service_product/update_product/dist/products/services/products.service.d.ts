import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { UpdateProductDto } from '../dto/update-product.dto';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product | null>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
    findOneByName(name: string): Promise<Product | null>;
    findByEmail(email: string): Promise<Product | null>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
}
