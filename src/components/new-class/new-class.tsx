import styles from './new-class.module.scss';
import classNames from 'classnames';

export interface NewClassProps {
    className?: string;
}

export const NewClass = ({ className }: NewClassProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <p>Black</p>
            <p>LightSlateGrey</p>
            <p>Dark Gray</p>
            <p>LightBlue</p>
            <p>LightSkyBlue</p>
            <p>Blue</p>
            <p>DarkSlateBlue</p>
            <p>Violet</p>
            <p>MediumPurple</p>
            <p>MediumOrchid</p>
            <p>HotPink</p>
            <p>LightPink</p>
            <p>FireBrick</p>
            <p>Red</p>
            <p>OrangeRed</p>
            <p>Orange</p>
            <p>Tomato</p>
            <p>Coral</p>
            <p>Sienna</p>
            <p>IndianRed</p>
            <p>PaleVioletRed</p>
            <p>Pink</p>
            <p>Purple</p>
            <p>DarkSlateGray</p>
            <p>SeaGreen</p>
            <p>MediumAquaMarine</p>
            <p>Turquoise</p>
            <p>DarkTurquoise</p>
            <p>LightSeaGreen</p>
            <p>Teal</p>
            <p>Olive</p>
            <p>Khaki</p>
        </div>
    );
};
