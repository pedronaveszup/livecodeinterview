import React, { FC, useState, useEffect } from 'react'
import Siblings from 'components/Siblings'
import { Person, Relationship } from 'types'
import Loader from 'components/Loader'
import { fetchPeople, fetchRelationships } from '../providers/family'

const firstPersonId = 1

const Family: FC = () => {
  const [people, setPeople] = useState<Array<Person> | null>(null)
  const [relationships, setRelationships] = useState<Array<Relationship> | null>(null)
  const [isLoading, setLoading] = useState(false)

  const load = async () => {
    setLoading(true)
    const result = await Promise.all([fetchPeople(), fetchRelationships()])
    setPeople(result[0])
    setRelationships(result[1])
    setLoading(false)
  }

  useEffect(() => {
    load()
  }, [])

  if (isLoading) return <Loader />
  if (!people || !relationships) return null
  
  return <Siblings peopleIds={[firstPersonId]} people={people} relationships={relationships} />
} 

export default Family
