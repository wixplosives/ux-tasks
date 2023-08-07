import { createBoard } from '@wixc3/react-board';
import { EnergyType } from '../../../components/energy-type/energy-type';

export default createBoard({
    name: 'All Energy Types',

    Board: () => (
        <div>
            <EnergyType energyType="grass" />
            <EnergyType energyType="lightning" />
            <EnergyType energyType="darkness" />
            <EnergyType energyType="fairy" />
            <EnergyType energyType="fire" />
            <EnergyType energyType="psychic" />
            <EnergyType energyType="metal" />
            <EnergyType energyType="dragon" />
            <EnergyType energyType="water" />
            <EnergyType energyType="fighting" />
            <EnergyType energyType="colorless" />
        </div>
    ),
});
