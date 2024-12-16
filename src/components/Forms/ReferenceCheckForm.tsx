import { ChangeEvent, FormEvent, Fragment, useRef, useState } from "react";
import { EmployerKeys, FormState } from "src/types";
import { FormField } from './FormField'
import referenceCheckFormStyles from './ReferenceCheckForm.module.scss'
import { saveReferenceForm } from "src/services/formsService";

export const ReferenceCheckForm = () => {
    const [formData, setFormData] = useState<FormState>({
        personal: {
            firstName: '',
            lastName: '',
            currentAddress: '',
        },
        employers: [{ name: '', startDate: '', endDate: '' }],
    });
    const [saveError, setSaveError] = useState<{ message: string; stack: string } | null>(null);
    const savedValuesRef = useRef<FormState>(formData);

    const handlePersonalChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            personal: { ...prev.personal, [name]: value },
        }));
    };

    const handleEmployerChange = (index: number, field: EmployerKeys, value: string) => {
        setFormData(prev => ({
            ...prev,
            employers: prev.employers.map((emp, i) =>
                i === index ? { ...emp, [field]: value } : emp
            ),
        }));
    };

    const revertFormData = () => {
        setFormData(savedValuesRef.current);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        savedValuesRef.current = formData;
        try {
            const data = await saveReferenceForm(formData)
            console.log('Data saved', data)
            setSaveError(null)
        } catch (error: unknown) {
            console.error('Error:', error);
            setSaveError(error as { message: string; stack: string });

        }
    };

    return (
        <div>
            {saveError && <p>{saveError.message}</p>}
            <form aria-label="signup-form" data-testid="form" onSubmit={handleSubmit}>
                <fieldset className={referenceCheckFormStyles.fieldset}>
                    <legend>Personal</legend>
                    <div className={referenceCheckFormStyles.field}>
                        <FormField
                            label="First Name"
                            type='text'
                            id="firstName"
                            name="firstName"
                            value={formData.personal.firstName}
                            handleChange={handlePersonalChange}
                            required />
                    </div>
                    <div className={referenceCheckFormStyles.field}>
                        <FormField
                            label="Last Name"
                            type='text'
                            id="lastName"
                            name="lastName"
                            value={formData.personal.lastName}
                            handleChange={handlePersonalChange}
                            required />
                    </div>
                    <div className={referenceCheckFormStyles.field}>
                        <FormField
                            label="Address"
                            type='text'
                            id="currentAddress"
                            name="currentAddress"
                            value={formData.personal.currentAddress}
                            handleChange={handlePersonalChange}
                            required />
                    </div>
                </fieldset>

                <fieldset className={referenceCheckFormStyles.fieldset}>
                    <legend>Employer</legend>
                    {formData.employers.map((employer, index) => (
                        <Fragment key={`${index}${employer.endDate}`} >
                            <div className={referenceCheckFormStyles.field}>
                                <FormField
                                    label="Employer Name"
                                    type='text'
                                    id={`employerName-${index}`}
                                    name="name"
                                    value={employer.name}
                                    handleChange={(e) => handleEmployerChange(index, e.target.name as EmployerKeys, e.target.value)}
                                    required />
                            </div>
                            <div className={`${referenceCheckFormStyles.date__wrapper} ${referenceCheckFormStyles.field}`}>
                                <div className={referenceCheckFormStyles.date__wrapper__form}>
                                    <FormField
                                        label="Start Date"
                                        type='date'
                                        id={`startDate-${index}`}
                                        name="startDate"
                                        value={employer.startDate}
                                        handleChange={(e) => handleEmployerChange(index, e.target.name as EmployerKeys, e.target.value)}
                                        required />
                                </div>
                                <div className={referenceCheckFormStyles.date__wrapper__form}>
                                    <FormField
                                        label="End Date"
                                        type='date'
                                        id={`endDate-${index}`}
                                        name="endDate"
                                        value={employer.endDate}
                                        handleChange={(e) => handleEmployerChange(index, e.target.name as EmployerKeys, e.target.value)}
                                    />
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </fieldset>
                <div className={referenceCheckFormStyles.actions}>
                    <button type='button' onClick={revertFormData} className={referenceCheckFormStyles.actions__cancel}>
                        Cancel
                    </button>
                    <button className={referenceCheckFormStyles.actions__submit} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

