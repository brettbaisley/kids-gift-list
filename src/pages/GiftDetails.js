import React from 'react';
import { useParams } from 'react-router-dom';

const GiftDetailsPage = () => {

    const params = useParams();


    return (
        <h2>This page will list the details of the {params.id} gift.</h2>
    )
}
export default GiftDetailsPage;