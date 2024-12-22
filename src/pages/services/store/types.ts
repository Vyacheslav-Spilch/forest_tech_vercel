type ServicesKey = 'audit' 
| 'education' 
| 'accompaniment'
| 'legal_consultation'
| 'legal_assistance'

export interface ServicesValue {
    serviceName: string
    servicePrice: string
    serviceDetails?: string[]
    serviceNote?: string
}

export type IServices = Record<ServicesKey, ServicesValue[]>
