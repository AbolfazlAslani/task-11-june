import { IsNumber, IsString } from "class-validator";

export class ProductDto{

    @IsString()
    name: string;
    
    @IsNumber()
    price: number;
    
    @IsNumber()
    quantity : number;
    
    
    

} 