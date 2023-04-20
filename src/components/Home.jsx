import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {

    const { user } = useContext(AuthContext);
    return (
        <div>
            <h2>Welcome Home {user && <span>{user.displayName}</span> }</h2>
        </div>
    );
};

export default Home;