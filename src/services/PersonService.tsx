import { Person, PersonService } from 'src/services/interfaces/Person'

class Service implements PersonService {
  fetchPersonById = (id: string): Person => {
    return {
      name: '小池 駿平',
      title: 'Software Engineer',
      location: 'Hong Kong',
      pic:
        'https://firebasestorage.googleapis.com/v0/b/story-gate.appspot.com/o/1sLl53hRd7Z0LDksz9iB%2Fprofile.jpg?alt=media&token=2e5eda6a-07c8-4fd4-bbc1-1a5a30f455f4',
      introduction:
        'BlockchainやWebGLなど / AWS Best Architecture 2018 / 書籍「Solidityプログラミング」発売中 / 秋から香港で仮想世界構築の研究'
    }
  }
}

export const PersonServiceImpl = new Service()
