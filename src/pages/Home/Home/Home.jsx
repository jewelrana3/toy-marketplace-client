// import ShopGallery from "../../../components/ShopGallery/ShopGallery";
import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import OurClient from "../OurClient/OurClient";
import ShopPage from "../ShopPage/ShopPage";

// import ShopPage from "../ShopPage/ShopPage";
import ShowPage from "../ShowPage/ShowPage";
import ToyGallery from "../ToyGallery/ToyGallery";
import Shop from "../../Shop/Shop";
import Sales from "../../Sales/Sales";
import Contact from "../../Contact/Contact";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <Banner></Banner>
            <ShowPage></ShowPage>
            <ToyGallery></ToyGallery>
            <Shop></Shop>
            <Sales></Sales>
            <ShopPage></ShopPage>
            <OurClient></OurClient>
            <Contact></Contact>
        </div>
    );
};

export default Home;