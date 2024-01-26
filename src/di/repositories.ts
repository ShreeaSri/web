import SessionRepository from '../adapter/src/repositories/Session'
import { IInfrastructures } from './infrastructure'

export interface IRepositories {
  session: SessionRepository
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (infrastructure: IInfrastructures): IRepositories => {
  const baseURL = 'http://localhost:3001';
  return {
    session: new SessionRepository(baseURL, infrastructure.http, infrastructure.storage),
  }
    
}