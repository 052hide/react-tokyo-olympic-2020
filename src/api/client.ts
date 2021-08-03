import { DefaultApiFactory, Configuration } from '~/generated'
import { getBoolean } from '~/helpers/env'
import Client from './mock'

const basePath = process.env.REACT_APP_API_BASE_PATH

const baseOptions: Configuration['baseOptions'] = {
  baseURL: basePath,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  crossDomain: true,
}

if (getBoolean(process.env.REACT_APP_USE_SERVER_MOCK)) {
  baseOptions.headers.Prefer = 'dynamic=true'
}

const configuration = new Configuration({
  basePath,
  baseOptions,
})

export default {
  default: DefaultApiFactory(
    configuration,
    basePath,
    Client(getBoolean(process.env.REACT_APP_USE_LOCAL_MOCK))
  ),
}
