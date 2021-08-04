import React, { useState, useMemo } from 'react'
import { CountryInfo, MedalCountCountry } from '~/generated/api'
import { findCountryInfo, findMedalCountCountry } from '~/helpers/country'
import useDidMount from '~/customHooks/useDidMount'
import client from '~/api/client'
import PageDefault from '~/components/layouts/PageDefault'
import BaseModal from '~/components/commons/BaseModal'
import MedalCountCountryItemListContainer from '~/components/containers/MedalCountCountryItemListContainer'
import MedalCountCountryItemDetailContainer from '~/components/containers/MedalCountCountryItemDetailContainer'

export const Component = (): JSX.Element => {
  // list
  const [isLoading, setIsLoading] = useState(false)
  const [countryInfos, setCountryInfos] = useState<CountryInfo[]>([])
  const [medalCountCountries, setMedalCountCountries] = useState<
    MedalCountCountry[]
  >([])

  // detail
  const [selectedCountryAlpha2Code, setSelectedCountryAlpha2Code] =
    useState<string>('')

  // memo
  const visibleModal = useMemo(
    () => !!selectedCountryAlpha2Code,
    [selectedCountryAlpha2Code]
  )
  const selectedCountryInfo = useMemo(
    () => findCountryInfo(selectedCountryAlpha2Code, countryInfos),
    [selectedCountryAlpha2Code, countryInfos]
  )
  const selectedMedalCountCountry = useMemo(
    () => findMedalCountCountry(selectedCountryAlpha2Code, medalCountCountries),
    [selectedCountryAlpha2Code, medalCountCountries]
  )

  useDidMount(() => {
    const fetchInitData = async () => {
      setIsLoading(true)
      const [resCountryInfos, resMedalsCountries] = await Promise.all([
        client.default.countryInfos(),
        client.default.medalCountCountries(),
      ])
      setCountryInfos(resCountryInfos.data)
      setMedalCountCountries(resMedalsCountries.data)
      setIsLoading(false)
    }

    fetchInitData()
  })

  const closeModal = () => {
    setSelectedCountryAlpha2Code('')
  }

  const onClick = (alpha2Code: string) => {
    setSelectedCountryAlpha2Code(alpha2Code)
  }

  if (isLoading) {
    return <PageDefault>isLoading</PageDefault>
  } else {
    return (
      <PageDefault>
        <MedalCountCountryItemListContainer
          countryInfos={countryInfos}
          medalCountCountries={medalCountCountries}
          onClick={onClick}
        />
        <BaseModal visible={visibleModal} close={closeModal}>
          {selectedCountryInfo && selectedMedalCountCountry && (
            <MedalCountCountryItemDetailContainer
              countryInfo={selectedCountryInfo}
              medalCountCountry={selectedMedalCountCountry}
            />
          )}
        </BaseModal>
      </PageDefault>
    )
  }
}

export default Component
