

const AllToysRow = ({ allToy }) => {
    const { picture, price, category, quantity
        , sellername,  } = allToy;
    return (
       
           
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={picture} alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">Hart Hagerty</div>
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
                        <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                </tr>
           
      
    );
};

export default AllToysRow;