import styles from './energy-type.module.scss';
import classNames from 'classnames';

export interface EnergyTypeProps {
    className?: string;
    energyType: 'grass' | 'lightninig' | 'darkness' | 'faire' | 'fire' | 'psychic' | 'metal' | 'dragon' | 'water' | 'fighting' | 'colorless';
}



export const EnergyType = ({ className, energyType }: EnergyTypeProps) => {
    return <div className={classNames(className, styles.iconbox, styles[energyType])}></div>;
};
