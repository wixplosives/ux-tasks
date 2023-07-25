import styles from './type-icon.module.scss';
import classNames from 'classnames';

export interface TypeIconProps {
    className?: string;
    energyType: grass | lightninig | darkness | faire | fire | psychic | metal | dragon | water | fighting | colorless;
}



export const TypeIcon = ({ className, energyType }: TypeIconProps) => {
    return <div className={classNames(className, styles.iconbox)}></div>;
};
