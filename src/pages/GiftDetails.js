import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { GiftContext } from '../firebase/GiftProvider';
import GiftProfile from '../components/GiftProfile';


const GiftDetailsPage = () => {
    const params = useParams();
    const giftList = useContext(GiftContext);

    let gift = []; 

    giftList.forEach(g => {
        if (g.id === params.id) {
            gift.push(g);
        }
    });

    return (
        <GiftProfile id={params.id} gift={gift} />
      );
}
export default GiftDetailsPage;