import Http from '../adapter/src/infrastructure/Http'
import Storage from '../adapter/src/infrastructure/Storage'

export interface IInfrastructures {
  http: Http
  storage: Storage
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (): IInfrastructures => {
  return {
    http: new Http(),
    storage: new Storage((window as any).sessionStorage)
  }
}