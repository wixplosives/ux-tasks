import styles from './articals-page.module.scss';
import classNames from 'classnames';
import { CardArticle } from '../card-article/card-article';
import CardArticle_module from '../card-article/card-article.module.scss';

export interface ArticalsPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ArticalsPage = ({ className }: ArticalsPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <div className={styles.articlesItem}>
                    <CardArticle />
                </div>
                <div className={styles.articlesItem}>
                    <CardArticle />
                </div>
            </div>
            <div>
                <div className={styles.articlesItem}>
                    <CardArticle />
                </div>
                <div className={styles.articlesItem}>
                    <CardArticle />
                </div>
            </div>
        </div>
    );
};
