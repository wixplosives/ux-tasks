import styles from './menu.module.scss';
import classNames from 'classnames';
import { Footer } from '../footer/footer';

export interface MenuProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.navRight}>
                <div className={styles.logo}>Logo</div>
                <nav className={styles.nav}>
                    <a href="/home" className={styles.navLink}>
                        Articals
                    </a>{' '}
                    | |{' '}
                    <a href="/about" className={styles.navLink}>
                        About
                    </a>{' '}
                    |{' '}
                    <a href="/contact" className={styles.navLink}>
                        Contact Us
                    </a>
                </nav>
            </div>
            <div className={styles.navLeft}>
                <Footer />
                <button className={styles.button}>Login</button>
            </div>
        </div>
    );
};
