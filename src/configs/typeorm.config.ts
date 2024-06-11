import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory{

    constructor(private configService: ConfigService ){}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    
        return {
            type:'postgres',
            database : this.configService.get("DATABASE_NAME"),
            port: this.configService.get("DATABASE_PORT"),
            username: this.configService.get('DATABASE_USER'),
            password: this.configService.get('DATABASE_PASSWORD'),
            host: this.configService.get('DATABASE_HOST'),
            synchronize : true,
            autoLoadEntities:false,
            entities: [
                "dist/**/**/**/*.entity{.ts,.js}",
                "dist/**/**/*.entity{.ts,.js}"

            ]
       
        
        }
    }

}