import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async authLogin(login: string, password: string){
        console.log('No service login: ', login);
        console.log('No service senha: ', password);
        return {login, password};
    }
}
