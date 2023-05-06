//const db = require('./db');

(async () => {
  const db = require('./db')
  console.log('Startou!')

  console.log('INSERT INTO familia')
  const result = await db.insertCustomer({nome: 'Flavia', tipo: 'Letícia'})
  console.log(result)

  console.log('SELECT * FROM familia')
  const familia = await db.selectCustomers();
  console.log(familia)
})();