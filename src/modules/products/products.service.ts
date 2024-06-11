import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ProductEntity } from './entities/product.entity';
import { privateDecrypt } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { SearchProductDto } from './dto/searchProduct.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity) private  productRepo : Repository<ProductEntity> 
    
    ){}
    
    async create(body: ProductDto){
        const {quantity,name,price} = body;
        const result = this.productRepo.create({
            quantity,
            name,
            price
        })
        if(!result) throw new InternalServerErrorException();
        await this.productRepo.save(result)
        return {
            message:"Product added successfuly!"
        }
    
    }


    async search(searchDto : SearchProductDto){
        const {query} = searchDto;
        return this.productRepo.createQueryBuilder('product')
        .where('product.name ILIKE :query', {query : `%${query}%`})
        .getMany()
        
    
    }
    
    async getAll(){
        return await this.productRepo.find()
    }
}
