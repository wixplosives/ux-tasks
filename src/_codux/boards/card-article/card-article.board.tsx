import { createBoard } from '@wixc3/react-board';
import { CardArticle } from '../../../components/card-article/card-article';
import CardArticle_module from '../../../components/card-article/card-article.module.scss';

export default createBoard({
    name: 'CardArticle',
    Board: () => (
        <CardArticle
            className={CardArticle_module.textBox}
            text=" ChatGPT &amp; Beyond: A Next-Gen Wave in Personalized UX/UI Design"
            runText="In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         user experiences. In the realm of digital design, generative AI emerges as a transformative   force, poised to revolutionized the way UX/UI designers craft exceptional  user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         us craft exceptional  user experiences.In the realm of digital design, generative AI emerges as a transformative                         force, poised to revolutionized the way UX/UI designers craft exceptional                         us"
            articalImage="https://cdn.dribbble.com/userupload/4626001/file/original-ac51c408207c158939621684f04912d9.png?resize=752x"
        />
    ),
    isSnippet: true,
    environmentProps: {
        windowWidth: 528,
        canvasHeight: 332,
        windowHeight: 768,
        canvasWidth: 710,
    },
});
