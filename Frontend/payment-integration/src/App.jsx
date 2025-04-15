import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
      {/* Product card */}
      <ProductCard/>
    </section>
  );
}

export default App;