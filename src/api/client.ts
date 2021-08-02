import { DefaultApiFactory, Configuration } from 'generated'
import { getBoolean } from 'helpers/env'
import Client from './mock'

const basePath = process.env.REACT_APP_API_BASE_PATH

const baseOptions: Configuration['baseOptions'] = {
  baseURL: basePath,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Prefer: getBoolean(process.env.REACT_APP_USE_SERVER_MOCK) ? 'dynamic=true' : undefined
  },
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
