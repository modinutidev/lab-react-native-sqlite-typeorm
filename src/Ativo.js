import {EntitySchema} from 'typeorm';

const Ativo = new EntitySchema({
  name: 'Ativos',
  tableName: 'ativos',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    codigo: {
      type: 'varchar',
    },
    quantidade: {
      type: 'int',
    },
    valor: {
      type: 'decimal',
    },
  },
});

export default Ativo;
