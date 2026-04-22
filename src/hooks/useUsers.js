import {useState, useEffect} from 'react';
import {fetchUsers} from '../api/usersApi';

export function useUsers() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchUsers(search)
            .then(setUsers)
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [search]);

    return {users, loading, search, setSearch};
}