import { getPeople, getRelationships } from './model'

const loadPeople = {
  method: 'GET',
  path: '/people',
  handler: getPeople,
}

const loadRelationships = {
  method: 'GET',
  path: '/relationships',
  handler: getRelationships,
}

export default [
  loadPeople,
  loadRelationships,
]
