import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';
import { SearchProductDto } from './dto/searchProduct.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(body: ProductDto): Promise<{
        message: string;
    }>;
    search(searchProductDto: SearchProductDto): Promise<void>;
    getAll(): Promise<import("./entities/product.entity").ProductEntity[]>;
}
