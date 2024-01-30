import { createBoard } from '@wixc3/react-board';
import { ArticalsPage } from '../../../components/articals-page/articals-page';

export default createBoard({
    name: 'ArticalsPage',
    Board: () => <ArticalsPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1286,
        windowHeight: 682,
    },
});
