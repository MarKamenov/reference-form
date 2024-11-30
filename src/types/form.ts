export interface Personal {
    firstName: string
    lastName: string
    currentAddress: string
}

export interface Employer {
    name: string
    startDate: string
    endDate: string
}

export interface FormState {
    personal: Personal
    employers: Employer[]
}

export type StateKeys = keyof FormState
export type PersonalKeys = keyof Personal
export type EmployerKeys = keyof Employer
