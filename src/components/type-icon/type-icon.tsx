import styles from './type-icon.module.scss';
import classNames from 'classnames';

export interface TypeIconProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const TypeIcon = ({ className }: TypeIconProps) => {
    return <div className={classNames(className, styles.iconbox)}></div>;
};
