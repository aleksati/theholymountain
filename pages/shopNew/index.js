import LayoutPage from "../../layouts/LayoutPage";
import Grid from "../../components/Grid.js";
import ShopCard from "../../components/ShopCard";
import { SHOP_ITEMS } from "../../config/index.js";

const pageMeta = {
  title: "The Holy Mountain | shop",
};

export default function ShopNew() {
  return (
    <LayoutPage pageMeta={pageMeta}>
      <h1 className="text-size-header md:text-size-header-big leading-none">SHOP</h1>
      <Grid className="gap-y-4">
        {SHOP_ITEMS.map((shopItem) => (
          <ShopCard key={shopItem.key} shopItem={shopItem} />
        ))}
      </Grid>
    </LayoutPage>
  );
}

export const getStaticProps = async () => ({
  props: {},
});
