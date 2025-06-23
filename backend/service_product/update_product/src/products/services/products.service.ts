import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.productsRepository.softDelete(id);
  }

  findOneByName(name: string) {
    return this.productsRepository.findOneBy({ name });
  }

  findByEmail(email: string) {
    return this.productsRepository.findOne({
      where: { name: email }, // Ajusta si el campo en realidad se llama "email"
      select: ['name', 'price'],
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.preload({
      id: id,
      ...updateProductDto,
    });

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return this.productsRepository.save(product);
  }
}

