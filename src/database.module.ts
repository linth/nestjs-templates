import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

/**
 * database module creation.
 * 
 * Reference:
 *  - https://wanago.io/2020/05/18/api-nestjs-postgresql-typeorm/
 */
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('POSTGRES_HOST'),
                port: configService.get('POSTGRES_PORT'),
                username: configService.get('POSTGRES_USER'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DATABASE'),
                entities: [
                    __dirname + '/../**/*.entity.ts',
                ],
                synchronize: true,
            })
        })
    ],
})
export class DataBaseModule {}