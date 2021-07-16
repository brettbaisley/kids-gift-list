import React, { useState } from 'react';
import { addGiftDocument } from '../firebase/gift';
import { useForm } from 'react-hook-form';

const AdminAddPage = (props) => {
    const { register, handleSubmit, reset} = useForm();
    const [isLoading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        let newGift;
        setLoading(true);
        try {
            newGift = await addGiftDocument(data);
        } catch (error) {
            console.log(error);
        }
        
        if (newGift) {
            reset();
            console.log('Added document with ID: ', newGift.id);

        } else {
            setLoading(false);
        }
    }

    const formClassName = `admin-add-form ${isLoading ? 'loading' : ''}`;

    return (
        <div className="admin-add">
            <h2>Add New Item</h2>
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

                <div>
                    <button type="submit" className="btn btn-primary">Add</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>                     
                </div>
            </form>
        </div>
    )
}
export default AdminAddPage;