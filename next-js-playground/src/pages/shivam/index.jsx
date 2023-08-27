import Link from "next/link";
import { useState } from "react";
import { ItemProvider, item } from "../context/context";

export default function Shivam() {
  const [product, setProduct] = useState([]);

  const onBtnOneClicked = () => {
    console.log("Button One Clicked from shivam");
  };

  const onBtnTwoClicked = () => {
    console.log("Button Two Clicked from shivam");
  };

  const onBtnThreeClicked = () => {
    console.log("Button Three Clicked from shivam");
  };

  return (
    <ItemProvider value={{ product, setProduct }}>
      <div>
        <p>This is Shivam Component</p>
        <button onClick={onBtnOneClicked}>button1</button>
        <button onClick={onBtnTwoClicked}>button1</button>

        <button onClick={onBtnThreeClicked}>button1</button>
        <Link href={`/shivam/product`}>
          <div>View Products</div>
        </Link>
      </div>
    </ItemProvider>
  );
}
