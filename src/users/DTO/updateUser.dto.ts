/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './createUser.DTO';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {};
