import { useLoaderData } from "react-router-dom";


const DetailsPag = () => {
    const details = useLoaderData()

    const handleBookDetails=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const photo = form.photo.value;

        const details = {
            name,email,date,photo,
        }
        console.log(details)

        fetch('http://localhost:4000/bookings',{
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
        <div>
            <h2>Book now baby:{details.name}</h2>
            <form onSubmit={handleBookDetails}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' placeholder="password" className="input input-bordered" />

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