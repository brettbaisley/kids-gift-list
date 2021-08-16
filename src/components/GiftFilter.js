import React, {useContext, useEffect, useState} from "react";
import { GiftContext } from '../firebase/GiftProvider';
import GiftGallery from '../components/GiftGallery';

const GiftFilter = () => {
    const giftList = useContext(GiftContext);
    const [kidFilter, setKidFilter] = useState('');
    const [filteredGiftList, setFilteredGiftList] = useState(giftList);

    useEffect( () => {
        if (kidFilter !== '') {
            const filteredList = giftList.filter(gift => {
                return gift.whichKid.includes(kidFilter);
            });
            setFilteredGiftList(filteredList);
        } else {
            setFilteredGiftList(giftList);
        }

    }, [kidFilter, giftList]);

    return (
        <>
            <div className='gifts-filter'>
                <span>Show Gifts For: </span>
                <select onChange={(e) => setKidFilter(e.target.value)}>
                    <option defaultValue key='both' value=''>Both</option>
                    <option key='lucas' value='lucas'>Lucas</option>
                    <option key='matro' value='mateo'>Mateo</option>
                </select>
            </div>
            <GiftGallery data={filteredGiftList}/> 
        </>
    )
}
export default GiftFilter;