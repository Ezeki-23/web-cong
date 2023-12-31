import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="Sobre nosotros" />
      <Item Links={RESOURCES} title="Departamentos" />
      <Item Links={COMPANY} title="Materiales" />
      <Item Links={SUPPORT} title="Otras iglesias en Santa Fe" />
    </div>
  );
};

export default ItemsContainer;
