import { BsArrowRight } from 'react-icons/bs';

const Shop = () => {
    return (
        <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-20 pb-9">
            <div className="card glass">
                <figure><img src="https://i.ibb.co/TvvWn74/dinu-j-nair-Wx-Rkua9nxf4-unsplash.jpg" alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-bold text-blue-600">Life hack</h2>
                    <hr />
                    <h3 className="text-center font-bold text-3xl">Cearoews</h3>
                    <p className="text-center">My favourite toys are my dolls. I have many other toys, but I love playing with my dolls the most. I have many dolls gifted to me by my parents and family. My favourite doll is a cute little Barbie</p>
                    <div className='flex justify-between'>
                        <img className="w-12 border border-indigo-600 h-12" style={{ borderRadius: '50%' }} src="https://i.ibb.co/TvvWn74/dinu-j-nair-Wx-Rkua9nxf4-unsplash.jpg" alt="" />
                        <h3 className='mt-5 '><BsArrowRight /></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;