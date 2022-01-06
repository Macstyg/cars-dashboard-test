import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  DeleteDateColumn,
} from 'typeorm';
import { Car } from '../types';

@Entity({ name: 'cars' })
export class CarEntity extends BaseEntity implements Car {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  vendor: string;

  @Column({ length: 100 })
  model: string;

  @Column()
  year: number;

  @Column({ unique: true, length: 50 })
  plate: string;

  @Column({ length: 255, nullable: true })
  image: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
