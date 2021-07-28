import React, {useContext} from 'react';
import { GiftContext } from '../firebase/GiftProvider';
import AdminGiftGallery from '../components/AdminGiftGallery';
import AdminAddButton from '../components/AdminAddButton';


const AdminPage = () => {
    const giftList = useContext(GiftContext);

    return (
        <>
            {<AdminGiftGallery data={giftList} /> }
            <AdminAddButton />
        </>
    )
}
export default AdminPage;





//     const deleteGift = async (id) => {
//         const giftRef = firestore.collection('gifts').doc(id);
//         await giftRef.delete();
//     }


//     return (
//         <>
//             <div className="admin-gift-container">
//             <h2>Add / Update / Delete Gifts</h2>
//                 <Link to="/admin/add" className="btn btn-primary add">+</Link>
//                 {
//                     giftList.map(gift => (
//                         <div key={gift.id} className="admin-gift-list">
//                             <img src={gift.img_url} alt={gift.title} style={{width: '100px', height: 'auto'}} />
//                             <p>{gift.brand}</p>
//                             <p>{gift.title}</p>
//                             <p>{gift.description.substring(0,150)}...</p>
//                             <p>${gift.price}</p>
//                             <div>
//                                 <Link className="btn btn-primary" to={`/admin/update/${gift.id}`}>Update</Link>
//                                 <button className="btn btn-danger" type="button" onClick={() => deleteGift(gift.id)}>Delete</button>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }
// export default AdminPage;