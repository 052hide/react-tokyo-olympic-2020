import React, { useState, useMemo } from 'react'
import { CountryInfo, MedalCountCountry } from '~/generated/api'
import useDidMount from '~/customHooks/useDidMount'
import client from '~/api/client'
import MedalCountCountryItemListContainer from '~/components/containers/MedalCountCountryItemListContainer'
import BaseModal from '~/components/commons/BaseModal'

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
    return <div>isLoading</div>
  } else {
    return (
      <>
        <MedalCountCountryItemListContainer
          countryInfos={countryInfos}
          medalCountCountries={medalCountCountries}
          onClick={onClick}
        />
        {visibleModal ? (
          <BaseModal close={closeModal}>
            <p>{selectedCountryAlpha2Code}</p>
          </BaseModal>
        ) : (
          ''
        )}
      </>
    )
  }
}

export default Component
