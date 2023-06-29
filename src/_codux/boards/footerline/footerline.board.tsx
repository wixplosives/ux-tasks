import { createBoard } from '@wixc3/react-board';
import { Footerline } from '../../../components/footerline/footerline';

export default createBoard({
    name: 'Fotterline',
    Board: () => <Footerline />,
});
