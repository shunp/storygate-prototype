export interface Person {
  name: string
  title: string
  location: string
  pic: string
  introduction: string
}

export interface PersonService {
  fetchPersonById: (id: string) => Person
}
