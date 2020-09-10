import { Person, Relationship } from '../types'

const baseUrl = 'http://localhost:3000'
const peopleUrl = `${baseUrl}/people`
const relationshipsUrl = `${baseUrl}/relationships`

export async function fetchPeople() {
  const response = await fetch(peopleUrl)
  return (await response.json()) as Array<Person>
}

export async function fetchRelationships() {
  const response = await fetch(relationshipsUrl)
  return (await response.json()) as Array<Relationship>
}