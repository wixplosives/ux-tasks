import styles from './footer.module.scss';
import classNames from 'classnames';
import { Label } from '../label/label';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Label
                imgSrc={
                    'https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png'
                }
                text={'Twitter'}
            />
            <Label
                imgSrc={
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
                }
                text={'Facebook'}
            />
            <Label
                imgSrc={
                    'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png'
                }
                text={'Youtub'}
            />
        </div>
    );
};
