
import './OurClient.css'
const OurClient = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000">
            <h2 className="min-w-400 text-center mb-6 text-2xl">OUR CLIENTS</h2>
            <div className="min-w-400 lg:flex text-center">
                <div className=" lg:w-1/2">
                    <h1 className="min-w-400 text-5xl lg:text-7xl font-serif">Meet our top<br></br>
                        clients & partners</h1>
                </div>
                <div className="lg:w-1/2 text-zinc-400 p-10">
                    <p className="text-left">We appreciate your trust greatly. Meet our regular clients & partners who choose us as their kids’ products supplier, and whom we are happy to work with.
                        To become an affiliate, please subscribe and/or contact our sales team for further instructions. Welcome to Our Store!</p>
                </div>

            </div>

            <div className="mt-32 mb-12">
                <h2 className="text-center text-3xl mb-12">Our Sponer</h2>
                <div className=" flex justify-center gap-20">
                    <div className='  lg:flex ml-2'>
                        <div className='flex gap-16 ml-8'>
                            <img className='py-8' src={'https://i.ibb.co/w0yKNh1/cl4-copyright.webp'} alt="" />
                            <img className='py-8 px-14' src={'https://i.ibb.co/BfT6XGF/cl1-copyright.webp'} alt="" />
                        </div>
                        <div className='flex ml-8'>
                            <img className='py-8' src={'https://i.ibb.co/YbbmccR/cl3-copyright.webp'} alt="" />
                            <img className='py-8 px-28' src={'https://i.ibb.co/6msLG4K/cl5-copyright.webp'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClient;