

function Footer() {


    const sections = [
        {
            title: "Comprar e Saber Mais",
            links: [" Iphone 17", " Iphone 17 Plus", " Iphone 17 Pro", " Iphone 17 Pro Max", "Acessórios", "Apple Trade In", "Financiamento Apple Card", "Suporte Apple"]
        },

        {
            title: "Especificações",
            links: ["Cracteristicas Técnicas", "Manual do Usuário", "Conteúdo da Embalagem", "Acessórios Compatíveis"]
        },

        {
            title: "Suporte",
            links: ["Suporte para iPhone", "Assistência Técnica para iPhone", "Peças e Serviços para iPhone", "Recursos do iOS", "Aplicativos para iPhone", "Atualizações de Software", "Guia do Usuário do iPhone", "Acessibilidade no iPhone", "Fale com o Suporte da Apple"]
        },

        {
            title: "Apple e a Empresa",
            links: ["Sobre a apple", "Empregos na Apple", "Iniciativas Ambientais", "Relatórios de Impacto", "Relações com Investidores", "Eventos Corporativos", "Contato com a Mídia"]
        }
    ]

    return (
        <footer className="bg-gray-900 border-gray-800 border-t">
            
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-bold text-xl mb-4">{section.title}</h4>

                            <ul className="space-y-2 text-sm text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a className="text-white cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-sm ">
                    <h4 className="text-gray-500 mb-2">Desenvolvido com 💖 por Douglas Santos</h4>
                    <p  className="text-gray-700">&copy; 2025 Apple Fantasia. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;