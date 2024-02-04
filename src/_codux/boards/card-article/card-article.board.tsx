import { createBoard } from '@wixc3/react-board';
import { CardArticle } from '../../../components/card-article/card-article';
import CardArticle_module from '../../../components/card-article/card-article.module.scss';

export default createBoard({
    name: 'CardArticle',
    Board: () => <CardArticle className={CardArticle_module.textBox} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 828,
        canvasHeight: 332,
        windowHeight: 1024,
        canvasWidth: 710,
        canvasMargin: {
            top: 87,
            right: 0,
            bottom: 87,
            left: 0,
        },
    },
});
