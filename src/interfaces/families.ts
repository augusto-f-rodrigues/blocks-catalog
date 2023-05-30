export type IFamilies = IFamily[]

export interface IFamily {
  id: string
  premium: boolean
  details: IDetails
}

export interface IDetails {
  name: string
  description: string
}
