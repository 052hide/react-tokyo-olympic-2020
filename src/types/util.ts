export type Nullable<T> = T | null
export type ValueLiteral<T extends Record<string, any>> = T[keyof T] // eslint-disable-line @typescript-eslint/no-explicit-any
