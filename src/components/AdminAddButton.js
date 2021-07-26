import React from 'react';
import { Link } from 'react-router-dom';

const AdminAddButton = () => {
    return <Link to="/admin/add" className="btn btn-primary admin-add-button">+</Link>
}

export default AdminAddButton;