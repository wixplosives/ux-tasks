import { createBoard } from '@wixc3/react-board';
import { NewClass } from '../../../components/new-class/new-class';

export default createBoard({
    name: 'NewClass',
    Board: () => <NewClass />,
    environmentProps: {
        windowWidth: 992,
    },
});
