import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${router.query.id}`)
      .then((data) => data.json())
      .then((data) => setDetails(data))
      .catch((err) => console.log(err));
  }, [router.query.id]);
  return (
    <>
      <h1>Details : {router.query.id}</h1>
      <div>{details.title}</div>
      <div>{details.description}</div>
      <div>{details.price}</div>
    </>
  );
}
