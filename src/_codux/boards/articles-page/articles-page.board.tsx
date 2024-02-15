import { createBoard } from '@wixc3/react-board';
import { ArticlesPage } from '../../../components/articles-page/articles-page';
import ArticlesPage_module from '../../../components/articles-page/articles-page.module.scss';
import CardArticle_module from '../../../components/card-article/card-article.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'ArticlesPage',
    Board: () => <ArticlesPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1516,
        windowHeight: 800,
        canvasHeight: 673,
        canvasWidth: 716,
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
});
