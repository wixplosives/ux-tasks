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
            <h3>Be Prepared</h3>
            <h3>12</h3>
            <p className={styles.description}>
                Once during your turn (before your attack), if this Pokémon is on your Bench, you
                may discard all cards attached to this Pokémon and attach it to 1 of your Pokémon as
                a Pokémon Tool card. Prevent any damage done to the Pokémon this card is attached to
                by attacks from your opponent’s Mega Evolution Pokémon. If this card is attached to
                a Pokémon, discard this card at the end of your opponent’s turn.
            </p>
        </div>
    );
};
