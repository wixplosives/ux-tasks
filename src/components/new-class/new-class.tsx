import styles from './new-class.module.scss';
import classNames from 'classnames';

export interface NewClassProps {
    className?: string;
}

export const NewClass = ({ className }: NewClassProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>Black</div>
            <div>LightSlateGrey</div>

            <div>Dark Gray</div>
            <div>LightBlue</div>
            <div>LightSkyBlue</div>
            <div>Blue</div>
            <div>DarkSlateBlue</div>
            <div>Violet</div>
            <div>MediumPurple</div>
            <div>MediumOrchid</div>
            <div>HotPink</div>
            <div>LightPink</div>
            <div>FireBrick</div>
            <div>Red</div>
            <div>OrangeRed</div>
            <div>Orange</div>
            <div>Tomato</div>
            <div>Coral</div>
            <div>Sienna</div>
            <div>IndianRed</div>
            <div>PaleVioletRed</div>
            <div>Pink</div>
            <div>Purple</div>
            <div>DarkSlateGray</div>
            <div>SeaGreen</div>
            <div>MediumAquaMarine</div>
            <div>Turquoise</div>
            <div>DarkTurquoise</div>
            <div>LightSeaGreen</div>
            <div>Teal</div>
            <div>Olive</div>
            <div>Khaki</div>
        </div>
    );
};
