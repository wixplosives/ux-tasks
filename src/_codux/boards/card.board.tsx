import { createBoard } from '@wixc3/react-board';
import { Card } from '../../components/card/card';

export default createBoard({
    name: 'card',
    Board: () => (
        <div>
            <Card
                hp={12}
                imageUrl={
                    'https://static.wixstatic.com/media/8586f3_fb6a170a09274db0ba3e0b1d58547da4~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/eevee.png'
                }
                hpType="faire"
            />
        </div>
    ),
});
