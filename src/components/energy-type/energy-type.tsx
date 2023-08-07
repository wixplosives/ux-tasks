import styles from './energy-type.module.scss';
import classNames from 'classnames';

export type EnergyTypeOptions =
    | 'grass'
    | 'lightning'
    | 'darkness'
    | 'fairy'
    | 'fire'
    | 'psychic'
    | 'metal'
    | 'dragon'
    | 'water'
    | 'fighting'
    | 'colorless';

export interface EnergyTypeProps {
    className?: string;
    energyType: EnergyTypeOptions;
}

export const EnergyType = ({ className, energyType }: EnergyTypeProps) => {
    return <div className={classNames(className, styles.iconbox, styles[energyType])}></div>;
};
