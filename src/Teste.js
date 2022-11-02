import {useState} from 'react';
import {Button, FlatList, Text, TextInput} from 'react-native';
import {db} from './DataSource';

export default function Teste() {
  const [codigo, setCodigo] = useState('Vamos Lá');
  const [results, setResults] = useState([]);

  async function submit() {
    const conn = await db;
    await conn
      .getRepository('Ativos')
      .save({codigo, quantidade: 1, valor: 10.9});
    const resultados = await conn.getRepository('Ativos').find();
    setResults(resultados);
    console.log(resultados);
  }

  const itemDeLista = ({item}) => {
    return <Text>{item.codigo}</Text>;
  };

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
      <FlatList
        data={results}
        renderItem={itemDeLista}
        keyExtractor={dado => dado.id}
      />
    </>
  );
}
