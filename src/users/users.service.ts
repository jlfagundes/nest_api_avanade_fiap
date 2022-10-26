import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async create(): Promise<string> {
    return 'Usuário criado com sucesso!!';
  }

  async findAll(): Promise<string> {
    return 'Todos usuarios cadastrados';
  }

  async findOne(id: string): Promise<string> {
    return `Dados Usuario ${id}`;
  }

  async update(id: number, req) {
    return `Dados alterados do usuario ${id}, dados alterados ${req}`;
  }
}
