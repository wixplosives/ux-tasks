import { createBoard } from '@wixc3/react-board';
import { EnergyType } from '../../../components/energy-type/energy-type';

export default createBoard({
    name: 'Energy Type',

    Board: () => <EnergyType energyType="psychic" />,
});
