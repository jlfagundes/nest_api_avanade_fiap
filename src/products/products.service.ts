import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './DTO/createProduct.dto';
import { UpdateProductDTO } from './DTO/updateProduct.dto';

@Injectable()
export class ProductsService {
  async create(req: CreateProductDTO) {
    return `Usuario ${req} cadastrado`;
  }

  async findAll() {
    return `Listagem de todos os usuários`;
  }

  async findOne(id: number) {
    return `Dados do produto ${id}`;
  }

  async update(id: number, req: UpdateProductDTO) {
    return `dados ${req} do usuario ${id} atualizado`;
  }
}
