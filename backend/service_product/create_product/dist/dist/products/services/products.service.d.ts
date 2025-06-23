import { Repository } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../entities/product.entity';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product | null>;
    remove(id: number): Promise<import("typeorm").UpdateResult>;
    findOneByName(name: string): Promise<Product | null>;
    findByEmail(email: string): Promise<Product | null>;
}
