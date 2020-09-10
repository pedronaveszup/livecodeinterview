import React, { FC } from 'react'
import PersonCard from '../PersonCard'
import { Person, Relationship } from 'types'
import { findChildrenAndSpouseByPersonId, findPersonById } from '../../utils/find'

interface SiblingsInterface {
  people: Array<Person>,
  relationships: Array<Relationship>,
  peopleIds: Array<number>,
}

const Siblings: FC<SiblingsInterface> = ({ peopleIds, people, relationships }) => {
  const person = people[0]
  console.log('person', person)
  const children = [people[1], people[2], people[3]]
  return (
    <PersonCard 
      { ...person }
      onClick={() => console.log('clicked!')}
      isSelected={false}
    />
  )
}

export default Siblings