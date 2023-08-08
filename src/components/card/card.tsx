import styles from './card.module.scss';
import classNames from 'classnames';
import { EnergyType, EnergyTypeOptions } from '../energy-type/energy-type';
import { Ability } from '../ability/ability';

export interface CardProps {
    name: string;
    imageUrl: string;
    hp: number;
    className?: string;
    hpType: EnergyTypeOptions;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, imageUrl, hp, hpType, name }: CardProps) => {
    return (
        <div className={`${className}`}>
            <div>
                <div className={classNames(styles.container, styles.container_style)}>
                    <div className={classNames(styles.flex, styles.spacing)}>
                        <h1 className={styles.title}>{name}</h1>
                        <div className={styles.header}>
                            <span className={styles.hp}>HP</span>
                            <span className={styles.pawer}>{hp}</span>
                            <EnergyType
                                className={classNames(styles.icon, styles.energyTypeIcon)}
                                energyType={hpType}
                            />
                        </div>
                    </div>
                    <div
                        className={styles.imgbox}
                        style={{
                            backgroundImage: `url('${imageUrl}')`,
                        }}
                    ></div>
                    <div>
                        <Ability />
                        <Ability />
                    </div>
                </div>
            </div>
        </div>
    );
};
