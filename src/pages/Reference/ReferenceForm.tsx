
import { Title } from 'src/components/Title'
import { ReferenceCheckForm } from 'src/components/Forms'
import referenceFormStyles from './ReferenceForm.module.scss'

export const ReferenceForm = () => {
    return (
        <div className={referenceFormStyles.form__wrapper} >
            <Title />
            <ReferenceCheckForm />
        </div>
    );
}
