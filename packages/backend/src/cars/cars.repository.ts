import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { CarEntity } from './entities/car.entity';

@EntityRepository(CarEntity)
export class CarsRepository extends Repository<CarEntity> {
  async createCar(input: CreateCarDto): Promise<CarEntity> {
    const car = this.create(input);

    try {
      await car.save();
    } catch (error: any) {
      if (error.code === '23505') {
        // duplicate plate
        throw new ConflictException(
          `Car with plate number: ${input.plate}, already exists`,
        );
      } else {
        throw new InternalServerErrorException(error.message);
      }
    }
    return car;
  }
}
