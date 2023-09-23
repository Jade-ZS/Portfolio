interface Features {
  feature: string,
  detail: string
}

export type Info = {
  type: string,
  technologies: Array<string>,
  description: string,
  features: Array<Features>,
  github: string,
  deployment: string,
  images: any
}

export interface FeaturedDetails {
  [key:string] : Info,
}

