import infrastructures from './infrastructure'
import repositories from './repositories'
import useCases from './useCases'
import presenters from './presenters'

const cInfrastructures = infrastructures()
const cRepositories = repositories(cInfrastructures)
// eslint-disable-next-line react-hooks/rules-of-hooks
const cUseCases = useCases(cRepositories)
const cPresenters = presenters(cUseCases)


export default {
  session: cPresenters.session
}
