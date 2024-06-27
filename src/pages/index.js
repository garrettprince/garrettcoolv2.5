import { Inter } from "next/font/google";
import Image from "next/image";
import SmallCard from "../components/SmallCard";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [status, setStatus] = useState(true);

  return (
    <main>
      <div
        onClick={() => setStatus(!status)}
        className="mx-auto w-40 text-center bg-black/90 hover:bg-black text-white rounded-xl p-2 px-4 mt-5 transition-all active:scale-[.98] cursor-pointer"
      >
        Change Status
      </div>
      <div className="mt-20">
        <SmallCard status={status} setStatus={setStatus} />
      </div>
    </main>
  );
}
