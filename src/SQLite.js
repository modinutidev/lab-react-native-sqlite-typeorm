import * as SQLite from 'react-native-sqlite-storage';

function openConnection() {
  const db = SQLite.openDatabase('meubanco.db');
  return db;
}

export const db = openConnection();
