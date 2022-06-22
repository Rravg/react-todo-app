import './styles/Icon.css';
import icon from '../icons/icon-check.svg';

export function Icon(props) {

    if (!props.complete) {
        return (
            <span className="outer-dot">
                <span className="inner-dot">
                </span>
            </span>
        );
    } else {
        return (
            <span className="outer-dot" style={{ background: 'linear-gradient(135deg, hsl(192, 100%, 67%) 20%, hsl(280, 87%, 65%))' }}>
                <img alt='' src={icon} />
            </span>
        );
    }
}