/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateProductDTO {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    product: string;
    
    @IsNumber()
    @IsNotEmpty()
    quant: number;
}
