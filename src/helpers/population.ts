export const getFormattedPopulation = (value: number): string => {
  if (value > 100000000) {
    // 億
    const oku = Math.round(value / 100000000)
    const senman = `${value}`.slice(-8, -4)
    return `${oku}億${senman}万人`
  }
  // 万
  return `${Math.round(value / 10000)}万人`
}
