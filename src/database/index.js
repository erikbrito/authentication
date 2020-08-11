const mongoose = require('mongoose')

mongoose.Promise = global.Promise //pra indicar qual que é a classe de promise que o mongoose irá utilizar (Ele é padrão pra todo projeto)
mongoose.connect('mongodb://localhost/noderest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports = mongoose
