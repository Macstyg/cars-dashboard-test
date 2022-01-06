import { ConfigModule as Config } from '@nestjs/config';
import { Module } from '@nestjs/common';
import Joi from 'joi';

@Module({
  imports: [
    Config.forRoot({
      envFilePath: ['.env', '.env.development', '.env.default'],
      isGlobal: true,
      //   validationSchema: Joi.object({
      //     DB_DATABASE: Joi.string().required(),
      //     DB_ROOT_PASSWORD: Joi.string().required(),
      //     DB_HOST: Joi.string().required(),
      //     DB_PORT: Joi.string().required(),
      //     DB_USERNAME: Joi.string().required(),
      //   }),
    }),
  ],
})
export class ConfigModule {}
