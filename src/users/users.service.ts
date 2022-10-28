import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  // injectable dependencie
  constructor(private prisma: PrismaService) {}

  async create(data): Promise<users> {
    const { name, email, password } = data;
    const user = await this.prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'Erro ao criar usuário',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return user;
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
