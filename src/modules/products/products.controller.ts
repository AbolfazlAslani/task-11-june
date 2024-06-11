import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { SearchProductDto } from './dto/searchProduct.dto';
import { query } from 'express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  
  @Post("create")
  @ApiConsumes('application/json')
  @ApiBody({
    type: ProductDto,
    examples: {
      example1: {
        summary: 'Create Product Example',
        description: 'A sample request to create a product',
        value: {
          name: 'Sample Product',
          price: 100,
          quantity: 10,
        } as ProductDto,
      },
    },
  })
  async create(@Body() body : ProductDto){
    console.log(body);
    return  await this.productsService.create(body)
  }
  
  @Post("search")
  @ApiConsumes('application/json')
  @ApiBody({
    type: SearchProductDto,
    examples: {
      example1: {
        summary: 'Search Product Example',
        description: 'A sample request to search for a product',
        value: {
          query: 'Sample Query',
        } as SearchProductDto,
      },
    },
  })
  async search(@Body() searchProductDto: SearchProductDto){
    
    return await this.productsService.search(searchProductDto)
  }
  
  @Get("getAll")
  async getAll(){
    return await this.productsService.getAll()
  }
}
