const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    require: true,
    lowercase: true
  },
  password: {
    type: String,
    require: true,
    select: false //para que quando eu fizer uma busca por essa informação, no caso o password não venha aparecer
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre('save', async function(next) { //Pre-executando esse código aqui antes de salvar o schema
  const hash = await bcrypt.hash(this.password, 10) //encriptando a senha 10 vezes e guardando na variavel hash 
  this.password = hash //passando a hash para a propriedade password do schema

  next() //mandando continuar o código
})

const User = mongoose.model('User', UserSchema)

module.exports = User
