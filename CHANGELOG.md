# Änderungen

## Version 10 – 17.11.2026
- Chalk-Import gliedert die Inhalte automatisch in Einstieg / Hauptteil / Schluss / HA (auch englische Abläufe: Warm-up, Wrap-up …); «Woche N: Lektion …» bzw. «Lesson N – …» wird zum Lektionstitel; PDF-Zeilenumbrüche werden zusammengefügt.
- Chalk-Import: Offdays → schulfrei, Projektwoche/Weiterbildung → Spezialtag (oben im Tag angezeigt). Es wird nichts verschoben.
- Chalk-Import: Abweichende Zeiten im Stundenplan werden an Chalk angepasst (z. B. Musik 2Aa Fr 15:35); Inhalte bleiben in derselben Lektion.
- Mittagsband 11:50–13:45 in Wochen- und Tagesansicht; Lektionen über Mittag (Econ, Basketball) sind markiert.
- Neue Konten starten ohne Stundenplan (mit Hinweis). Das Konto des Besitzers bleibt unverändert.
- Sprachmemos: sofortige Transkription mit Gemini, ChatGPT als Ersatz; fehlgeschlagene Transkriptionen werden automatisch nachgeholt (beim Öffnen und sobald wieder online).
- Sprachmemos: Nach der Transkription bleibt die Audiodatei nur auf dem Aufnahmegerät, synchronisiert wird nur der Text (schont das 1-MB-Limit).
- Korrektur: Einzeilige Texte mit Anführungszeichen wurden in den Karten doppelt maskiert angezeigt.

## Version 9 – 17.11.2026
- Handy: Die App öffnet direkt in der Tagesansicht mit dem heutigen Tag (am Wochenende: Montag der nächsten Woche). Tablet/Computer unverändert.
- Vor jedem Import (Chalk, Datei/Sequenz, Stundenplan, Ferien, KI-Termine, Backup-Datei) wird automatisch eine Cloud-Sicherung «vor Import» angelegt. Klappt das nicht (offline), wird zuerst eine Backup-Datei heruntergeladen – ohne Sicherung wird nichts importiert.

## Version 8 – 17.11.2026
- Tagesansicht: Tage per Wischen nach links/rechts wechseln (Handy/Tablet), mit kurzer Animation.
- Horizontales Wischen löst nicht mehr «Seite zurück» des Browsers aus.

## Version 7 – 17.11.2026
- Alle Bausteine fest im Repo (`vendor/`): Design und Funktionen hängen nicht mehr von fremden Servern ab.
- Neu: Import «4. Chalk-Planboard (PDF)» – Wochenexporte ohne KI einlesen, auch mehrere PDFs auf einmal; fehlende Stundenplan-Slots (z. B. Basketball) werden ergänzt; gelbe Tagesbalken → Tagesnotiz; doppelter Import wird erkannt.
- Neu: Tägliche automatische Cloud-Sicherung (30 Tage) mit Wiederherstellen per Klick (inkl. Sicherheitsnetz).
- Neu: Sicherungsstand in den Einstellungen und Erinnerung nach 7 Tagen ohne Backup-Datei (gelber Ring ums Zahnrad).
- Backup-Datei enthält jetzt alle Schuljahre.

## Version 6 – 17.11.2026
- ChatGPT als dritte KI, wählbare Reihenfolge mit automatischem Backup.
- KI schnell: Streaming und paralleles Ausweichen bei überlasteten Modellen.
- Sprachmemos per KI transkribieren, Memos in der Übersicht löschen.
- Sicherheits- und Datenverlust-Korrekturen aus dem Code-Review.
