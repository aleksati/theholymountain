import { useState } from "react";
import Image from "next/image";
import LayoutPage from "../../layouts/LayoutPage";
import MyImage from "../../components/MyImage";
import TextCard from "../../components/TextCard";
import { SHOP_ITEMS } from "../../config";
import { useCart } from "../../context/CartContext";

const shopItem = SHOP_ITEMS.find(({ key }) => key === "finitecassette");

const FiniteCassette = ({ shopItem }) => {
  const imageNames = [1, 2].map((imageNumber) => `${shopItem.key}-shop-${imageNumber}.png`);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { cart, setItemQuantity } = useCart();
  const selectedImage = imageNames[selectedImageIndex];
  const cartItem = cart.find((item) => item.key === shopItem.key);

  const handleAddToCart = () => {
    setItemQuantity(shopItem, (cartItem?.quantity || 0) + 1);
  };

  return (
    <LayoutPage pageMeta={{ title: `The Holy Mountain | ${shopItem.title}` }} containerSize="xl">
      <div className="flex flex-col space-y-12 md:space-y-14">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col space-y-4">
            <MyImage
              src={`shop/${selectedImage}`}
              alt={`${shopItem.title} view ${selectedImageIndex + 1}`}
              width={1000}
              height={1000}
              layout="responsive"
              objectFit="contain"
            />
            <div className="flex justify-center gap-2">
              {imageNames.map((imageName, index) => (
                <button
                  key={imageName}
                  type="button"
                  aria-label={`View ${shopItem.title}, image ${index + 1}`}
                  aria-pressed={selectedImageIndex === index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative h-24 w-24 overflow-hidden rounded-md border transition-colors duration-300 ${
                    selectedImageIndex === index
                      ? "border-secondary"
                      : "border-secondary-skin-dark hover:border-secondary"
                  }`}>
                  <Image src={`/img/shop/${imageName}`} alt="" layout="fill" objectFit="contain" unoptimized />
                </button>
              ))}
            </div>
          </div>
          <TextCard props={{ className: "bg-secondary-dark rounded-md border border-secondary-skin-dark p-6" }}>
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-size-header md:text-size-header-big leading-none uppercase">{shopItem.title}</h1>
              <p className="text-size-title">kr {shopItem.price}</p>
              <p className="text-size-regular">Limited edition cassettes of the original soundtrack made for the post-apocalyptic short film FINITE</p>
              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-full bg-red-600 px-8 py-3 font-bold tracking-widest text-white transition-colors duration-300 hover:bg-red-700">
                ADD TO CART
              </button>
            </div>
          </TextCard>
        </div>
      </div>
    </LayoutPage>
  );
};

export default FiniteCassette;

export const getStaticProps = async () => {
  if (!shopItem) return { notFound: true };

  return {
    props: {
      shopItem,
    },
  };
};
