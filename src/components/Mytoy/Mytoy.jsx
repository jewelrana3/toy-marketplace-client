// import { useLoaderData } from "react-router-dom";
// import useShop from "../../hooks/useShop";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import MytoyTab from "./MytoyTab";

const Mytoy = () => {
    const [mytoy, setMytoy] = useState([])
    const [loading,setLoading] = useState(false)
    
    const { user } = useContext(AuthContext)
    console.log(user)
    const uri = `http://localhost:4000/alltoy?email=${user?.email}`
    useEffect(() => {
        // if(!user?.email){
        //     return;
        // }
       
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setMytoy(data)
                console.log(data)
            })
    }, [uri])
    if(loading){
        return <p>ggggg</p>
    }

    return (
        <div className="p-20">
            <h2>Lenght:{mytoy.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Remove itm</th>
                            <th>Name & Category</th>
                            <th>Name & Category</th>
                            <th>User email</th>
                            <th>Upddate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoy.map(toy => <MytoyTab
                                key={toy._id}
                                toy={toy}
                                mytoy={mytoy}
                                setMytoy={setMytoy}
                                loading={loading}
                                setLoading={setLoading}
                            ></MytoyTab>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoy;