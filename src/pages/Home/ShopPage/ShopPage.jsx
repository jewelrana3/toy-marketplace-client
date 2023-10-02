import useShop from "../../../hooks/useShop";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopTab from "./ShopTab";


const ShopPage = () => {
    const [shop] = useShop();

    const math = shop.filter(item => item.category === 'Math')
    const science = shop.filter(item => item.category === 'Science')
    const languses = shop.filter(item => item.category === 'Languses')
    const engineer = shop.filter(item => item.category === 'Engineer')
    return (
        <div className="text-center">
            <h2 className="text-4xl ">Shop By Category</h2>
            <p className="mt-5 mb-10">Welcome to our Educational Toy Shop: Explore and Learn!!</p>
            <Tabs>
                <TabList >
                    <Tab >Math Toys</Tab>
                    <Tab>Science Toys</Tab>
                    <Tab>Languges Toys</Tab>
                    <Tab>Engenieer Toys</Tab>
                </TabList>

                <TabPanel >
                    <ShopTab className="category" items={math}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={science}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={languses}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab items={engineer}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopPage;