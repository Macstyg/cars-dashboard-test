import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { join } from 'path';

const typeOrmConfig: TypeOrmModule = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false,
  migrations: [join(__dirname, '../../migrations/*{.ts,.js}')],
  cli: {
    migrationsDir: 'migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
// this file is used in node_modules/typeorm/cli.js and needs the export in this fashion
module.exports = typeOrmConfig;
