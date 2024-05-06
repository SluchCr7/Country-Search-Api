import Image from "next/image";
import Nav from "./components/Nav";
import Options from "./components/Options";
import CardsList from "./components/CardsList";

export default function Home() {
  return (

    <div className= "Progame">
      <Options />
      <CardsList />
    </div>
  );
}
