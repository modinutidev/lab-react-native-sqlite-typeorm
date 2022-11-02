import React from 'react';
import {useEffect} from 'react';
import {db} from './src/DataSource';
import Teste from './src/Teste';

export default function App() {
  useEffect(() => {
    db;
  }, []);

  return <Teste />;
}
