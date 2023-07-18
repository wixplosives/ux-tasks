import { createBoard } from '@wixc3/react-board';
import { Apply_Style } from '../../../components/apply-style/apply-style';

export default createBoard({
    name: 'Apply_Style',
    Board: () => <Apply_Style />,
    environmentProps: {
        windowWidth: 1160,
        canvasWidth: 1084,
    },
});
