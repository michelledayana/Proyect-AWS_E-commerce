import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  idCategory: number;
}
