import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => (
        <Label
            imgSrc="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
            text="Label text"
        />
    ),
    environmentProps: {
        canvasHeight: 44,
    },
});
