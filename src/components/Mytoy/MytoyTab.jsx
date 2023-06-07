import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MytoyTab = ({toy,mytoy,setMytoy}) => {
  
  const [loading,setLoading] = useState(false)
    const { _id, price, category, quantity
        ,toyname ,email,picture } = toy;

    const handleDelete=_id=>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://server-assignment-11-two.vercel.app/alltoy/${_id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    setLoading(true)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your toy has been deleted.',
                            'success'
                          )
                          setLoading(false)
                          const remaing = mytoy.filter(toy => toy._id !== _id)
                          setMytoy(remaing);
                    }
                })
             
            }
          })
    }
    if(loading){
        return <p>loading</p>
    }
  
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyname}</div>
                        <div className="text-sm opacity-50">{category}</div>
                    </div>
                </div>
            </td>
            <td>
              Price: ${price}
                <br />
                <span className="badge badge-ghost badge-sm">Avilable quantity: {quantity}</span>
            </td>
            <td>{email}</td>
            <th>
                <Link to={`/updateToy/${_id}`}><button  className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
        </tr>
    );
};

export default MytoyTab;