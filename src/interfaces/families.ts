export type IFamilies = IFamilie[]

export interface IFamilie {
  id: string
  premium: boolean
  details: IDetails
}

export interface IDetails {
  name: string
  description: string
}
