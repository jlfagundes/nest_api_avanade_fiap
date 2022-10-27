/* eslint-disable prettier/prettier */
import { TableColumnOptions } from 'typeorm';

export const idColumn = (name='id'): TableColumnOptions => ({
  name: name,
  type: 'int',
  isPrimary: true,
  isGenerated: true,
  generationStrategy: 'increment',
});
