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
            <div className={styles.container}>
                <div className={styles.imgbox}>
                    <img
                        src="https://cdn.dribbble.com/users/4335179/screenshots/16490525/media/5dea3bbcf3939ddd6f5351a8efc493a2.jpg"
                        alt=""
                        className={styles.img}
                    />
                </div>
                <div>
                    <h1 className={styles.title}>Happy Deer </h1>
                    <p className={styles.paragraph}>
                        The Greater Yellowstone Ecosystem is home to both mule deer and white-tailed
                        deer. The two deer species are differentiated by their antler shape, and
                        tail size and appearance.
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.imgbox}>
                    <img
                        src="https://cdn.dribbble.com/users/4335179/screenshots/16490525/media/5dea3bbcf3939ddd6f5351a8efc493a2.jpg"
                        alt=""
                        className={styles.img}
                    />
                </div>
                <div>
                    <h1>Happy Deer </h1>
                    <p>
                        The Greater Yellowstone Ecosystem is home to both mule deer and white-tailed
                        deer. The two deer species are differentiated by their antler shape, and
                        tail size and appearance.
                    </p>
                </div>
            </div>
            <div>
                <div className={styles.imgbox}>
                    <img
                        src="https://cdn.dribbble.com/users/4335179/screenshots/16490525/media/5dea3bbcf3939ddd6f5351a8efc493a2.jpg"
                        alt=""
                        className={styles.img}
                    />
                </div>
                <div>
                    <h1>Happy Deer </h1>
                    <p>
                        The Greater Yellowstone Ecosystem is home to both mule deer and white-tailed
                        deer. The two deer species are differentiated by their antler shape, and
                        tail size and appearance.
                    </p>
                </div>
            </div>
        </div>
    );
};
