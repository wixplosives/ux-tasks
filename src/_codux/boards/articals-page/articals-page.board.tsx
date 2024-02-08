import { createBoard } from '@wixc3/react-board';
import { ArticalsPage } from '../../../components/articals-page/articals-page';
import ArticalsPage_module from '../../../components/articals-page/articals-page.module.scss';
import CardArticle_module from '../../../components/card-article/card-article.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'ArticalsPage',
    Board: () => <ArticalsPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1494,
        windowHeight: 768,
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
