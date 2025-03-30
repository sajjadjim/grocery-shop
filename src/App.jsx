import { Suspense } from "react";
import "./App.css";
import Items from "./components/Items/Items";

function App() {
  const getProducts = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/sajjadjim/JSON-Data-Folder/refs/heads/main/grocery_products"
    );
    return res.json();
  };
  const productItems = getProducts();
  return (
    <>
     
      <div>
        <Suspense fallback={<h1 className="text-2xl text-center mt-50">Products Loading <span className="loading loading-spinner loading-xl"></span></h1>}>
          <Items productItems={productItems}></Items>
        </Suspense>
      </div>
    </>
  );
}

export default App;
