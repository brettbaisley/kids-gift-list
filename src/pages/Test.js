import React, { useContext } from 'react';
import { GiftContext } from '../firebase/GiftProvider';


const TestPage = () => {
    const giftList = useContext(GiftContext);

    console.log(giftList);


    return (
        <div>
            <h1>Test.js Page</h1>
            <p>{JSON.stringify(giftList)}</p>
        </div>
    )
}
export default TestPage;