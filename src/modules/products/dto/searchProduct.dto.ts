import { IsString, IsNotEmpty } from 'class-validator';

export class SearchProductDto {
  @IsString()
  @IsNotEmpty()
  query: string;
}
