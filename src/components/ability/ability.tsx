import styles from './ability.module.scss';
import classNames from 'classnames';
import { EnergyType } from '../energy-type/energy-type';

export interface AbilityProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Ability = ({ className }: AbilityProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.energyIcons}>
                <EnergyType energyType="colorless" />
                <EnergyType energyType="colorless" />
                <EnergyType energyType="colorless" />
                <EnergyType energyType="colorless" />
            </div>
            <h3>Find a Friend</h3>
            <h3>12</h3>
            <p className={styles.description}>
                Flip a coin. If heads, search your deck for a Pokémon, reveal it, and put it into
                your hand. Then, shuffle your deck.
            </p>
        </div>
    );
};
