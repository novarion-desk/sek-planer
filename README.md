# Sek Planer (ZH) – Unterrichtscockpit

Live-App: https://novarion-desk.github.io/sek-planer/

## Aufbau

| Pfad | Inhalt |
|---|---|
| `index.html` | Aktuelle Version der App |
| `vendor/` | Alle Bausteine fest im Repo (Tailwind-CSS, Icons, PDF/Word/Excel-Leser, Firebase, DOMPurify) – keine Abhängigkeit von fremden Servern |
| `versions/vX/` | Archiv aller Versionen – jede ist jederzeit direkt aufrufbar |
| `CHANGELOG.md` | Was sich in welcher Version geändert hat |

## Zu einer älteren Version zurück

Jede Version ist sofort direkt aufrufbar (gleiche Daten, gleiches Konto):

- Version 8: https://novarion-desk.github.io/sek-planer/versions/v8/
- Version 7: https://novarion-desk.github.io/sek-planer/versions/v7/
- Version 6: https://novarion-desk.github.io/sek-planer/versions/v6/

Funktioniert die aktuelle Version nicht, einfach den Link der vorherigen Version öffnen und weiterarbeiten.
Danach Claude sagen, dass die alte Version wieder zur Hauptversion werden soll.

## Daten & Sicherungen

- **Cloud:** Firebase Firestore (Region europe-west6, Zürich) – Sync über alle Geräte.
- **Lokal:** Kopie im Browser jedes Geräts (getrennt pro Konto).
- **Automatisch:** Tägliche Cloud-Sicherung, die letzten 30 Tage – in der App unter ⚙️ → «Sicherungen & Backup» mit einem Klick wiederherstellbar. Vor jeder Wiederherstellung wird der aktuelle Stand zusätzlich gesichert.
- **Manuell:** ⚙️ → «Backup herunterladen (.json)» – enthält alle Schuljahre. Empfohlen 1× pro Woche (die App erinnert nach 7 Tagen).
