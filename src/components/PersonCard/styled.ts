import styled from 'styled-components'

export const StyledCard = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: #CCC 2px 2px 6px;
  background-color: ${({ isSelected }) => (isSelected ? '#a3a8e6' : '#FFF')};
  padding: 20px;
  width: 300px;
`