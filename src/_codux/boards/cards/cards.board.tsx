import { createBoard } from '@wixc3/react-board';
import { Cards } from '../../../components/cards/cards';

export default createBoard({
    name: 'Cards',
    Board: () => (
        <Cards imageUrl="https://static.wixstatic.com/media/8586f3_fb6a170a09274db0ba3e0b1d58547da4~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/eevee.png" />
    ),
    environmentProps: {
        canvasBackgroundColor: '#ffffff',
        windowBackgroundColor: '#ffffff',
        windowWidth: 1520,
        windowHeight: 1000,
        canvasHeight: 864,
        canvasWidth: 552,
    },
});
