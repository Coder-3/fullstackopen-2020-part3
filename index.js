const express = require('express')
const app = express()
require('dotenv').config()
const Person = require('./models/person')

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const showDateNowInUCT = () => {
  const nowInUTC = new Date(Date.now()).toUTCString()
  return `<p>${nowInUTC}</p>`
}

const showNumberOfPersons = () => {
  return `<p>Phonebook has info for ${persons.length} people</p>`
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if(!body) {
    return response.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(result => {
      response.json(result)
  })
})

app.get('/info', (request, response) => {
  response.send(`${showNumberOfPersons()} ${showDateNowInUCT()}`)
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})