import { Injectable } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { privateDecrypt } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity) private  productRepo : Repository<ProductEntity> 
    
    ){}
    
    create(){}

}
