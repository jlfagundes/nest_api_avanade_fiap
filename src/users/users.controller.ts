import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDTO } from './DTO/createUser.DTO';
import { UpdateUserDTO } from './DTO/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Criar
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(@Body() req: CreateUserDTO) {
    return this.usersService.create(req);
  }

  // Listar todos
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Listar um
  @Get(':id')
  // usando Middleware ParseUUIDPipe
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(id);
  }

  // Atualizar
  @Patch()
  update(@Param('id', ParseUUIDPipe) id: number, @Body() req: UpdateUserDTO) {
    return this.usersService.update(id, req);
  }

  // Deletar
}
