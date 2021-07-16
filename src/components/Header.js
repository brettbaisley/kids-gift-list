import React from 'react';
import { logout } from '../firebase/auth';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';
import './Header.css';

const Header = () => {

    const history = useHistory();
    const { user } = useSession();

    const logoutUser = async () => {
        await logout();
        history.push('/login');
    };

    return (
        <header className="site-header">
            <h1><Link to="/">Gifts</Link></h1>
            <nav className="site-nav">
                <Link to="/gifts">Gifts</Link>
                { !!user  && <Link to="/admin">Admin</Link>}
            </nav>
            <div>
                { !!user  && <button className="btn btn-primary" onClick={logoutUser}>Logout</button>}
                { !!!user && <Link to="/login" className="btn btn-primary">Login</Link>}
            </div>
        </header>
    )
}

export default Header