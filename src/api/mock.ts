import axios, { AxiosStatic } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mocks from '~/__mocks__'

const getMedalCountCountries = (mockAdapter: MockAdapter) => {
  mockAdapter
    .onGet('/medal_count_countries')
    .reply(200, mocks.medalCountCountries.medalCountCountries())
}

const getCountryInfos = (mockAdapter: MockAdapter) => {
  mockAdapter
    .onGet('/country_infos')
    .reply(200, mocks.countryInfos.countryInfos())
}

const setAdaptor = (mockAdapter: MockAdapter): void => {
  getCountryInfos(mockAdapter)
  getMedalCountCountries(mockAdapter)
}

const DelayResponseEnum = {
  zero: 0,
  minimum: 20,
  short: 200,
  long: 2000,
}

export const client = (
  useMock: boolean,
  mockDelayResponseMillisecond = DelayResponseEnum.short
): AxiosStatic => {
  if (useMock) {
    const mockAdapter = new MockAdapter(axios, {
      delayResponse: mockDelayResponseMillisecond,
    })
    setAdaptor(mockAdapter)
  }
  return axios
}

export default client
