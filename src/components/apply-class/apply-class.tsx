import styles from './apply-class.module.scss';
import classNames from 'classnames';

export interface ApplyClassProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ApplyClass = ({ className }: ApplyClassProps) => {
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
