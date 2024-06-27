import React from "react";

export default function SmallCard({ status, setStatus }) {
  return (
    <main
      className={`transition-all mx-6 ${
        status === true
          ? "bg-white rounded-xl shadow-sm "
          : " border border-black bg-blue-500"
      }`}
    >
      <div
        className={`transition-all ${
          status === true
            ? "h-72 bg-gray-200 rounded-tl-xl rounded-tr-xl rounded-bl-4 rounded-br-4"
            : "h-72 bg-gray-200 border-b border-black "
        }`}
      ></div>
      <section className="p-3 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Title</h1>
          <p>Description</p>
        </div>
        <div
          onClick={() => setStatus(!status)}
          className={`transition-all cursor-pointer ${
            status === true
              ? " bg-black text-white rounded-xl px-6 flex items-center justify-center h-8"
              : " bg-black text-white flex items-center justify-center h-10 px-6"
          }`}
        >
          Button
        </div>
      </section>
    </main>
  );
}
