import React, { useState, useEffect } from 'react';
import { updateGiftDocument } from '../firebase/gift';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { firestore } from '../firebase/config';
import FormValidationMsg from '../components/FormValidationMsg';

const AdminUpdatePage = (props) => {
    const params = useParams();
    const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm();
    const [ gift, setGift ] = useState(null);
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

    useEffect( () => {
        const giftRef = firestore.collection('gifts').doc(params.id);

        giftRef.get()
            .then( (document) => {
                if (document.exists) {
                    const documentData = document.data();
                    setGift({id: document.id, ...documentData});
                    setValue('brand', documentData.brand);
                    setValue('title', documentData.title);
                    setValue('description', documentData.description);
                    setValue('price', documentData.price);
                    setValue('img_url', documentData.img_url);
                    setValue('url', documentData.url);
                    setValue('whichKid', documentData.whichKid);
                }
            });
    }, [params.id, setValue]);

    if (!gift) {
        return null;
    }

    const onSubmit = async (data) => {
        setLoading(true);
        setUserMessage({});
        try {
            await updateGiftDocument({id: gift.id, ...data});
            console.log('Updated document: ', gift.id);
            setUserMessage( {status: 'success', message: `${gift.title} was updated successfully` });
        } catch (error) {
            console.log("There was an error updating document: ", error);
            setUserMessage( {status: 'error', message: error.message });
        } finally {
            setLoading(false);
        }
    }

    const formClassName = `admin-add-form ${isLoading ? 'loading' : ''}`;

    return (
        <div className="admin-add">
            <h2>Update Item</h2>

            {
                userMessage && <ShowUserMessage message={userMessage} />

            }

            <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>

                <FormValidationMsg errors={errors} />

                <label>Brand</label>
                <input 
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    {...register("brand", { required: true })}>
                </input>

                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Title"
                    {...register("title", { required: true })}>
                </input>

                <label>Description</label>
                <textarea
                    name="description"
                    placeholder="Description"
                    {...register("description", { required: true })}>
                </textarea>

                <label>Price</label>
                <div className="currency-input-wrapper">
                    <p>$</p>
                    <input 
                        type="number"
                        name="price"
                        className="currency-input"
                        placeholder="0.00"
                        step="any"
                        {...register("price", { required: true })}>
                    </input>
                </div>

                <label>Image URL</label>
                <input 
                    type="url"
                    name="img_url"
                    placeholder="http://"
                    {...register("img_url", { required: true })}>
                </input> 

                <label>Item URL</label>
                <input 
                    type="url"
                    name="url"
                    placeholder="http://"
                    {...register("url", { required: true })}>
                </input> 

                <label>For</label><br></br>
                <select multiple={true}
                    {...register("whichKid")}>
                    <option value="mateo">Mateo</option>
                    <option value="lucas">Lucas</option>
                </select>

                <div className="action-buttons">
                    <Link to="/admin" className="btn btn-primary">&lt; Back</Link>
                    <div>
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button type="reset" className="btn btn-danger" onClick={() => clearErrors()}>Reset</button>                     
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AdminUpdatePage;