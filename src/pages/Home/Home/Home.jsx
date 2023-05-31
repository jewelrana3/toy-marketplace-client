// import ShopGallery from "../../../components/ShopGallery/ShopGallery";
import Banner from "../Banner/Banner";
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
           {/* <ShopGallery></ShopGallery> */}
        </div>
    );
};

export default Home;