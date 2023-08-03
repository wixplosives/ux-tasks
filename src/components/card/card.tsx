import styles from './card.module.scss';
import classNames from 'classnames';
import { EnergyType } from '../energy-type/energy-type';

export interface CardProps {
    imageUrl: string;
    hp: number;
    className?: string;
    hpType: 'grass' | 'lightninig' | 'darkness' | 'faire' | 'fire' | 'psychic' | 'metal' | 'dragon' | 'water' | 'fighting' | 'colorless';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, imageUrl, hp }: CardProps) => {
    return (
        <div className={`${className}`}>
            <div>
                <div className={classNames(styles.container, styles.container_style)}>
                    <div className={classNames(styles.flex, styles.spacing)}>
                        <h1 className={styles.title}>Eevee</h1>
                        <div className={styles.header}>
                            <span className={styles.hp}>HP</span>
                            <span className={styles.pawer}>{hp}</span>
                            <EnergyType className={styles.icon} energyType="colorless" />
                        </div>
                    </div>
                    <div
                        className={styles.imgbox}
                        style={{
                            backgroundImage: `url('${imageUrl}')`,
                        }}
                    ></div>
                    <div>
                        <div className={styles.flex}>
                            <EnergyType energyType="colorless" />
                            <h3>Be Prepared</h3>
                            <h3>12</h3>
                        </div>
                        <p className={styles.paragraph}>
                            Attach a basic Energy card from your hand to this Pokimon{' '}
                        </p>
                    </div>
                    <div>
                        <div className={styles.flex}>
                            <div className={styles.flexicons}>
                                <EnergyType energyType="colorless" />
                                <EnergyType energyType="colorless" />
                                <EnergyType energyType="colorless" />
                            </div>
                            <h3>Be Prepared</h3>
                            <h3>12</h3>
                        </div>
                        <p className={styles.paragraph}>
                            Attach a basic Energy card from your hand to this Pokimon{' '}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
