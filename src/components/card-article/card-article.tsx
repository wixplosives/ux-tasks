import styles from './card-article.module.scss';
import classNames from 'classnames';

export interface CardArticleProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CardArticle = ({ className }: CardArticleProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.imageBox}>
                <img
                    src="https://cdn.dribbble.com/userupload/12190560/file/original-d6d2027a27aa630f756ce2888a6e32f5.jpg?resize=1504x1128"
                    alt=""
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.textBox}>
                    <div className={styles.title}>
                        ChatGPT &amp; Beyond: A Next-Gen Wave in Personalized UX/UI Design
                    </div>
                    <h4 className={styles.runText}>
                        In the realm of digital design, generative AI emerges as a transformative
                        force, poised to revolutionized the way UX/UI designers craft exceptional
                        user experiences. This remarkable tool, with its autonomous content
                        generation capabilities, holds the promise of automating repetitive tasks,
                        fostering creative co-creation, and unlocking personalized, adaptive, and
                        dynamically evolving user interfaces. As generative AI continues to evolve,
                        its impact on UX/UI design is poised to transcend boundaries, shaping the
                        future of digital interactions in profound ways.{' '}
                    </h4>
                </div>
                <button className={styles.button}>Read More</button>
            </div>
        </div>
    );
};
