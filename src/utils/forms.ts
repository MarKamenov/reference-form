import { FormState } from "src/types";

export const formDataTransform = (formData: FormState) => ({
    personal: {
        first_name: formData.personal.firstName,
        last_name: formData.personal.lastName,
        current_address: formData.personal.currentAddress,
    },
    employer: formData.employers.map(emp => ({
        name: emp.name,
        start_date: new Date(emp.startDate).toISOString(),
        end_date: new Date(emp.endDate).toISOString(),
    })),
})