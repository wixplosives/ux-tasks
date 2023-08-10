import styles from './new-class.module.scss';
import classNames from 'classnames';

export interface NewClassProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewClass = ({ className }: NewClassProps) => {
    return <div className={classNames(styles.root, className)}>NewClass</div>;
};
