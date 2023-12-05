import type { MetaFunction } from "@remix-run/node";
import { Welcome } from "~/components/Welcome/Welcome";
import { Header } from "~/components/Header/Header";
import { Footer } from "~/components/Footer/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Frozen Samosas, Fish fingers, and Chicken fingers" },
    { name: "description", content: "Elevate your culinary experience with our high-quality, ready-to-cook treats that bring convenience to your kitchen." },
  ];
};

export default function Index() {
  return (
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}
