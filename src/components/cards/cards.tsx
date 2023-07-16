import styles from './cards.module.scss';
import classNames from 'classnames';
import { TypeIcon } from '../type-icon/type-icon';

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h1 className={styles.big_title}>Pokemon cards</h1>
            </div>
            <div className={styles.cards}>
                <div className={classNames(styles.container, styles.container_style)}>
                    <div className={styles.flex}>
                        <h1>Squirtle</h1>
                        <div className={styles.header}>
                            <TypeIcon />
                            <p>70</p>
                        </div>
                    </div>
                    <div className={styles.imgbox}>
                        <img
                            src="https://files.cults3d.com/uploaders/16165612/illustration-file/d19b7a5e-2e51-40bf-baa6-d25e8bd9ef9f/Eevee_Stand02.jpg"
                            alt=""
                            className={styles.img}
                        />
                    </div>
                    <div>
                        <h1 className={styles.title}>Eevee</h1>
                        <p className={styles.paragraph}>
                            Eevee is a Normal-type Pokémon introduced in Generation I. Eve is also
                            Dana's daughter. Her husband didn't tell her Eve was a Pokemon name
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.container, styles.container_style)}>
                    <div className={styles.flex}>
                        <h1>Squirtle</h1>
                        <div className={styles.header}>
                            <TypeIcon />
                            <p>70</p>
                        </div>
                    </div>
                    <div className={styles.imgbox}>
                        <img
                            src="https://cdn.dribbble.com/users/1147613/screenshots/15390615/media/0197f9d885df23a6ab039eedebc40f5b.png"
                            alt=""
                            className={styles.img}
                        />
                    </div>
                    <div>
                        <p>
                            Squirtle is a Water-type Pokémon introduced in Generation I. It evolves
                            into Wartortle starting at level 16. It is one of the three First
                            partner Pokémon that can be chosen in Kanto region.
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.container, styles.container_style)}>
                    <div className={styles.imgbox}>
                        <img
                            src="https://cdn.dribbble.com/users/2598141/screenshots/14640422/media/4c945302d9f2e168cf1c96765589a5bc.png"
                            alt=""
                            className={styles.img}
                        />
                    </div>
                    <div>
                        <h1>Gengar</h1>
                        <p>
                            Gengar is a Ghost/Poison-type Pokémon introduced in Generation I. is a
                            shadow-like, round-bodied Pokémon with two large, pointedears and short
                            spikes lining its back. Gengar has two red eyes and atoothy, sinister
                            smile. It has claws on its hands. Gengar stands on itstwo short legs,
                            but it can Levitate as well.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
