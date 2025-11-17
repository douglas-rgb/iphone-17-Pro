function Intro() {
  const specs = [
    { value: "6.3 Inch", label: "Display Super Retina XDR", color: "text-blue-600" },
    { value: "A18 Pro", label: "Chip mais rápido", color: "text-orange-500" },
    { value: "48MP", label: "Sistema de Camera", color: "text-blue-600" },
    { value: "29h", label: "Bateria", color: "text-orange-500" },
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">iPhone 17 Pro</h1>
        <p className="text-2xl md:text-4xl text-gradient font-bold">
          Titânio. Tão forte. Tão leve. Tão Pro
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          
          Design mais refinado que já criamos. Titânio de grau aeroespacial. Chip A18 Pro. Sistema
          de câmera Pro revolucionário.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <button className="bg-blue-600  text-white font-medium rounded-full hover:bg-blue-700 px-8 py-4 hover:text-gray-300 transition-all duration-300 hover:scale-105 text-lg cursor-pointer drop-shadow-lg drop-shadow-indigo-500/50">
            Compre agora
          </button>
          <button className="border-white border-2 rounded-full font-medium bg-black hover:bg-white px-8 py-4 hover:text-black transition-all duration-300 hover:scale-105 text-lg cursor-pointer hover:border-2 hover:border-gray-400 ">
            Saiba mais
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 text-center mx-auto max-w-5xl ">
        {specs.map((spec, index) => (

          <div key={index} className=" bg-gray-900 cursor-pointer rounded-2xl hover:bg-gray-800 p-6 transition-all duration-300 hover:scale-105 fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50" >
            <p className={`text-3xl font-bold ${spec.color}`}>{spec.value}</p>
            <p className="text-sm text-gray-300 mt-3">{spec.label}</p>
          </div>

        ))}
      </div>
    </section>
  );
}

export default Intro;
