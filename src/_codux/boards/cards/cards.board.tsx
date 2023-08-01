import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_module from '../../../components/card/card.module.scss';

export default createBoard({
    name: 'Cards',
    Board: () => (
        <>
            <div className={Card_module.root}>
                <Card imageUrl="https://static.wixstatic.com/media/8586f3_fb6a170a09274db0ba3e0b1d58547da4~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/eevee.png" />
                <Card imageUrl="https://static.wixstatic.com/media/8586f3_58d2fdd4150046888cfab0df9e3a9aba~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/ilyakatts_cinematic_far-shot_angle_charmander_showing_tail_with_62ce16ff-770c-4fb8-9b23-e5.png" />
                <Card imageUrl="https://static.wixstatic.com/media/8586f3_a88d3c9b2ade46f49cb10aec2793f09f~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/ilyakatts_cinematic_eye-level_shot_bulbasaur_water_everywhere_s_477c9db7-fb7d-4611-b299-d0.png" />
                <Card imageUrl="https://static.wixstatic.com/media/8586f3_c0801b0b55fa430194bac2158fd9c7ba~mv2.png/v1/fill/w_1062,h_816,al_c,q_90,enc_auto/0_2.png" />
            </div>
        </>
    ),
    environmentProps: {
        canvasBackgroundColor: '#ffffff',
        windowBackgroundColor: '#ffffff',
        windowHeight: 1051,
        canvasHeight: 1719,
        canvasWidth: 1436,
        windowWidth: 1712,
    },
});
