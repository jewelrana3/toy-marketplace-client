import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingRow from "./BookingRow";


const Booking = () => {
    const {user} = useContext(AuthContext)
    const [books,setBooks] = useState([])

   const url = `https://server-assignment-11-jlaeos6ed-jewelrana3.vercel.app/alltoys`
   useEffect(()=>{
    fetch(url)
    .then(res =>res.json())
    .then(data =>setBooks(data))
   },[url]);

   const handleDelete=id=>{
    const prossed = confirm('Are you sure delete confrim')
    if(prossed){
        fetch(`https://server-assignment-11-jlaeos6ed-jewelrana3.vercel.app/alltoys/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaing = books.filter(booking => booking._id !== id)
            setBooks(remaing)
            
        })
    }
} 

const handleConfrim=id=>{
    fetch(`https://server-assignment-11-jlaeos6ed-jewelrana3.vercel.app/alltoys/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.modifiedCount>0){
            const remaing = books.filter(booking => booking._id !== id)
            const update = books.find(booking=> booking._id === id)
            update.status = 'confirm'
            const newUpdate = [update,...remaing]
            setBooks(newUpdate)
        }
    })
}


    return (
        <div>
            <h2 className="text-3xl">bookings:{books.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Toy Name</th>
                            {/* <th>Service</th> */}
                            {/* <th>Date</th> */}
                            <th>Quantity</th>
                            <th>Sub_Catacogy</th>
                            <th>Price</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                               handleDelete={handleDelete}
                               handleConfrim={handleConfrim}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;