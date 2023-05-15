import { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";

const Resturant = () => {
  const [menuData, setmenuData] = useState(Menu);

  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};
export default Resturant;