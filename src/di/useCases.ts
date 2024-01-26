import Session from '../domain/src/useCases/Session'
import { IRepositories } from './repositories'

export interface IUseCases {
  session: Session
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (repositories: IRepositories): IUseCases => {
  return {
    session: new Session(repositories.session),
  }
}