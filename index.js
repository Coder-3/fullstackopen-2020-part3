const express = require('express')
const app = express()

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

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(`${showNumberOfPersons()} ${showDateNowInUCT()}`)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if(!person) {
    return response.status(404).json({
      error: `person id: ${id} missing`
    })
  }
  response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})