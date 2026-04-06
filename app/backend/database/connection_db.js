const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'enrollpass',
    port: 3306
});

connection.connect((error) => {
    if (error) {
        console.log("Error trying to connect to the database. More details: " + error);
        return
    }
    console.log('Connection established successfully!')
});

module.exports + connection;