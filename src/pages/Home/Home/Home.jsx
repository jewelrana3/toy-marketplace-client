// import ShopGallery from "../../../components/ShopGallery/ShopGallery";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import OurClient from "../OurClient/OurClient";
import ShopPage from "../ShopPage/ShopPage";

// import ShopPage from "../ShopPage/ShopPage";
import ShowPage from "../ShowPage/ShowPage";
import ToyGallery from "../ToyGallery/ToyGallery";
import Shop from "../../Shop/Shop";
// import Contact from "../../Contact/Contact";
import Sales from "../../Sales/Sales";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Toy Market - Home Page</title>
            </Helmet>
            <div>

                <Banner></Banner>
                <ShowPage></ShowPage>
                <ToyGallery></ToyGallery>
                <Shop></Shop>
                <Sales></Sales>
                <ShopPage></ShopPage>
                <OurClient></OurClient>
                {/* <Contact></Contact> */}
            </div>
        </>
    );
};

export default Home;