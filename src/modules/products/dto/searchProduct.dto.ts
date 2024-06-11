import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class SearchProductDto {
  @ApiProperty({ type: String, description: 'The search query' })
  @IsString()
  @IsNotEmpty()
  query: string;
}
