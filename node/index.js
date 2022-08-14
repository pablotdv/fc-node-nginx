const express = require('express')
const mysql = require('mysql2')
var random_name = require('node-random-name');

const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'desafio-nn'
})

app.get('/', (req, res) => {
    connection.execute('insert into people (name) values (?)', [random_name()])
    connection.query('select * from people order by name', (err, results, fields) => {
        
        let result = `<div>Nomes cadastrados</div><ul>`
        results.map((person) => {
            console.log(person)
            result += `<li>${person.name}</li>`
        })    
        result += `</ul>`
        res.send(result)
        
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})