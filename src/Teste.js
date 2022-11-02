import {useState} from 'react';
import {Button, Text, TextInput} from 'react-native';
import {db} from './DataSource';

export default function Teste() {
  const [codigo, setCodigo] = useState('Vamos Lá');

  async function submit() {
    const conn = await db;
    await conn
      .getRepository('Ativos')
      .save({codigo, quantidade: 1, valor: 10.9});
    const resultados = await conn.getRepository('Ativos').find();
    console.log(resultados);
  }

  return (
    <>
      <TextInput
        value={codigo}
        placeholder="Ativo"
        placeholderTextColor="red"
        style={{
          color: 'black',
          width: 50,
          width: '100%',
          backgroundColor: 'white',
        }}
        onChangeText={text => setCodigo(text)}
      />
      <Button title="teste" onPress={submit} />
    </>
  );
}
