import { modules, totalUe, maxUe } from '../data/curriculum.js';
import useReveal from './useReveal.js';

/**
 * Das UE-Register.
 * Das Curriculum ist das ehrlichste Dokument dieser Branche. Deshalb steht es
 * hier offen auf der Seite und nicht als PDF im Downloadbereich.
 * Die Balkenlaenge ist proportional zu den Unterrichtseinheiten.
 */
export default function ModuleLedger() {
  const [ref, revealed] = useReveal({ threshold: 0.15 });

  return (
    <div ref={ref} className={revealed ? 'is-revealed' : undefined}>
      <div className="ledger">
        <div className="ledger__head" aria-hidden="true">
          <span>Nr.</span>
          <span>Modul</span>
          <span>Umfang</span>
          <span>UE</span>
        </div>

        {modules.map((mod, i) => (
          <div className="ledger__row" key={mod.no}>
            <span className="ledger__no">{String(mod.no).padStart(2, '0')}</span>

            <span className="ledger__name">
              {mod.title}
              {mod.presence && (
                <span className="ledger__tag" title={mod.presenceNote}>
                  Präsenz
                </span>
              )}
            </span>

            <span className="ledger__bar" aria-hidden="true">
              <span
                className="ledger__bar-fill"
                style={{
                  '--fill': `${Math.round((mod.ue / maxUe) * 100)}%`,
                  '--delay': `${i * 45}ms`,
                }}
              />
            </span>

            <span className="ledger__ue">
              {mod.ue}
              <span className="visually-hidden"> Unterrichtseinheiten</span>
            </span>
          </div>
        ))}

        <div className="ledger__sum">
          <span className="ledger__sum-label">Gesamtumfang der Maßnahme</span>
          <span className="ledger__sum-value u-num">{totalUe} UE</span>
        </div>
      </div>

      <p className="ledger__legend">
        Eine Unterrichtseinheit entspricht 45 Minuten. Als „Präsenz“ markierte Module enthalten
        praktische Anteile, die vor Ort bei unseren Partnereinrichtungen stattfinden – Waffenhandhabung
        und Schießen, Löschübung und Erste-Hilfe-Praxis. Der gesamte Theorieteil läuft live online.
      </p>
    </div>
  );
}
