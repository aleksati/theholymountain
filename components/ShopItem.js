import Dropdown from "./Dropdown";
import MySlideshow from "./MySlideshow";
// import MyImage from "./MyImage";

const ShopItem = ({ shopItem, onQuantityChange, onSizeChange }) => (
  <div className="m-2 p-2 border border-secondary-skin-light dark:border-secondary-skin-dark">
    <MySlideshow
      imgs={[
        `shop/${shopItem.key}-shop-1.png`,
        `shop/${shopItem.key}-shop-2.png`,
      ]}
    />
    {/* <MyImage
      src={`${shopItem.key}-shop.png`}
      alt={shopItem.title}
      layout="responsive"
      // isExpandable={true}
    /> */}
    <div className="space-y-2 pt-2">
      <div>
        <p className="">{shopItem.title.toUpperCase()}</p>
        <div className="flex items-center space-x-2">
          <p className="text-sm">{shopItem.description}</p>
          {shopItem.shopSizes ? (
            <Dropdown
              items={shopItem.shopSizes}
              onSelected={onSizeChange}
              itemKey={shopItem.key}
              type="Size"
            />
          ) : null}
        </div>
        <p>{shopItem.price} kr</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-secondary">Add to cart:</p>
        <div className="flex space-x-1">
          <button
            className={`px-4 items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
            onClick={() => {
              onQuantityChange({
                key: shopItem.key,
                newUserQuantity:
                  Number(shopItem.userQuantity) > 0
                    ? Number(shopItem.userQuantity) - 1
                    : 0,
              });
            }}>
            -
          </button>
          <input
            min="0"
            type="number"
            className="w-12 p-2 text-center dark:bg-primary-dark bg-primary-light text-primary-light dark:text-primary-dark border-secondary-skin-light dark:border-secondary-skin-dark"
            value={Number(shopItem.userQuantity)}
            onChange={(event) =>
              onQuantityChange({
                key: shopItem.key,
                newUserQuantity: event.target.value,
              })
            }
          />
          <button
            className={`px-4 items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
            onClick={() => {
              onQuantityChange({
                key: shopItem.key,
                newUserQuantity: Number(shopItem.userQuantity) + 1,
              });
            }}>
            +
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ShopItem;
