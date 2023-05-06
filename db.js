async function connect(){
  if(global.connection && global.connection.state !== 'disconnected'){  
    return global.connection
  }
  
  const mysql = require('mysql2/promise')
  const connection = await mysql.createConnection('mysql://root:nitoro@127.0.0.1:3306/teste')
  console.log('Conectou no mysql')

  global.connection = connection
  return connection
}

//connect()

async function selectCustomers(){
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM familia;');
  return rows;
}

async function insertCustomer(customer){
  const conn = await connect()
  const sql = 'INSERT INTO familia(nome, tipo) values (?, ?)'
  const values = [customer.nome, customer.tipo]
  return await conn.query(sql, values)
}

module.exports = {selectCustomers, insertCustomer}