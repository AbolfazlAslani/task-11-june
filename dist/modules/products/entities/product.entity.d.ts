import { BaseEntity } from "src/common/absctract/base.entity";
export declare class ProductEntity extends BaseEntity {
    name: string;
    price: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}
