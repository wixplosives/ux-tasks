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