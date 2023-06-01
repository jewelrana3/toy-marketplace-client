
import ShopCategory from '../../../components/ShopCategory/ShopCategory';

const ShopTab = ({items}) => {
    return (
        <div className="grid sm:grid-cols-3 gap-10 mt-20 mb-10">
        {
            items.map(item => <ShopCategory
                key={item._id}
                item={item}
            ></ShopCategory>)
        }
    </div>
    );
};

export default ShopTab;