# Änderungen

## Version 21.12 – 25.11.2026
- Neu: **Offline-Start.** Die App wird beim ersten Öffnen zwischengespeichert und öffnet danach auch ohne Netz (z. B. bei WLAN-Ausfall). Mit Netz kommt immer die neueste Version. Die Datenspeicherung ist unverändert: Eingaben werden zuerst auf dem Gerät gespeichert und beim nächsten Netz automatisch mit der Cloud abgeglichen. KI, Drive und Feedback brauchen Netz.
- Die Schrift Inter liegt jetzt in der App statt bei Google Fonts: keine Verbindung zu fremden Servern mehr.

## Version 21.11 – 24.11.2026
- Aufgeräumt: Alter Einladungscode samt Registrierfunktion aus dem Programmcode entfernt (Registrierung ist seit 21.9 geschlossen)
- Drive-Auswahl (drive-backup.js): Dateiauswahl startet in «Meine Ablage» mit Ordneransicht, Zuletzt-gewählt und Freigegebene; Esc/Abbrechen schliesst sauber. Bleibt das Google-Fenster leer (z. B. blockierte Drittanbieter-Cookies), erscheint nach 12 Sekunden ein Hinweis mit Alternativen

## Version 21.10 – 24.11.2026
- Neu: Pendenzen sind nach Fälligkeit farbig gruppiert (Überfällig rot, Heute orange, Morgen blau, Diese Woche grün, Später grau, Erledigt blass), mit Zähler, farbigem Streifen und Datums-Plättchen mit Wort
- Das Pendenz-Plättchen im Wochenplan und Jahreskalender hat die Farbe der dringendsten offenen Pendenz
- Demo: drei zusätzliche Beispiel-Pendenzen

## Version 21.9 – 23.11.2026
- Neu: Gemeinsamer KI-Zugang (Mistral). Wer angemeldet ist und keinen eigenen KI-Schlüssel eingetragen hat, kann die KI trotzdem nutzen (mit Tageslimit). Der Schlüssel liegt nur im Cloudflare-Worker, nicht in der App. Eigene Schlüssel haben Vorrang
- Registrierung geschlossen: «Konto anfragen» statt Code-Eingabe. Konten legt Kevin an

## Version 21.8 – 23.11.2026
- Neu (nur für den Besitzer): Option «Erinnern, wenn die Code-Sicherung älter als 14 Tage ist» im Drive-Bereich der Einstellungen
- drive-backup.js enthält jetzt einen fertigen Drive-Bereich für Einstellungen, den auch die anderen Apps nutzen

## Version 21.7 – 23.11.2026
- Neu: Unter ⚙️ → «Google Drive» kannst du mit «📁 Ordner wählen» einen eigenen Zielordner in Drive wählen oder anlegen. Die App merkt ihn sich («Ordner zurücksetzen» geht zurück zum Standard). Daten und Code werden dort in Unterordnern «Sek Planer» und «Code» abgelegt
- Neu: Die App zeigt den Zielordner, nach dem Sichern den Pfad und einen Link «Ordner in Drive öffnen»
- Neu: Unter dem Drive-Bereich steht, mit welcher Adresse du angemeldet bist und ob die Besitzer-Knöpfe (Code sichern) sichtbar sind

## Version 21.6 – 23.11.2026
- Neu: «Backup herunterladen» enthält jetzt auch die Anhänge aus «Dateien & Links» (Format sekplaner-backup-v3). Beim Einlesen eines Backups werden fehlende Anhänge in der Cloud ergänzt, bestehende nie überschrieben. Alte Backup-Dateien lassen sich weiterhin einlesen
- Die Backup-Datei wird mit vielen Anhängen grösser (mehrere MB)
- Die tägliche Cloud-Sicherung (30 Tage) enthält weiterhin keine Anhänge
- Neu: Google Drive. Unter ⚙️ → «Sicherungen & Backup» gibt es «Jetzt in Drive sichern (Daten, .json)». Die Datei landet im Drive-Ordner «Teaching Cockpit Backups / Sek Planer» (nur Berechtigung «drive.file»). Optional eine Erinnerung beim Öffnen, höchstens 1× pro Woche
- Neu, nur für den Besitzer sichtbar: «Code dieser App sichern» und «Code aller Apps sichern» (ZIP pro App im Drive-Ordner «Code»)
- Neu: In der Lektion bei «Dateien & Links» gibt es «+ Aus Drive» (Google-Dateiauswahl). Die gewählte Datei wird als Link gespeichert
- Neue Datei drive-backup.js (gemeinsamer Baustein für alle Apps)

## Version 21.5 – 23.11.2026
- Neu: In der Lektion gibt es «Dateien & Links». Dateien per Drag & Drop (Computer) oder «+ Datei» (iPad/Tablet) hinzufügen, dazu Links (z. B. Google Drive). Klick auf eine Datei öffnet eine Vorschau (Bilder, PDF ganz, andere Typen zum Herunterladen); ein Link öffnet in neuem Tab
- Bilder werden automatisch verkleinert. Andere Dateien (z. B. PDF) bis ca. 650 KB, grössere bitte als Link
- Die Dateien liegen in eigenen Cloud-Dokumenten, nicht in den Planungsdaten; in der Lektion steht nur Name und Grösse. In der Wochenkarte erscheint eine Büroklammer
- Firebase-Regeln: vermutlich keine Änderung nötig (gleiche Art Dokument wie die Vorlagen)
- Spätere Erweiterung geplant: Firebase Storage für grosse Dateien

## Version 21.4 – 22.11.2026
- Neu: Pendenz-Erinnerung. Beim Öffnen erscheint ein Hinweis, wenn Pendenzen heute fällig oder überfällig sind (einmal pro Tag, mit «Anzeigen»). Das Abzeichen bei «Pendenzen» wird rot, sobald etwas überfällig ist
- Neu: Lektions-Vorlagen. Im Lektionsfenster «Diese Lektion als Vorlage speichern» und «Vorlage einfügen». Das Einfügen füllt nur das offene Fenster, übernommen wird erst mit «Speichern». Vorlagen liegen in einem eigenen Cloud-Dokument, getrennt von den Planungsdaten
- Keine Änderung an den Firebase-Regeln nötig

## Version 21.3 – 22.11.2026
- Neu: Im Änderungsverlauf gibt es bei einer Änderung, die später nochmals überarbeitet wurde, den Knopf «Nur diese Änderung zurücknehmen, Späteres behalten». Die App zeigt vorher, was zurückgenommen wird und was bleibt, und arbeitet pro Feld (Titel, Hauptteil, Hausaufgabe …) und pro Pendenz, Termin oder Tagesnotiz. Später geänderte Teile bleiben unverändert. «Alle zurücksetzen» gibt es weiterhin.

## Version 21.2 – 22.11.2026
- Neu: «Unterschiede» bei jeder Cloud-Sicherung und «Unterschiede ansehen» bei der Backup-Datei (Einstellungen → Sicherungen & Backup). Zeigt, was in der Sicherung steht, aber jetzt fehlt: freie Pendenzen, Pendenzen in Lektionen, leere Lektionen, Termine, Tagesnotizen. Mit Häkchen wählen und nur das Gewählte dazuholen. Es wird nur ergänzt, nichts überschrieben oder gelöscht; vorher entsteht automatisch eine Sicherung des aktuellen Stands.

## Version 21.1 – 22.11.2026
- Neu: Der Änderungsverlauf wird 90 Tage aufbewahrt (vorher 30), komprimiert gespeichert.
- Neu: Der Änderungsverlauf zeigt jetzt Details. Bei Pendenzen steht der genaue Text («Pendenz gelöscht: …», «erledigt», «Text geändert»), bei Lektionen Fach, Klasse, Datum, Thema und die geänderten Felder (z. B. Hauptteil, Hausaufgabe), bei Terminen der Name. Gilt auch für ältere Einträge der letzten 30 Tage.

## Version 21.0 – 22.11.2026
- Neu: KI-Tutor in der Lektion hat eine vierte Box «4. Freier Auftrag». Die KI erledigt genau deinen Auftrag (z. B. «Liste 10 Weihnachtstraditionen aus verschiedenen Ländern» oder «Spielplan Basketball für 14 Personen») ohne Unterrichtsphase und ohne Zusatzideen.
- Neu: Ergebnis lässt sich kopieren oder in einen wählbaren Teil (Einstieg, Hauptteil, Schluss) ersetzen oder anhängen.

## Version 20.9 – 22.11.2026
- Neu: «📊 Statistik» in der Jahresübersicht: pro Klasse und Fach geplante Lektionen, Lektionen mit Hausaufgabe (Anzahl und Anteil), letzte Hausaufgabe, Anzahl Prüfungen (davon vorbei) und nächste Prüfung. Folgt dem Klassenfilter. Funktioniert auch im Demo-Modus.

## Version 20.8 – 21.11.2026
- Neu: Zurück-Geste / Zurück-Taste (Handy, Tablet) schliesst offene Fenster (Lektion, Suche, Einstellungen, Journal u. a.), statt die App zu schliessen.

## Version 20.7 – 21.11.2026
- Neuer Knopf «Feedback» (Computer: Kopfzeile neben Abmelden; Handy/Tablet: Menü): öffnet ein anonymes Formular für Fehler, Inhaltsfehler und Wünsche. Version und Gerät werden automatisch mitgegeben; es werden keine Namen abgefragt.

## Version 20.6 – 21.11.2026
- Wischen: Richtung ist fest «nach links wischen = nächste Woche / nächster Tag»; die Auswahl in den Einstellungen entfällt.

## Version 20.5 – 20.11.2026
- Wischrichtung: neuer Standard «nach links wischen = nächste Woche / nächster Tag» (Tablet, Handy, Trackpad). Gilt auf allen Geräten neu; in den Einstellungen (Zahnrad) weiterhin umstellbar.
- Pendenzen & Vergessene Abgaben: Datum jetzt mit Wochentag (z. B. «Do, 19.11.2026»), auch bei «Überfällig» und beim Lektionsdatum.

## Version 20.4 – 19.11.2026
- «Verschieben…» und «Kopieren» nehmen jetzt alles mit: Titel, Unit, Gefäss, Einstieg/Hauptteil/Schluss, Prüfung, Pendenzen, Sprachmemos, «HA auf heute» (oben) und HA (unten).
- HA bleiben verknüpft: Die HA unten erscheint als «HA auf heute» in der nächsten Lektion am neuen Ort (auch in der Parallelklasse), mit dem neuen Datum; der alte Eintrag wird entfernt. Beim Verschieben zeigt die Lektion, die die HA oben aufgegeben hat, auf die neue Lektion.
- Nachschieben: «aufgegeben am …» wird ans neue Datum angepasst.
- Kopien: eigene, offene Pendenzen; Sprachmemos nur als Text («Kopie – nur Text»), ohne Aufnahme.
- «Auf parallele Klasse übertragen»: neu auch «HA auf heute (oben)» sowie «Gefäss, Pendenzen & Sprachmemo-Text».

## Version 20.3 – 19.11.2026
- Tablet: Wochenansicht passt sich der Bildschirmbreite an (kein seitliches Scrollen mehr) und lässt sich wie die Tagesansicht per Wischen wechseln.
- Wischrichtung: nach rechts wischen = nächste Woche / nächster Tag (Tablet, Handy und Mac-Trackpad gleich). In den Einstellungen (Zahnrad) pro Gerät umstellbar.
- Mac-Trackpad: genau ein Wechsel pro Geste, auch mehrere Gesten kurz hintereinander funktionieren (vorher reagierte oft nur die erste). Senkrechtes Scrollen löst keinen Wechsel mehr aus.

## Version 20.2 – 19.11.2026
- KI-Schlüssel: ein einziges Feld für Gemini, Claude, ChatGPT und Mistral. Der Anbieter wird erkannt (auch neue Gemini-Schlüssel mit «AQ.»), der Schlüssel vor dem Speichern getestet und sofort gespeichert. Unbekanntes Format: alle Anbieter werden durchprobiert.
- Liste der hinterlegten Schlüssel mit Reihenfolge ↑↓ (oberste KI zuerst, die anderen springen automatisch ein), «Testen» und «Entfernen» pro Schlüssel, «Alle testen».
- Neu: Mistral als vierte KI (Chat und Sprachmemos).
- Sprachmemos folgen derselben Reihenfolge: Gemini, ChatGPT oder Mistral (Claude kann keine Tonaufnahmen).
- Schlüssel und Reihenfolge gelten gemeinsam mit dem Zeitstrahl.
- Korrektur: Antworten von Mistral (mit «Denk»-Teil) werden richtig gelesen; Sprachmemos über Mistral nutzen zuerst das neue Transkriptionsmodell (voxtral-mini-transcribe-3).

## Version 20.1 – 18.11.2026
- Zweite Zeile (Computer): «Heute» und ‹ › stehen jetzt in der Mitte direkt neben Woche/Tag/Fach, das Datum bleibt links.
- Mac-Trackpad: mit zwei Fingern seitlich wischen wechselt in der Woche die Woche, in der Tagesansicht den Tag (Finger nach rechts = weiter, nach links = zurück). Ein Wisch = ein Schritt. Nicht in der Fach-Ansicht, in offenen Fenstern oder Textfeldern; «Seite zurück» des Browsers wird dabei unterdrückt.

## Version 20 – 18.11.2026
- Rückgängig ↶ oben in der Kopfzeile (Handy: neben der Suche) und Cmd/Ctrl+Z ausserhalb von Textfeldern: macht die letzte Aktion rückgängig – mehrmals klicken geht weiter zurück. Hinweis zeigt, was rückgängig gemacht wurde, mit «Rückgängig» zum Wiederherstellen.
- Änderungsverlauf 🕘: Liste aller Aktionen der letzten 30 Tage (Bearbeitet, Verschoben, Import, Mehrfachbearbeitung, Kalender, Pendenzen …) mit Uhrzeit, Gerät und betroffenen Lektionen (vorher → nachher). Jede Aktion einzeln rückgängig machbar, gespeichert in der Cloud (auch nach Neuladen und auf allen Geräten). Wurde eine betroffene Lektion danach nochmals geändert, fragt die App: nur die übrigen oder alle zurücksetzen.
- «+1 Lektion schieben» ersetzt durch «Verschieben…»: Ziel-Lektion aus einer Liste wählen (auch Parallelklasse), Art «Ersetzen» (Standard), «Hinzufügen» (unten anhängen) oder «Alle nachschieben» (mit Vorschau, welche Lektionen wohin rutschen). Häkchen «Original behalten» kopiert statt verschiebt.
- Fach-Ansicht: Gefäss / Schwerpunkt als farbiges Etikett, daneben Sequenz / Einheit, darunter das Stundenthema. Filter «Gefäss» (z. B. nur Literatur).
- Fach-Ansicht: «Auswählen» → mehrere Lektionen antippen und Gefäss, Einheit und/oder Thema für alle auf einmal setzen (leere Felder bleiben unverändert).

## Version 19 – 18.11.2026 (zusammen mit Version 20 eingespielt)
- Einträge im Jahreskalender mit drei Arten: Schulfrei (Lektionen fallen aus), Spezialtag (anderer Unterricht, z. B. Projektwoche), Hinweis (z. B. Polizei, Elternbesuchstag) – wahlweise mit Uhrzeit. Betroffene Lektionen werden automatisch grau bzw. mit Etikett markiert.
- Einträge stehen beim Wochentag; Klick darauf bearbeitet, «+ Eintrag» fügt direkt am Tag einen neuen hinzu.
- Fach-Ansicht: alle Wochen bleiben sichtbar, ausfallende Lektionen grau, Ferien als schmale Zeile.
- Pendenzen: Text mit ✏️ ändern (Übersicht und Lektion, verknüpft).

## Version 18.2 – 18.11.2026
- Import-Fenster «Datei / Sequenz»: zwei Bereiche nebeneinander (Handy untereinander) – links Datei (Drag & Drop oder «Dateien auswählen»), rechts grosses Feld «Text einfügen» mit Beispiel-Format und «Leeren». Inhalt einer hochgeladenen Datei erscheint im selben Feld. Gilt für Sequenz, Stundenplan und Chalk.

## Version 18.1 – 18.11.2026
- Neue Kopfzeile (Computer): Wochenplan · Notizen & Memos · Jahreskalender gross in der Mitte, Werkzeuge (Datei/Sequenz, Stundenplan, Stellvertretung, KI-Chat, Einstellungen) rechts. Zweite Zeile nur im Wochenplan: «Heute», ‹ ›, Woche, und Woche/Tag/Fach in der Mitte.
- «Diese Woche» heisst jetzt «Heute»: Woche → aktuelle Woche + aktuelle Lektion, Tag → heutiger Tag (am Wochenende nächster Montag), Fach → aktuelle Woche.
- Jeder Wechsel zu Woche, Tag oder Fach (auch von Notizen/Jahreskalender und nach dem Blättern) springt zu heute und zur aktuellen Lektion. Schliessen einer Lektion und Blättern springen nicht.
- Tagesansicht auf dem Computer breiter (ca. 1000 px) mit rund 20 % grösserer Schrift; Handy unverändert.

## Version 18 – 18.11.2026
- Beim Öffnen springt der Wochenplan (Handy: Tagesansicht) zur laufenden Lektion, in der Pause zur nächsten; nach Schulschluss und am Wochenende kein Sprung. Ebenso bei «Heute»/«Diese Woche» und wenn man nach mindestens 30 Minuten in die App zurückkehrt.
- Markierung «● Jetzt» (mit Rahmen) und «Als Nächstes» auf den Karten von heute, aktualisiert sich jede Minute.
- Fach-Ansicht: Auswahlleiste (Fach + Klassen-Häkchen) bleibt beim Scrollen oben fixiert.
- Klick neben ein Fenster schliesst es; bei der Lektion werden Änderungen dabei gespeichert. Markieren und daneben loslassen schliesst nicht.

## Version 17 – 18.11.2026
- Neue Ansicht «Fach» neben Woche/Tag (Handy: Menü ☰): alle Lektionen eines Fachs im ganzen Schuljahr, chronologisch von oben nach unten, gruppiert nach Kalenderwoche.
- Klassen per Häkchen wählbar; mehrere Klassen stehen nebeneinander zum Vergleichen. Auswahl bleibt gespeichert.
- Öffnet bei der aktuellen Woche, ältere Wochen darüber. Noch nicht geplante Lektionen als leere Karten (Klick → planen), Lektionsnummer L1, L2 … pro Klasse, Ferien als schmale Zeile.
- Pfeile ‹ › springen wochenweise, «Diese Woche» springt zu heute.

## Version 16 – 18.11.2026
- Demo-Modus: «Als Gast ansehen (Demo)» im Anmeldefenster bzw. Adresse mit `?demo`. Neutraler Beispiel-Stundenplan mit ausgefüllten Lektionen (aktuelle und nächste Woche), Pendenzen, Tagesnotiz und Terminen. Alles anklickbar und änderbar, aber nichts wird gespeichert (keine Cloud, nichts auf dem Gerät) – nach Neuladen wieder wie am Anfang.
- In der Demo: Hinweis, dass für die KI-Funktionen ein eigener API-Schlüssel nötig ist; Einstellungen, frühere Versionen und Schuljahrwechsel deaktiviert.

## Version 15.3 – 18.11.2026
- Keine persönlichen Angaben mehr im Code: Das Konto wird über eine private Zuordnung im eigenen Firebase-Konto erkannt statt über die E-Mail-Adresse.
- Persönlicher Standard-Stundenplan entfernt (neutraler Beispielplan), Beispiele in Eingabefeldern neutralisiert.
- Ältere Archivversionen entfernt; Versionsgeschichte neu begonnen.

## Version 15.2 – 18.11.2026
- RZG aufgeteilt: Fach «Geschichte» (blau) und «Geografie» (erdbraun) werden ausgeschrieben angezeigt. «RZG» bleibt als Oberbegriff erhalten.
- Suche: «RZG» findet Geschichte und Geografie, «Geschichte» bzw. «Geografie» nur das jeweilige Fach.
- Chalk-Import: «RZG»-Lektionen passen weiterhin auf Geschichte- und Geografie-Stunden.

## Version 15.1 – 17.11.2026
- Beim Öffnen kein kurzes Aufblinken des Anmeldefensters mehr: Wer auf dem Gerät angemeldet war, sieht kurz einen Ladebildschirm mit Logo und dann direkt den Wochenplan. Das Anmeldefenster erscheint nur noch nach «Abmelden» oder auf neuen Geräten.
- Pendenzen werden nur noch über das Kästchen abgehakt (Übersicht und Lektion), ein Klick auf den Text macht nichts mehr.
- Nach dem Abhaken erscheint 6 Sekunden lang «Pendenz erledigt – Rückgängig».

## Version 15 – 17.11.2026
- Stellvertretung: Fenster mit Zeitraum (Heute / Morgen / Woche / frei wählbar) und Häkchen pro Lektion. Gedruckt werden nur die gewählten Lektionen, alle Tage hintereinander, mit Thema, Einstieg, Hauptteil, Schluss. «HA auf heute», «HA aufgeben» und «Tagesnotiz & Termine» einzeln an-/abwählbar. Private Pendenzen nie im Druck.
- Pendenzen mit «Fällig am» (Standard heute, Knopf «Morgen»), Datum jederzeit änderbar, Liste nach Fälligkeit sortiert, Überfälliges rot.
- Sprachmemo wird nach der Transkription automatisch zur Pendenz (fällig heute, 🎙️-Zeichen); die KI teilt nur bei eindeutig mehreren Aufgaben auf. Das Memo bleibt in der Lektion. Die separate Memo-Liste rechts in «Notizen & Memos» entfällt. Gilt nur für neue Memos.
- «Mit KI hinzufügen» bei den Pendenzen: Liste/Text einfügen → Vorschau mit Häkchen und Datum → übernehmen.
- Jahreskalender-KI: mehrzeiliges Feld für ganze Listen, Vorschau mit Häkchen, Datum/Name/Klasse/Art änderbar, bereits vorhandene Termine markiert.

## Version 14 – vorbereitet 17.11.2026
- Speicher aufgeteilt: Lektionen liegen in einem Cloud-Dokument pro Monat, Stundenplan/Termine/Notizen im Hauptdokument → kein 1-MB-Limit mehr für die Planung. Bestehende Daten werden beim ersten Öffnen automatisch umgestellt (Cloud-Sicherung «vor Umstellung» vorher).
- Synchronisation pro Lektion: Gleichzeitige Änderungen an verschiedenen Lektionen auf zwei Geräten gehen nicht mehr verloren; Änderungen erscheinen in ca. 1 Sekunde auf dem anderen Gerät.
- Neu: «Frühere Versionen» in jeder Lektion – vor jeder Änderung wird der alte Stand in der Cloud gesichert (letzte 20 pro Lektion, auf allen Geräten verfügbar), dazu die Tagesstände aus den Cloud-Sicherungen. Vorschau und Wiederherstellen per Klick.
- Heutiger Tag farbig markiert (Wochentag blau mit «Heute», Spalte leicht hinterlegt).
- Hausaufgabenfelder mehrzeilig, wachsen mit dem Text; im Wochenplan mit Zeilenumbrüchen.
- Knopf «Jetzt in der Cloud sichern» unter ⚙️ → Sicherungen & Backup.
- Ältere Versionen im Archiv (v6–v13.1) sperren sich nach der Umstellung selbst, damit sie keine Daten überschreiben.
## Version 13.1 – 17.11.2026
- Handy: schmale, fixe Kopfzeile mit Datum, ‹ ›, «Heute», Suche und Menü ☰ (Woche/Tag, Datei/Sequenz, Stundenplan, Stellvertretung, KI-Chat, Schuljahr, Einstellungen, Abmelden). Reiter Wochenplan / Notizen / Jahreskalender unten als Leiste. Computer und Tablet unverändert.

## Version 13 – 17.11.2026
- Als App installierbar (Android/Chrome «App installieren», iPhone «Zum Home-Bildschirm»): eigenes Symbol (Planer-Heft), öffnet im Vollbild ohne Adressleiste.
- Minimaler Service Worker ohne Zwischenspeicher – neue Versionen kommen weiterhin sofort an.

## Version 12 – 17.11.2026
- Neu: **Suche** (🔍 oben) über alle Lektionen des Schuljahres – mehrere Wörter kombiniert, Fächer werden erkannt (z. B. «englisch»), eingebautes Wörterbuch für Schulbegriffe Deutsch/Englisch (z. B. Leseverstehen ↔ Reading Comprehension, Prüfung ↔ Test). Treffer markiert, Klick öffnet die Lektion, Klassenfilter.
- Neu: **«Mit KI suchen»** findet auch sinngemässe Treffer, mit kurzer Begründung.
- Jahreskalender: Termine und Tagesnotizen lassen sich **bearbeiten** (Bezeichnung, Datum, Klasse, Art) und Tagesnotizen löschen.
- HA übertragen: Die Auswahl zeigt jetzt das **Thema** der Ziel-Lektion und die nächsten 8 Lektionen.

## Version 11 – 17.11.2026
- «Ferien & Spezialtage» ist jetzt der **Jahreskalender**: alles fürs Schuljahr untereinander (Ferien, Spezialtage, Anlässe aus Lektionen, Prüfungen, Tagesnotizen), gegliedert nach Monat und Woche, mit «Heute»-Linie.
- Filter nach Klasse; Vergangenes grau, per Knopf ausblendbar; Drucken / PDF der Liste.
- KI-Suche «Anlässe in der Planung finden» (z. B. Polizei, Podiumsdiskussion): Vorschläge mit Häkchen, schon Vorhandenes wird erkannt; vor dem Übernehmen automatisches Backup. Übernommene Anlässe erscheinen auch oben im Tag des Wochenplans.
- Klick auf einen Lektions-Eintrag öffnet die Lektion.

## Version 10 – 17.11.2026
- Chalk-Import gliedert die Inhalte automatisch in Einstieg / Hauptteil / Schluss / HA (auch englische Abläufe: Warm-up, Wrap-up …); «Woche N: Lektion …» bzw. «Lesson N – …» wird zum Lektionstitel; PDF-Zeilenumbrüche werden zusammengefügt.
- Chalk-Import: Offdays → schulfrei, Projektwoche/Weiterbildung → Spezialtag (oben im Tag angezeigt). Es wird nichts verschoben.
- Chalk-Import: Abweichende Zeiten im Stundenplan werden an Chalk angepasst (z. B. Musik 2a Fr 15:35); Inhalte bleiben in derselben Lektion.
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
