"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const product_dto_1 = require("./dto/product.dto");
const searchProduct_dto_1 = require("./dto/searchProduct.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async create(body) {
        console.log(body);
        return await this.productsService.create(body);
    }
    async search(searchProductDto) {
        return await this.productsService.search(searchProductDto);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)("create"),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBody)({
        type: product_dto_1.ProductDto,
        examples: {
            example1: {
                summary: 'Create Product Example',
                description: 'A sample request to create a product',
                value: {
                    name: 'Sample Product',
                    price: 100,
                    quantity: 10,
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.ProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("search"),
    (0, swagger_1.ApiConsumes)('application/json'),
    (0, swagger_1.ApiBody)({
        type: searchProduct_dto_1.SearchProductDto,
        examples: {
            example1: {
                summary: 'Search Product Example',
                description: 'A sample request to search for a product',
                value: {
                    query: 'Sample Query',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchProduct_dto_1.SearchProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "search", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map