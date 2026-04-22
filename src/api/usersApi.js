export async function fetchUsers(term = '') {
    const url = term ? `http://localhost:3000?term=${term}` : 'http://localhost:3000';
    const res = await fetch(url);
    const data = await res.json();
    return Array.isArray(data) ? data : (data.data || []);
}