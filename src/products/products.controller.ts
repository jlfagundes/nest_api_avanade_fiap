import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Patch,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateProductDTO } from './DTO/createProduct.dto';
import { UpdateProductDTO } from './DTO/updateProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // cria
  @Post()
  create(@Body() req: CreateProductDTO) {
    return this.productsService.create(req);
  }

  // busca todos
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // busca um
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // atualiza
  @Patch()
  update(@Param('id') id: number, @Body() req: UpdateProductDTO) {
    return this.productsService.update(id, req);
  }

  // deleta
}
