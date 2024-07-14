import { Button } from "@/components/ui/button";
import Image from "next/image";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Footer from "./_components/Footer";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();

  const categoryList = await GlobalApi.getCategoryList();

  const productList =await GlobalApi.getAllProducts();
  
  return (
    <div className="p-5 md:p-10 px-16">
      {/* Sliders */}
      <Slider sliderList={sliderList}/>

      {/* Category List */}
      <CategoryList categoryList={categoryList}/>

      {/* Product List */}
      <ProductList productList={productList}/>

      {/* Banner */}
      <Image src='/temp5.png' width={1920} height={680}
      alt="banner"
      className="w-full h-fit md:h-[400px]  mt-10 border rounded-2xl object-contain md:object-cover"
      />

      {/* Footer */}
      <Footer/>
    </div>
  );
}
