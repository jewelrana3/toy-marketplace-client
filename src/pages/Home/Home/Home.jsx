// import ShopGallery from "../../../components/ShopGallery/ShopGallery";
import Banner from "../Banner/Banner";
import OurClient from "../OurClient/OurClient";
import ShopPage from "../ShopPage/ShopPage";

// import ShopPage from "../ShopPage/ShopPage";
import ShowPage from "../ShowPage/ShowPage";
import ToyGallery from "../ToyGallery/ToyGallery";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <ShowPage></ShowPage>
           <ToyGallery></ToyGallery>
           <ShopPage></ShopPage>
            <OurClient></OurClient>
        </div>
    );
};

export default Home;