const stats = [
  { valor: "15+", label: "Anos de Experiência" },
  { valor: "500+", label: "Projetos Realizados" },
  { valor: "12", label: "Cidades Atendidas" },
  { valor: "100%", label: "Satisfação Garantida" },
];

export function Stats() {
  return (
    <section className="bg-orange-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-black text-white mb-1">
                {stat.valor}
              </div>
              <div className="text-orange-100 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
