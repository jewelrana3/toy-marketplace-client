import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopPage = () => {

    // const math = menu.filter(item => item.category === 'dessert')
 
    // const science = menu.filter(item => item.category === 'pizza')
    // const languses = menu.filter(item => item.category === 'salad')
    // const engineer = menu.filter(item => item.category === 'soup')
    return (
        <div className="text-center">
            <h2 className="text-5xl ">Shop By Category</h2>
            <p className="mt-5">Welcome to our Educational Toy Shop: Explore and Learn!</p>
            <Tabs>
                <TabList >
                    <Tab >Math Toys</Tab>
                    <Tab>Science Toys</Tab>
                    <Tab>Languges Toys</Tab>
                    <Tab>Engenieer Toys</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopPage;