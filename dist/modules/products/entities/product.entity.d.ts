import { BaseEntity } from "src/common/absctract/base.entity";
export declare class ProductEntity extends BaseEntity {
    name: string;
    price: number;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}
