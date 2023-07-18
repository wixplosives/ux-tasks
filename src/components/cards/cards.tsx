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
            <div>
                <div className={classNames(styles.container, styles.container_style)}>
                    <div className={classNames(styles.flex, styles.spacing)}>
                        <h1 className={styles.title}>Eevee</h1>
                        <div className={styles.header}>
                            <p className={styles.pawer}>50</p>
                            <TypeIcon className={styles.icon} />
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
                        <div className={styles.flex}>
                            <TypeIcon />
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
                                <TypeIcon />
                                <TypeIcon />
                                <TypeIcon />
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
