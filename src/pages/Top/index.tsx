import React, { useState } from 'react'
import { MedalCountCountry } from 'generated/api'
import useDidMount from 'customHooks/useDidMount'
import client from 'api/client'
// import MedalCountCountryItemList from 'components/containers/MedalCountCountryItemList'

export const Component = (): JSX.Element => {
  const [medalCountCountries, setMedalCountCountries] = useState<
    MedalCountCountry[]
  >([])

  useDidMount(() => {
    const fetchInitData = async () => {
      const [resMedalsCountries] = await Promise.all([
        client.default.medalCountCountries(),
      ])
      setMedalCountCountries(resMedalsCountries.data)
    }

    fetchInitData()
  })

  return (
    <div>
      {medalCountCountries.map((country) => (
        <p key={country.id}>{country.country_alpha_2_code}</p>
      ))}
    </div>
  )
}

export default Component
