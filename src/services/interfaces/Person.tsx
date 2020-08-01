export interface Person {
  readonly name: string
  readonly title: string
  readonly location: string
  readonly pic: string
  readonly introduction: string
}

export interface PersonService {
  fetchPersonById: (id: string) => Promise<Person>
}
