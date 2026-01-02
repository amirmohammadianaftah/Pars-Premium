import Image from "next/image";
import Pics from "../../components/Pics";
import AnotherStuff from "../../components/AnotherStuff";
import BestSells from "../../components/BestSells";
import UpFooter from "../../components/UpFooter";
import Request from "../../components/Request";
import Header from "../../components/Header";
import Product1 from "../../components/Product1";
import Newest from "../../components/Newest";

export default function Home() {
  return (
    <>
      <Header />
      <Product1 />
      <BestSells />
      <Newest />
      <AnotherStuff />
      <Pics />
      <Request />
      <UpFooter />
    </>
  );
}
