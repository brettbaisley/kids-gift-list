import React from "react";
import { Link } from "react-router-dom";
import { deleteGiftDocument } from '../firebase/gift';

const AdminAction = ({ id }) => (
    <div className="admin-gift-actions">
        <Link className="btn btn-primary" to={`/admin/update/${id}`}>Update</Link>
        <button className="btn btn-danger" type="button" onClick={() => deleteGiftDocument(id)}>Delete</button>
    </div>
);

export default AdminAction;