import React, {useContext} from 'react';
import { GiftContext } from '../firebase/GiftProvider';
import GiftGallery from '../components/GiftGallery';

// import { firestore } from '../firebase/config';
// import Loader from '../components/Loader';

const GiftsListPage = () => {
    const giftList = useContext(GiftContext);

    return (
        <>
            {<GiftGallery data={giftList} /> }
        </>
    )
}
export default GiftsListPage;