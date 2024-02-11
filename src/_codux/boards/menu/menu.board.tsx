import { createBoard } from '@wixc3/react-board';
import { Menu } from '../../../components/menu/menu';

export default createBoard({
    name: 'Menu',
    Board: () => <Menu />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        windowWidth: 1174,
    },
});
