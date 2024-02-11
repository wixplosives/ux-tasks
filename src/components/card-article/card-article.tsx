import styles from './card-article.module.scss';
import classNames from 'classnames';


export interface CardArticleProps {
    className?: string;
    text: string;
    runText: string;
    articalImage: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const CardArticle = ({ className, text, runText, articalImage }: CardArticleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageBox}>
                <img src={articalImage} alt="" className={styles.image} />
            </div>
            <div className={styles.content}>
                <div className={styles.textBox}>
                    <div className={styles.title}>{text}</div>
                    <h4 className={styles.runText}>{runText}</h4>
                </div>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
    );
};
