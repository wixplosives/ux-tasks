import styles from './card.module.scss';
import classNames from 'classnames';
import { TypeIcon } from '../type-icon/type-icon';

export interface CardProps {
    imageUrl: string;
    className?: string;

}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, imageUrl }: CardProps) => {
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
                            <TypeIcon className={styles.icon} energyType="colorless" />
                        </div>
                    </div>
                    <div className={styles.imgbox} style={{
                        backgroundImage: `url('${imageUrl}')`
                        }}
                        ></div>
                    <div>
                        <div className={styles.flex}>
                            <TypeIcon energyType="colorless" />
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
                                <TypeIcon energyType="colorless" />
                                <TypeIcon energyType="colorless" />
                                <TypeIcon energyType="colorless" />
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
