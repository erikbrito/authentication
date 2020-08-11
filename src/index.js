const express = require('express')
const bodyParser = require('body-parser')

//criando a aplicação
const app = express()

app.use(bodyParser.json()); //indicando para usar o bodyParser e possa entender a informação em json
app.use(bodyParser.urlencoded({ extended: false })) //para ele entender quando passar parametros via url

// app.get('/', (req, res) => {
//   res.send('OK')
// });

require('./controllers/authcontroller')(app)
require('./controllers/projectController')(app)

app.listen(3000) //escutando na porta 3000
console.log('node run!')
console.log('Lembre-se de iniciar o serviço do MongoDB!!!!')