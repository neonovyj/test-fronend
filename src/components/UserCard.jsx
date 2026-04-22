import {Icon} from './Icon';

export function UserCard({user, onClick}) {
    return (
        <div className="user-card" onClick={() => onClick(user)}>
            <h3>{user.name}</h3>
            <p><Icon name="phone"/> {user.phone}</p>
            <p><Icon name="email"/> {user.email}</p>
        </div>
    );
}