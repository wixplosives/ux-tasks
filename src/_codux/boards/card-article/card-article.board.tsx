import { createBoard } from '@wixc3/react-board';
import { CardArticle } from '../../../components/card-article/card-article';

export default createBoard({
    name: 'CardArticle',
    Board: () => <CardArticle />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1020,
    },
});
