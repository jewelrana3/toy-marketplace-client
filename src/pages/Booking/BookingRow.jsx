import { Link } from "react-router-dom";


const BookingRow = ({booking,handleDelete,handleConfrim}) => {
    const { _id, service, price,quantity,category, status } = booking;

   

     return (

        <tr>
            <th>
            <td>{service}</td>
                
            </th>
            <td>{quantity}</td>
            <td>{category}</td>
            <td>$:{price}</td>
            {/* <td>{date}</td> */}
            <th>
                <Link><button>View Details</button></Link>
                {/* {
                    status ? <span className=" font-bold">View Details</span> : 
                    <button onClick={()=>handleConfrim(_id)} className="btn btn-ghost btn-xs">Please Add</button>} */}
            </th>
        </tr>
    );
};

export default BookingRow;