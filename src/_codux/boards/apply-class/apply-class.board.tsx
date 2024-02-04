import { createBoard } from '@wixc3/react-board';
import { ApplyClass } from '../../../components/apply-class/apply-class';

export default createBoard({
    name: 'ApplyClass',
    Board: () => <ApplyClass />,
    environmentProps: {
        windowWidth: 414,
        windowHeight: 896,
    },
});
