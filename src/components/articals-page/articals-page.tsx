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
                <h1>UX News</h1>
            </div>
            <div className={styles.articalLayout}>
                <div>
                    <div className={styles.articlesItem}>
                        <CardArticle
                            articalImage="https://static.parastorage.com/services/instagram-cdn/1.691.0/assets/ig-templates-accounts/Editor/Subscription%20Box/01.jpg"
                            runText="In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences."
                            text="ChatGPT &amp; Beyond: A Next-Gen Wave in Personalized UX/UI Design"
                        />
                    </div>
                    <div className={styles.articlesItem}>
                        <CardArticle
                            articalImage="https://static.wixstatic.com/media/11062b_6891c166dfb148789fd8600de09f49d2~mv2.jpg/v1/fill/w_1200,h_742,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Scissor%20and%20Sellotape.jpg"
                            runText="In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences."
                            text="ChatGPT &amp; Beyond: A Next-Gen Wave in Personalized UX/UI Design"
                        />
                    </div>
                </div>
                <div>
                    <div className={styles.articlesItem}>
                        <CardArticle
                            articalImage="https://static.wixstatic.com/media/11062b_4702ac7a75d4410a8a3aee35d4275fb2~mv2.jpg/v1/fill/w_1200,h_742,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Modern%20Art.jpg"
                            runText="In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences."
                            text="ChatGPT &amp; Beyond: A Next-Gen Wave in Personalized UX/UI Design"
                        />
                    </div>
                    <div className={styles.articlesItem}>
                        <CardArticle
                            articalImage="https://cdn.dribbble.com/userupload/4626001/file/original-ac51c408207c158939621684f04912d9.png?resize=752x"
                            runText="In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences."
                            text="ChatGPT &amp; Beyond: A Next-Gen Wave in Personalized UX/UI Design"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
