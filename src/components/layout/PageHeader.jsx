export default function PageHeader({ title, subtitle }) {
  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(15, 76, 129, 0.85), rgba(15, 76, 129, 0.85)), url("/images/hero-bg.jpg")',
        paddingTop: '120px' // To account for the fixed header
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl max-w-3xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}