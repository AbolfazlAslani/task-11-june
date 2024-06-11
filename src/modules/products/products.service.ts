import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
        const result = await this.productRepo.createQueryBuilder('product')
        .where('product.name ILIKE :query', {query : `%${query}%`})
        .getMany()
        
        if(result.length === 0) throw new NotFoundException("no desired products were found!")
            
        return {
            message: "found !",
            result 
        }
    }
    
    async getAll(){
        return await this.productRepo.find()
    }
}
