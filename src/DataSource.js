import {DataSource} from 'typeorm';
import Ativo from './Ativo';

const AppDataSource = new DataSource({
  type: 'react-native',
  database: 'teste',
  location: 'default',
  logging: ['error', 'query', 'schema'],
  entities: [Ativo],
  synchronize: true,
});

export const db = AppDataSource.initialize()
  .then(console.log('Banco conectado!'))
  .catch(error => console.log(erro));
