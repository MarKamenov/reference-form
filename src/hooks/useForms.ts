import { ChangeEvent, useState } from 'react'

export const useForm = (initVals: Record<string, string>) => {
    const [values, setValues] = useState(initVals)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValues(prev => ({ ...prev, [name]: value }))
    }
    const resetForm = () => {
        setValues(initVals)
    }

    return { values, handleChange, resetForm }
}
