import { Controller, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { UpdateProductDto } from '../dto/update-product.dto';

@Controller('products_listar') // o simplemente 'products'
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Patch(':id') // PATCH es adecuado para edición parcialcd ..
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }
}
