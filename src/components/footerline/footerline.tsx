import styles from './footerline.module.scss';
import classNames from 'classnames';
import Label_module from '../label/label.module.scss';

export interface FooterlineProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footerline = ({ className }: FooterlineProps) => {
    return (
        <div className={classNames(className, Label_module.root, styles.root)}>
            <div className={Label_module.root}>
                <div className={Label_module.iconbox}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                        alt=""
                        className={Label_module.icon}
                    />
                </div>
                <span>text</span>
            </div>
            <div className={Label_module.root}>
                <div className={Label_module.iconbox}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                        alt=""
                        className={Label_module.icon}
                    />
                </div>
                <span>text</span>
            </div>
            <div className={Label_module.root}>
                <div className={Label_module.iconbox}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                        alt=""
                        className={Label_module.icon}
                    />
                </div>
                <span>text</span>
            </div>
        </div>
    );
};
