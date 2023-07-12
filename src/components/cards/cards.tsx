import styles from './cards.module.scss';
import classNames from 'classnames';

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
                            The Greater Yellowstone Ecosystem is home to both mule deer and
                            white-tailed deer. The two deer species are differentiated by their
                            antler shape, and tail size and appearance.
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.container, styles.container_style)}>
                    <div className={styles.imgbox}>
                        <img
                            src="https://cdn.dribbble.com/users/1147613/screenshots/15390615/media/0197f9d885df23a6ab039eedebc40f5b.png"
                            alt=""
                            className={styles.img}
                        />
                    </div>
                    <div>
                        <h1>Squirtle</h1>
                        <p>
                            The Greater Yellowstone Ecosystem is home to both mule deer and
                            white-tailed deer. The two deer species are differentiated by their
                            antler shape, and tail size and appearance.
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
                            The Greater Yellowstone Ecosystem is home to both mule deer and
                            white-tailed deer. The two deer species are differentiated by their
                            antler shape, and tail size and appearance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
