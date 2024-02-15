import styles from './articles-page.module.scss';
import classNames from 'classnames';
import { CardArticle } from '../card-article/card-article';
import CardArticle_module from '../card-article/card-article.module.scss';
import { Menu } from '../menu/menu';

export interface ArticlesPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const ArticlesPage = ({ className }: ArticlesPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <Menu />
                <div className={styles.titlePage}>
                    <h1>UX News</h1>
                </div>
                <div className={styles.articalLayout}>
                    <div>
                        <div className={styles.articlesItem}>
                            <CardArticle
                                articalImage="https://static.wixstatic.com/media/11062b_f7b2c5bfd2354c5e9f05c31ede9f506d~mv2.jpg/v1/fill/w_548,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Fuchsia%20and%20Orange%20Geometric%20Objects.jpg"
                                runText="In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences."
                                text="ChatGPT &amp; Beyond: A Next-Gen Wave in Personalized UX/UI Design"
                            />
                        </div>
                        <div className={styles.articlesItem}>
                            <CardArticle
                                articalImage="https://static.wixstatic.com/media/e4f166_c63dc1abced24b6c9723bf67c1952149~mv2.jpg/v1/fill/w_1526,h_1018,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4f166_c63dc1abced24b6c9723bf67c1952149~mv2.jpg"
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
        </div>
    );
};
