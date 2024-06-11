import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './configs/typeorm.config';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      envFilePath : '.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass : TypeOrmConfig,
      inject : [TypeOrmConfig]
    
    }),
    ProductsModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
