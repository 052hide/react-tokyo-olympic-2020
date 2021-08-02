import React, { useState } from 'react'
import { CountryInfo, MedalCountCountry } from 'generated/api'
import { getCountryInfo, getCountryName } from 'helpers/country'
import useDidMount from 'customHooks/useDidMount'
import client from 'api/client'
import FlexListRowLayout from 'components/layouts/FlexListRowLayout'

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
    <div>
      {medalCountCountries.map((medalCountCountry) => {
        const countryInfo = getCountryInfo(
          medalCountCountry.country_alpha_2_code,
          countryInfos
        )
        return (
          <FlexListRowLayout
            key={`medalCountCountries_${medalCountCountry.id}`}
            colCount={2}
            gridTemplateColumns="repeat(2, minmax(0, 1fr))"
          >
            {countryInfo ? (
              <>
                <p>{getCountryName(countryInfo)}</p>
                <div>
                  <p>{medalCountCountry.gold_count}</p>
                  <p>{medalCountCountry.silver_count}</p>
                  <p>{medalCountCountry.bronze_count}</p>
                </div>
              </>
            ) : (
              ''
            )}
          </FlexListRowLayout>
        )
      })}
    </div>
  )
}

export default Component
