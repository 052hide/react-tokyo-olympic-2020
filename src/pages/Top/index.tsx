import React, { useState } from 'react'
import { CountryInfo, MedalCountCountry } from 'generated/api'
import useDidMount from 'customHooks/useDidMount'
import client from 'api/client'
import MedalCountCountryItemList from 'components/containers/MedalCountCountryItemList'

export const Component = (): JSX.Element => {
  const [countryInfos, setCountryInfos] = useState<CountryInfo[]>([])
  const [medalCountCountries, setMedalCountCountries] = useState<
    MedalCountCountry[]
  >([])

  useDidMount(() => {
    const fetchInitData = async () => {
      const [resCountryInfos, resMedalsCountries] = await Promise.all([
        client.default.countryInfos(),
        client.default.medalCountCountries(),
      ])
      setCountryInfos(resCountryInfos.data)
      setMedalCountCountries(resMedalsCountries.data)
    }

    fetchInitData()
  })

  return (
    <MedalCountCountryItemList
      countryInfos={countryInfos}
      medalCountCountries={medalCountCountries}
    />
  )
}

export default Component
