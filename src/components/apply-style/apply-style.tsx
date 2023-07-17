import styles from './apply-style.module.scss';
import classNames from 'classnames';

export interface Apply_StyleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Apply_Style = ({ className }: Apply_StyleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <p className={styles.black}>Black</p>
                <p className={styles.DarkGray}>Dark Gray</p>
                <p className={styles.orange}>Orange</p>
                <p className={styles.pink}>Pink</p>
                <p className={styles.blue}>Blue</p>
                <p className={styles.LightSkyBlue}>LightSkyBlue</p>
                <p className={styles.LightBlue}>LightBlue</p>
                <p className={styles.red}>Red</p>
                <p className={styles.Violet}>Violet</p>
                <p className={styles.PaleVioletRed}>PaleVioletRed</p>
                <p>This is a paragraph.</p>
                <p>This is a paragraph.</p>
                <p>This is a paragraph.</p>
            </div>
        </div>
    );
};
