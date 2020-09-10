import React, { FC } from 'react'
import { StyledCard } from './styled'
import { Person } from 'types'

export interface PersonCardInterface extends Person {
  onClick?: () =>void,
  className?: string,
  isSelected?: boolean,
  spouseName?: string,
}

const PersonCard: FC<PersonCardInterface> = props => {
  return (
    <StyledCard className={props.className} onClick={props.onClick} isSelected={props.isSelected} > 
      <span>Name: {props.name} {props.lastName}</span>
      <span>Gender: {props.gender}</span>
      {props.spouseName && <span>Spouse: {props.spouseName}</span>}
      <span>Country: {props.country}</span>
      <span>Birth date: {props.birthDate}</span>
      {props.deathDate && <span>Death date: {props.deathDate}</span>}
    </StyledCard>
  )
}

export default PersonCard