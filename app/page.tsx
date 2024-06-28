import HeaderComponent from "@/components/header";
import PortafolioComponent from "@/components/portafolio";
import { TransitionComponent } from "@/components/transition";

export default function Home() {
  return (
    <main>
      <TransitionComponent />

      <div className="min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <HeaderComponent />

        <PortafolioComponent />
      </div>

      <p className="font-bold text-tercery text-center p-5">Yeyo-san © 2024 - All rights reserved</p>
    </main>
  );
}
