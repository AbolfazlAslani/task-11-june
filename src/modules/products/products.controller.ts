import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { SearchProductDto } from './dto/searchProduct.dto';
import { query } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  
  @Post("create")
  async create(@Body() body : ProductDto){
    return  await this.productsService.create(body)
  }
  
  @Post("search")
  async search(@Body() searchProductDto: SearchProductDto){
    
    return await this.productsService.search(searchProductDto)
  }
}
