import phoneSrc from '../assets/phone.svg';
import emailSrc from '../assets/email.svg';
import searchSrc from '../assets/search.svg';
import closeSrc from '../assets/close.svg';

const icons = {
    phone: phoneSrc,
    email: emailSrc,
    search: searchSrc,
    close: closeSrc
};

export function Icon({ name, width = 24, height = 24 }) {
    return <img src={icons[name]} alt={name} width={width} height={height} />;
}