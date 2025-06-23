
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
          type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dayana',
      database: 'create_product',
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    ProductsModule,
  ],
})
export class AppModule {}
