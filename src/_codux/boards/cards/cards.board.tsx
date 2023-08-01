import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Cards',
    Board: () => (
        <>
            <Card imageUrl="https://static.wixstatic.com/media/8586f3_fb6a170a09274db0ba3e0b1d58547da4~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/eevee.png" />
            <Card imageUrl="https://static.wixstatic.com/media/8586f3_a88d3c9b2ade46f49cb10aec2793f09f~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/ilyakatts_cinematic_eye-level_shot_bulbasaur_water_everywhere_s_477c9db7-fb7d-4611-b299-d0.png" />
        </>
    ),
    environmentProps: {
        canvasBackgroundColor: '#ffffff',
        windowBackgroundColor: '#ffffff',
       
    },
});
