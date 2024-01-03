import MySlideshow from "./MySlideshow";
// import MyImage from "./MyImage";

const ShopItem = ({ shopItem, onQuantityChange }) => (
  <div className="p-4">
    <MySlideshow
      imgs={[
        `shop/${shopItem.key}-shop-1.jpg`,
        `shop/${shopItem.key}-shop-2.jpg`,
      ]}
    />
    {/* <MyImage
      src={`${shopItem.key}-shop.png`}
      alt={shopItem.title}
      layout="responsive"
      // isExpandable={true}
    /> */}
    <div className="space-y-2">
      <div>
        <p>{shopItem.price} kr</p>
        <p>{shopItem.title}</p>
        <p className="text-sm text-secondary">{shopItem.description}</p>
      </div>
      <div className="space-y-1">
        <p className="text-sm text-secondary">Add to cart</p>
        <div className="flex space-x-1">
          <button
            className={`px-4 items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
            onClick={() => {
              onQuantityChange({
                key: shopItem.key,
                newQuantity:
                  Number(shopItem.quantity) > 0
                    ? Number(shopItem.quantity) - 1
                    : 0,
              });
            }}>
            -
          </button>
          <input
            min="0"
            type="number"
            className="w-12 p-2 text-center dark:bg-primary-dark bg-primary-light text-primary-light dark:text-primary-dark border-secondary-skin-light dark:border-secondary-skin-dark"
            value={Number(shopItem.quantity)}
            onChange={(event) =>
              onQuantityChange({
                key: shopItem.key,
                newQuantity: event.target.value,
              })
            }
          />
          <button
            className={`px-4 items-center border justify-center hover:border-secondary hover:dark:border-secondary transistion ease-in-out duration-200 border-secondary-skin-light dark:border-secondary-skin-dark`}
            onClick={() => {
              onQuantityChange({
                key: shopItem.key,
                newQuantity: Number(shopItem.quantity) + 1,
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
