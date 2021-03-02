const mongoose = require('mongoose')

if(process.argv.legnth < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const url = `mongodb+srv://cedric:${process.argv[2]}@cluster0.yne0e.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const displayPhonebookEntries = () => {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}

const addPerson = () => {
  const person = new Person({
    name: `${process.argv[3]}`,
    number: `${process.argv[4]}`,
  })
  
  person.save().then(result => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}

if(process.argv.length === 5) {
  addPerson()
} else if(process.argv.length === 3) {
  displayPhonebookEntries()
} else {
  console.log('To add: node mongo.js <password> <name> <number> \nTo show all: node mongo.js <password>')
  process.exit(1)
}