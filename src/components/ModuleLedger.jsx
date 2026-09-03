import { blocks, blockUe, totalUeLabel, maxUe, practicalPhase } from '../data/curriculum.js';
import useReveal from './useReveal.js';

/**
 * Das UE-Register.
 * Das Curriculum ist das ehrlichste Dokument dieser Branche. Deshalb steht es
 * hier offen auf der Seite und nicht als PDF im Downloadbereich.
 * Vier Bloecke A-D mit je eigener Teilsumme, darunter die Gesamtsumme und die
 * betriebliche Lernphase, die in Stunden zaehlt und deshalb getrennt steht.
 * Die Balkenlaenge ist proportional zu den Unterrichtseinheiten.
 */
export default function ModuleLedger() {
  const [ref, revealed] = useReveal({ threshold: 0.15 });

  /* Fortlaufende Nummer ueber alle Bloecke hinweg, damit im Register
     "Baustein 07" eindeutig bleibt. */
  let counter = 0;

  return (
    <div ref={ref} className={revealed ? 'is-revealed' : undefined}>
      <div className="ledger">
        <div className="ledger__head" aria-hidden="true">
          <span>Nr.</span>
          <span>Baustein</span>
          <span>Umfang</span>
          <span>UE</span>
        </div>

        {blocks.map((block) => (
          <div key={block.id}>
            <div className="ledger__block">
              <span className="ledger__block-id">Block {block.id}</span>
              <span className="ledger__block-title">{block.title}</span>
              <span className="ledger__block-ue u-num">{blockUe(block)} UE</span>
            </div>

            {block.items.map((item) => {
              counter += 1;
              const delay = counter * 45;

              return (
                <div className="ledger__row" key={item.title}>
                  <span className="ledger__no">{String(counter).padStart(2, '0')}</span>

                  <span className="ledger__name">
                    {item.title}
                    {item.presence && (
                      <span className="ledger__tag" title={item.presenceNote}>
                        Präsenz
                      </span>
                    )}
                  </span>

                  <span className="ledger__bar" aria-hidden="true">
                    <span
                      className="ledger__bar-fill"
                      style={{
                        '--fill': `${Math.round((item.ue / maxUe) * 100)}%`,
                        '--delay': `${delay}ms`,
                      }}
                    />
                  </span>

                  <span className="ledger__ue">
                    {item.ue}
                    <span className="visually-hidden"> Unterrichtseinheiten</span>
                  </span>
                </div>
              );
            })}
          </div>
        ))}

        <div className="ledger__sum">
          <span className="ledger__sum-label">Unterrichtseinheiten gesamt</span>
          <span className="ledger__sum-value u-num">{totalUeLabel} UE</span>
        </div>

        <div className="ledger__addon">
          <span className="ledger__addon-label">{practicalPhase.title}</span>
          <span className="ledger__addon-value u-num">
            {practicalPhase.hours} Stunden
            <span className="visually-hidden">
              {' '}
              im Betrieb, entspricht etwa {practicalPhase.weeks} Wochen
            </span>
          </span>
        </div>
      </div>

      <p className="ledger__legend">
        Eine Unterrichtseinheit entspricht 45 Minuten; {totalUeLabel} UE ergeben rund 30 Wochen in
        Vollzeit. Als „Präsenz“ markierte Bausteine – die Löschübung im Brandschutz und die
        Erste-Hilfe-Praxis – finden vor Ort bei unseren Partnereinrichtungen statt. Alle übrigen
        Anteile laufen live online in Kleingruppen. Die betriebliche Lernphase zählt in Stunden und
        ist in der UE-Summe deshalb nicht enthalten.
      </p>
    </div>
  );
}
