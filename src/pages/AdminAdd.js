import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { addGiftDocument } from '../firebase/gift';
import { useForm } from 'react-hook-form';

const AdminAddPage = (props) => {
    const { register, handleSubmit, reset} = useForm();
    const [isLoading, setLoading] = useState(false);
    const [userMessage, setUserMessage] = useState({});

    const ShowUserMessage = (props) => {
        if (props.message.status === 'success') {
            return (
                <p className="success"> { props.message.message } </p>
            )
        }
        if (props.message.status === 'error') {
            return (
                <p className="error"> { props.message.message } </p>
            )
        } else {
            return null;
        }
    }

    const onSubmit = async (data) => {
        let newGift;
        setLoading(true);
        setUserMessage({});
        try {
            newGift = await addGiftDocument(data);
        } catch (error) {
            console.log(error);
            setUserMessage( {status: 'error', message: error.message });
        } finally {
            setLoading(false);
        }
        
        if (newGift) {
            reset();
            console.log('Added document with ID: ', newGift.title);
            setUserMessage( {status: 'success', message: `${newGift.title} was added successfully` });
        }
    }

    const formClassName = `admin-add-form ${isLoading ? 'loading' : ''}`;

    return (
        <div className="admin-add">
            <h2>Add New Item</h2>

            {
                userMessage && <ShowUserMessage message={userMessage} />

            }

            <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>

                <label>Brand</label>
                <input 
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    {...register("brand")}>
                </input>

                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    {...register("title")}>
                </input>

                <label>Description</label>
                <textarea
                    name="description"
                    placeholder="Description"
                    {...register("description")}>
                </textarea>

                <label>Price</label>
                <input 
                    type="number"
                    name="price"
                    placeholder="0.00"
                    step="any"
                    {...register("price")}>
                </input>

                <label>Image URL</label>
                <input 
                    type="url"
                    name="img_url"
                    placeholder="http://"
                    {...register("img_url")}>
                </input> 

                <label>Item URL</label>
                <input 
                    type="url"
                    name="url"
                    placeholder="http://"
                    {...register("url")}>
                </input> 

                <div className="action-buttons">
                    <Link to="/admin" className="btn btn-primary">&lt; Back</Link>
                    <div>
                        <button type="submit" className="btn btn-primary">Add</button>
                        <button type="reset" className="btn btn-danger">Reset</button>                     
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AdminAddPage;