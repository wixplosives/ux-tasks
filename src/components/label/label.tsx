import styles from './label.module.scss';
import classNames from 'classnames';

export interface LabelProps {
    className?: string;
    imgSrc: string;
    text: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Label = ({ className, imgSrc, text }: LabelProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.iconbox}>
                <img src={imgSrc} alt="" className={styles.icon} />
            </div>
            <span className={styles.labelname}>{text}</span>
        </div>
    );
};
