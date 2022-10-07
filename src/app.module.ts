import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './database.module';


/**
 * config module creation.
 * 
 * Reference:
 *  - https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        // PORT: Joi.number(),
      })
    }),
    DataBaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
