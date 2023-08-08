import { createBoard } from '@wixc3/react-board';
import { Ability } from '../../../components/ability/ability';

export default createBoard({
    name: 'Ability',
    Board: () => <Ability />,
    environmentProps: {
        canvasWidth: 647,
    },
});
