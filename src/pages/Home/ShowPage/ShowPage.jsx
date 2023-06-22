import show from '../../../assets/show/show.webp'
import './ShowPage.css'
const ShowPage = () => {
    return (
        <div className='showpage mt-40 flex ' >
            <div className='image w-1/2' data-aos="fade-right" data-aos-duration="3000">
                <img src={show} alt="" />
            </div>
            <div className='mt-40 w-1/2' data-aos="fade-left" data-aos-duration="3000">
                <h2 className='font-serif text-3xl'>What We Do</h2>
                <h3 className='text-orange-400 text-7xl'>We help learn for kids</h3>
                <p className='text-2xl'>Fun, educational activities for every
                    occasion with premium toys and snacks.
                    Learn more about our services!</p>
            </div>
        </div>
    );
};

export default ShowPage;