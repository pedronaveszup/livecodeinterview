
export interface Person {
  id: number,
  name: string,
  lastName: string,
  gender: 'male' | 'female',
  birthDate: string,
  deathDate: string,
  country: string,
}
  
export interface Relationship {
  husband: number,
  wife: number,
  children: Array<number>,
}