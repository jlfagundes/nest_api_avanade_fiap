import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bem vindo a API Avanade';
  }
  getLogin(): string {
    return 'Aqui virá o login do usuário';
  }
  getRegister(): string {
    return 'Aqui virá o registro do usuário';
  }
}
