import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @Column({ primary: true, generated: true })
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  price: number;

  @DeleteDateColumn()
  deletedt: Date;
}

