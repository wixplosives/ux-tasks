import { createBoard } from '@wixc3/react-board';
import { CardArticle } from '../../../components/card-article/card-article';
import CardArticle_module from '../../../components/card-article/card-article.module.scss';

export default createBoard({
    name: 'CardArticle',
    Board: () => <CardArticle className={CardArticle_module.textBox} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 596,
        canvasHeight: 332,
        windowHeight: 1024,
    },
});
