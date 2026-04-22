import { UserCard } from './UserCard';

export function UserList({ users, onUserClick }) {
    return (
        <div className="user-list">
            {users.map(user => (
                <UserCard key={user.id} user={user} onClick={onUserClick} />
            ))}
        </div>
    );
}