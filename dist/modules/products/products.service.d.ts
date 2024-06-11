import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private productRepo;
    constructor(productRepo: Repository<ProductEntity>);
    create(): void;
}
