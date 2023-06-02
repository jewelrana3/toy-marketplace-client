// import { useLoaderData } from "react-router-dom";
// import useShop from "../../hooks/useShop";
import { createContext, useEffect, useState } from "react";
import { AuthContext } from '../../provider/AuthProvider';
import MytoyTab from "./MytoyTab";

const Mytoy = () => {
    const [mytoy, setMytoy] = useState([])
    const { user } = createContext(AuthContext)
 
    const uri = `http://localhost:4000/alltoy?email=${user?.email}`
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setMytoy(data)
                console.log(data)
            })
    }, [])
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
                                setMyToy={setMytoy}
                            ></MytoyTab>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mytoy;