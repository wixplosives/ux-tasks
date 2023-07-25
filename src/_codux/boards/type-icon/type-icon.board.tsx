import { createBoard } from '@wixc3/react-board';
import { TypeIcon } from '../../../components/type-icon/type-icon';

export default createBoard({
    name: 'Energy Type',
    
    Board: () => <TypeIcon energyTyp{grass} />,
});
