import { BaseEntity } from "src/common/absctract/base.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("Product")
export class ProductEntity extends BaseEntity{
    @Column()
    name: string;
    
    @Column('numeric')
    price: number;
    
    @Column()
    count: number;
    
    @CreateDateColumn()
    createdAt : Date;
    
    @UpdateDateColumn()
    updatedAt : Date;

}