import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Cards 1',
    Board: () => <Cards />,
    environmentProps: {
        canvasBackgroundColor: '#ffffff',
        windowBackgroundColor: '#ffffff',
        windowWidth: 1520,
        windowHeight: 1000,
        canvasHeight: 604,
    },
});
