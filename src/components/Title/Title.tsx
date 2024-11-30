import titleStyles from './Title.module.scss'

export interface TitleProps {
    title?: string;
}
export const Title = ({ title = 'Goodlord Referencing form' }: TitleProps) => {
    return (
        <h1 data-testid="heading" className={titleStyles.title}>{title}</h1>
    );
}
