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
    return <div className={classNames(styles.root, className)}>ApplyClass</div>;
};
