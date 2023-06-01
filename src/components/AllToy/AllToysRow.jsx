import { Link } from "react-router-dom";


const AllToysRow = ({ allToy }) => {
    const { _id,picture, price, category, quantity
        , sellername,toyname  } = allToy;
    return (
       
           
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={picture} alt="" />
                                </div>
                            </div>
                            <div>
                                <div  className="font-bold">{toyname}</div>
                                <div className="text-sm opacity-50">{category}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                      Price: $ {price}
                        <br />
                        <span className="badge badge-ghost badge-sm">Avilable Quantity: $ {quantity}</span>
                    </td>
                    <td>{sellername}</td>
                    <th>
                       <Link to={`/details/${_id}`}> <button className="btn btn-ghost btn-xs">Details</button></Link>
                    </th>
                </tr>
           
      
    );
};

export default AllToysRow;