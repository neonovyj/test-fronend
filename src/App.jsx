import {useState} from 'react';
import {useUsers} from './hooks/useUsers';
import {SearchInput} from './components/SearchInput';
import {UserList} from './components/UserList';
import {Modal} from './components/Modal';
import './styles/App.scss';

function App() {
    const {users, loading, search, setSearch} = useUsers();
    const [selectedUser, setSelectedUser] = useState(null);

    return (
        <div>
            <SearchInput value={search} onChange={setSearch}/>
            {loading && <div>Загрузка...</div>}
            <UserList users={users} onUserClick={setSelectedUser}/>
            <Modal user={selectedUser} onClose={() => setSelectedUser(null)}/>
        </div>
    );
}

export default App;