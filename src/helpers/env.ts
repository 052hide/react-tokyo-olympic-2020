export const getBoolean = (value?: string): boolean => {
  return !!value && value.toUpperCase() === 'TRUE'
}
