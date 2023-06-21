import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";


const AddBrainToy = () => {

    const { user } = useContext(AuthContext)
    const handleAddCoffee = event => {
        event.preventDefault()

        const form = event.target;

        const picture = form.picture.value;
        const price = form.price.value;
        const toyname = form.toyname.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const email = form.email.value;
        const sellername = form.sellername.value;
        const description = form.description.value;

        const newItem = {
            picture, price, toyname, category, rating, quantity, email
            , sellername, description
        }
        console.log(newItem)

        fetch('https://server-assignment-11-two.vercel.app/alltoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Oops...',
                        text: 'Added Successfully!',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })
    }

    return (
        <>
            <Helmet>
                <title>Add Toys</title>
            </Helmet>
            <div className="bg-[#F4F3F0] p-24 ">
                <h2 className="text-3xl">How Spaer Coffee House</h2>
                <form className="border-2 p-10" onSubmit={handleAddCoffee}>
                    {/* pictureurl  and price row */}
                    <div className="flex p-3">
                        <div className="form-control md:w-1/2">
                            <label className="input-group">
                                <input type="text" name='picture' placeholder="Picture Url of the toy"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="input-group">
                                <input type="text" name='price' placeholder="Price"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* toy name and rating row */}
                    <div className="flex p-3">
                        <div className="form-control md:w-1/2">

                            <label className="input-group">
                                <input type="text" name='toyname' placeholder="Toy Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label className="input-group">
                                <input type="text" name='rating' placeholder="Rating"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* seller name and avilabile quantity row */}
                    <div className="flex p-3">
                        <div className="form-control md:w-1/2">

                            <label className="input-group">
                                <input type="text" name='sellername' placeholder="Seller Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label className="input-group">
                                <input type="text" name='quantity' placeholder="Avilable Quantity"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/*seller email and select catecogy  */}
                    <div className="flex p-3">
                        <div className="form-control md:w-1/2">

                            <label className="input-group">
                                <input type="text" defaultValue={user?.email} name='email' placeholder="Seller Email"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">

                            <label className="input-group">
                                <input type="text" name='category' placeholder="Select Category"
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

                    <input type="submit" value="Add A Toy" className="btn btn-block mt-4" />
                </form>
            </div>
        </>
    );
};

export default AddBrainToy;