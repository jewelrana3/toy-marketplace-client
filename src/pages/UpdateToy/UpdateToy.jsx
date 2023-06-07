import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
    const update = useLoaderData();
    console.log(update)
    const {_id} = update;


    const handleUpdate=(e)=>{
        e.preventDefault();
        const form= e.target
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updateValue = {price,quantity,description}
        console.log(updateValue)

        fetch(`https://server-assignment-11-two.vercel.app/alltoy/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateValue)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount >0){
                Swal.fire({
                    icon: 'success',
                    title: 'Oops...',
                    text: 'update toy Successfully!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className="text-3xl"></h2>
            <form className="border-2 p-10" onSubmit={handleUpdate}>
                {/* pictureurl  and price row */}
                <div className=" p-3">
                    <div className="form-control my-2 w-2/3 mx-auto">
                        <label className="input-group">
                            <input type="text" name='price' placeholder="price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-2/3 mx-auto">
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Avilable quantity"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            
            
              
                {/* description ber */}
                <div className="form-control w-full">

                    <label className="input-group">
                        <input type="text" name='description' placeholder="Details Description"
                            className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Upadate" className="btn btn-block mt-4" />
            </form>
        </div>
    );
};

export default UpdateToy;