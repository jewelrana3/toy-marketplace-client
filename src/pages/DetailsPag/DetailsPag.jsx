import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const DetailsPag = () => {
    const details = useLoaderData()
    const {user} = useContext(AuthContext)
    const {photo_url,_id,title,price,category,quantity} = details;

    const handleBookDetails=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        // const photo = form.photo.value;

        const details = {
            name,
            email,
            date,
            photo_url,
            service:title,
            service_id:_id,
            price:price,
            category,
            quantity
           
           
        }
        console.log(details)

        fetch('http://localhost:4000/alltoys',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(details)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
 }
    return (
        <div className="mb-8 bg-amber-200 p-2">
            <h2 className="text-center text-3xl font-bold">Book now :{title}</h2>
            <form onSubmit={handleBookDetails}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.name} name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email'  placeholder="email" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" defaultValue={photo_url} name='photo' placeholder="photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text"  name='category' placeholder="Sub-category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered" />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Book Now" />
                </div>
            </form>
        </div>


    );
};

export default DetailsPag;