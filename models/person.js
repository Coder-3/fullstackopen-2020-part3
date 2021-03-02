const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const password = process.env.pass

const url = `mongodb+srv://cedric:${password}@cluster0.yne0e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: 'Ray Charles',
  number: '43652 6643 34 6',
})

person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})