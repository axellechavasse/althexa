export default function AProposPage() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      {/* Container en flex */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Bloc image à gauche */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/portrait.JPEG"
            alt="Photo de présentation"
            className="rounded-2xl shadow-lg w-60 object-cover" // réduite (w-60)
          />
        </div>

        {/* Bloc texte + titre à droite */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-teal-600 mb-4">À propos</h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Je suis Axelle Chavasse, ingénieure HSE avec plus de 14 ans
            d’expérience dans l’industrie, la formation et l’accompagnement.
            Mon parcours m’a permis de développer une expertise solide en
            prévention des risques, hygiène industrielle et gestion de projet
            sécurité.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Aujourd’hui, avec Althéxa, je mets cette expérience au service des
            entreprises, des collectivités et des organismes de formation,
            afin de renforcer la sécurité, la prévention et l’accompagnement
            au changement.
          </p>
        </div>
      </div>
    </section>
  );
}