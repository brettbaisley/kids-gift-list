import React from "react";
import { markPurchased, markUnpurchased } from '../firebase/gift';
import { useSession } from '../firebase/UserProvider';

const PurchaseButton = ( {id, isPurchased, purchasedBy} ) => {
    const { user } = useSession();

    if (isPurchased && purchasedBy === user.uid) {
        return (
            <button type="button" className="btn btn-primary" onClick={ () => { markUnpurchased({id: id})}}>Mark Unpurchased</button>
        )
    }
    if (isPurchased) {
        return (
            <button disabled type="button" className="btn btn-disabled" onClick={ () => { markUnpurchased({id: id})}}>Mark Unpurchased</button>
        )
    }
    return (
        <button type="button" className="btn btn-primary" onClick={() => {markPurchased({id: id, purchasedBy: user.uid})}}>Mark Purchased</button>
    )
}

export default PurchaseButton;