import show from '../../../assets/show/show.webp'
import './ShowPage.css'
const ShowPage = () => {
    return (
        <div className='showpage mt-40 lg:flex ' >
            <div className='min-w-400 mx-auto w-1/2' data-aos="fade-right" data-aos-duration="3000">
                <img src={show} alt="" />
            </div>
            <div className='mt-40 w-1/2 min-w-400 mx-auto' data-aos="fade-left" data-aos-duration="3000">
                <h2 className='font-serif text-3xl'>What We Do</h2>
                <h3 className='min-w-400 text-3xl text-orange-400 lg:text-7xl'>We help learn for kids</h3>
                <p className='text-2xl'>Fun, educational activities for every
                    occasion with premium toys and snacks.
                    Learn more about our services!</p>
            </div>
        </div>
    );
};

export default ShowPage;