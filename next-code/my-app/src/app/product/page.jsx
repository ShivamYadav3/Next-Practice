async function okk() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const product = async () => {
  let product = await okk();
  console.log(product);
  return (
    <>
      <div>product list</div>
      {product.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })}
    </>
  );
};
export default product;
