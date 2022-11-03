import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { users } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  // injectable dependencie
  constructor(private prisma: PrismaService) {}

  async getUserById(id: string): Promise<users> {
    const user = await this.prisma.users.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      throw new HttpException('Usuário nao encontrado', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async crypto(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  }

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

  async update(id: number, req): Promise<object> {
    const user = await this.getUserById(id.toString());
    const { name, email, password } = req;
    if (email) {
      const checkEmail = await this.prisma.users.findMany({
        where: {
          AND: [{ email: email }, { id: { not: Number(id) } }],
        },
      });
      if (checkEmail.length > 0) {
        throw new HttpException('E-mail ja existe', HttpStatus.NOT_FOUND);
      }
    }

    const updatedUser = this.prisma.users.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name ? name : user.name,
        email: email ? email : user.email,
        password: password ? await this.crypto(password) : user.password,
      },
    });
    if (!updatedUser) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'Erro ao atualizar usuário',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    return { msg: `Usuario ${updatedUser} atualizado` };
  }
}
