const express = require('express')
const app = express()

const persons = [
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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})