import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as typeOrmConfig from './config/typeorm.config';
import { ConfigModule } from './config/config.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [ConfigModule, TypeOrmModule.forRoot(typeOrmConfig), CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
