
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';

const AllToy = () => {

  const allToys   = useLoaderData();
    return (
        <div className='p-20'>
            <h2>length:{allToys.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            NAME & CATEGORY
                            </th>
                            <th>PRICE & AVAILABLE QUANTITY</th>
                            <th>SELLER NAME</th>
                            <th>DETAILS</th>
                           
                        </tr>
                    </thead>
                    
                       <tbody>
                       {
                            allToys.map(allToy=><AllToysRow
                            key={allToy._id}
                            allToy={allToy}
                            ></AllToysRow>)
                       }
                   
                       </tbody>
                  
                </table>
            </div>
        </div>
    );
};

export default AllToy;