import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CarsRepository } from './cars.repository';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { CarEntity } from './entities/car.entity';

@Injectable()
export class CarsService {
  private logger = new Logger('CarsService');

  constructor(private readonly carsRepository: CarsRepository) {}

  create(createCarDto: CreateCarDto): Promise<CarEntity> {
    this.logger.log('createCar dto: ', createCarDto);
    return this.carsRepository.createCar(createCarDto);
  }

  async findAll(): Promise<CarEntity[]> {
    const cars = await this.carsRepository.find({});
    return cars;
  }

  async findOne(id: string): Promise<CarEntity> {
    this.logger.log('findOne :: id', id);
    const car = await this.carsRepository.findOne(id);
    if (!car) {
      throw new NotFoundException();
    }
    return car;
  }

  async update(
    id: string,
    updateCarDto: UpdateCarDto,
  ): Promise<CarEntity | UpdateResult> {
    const result = await this.carsRepository.update(
      { id },
      { ...updateCarDto },
    );

    if (result.affected && result.affected === 1) {
      const car = await this.carsRepository.findOne(id);
      return car!;
    }
    return result;
  }

  async remove(id: string): Promise<UpdateResult> {
    const result = await this.carsRepository.softDelete({ id });
    return result;
  }
}
