import { useState } from "react";

function Colors() {
  const colors = [
   {
  id: "azul",
  name: "Titânio Azul",
  image: "./img/iphone-blue.jpg",
  colorsclass: "bg-blue-500"
},

    {
      id: "silver",
      name: "Titânio silver",
      image: "/img/iphone-silver.jpg",
      colorsclass: "bg-gray-300",
    },
    {
      id: "orange",
      name: "Titânio orange",
      image: "/img/iphone-orange.jpg",
      colorsclass: "bg-orange-500",
    },
  ];

  const models = [
    {
      name: "Pro Max",
      screen: "6.9 Polegadas",
      storage: "256GB, 512GB, 1TB",
      battery: "33 Horas de Vídeo",
      weight: "221 Gramas",
    },
    {
      name: "Pro",
      screen: "6.1 Polegadas",
      storage: "128GB, 256GB, 512GB, 1TB",
      battery: "22 Horas de Vídeo",
      weight: "203 Gramas",

    },
  ];

  const [selectedColor, setSelectedColor] = useState("azul");

  return (
    <section className="bg-black py-20 px-8" id="cores">
      <div className=" max-w-7xl mx-auto ">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Escolha sua cor</h2>
          <p className="text-xl text-gray-400 mb-4">Quatro acabamentos em titânio lindos</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-3xl">
            <div className="relative items-center justify-center min-h-[500px]">
              <img
                src={colors.find((color) => color.id === selectedColor).image}
                alt="imagem-iphone"
                className="w-full max-h-[500px] mx-auto"
              />

            </div>


            <div className="absolute bottom-18 left-0 right-0 text-center ">
              <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block border-2 border-white/30">
                <h3 className="text-2xl font-semibold">{colors.find((color) => color.id === selectedColor).name}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          {colors.map(color => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              className={`relative transition-all duration-300 cursor-pointer`}
              aria-label={color.name}
            >
              <div className={`w-16 h-16 rounded-full border-4  
            ${color.colorsclass} 
            ${selectedColor === color.id ? 'border-white' : 'border-gray-800'}`}></div>
            </button>
          ))}
        </div>


        <div className=" grid md:grid-cols-2 mt-20 gap-8">
          {models.map((model, index) => (
            <div key={index}
              className="bg-gradient-colors rounded-3xl border border-gray-800 p-8 ">

              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl mb-3 font-bold">{model.name}</h3>
              <p className="text-gray-400 mb-4">{model.screen}</p>
              <ul className="text-gray-300 list-disc list-inside space-y-2">
                <li>{model.storage}</li>
                <li>{model.battery}</li>
                <li>{model.weight}</li>
              </ul>

            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-full mb-4 transition-colors duration-300 hover:scale-105 cursor-pointer fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50">
            <a href="https://www.apple.com/br/">
              Compre agora à partir de R$ 11.499,00
            </a>
          </button>
          <p className="text-gray-500">Ou em até em 12x de R$ 958,25 sem juros </p>
          <h1>Volto já!!!</h1>
        </div>
      </div>
    </section>
  );
}

export default Colors;
