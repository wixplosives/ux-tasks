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
        <div className={classNames(className, styles.root, styles.mainfooter)}>
            <div className={styles.tagbox}>
                <div className={Label_module.iconbox}>
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                        alt=""
                        className={Label_module.icon}
                    />
                </div>
                <span className={styles.tagtext}>Twitter</span>
            </div>
            <div>
                <div className={Label_module.iconbox}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                        alt=""
                        className={Label_module.icon}
                    />
                </div>
                <span>Facebook</span>
            </div>
            <div>
                <div className={Label_module.iconbox}>
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"
                        alt=""
                        className={Label_module.icon}
                    />
                </div>
                <span>Youtub</span>
            </div>
        </div>
    );
};
