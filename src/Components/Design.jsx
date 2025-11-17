import titanium from "/img/titanium-design.jpg";
import ios from "/img/ios-features.jpg";
import a18 from "/img/chip-a18-pro.jpg";

function Highlights() {
 const specs = [
  { 
    value: "48MP", 
    label: "Principal", 
    color: "text-blue-600", 
    text: "Sensor quad-pixel com foco automático"
  },
  { 
    value: "12MP", 
    label: "Ultra wide", 
    color: "text-orange-500", 
    text: "Campo de visão de 120° com foco automático"
  },
  { 
    value: "12MP", 
    label: "Telefone 5x", 
    color: "text-blue-600", 
    text: "Zoom óptico de 5x com estabilização óptica de imagem"
  },
];


  return (
    <section className="bg-black py-20 px-6 " id="design">
      <div className=" max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Design Revolucionário</h2>
          <p className="text-xl text-gray-400">
            Cada detalhes foi pensado para criar a melhor experiêcia...
          </p>
        </div>

        <div className="grid  grid-cols-1 sm:grid-cols-2 gap-8 mb-16 ">
          <div className="bg-gray-900 rounded-3xl p-8">
            <img className="w-full rounded-2xl mb-4" src={titanium} alt="titanium Design" />
            <h3 className="font-bold text-3xl mb-2">Titânium Premiun</h3>
            <p className="text-gray-300">
              Estrutura em Titânium em grau aeroespacial. O smartphone mais forte e leve.
            </p>
          </div>

          <div className="bg-gray-900 rounded-3xl p-8">
            <img className="w-full rounded-2xl mb-4" src={ios} alt="ios 2025" />
            <h3 className="font-bold text-3xl mb-2">ios Pro</h3>
            <p className="text-gray-300">
              Sistema operacional mais avançado do mundo com IA integrado.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 mb-16 " id="performance">
          <h3 className="text-3xl mb-6 font-bold text-gradient">A18 Pro</h3>
          <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
          <img className="w-full rounded-2xl mb-4" src={a18} alt="chip a18" />

          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li>CPU 20% mais rápida</li>
            <li>GPU 25% mais rápida</li>
            <li>Neural Engine com 16 núcleos</li>
            <li>Ray tracing acelerado por hardware</li>
          </ul>
        </div>

        {/* ...Continue  Codando*/}
        <div className="text-center" id="cameras">
          <h3 className="font-bold text-4xl mb-10">Sistema de câmera mais avançado.</h3>

          <div className="bg-black py-20 px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-6 text-center mx-auto max-w-5xl ">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className=" bg-gray-900 cursor-pointer rounded-2xl hover:bg-gray-800 p-6 transition-all duration-300 hover:scale-105 fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50"
                >
                  <div className={`text-3xl font-bold mb-4 ${spec.color}`}>{spec.value}</div>
                  <h4 className="text-xl mb-2 font-semibold">{spec.label}</h4>
                  <p className="text-gray-400">{spec.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
