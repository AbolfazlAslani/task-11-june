import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto {
    @ApiProperty({ type: String, description: 'The name of the product' })
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty({ type: Number, description: 'The price of the product' })
    @IsNumber()
    price: number;
  
    @ApiProperty({ type: Number, description: 'The quantity of the product' })
    @IsNumber()
    quantity: number;
  }