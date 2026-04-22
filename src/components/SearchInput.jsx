import { Icon } from './Icon';
import '../styles/App.scss';

export function SearchInput({ value, onChange }) {
    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            <div className="search-icon">
                <Icon name="search"/>
            </div>
        </div>
    );
}