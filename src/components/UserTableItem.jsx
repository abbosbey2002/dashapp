import { useEffect, useState } from 'react';
import { getUserByid } from '../services/api';

const UserTableItem = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const fetchedUser = await getUserByid(userId);
            setUser(fetchedUser);
        };

        fetchUser();
    }, [userId]);

    return (
        <span className="">
            {user ? (user.father_name + " " + user.last_name) : 'wait...'}
        </span>
    );
};

export default UserTableItem;
