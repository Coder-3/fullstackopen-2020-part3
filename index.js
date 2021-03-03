require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(morgan('tiny'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "9342875"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "934857-8345"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "394853894"
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "983425"
  }
]

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
    response.json(savedPerson)
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
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  return persons.length > 0 ? Math.floor(Math.random() * 1000000000) : 0
}

const findIsNameDuplicate = (personName) => {
  return !!persons.find(person => person.name === personName)
}

// app.post('/api/persons', (request, response) => {
//   const body = request.body

//   if(!body.name) {
//     return response.status(204).json({
//       error: 'name missing'
//     })
//   } else if(!body.number) {
//     return response.status(204).json({
//       error: 'number missing'
//     })
//   } else if(findIsNameDuplicate(body.name)) {
//     return response.status(400).json({
//       error: 'name exists'
//     })
//   }

//   const person = {
//     id: generateId(),
//     name: body.name,
//     number: body.number,
//   }

//   persons.concat(person)

//   response.json(person)
// })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})