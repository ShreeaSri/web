import SessionPresenter from '../adapter/src/presenters/Session'
import { IUseCases } from './useCases'

export interface IPresenters {
  session: SessionPresenter
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (useCases: IUseCases): IPresenters => {
  return {
    session: new SessionPresenter(useCases.session),
  }
}