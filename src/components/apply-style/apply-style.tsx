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
            <p className={classNames(styles.Coral, styles.Coral)}>Coral</p>
            <p className={styles.DarkSlateGray}>DarkSlateGray</p>
            <p className={styles.DarkSlateBlue}>DarkSlateBlue</p>
            <p className={styles.DarkTurquoise}>DarkTurquoise</p>
            <p className={styles.IndianRed}>IndianRed</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
        </div>
    );
};
