import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async removeByName(name: string): Promise<boolean> {
    const product = await this.productRepository.findOne({ where: { name } });
    
    if (!product) {
      return false;
    }

    await this.productRepository.softDelete(product.id); // o .delete() para borrado permanente
    return true;
  }
}



