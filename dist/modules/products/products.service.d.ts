import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';
import { SearchProductDto } from './dto/searchProduct.dto';
export declare class ProductsService {
    private productRepo;
    constructor(productRepo: Repository<ProductEntity>);
    create(body: ProductDto): Promise<{
        message: string;
    }>;
    search(searchDto: SearchProductDto): Promise<ProductEntity[]>;
}
