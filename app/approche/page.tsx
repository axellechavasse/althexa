export default function Approche() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-10">
      {/* Approche */}
      <section>
        <h1 className="text-3xl font-bold text-teal-600 mb-4">Mon approche</h1>
        <p className="text-gray-700 mb-6">
          Une approche <strong>humaine</strong>, <strong>structurée</strong> et
          centrée sur l’essentiel, toujours déclinée en actions concrètes.
          L’objectif : transformer vos enjeux HSE en solutions pratiques,
          adaptées à votre réalité terrain.
        </p>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside">
          <li>
            <strong>Diagnostic terrain & écoute</strong> — recueil des besoins,
            entretiens, analyse des risques (DUERP, incidents, indicateurs) et
            contraintes opérationnelles.
          </li>
          <li>
            <strong>Co-construction des solutions</strong> — priorisation
            réaliste (coûts/délais/impacts), choix des actions et des formats
            (conseil, formation, accompagnement).
          </li>
          <li>
            <strong>Déploiement pragmatique</strong> — outils simples, documents
            utiles (plans de prévention, fiches réflexes, modes opératoires),
            formation ciblée.
          </li>
          <li>
            <strong>Mesure & amélioration</strong> — KPIs HSE, retours
            d’expérience, ajustements continus.
          </li>
        </ol>
      </section>

      {/* Bénéfices attendus */}
      <section>
        <h2 className="text-3xl font-bold text-teal-600 mb-4">
          Bénéfices attendus
        </h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-700">
          <li className="rounded-xl border p-4">
            🛡️ <strong>Conformité & sécurité</strong> — respect réglementaire,
            maîtrise renforcée des risques, baisse des incidents/AT.
          </li>
          <li className="rounded-xl border p-4">
            👥 <strong>Implication des équipes</strong> — culture prévention,
            gestes pro sécurisés, motivation renforcée.
          </li>
          <li className="rounded-xl border p-4">
            💬 <strong>Communication fluide</strong> — échanges constructifs,
            meilleure circulation de l’information.
          </li>
          <li className="rounded-xl border p-4">
            ⚙️ <strong>Efficacité opérationnelle</strong> — process clarifiés,
            décisions facilitées, dérives réduites.
          </li>
          <li className="rounded-xl border p-4">
            💶 <strong>Coûts maîtrisés</strong> — actions ciblées, ROI des
            formations et plans d’action.
          </li>
          <li className="rounded-xl border p-4">
            📝 <strong>Traçabilité</strong> — DUERP à jour, plans d’actions
            suivis, indicateurs partagés.
          </li>
          <li className="rounded-xl border p-4">
            🤝 <strong>Accompagnement personnalisé</strong> — adapté à votre
            secteur et vos contraintes.
          </li>
        </ul>
      </section>
    </main>
  );
}