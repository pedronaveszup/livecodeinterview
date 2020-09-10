import { find } from 'lodash'
import { Person, Relationship } from '../types'

interface SpouseAndChildren {
  spouseId?: number,
  childrenIds: Array<number>,
}

export function findChildrenAndSpouseByPersonId(
  relationships: Array<Relationship>,
  personId: number,
): SpouseAndChildren {
  const personRelationships = find(
    relationships,
    ({ husband, wife }) => husband === personId || wife === personId,
  )

  if (!personRelationships) return { childrenIds: [] }

  const spouseId = personRelationships.husband === personId
    ? personRelationships.wife
    : personRelationships.husband

  return { spouseId, childrenIds: personRelationships.children }
}

export function findPersonById(people: Array<Person>, id: number) {
  const person = find(people, { id })
  if (!person) throw new Error(`Person with id ${id} was not found!`)
  return person
}