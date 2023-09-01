import { useState } from "react";
import { useForm } from "react-hook-form";
// import Header from "./Header";


const Contact = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <>
            <h2 className="bg-black pt-36 pb-6 text-3xl text-white text-center">Contact </h2>
            <div className="contact-form bg-black pb-24  flex items-center justify-center">
                <form className="border p-8" onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                   
                        <div className="input-header sm:flex gap-8">
                            <input className="ptag p-2 px-14 rounded" {...register("firstName")} placeholder="  First name" /><br />
                            <input className="ptag p-2 px-14 rounded" {...register("firstName")} placeholder="   Last name" /><br />
                        </div>
                        <div className="input-header sm:flex gap-8 mt-4">
                            <input className="ptag p-2 px-14 rounded" {...register("firstName")} placeholder="  Email" /><br />
                            <input className="ptag p-2 px-14 rounded" {...register("firstName")} placeholder="  Phone" /><br />
                        </div>

                        <div className="mt-4">
                            <textarea className="rounded py-2 mr-7 resize-none" style={{ }} {...register("aboutYou")} placeholder="  Your Message" />
                        </div>
                        <p>{data}</p>
                        <input className="submit text-white  px-8 py-2 mt-8 rounded-sm border" type="submit" />
                    
                </form>
            </div>
        </>
    );
}


export default Contact;