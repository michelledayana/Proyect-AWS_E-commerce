import { Controller, Delete, Body, NotFoundException } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { DeleteProductDto } from '../dto/delete-product.dto';

@Controller('product')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Delete('by-name')
  async removeByName(@Body() deleteProductDto: DeleteProductDto) {
    try {
      const result = await this.productsService.removeByName(deleteProductDto.name);
      if (!result) {
        throw new NotFoundException(`Product with name "${deleteProductDto.name}" not found`);
      }
      return { message: `Product "${deleteProductDto.name}" deleted successfully` };
    } catch (error) {
      throw new NotFoundException(`Product with name "${deleteProductDto.name}" not found`);
    }
  }
}