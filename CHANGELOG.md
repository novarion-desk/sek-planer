# Änderungen

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
