/* Sek Planer – Hilfe: Erklärmodus («?» antippen, dann einen Knopf antippen) und Hilfeseite.
   Alle Texte stehen in HELP_ITEMS (s = CSS-Auswahl, a = Bereich, t = Titel, x = Erklärung). */
(function () {
  'use strict';

  const HELP_ITEMS = [
    // ---------- Kopfzeile ----------
    { a: 'Kopfzeile', t: 'Schuljahr', s: '#schoolYearSelect, #schoolYearSelectMobile', x: 'Wechselt das Schuljahr. Stundenplan, Termine und geplante Lektionen werden pro Schuljahr geführt.' },
    { a: 'Kopfzeile', t: 'Suchen', s: '[onclick*="openSearchModal"]', x: 'Durchsucht alle geplanten Lektionen nach einem Stichwort. Mit «Mit KI suchen» kannst du auch in ganzen Sätzen fragen.' },
    { a: 'Kopfzeile', t: 'Rückgängig', s: '#undoBtn, #undoBtnMobile, #toastUndoBtn', x: 'Macht die letzte Änderung rückgängig. Ältere Änderungen findest du unter «Verlauf».' },
    { a: 'Kopfzeile', t: 'Verlauf (Änderungsverlauf)', s: '[onclick*="openJournalModal"]', x: 'Zeigt alle Änderungen der Reihe nach. Jede Aktion lässt sich einzeln rückgängig machen.' },
    { a: 'Kopfzeile', t: 'Wochenplan', s: '#mainTabPlan, #mobTabPlan', x: 'Zeigt deine Lektionen als Woche, Tag oder nach Fach.' },
    { a: 'Kopfzeile', t: 'Notizen & Memos', s: '#mainTabNotes, #mobTabNotes', x: 'Sammelt alle Pendenzen aus den Lektionen, Sprachmemos und freie Pendenzen, nach Fälligkeit sortiert. Die Zahl zeigt, wie viele offen sind.' },
    { a: 'Kopfzeile', t: 'Jahreskalender', s: '#mainTabHolidays, #mobTabHolidays', x: 'Zeigt Ferien, Spezialtage und Hinweise für das ganze Schuljahr. Hier trägst du auch neue Termine ein.' },
    { a: 'Kopfzeile', t: 'Datei / Sequenz', s: '[onclick*="openUniversalImportModal"]', x: 'Importiert Material: Lektionenabläufe (Word, PDF), einen Stundenplan (Excel oder PDF), Ferien und Spezialtage oder einen Chalk-Planboard-Export.' },
    { a: 'Kopfzeile', t: 'Stundenplan', s: '[onclick*="openScheduleEditorModal"]', x: 'Öffnet deinen Stundenplan. Dort fügst du Lektionen hinzu, entfernst sie oder änderst Fach, Klasse und Gefäss.' },
    { a: 'Kopfzeile', t: 'Stellvertretung', s: '[onclick*="printSubstitutePlan"]', x: 'Erstellt eine Druckansicht oder ein PDF für eine Stellvertretung, ohne deine privaten Pendenzen. Du wählst die Tage und was darauf stehen soll.' },
    { a: 'Kopfzeile', t: 'KI-Chat', s: '[title="Zuklappen"][onclick*="toggleAiSidebar"]', x: 'Klappt die Seitenleiste mit dem KI-Chat wieder zu.' },
    { a: 'Kopfzeile', t: 'KI-Chat', s: '#toggleAiSidebarBtn, [onclick*="toggleAiSidebar"]', x: 'Öffnet die Seitenleiste mit dem KI-Chat für Fragen und Ideen zum Unterricht.' },
    { a: 'Kopfzeile', t: 'Sync-Punkt', s: '#syncLed', x: 'Zeigt den Stand der Cloud-Speicherung. Eingaben werden zuerst auf dem Gerät gespeichert und danach mit der Cloud abgeglichen.' },
    { a: 'Kopfzeile', t: 'Einstellungen & Backup', s: '#settingsHeaderBtn', x: 'Öffnet Cloud-Diagnose, KI-Schlüssel und Backup (Cloud, Datei, Google Drive).' },
    { a: 'Kopfzeile', t: 'Feedback', s: '[onclick*="openAppFeedback"]', x: 'Öffnet ein Formular, um Fehler zu melden oder Wünsche zu äussern.' },
    { a: 'Kopfzeile', t: 'Abmelden', s: '[onclick*="handleFirebaseLogout"]', x: 'Meldet dich von diesem Gerät ab. Deine Daten bleiben in der Cloud.' },
    { a: 'Kopfzeile', t: 'Menü', s: '[onclick*="toggleMobileMenu"]', x: 'Öffnet das Menü mit Ansicht, Verlauf, Import, Stundenplan, Einstellungen und Hilfe.' },
    { a: 'Kopfzeile', t: 'Hilfe', s: '#helpBtn, #helpMenu, [data-help-open]', x: 'Hier bist du richtig: «Knopf erklären» erklärt jeden Knopf, den du danach antippst. Die Hilfeseite zeigt alle Erklärungen mit Suche.' },

    // ---------- Wochenplan ----------
    { a: 'Wochenplan', t: 'Heute', s: '[onclick*="jumpToCurrentWeek"], [onclick*="mobileGoToday"]', x: 'Springt zur aktuellen Woche bzw. zum heutigen Tag.' },
    { a: 'Wochenplan', t: 'Woche zurück / vor', s: '[onclick*="changeWeek"], [onclick*="mobileNav"]', x: 'Blättert eine Woche (in der Tagesansicht einen Tag) zurück oder vor.' },
    { a: 'Wochenplan', t: 'Ansicht Woche', s: '#viewBtnWeek, #mobViewWeek', x: 'Zeigt alle fünf Tage der Woche nebeneinander.' },
    { a: 'Wochenplan', t: 'Ansicht Tag', s: '#viewBtnDay, #mobViewDay', x: 'Zeigt einen einzelnen Tag, gut für kleine Bildschirme.' },
    { a: 'Wochenplan', t: 'Ansicht Fach', s: '#viewBtnSubject, #mobViewSubject', x: 'Zeigt die Lektionen eines Fachs und einer Klasse nacheinander, unabhängig von der Woche. Gut, um eine Sequenz zu überblicken.' },
    { a: 'Wochenplan', t: '+ Notiz (an der Lektion)', s: '[onclick*="openQuickNoteModal"]', x: 'Hält schnell eine Notiz oder Pendenz zu dieser Lektion fest. Sie erscheint danach auch unter «Notizen & Memos».' },
    { a: 'Wochenplan', t: 'Lektion', s: '[data-help="lessonCard"]', x: 'Tippe auf die Karte, um die Lektion zu planen: Einstieg, Hauptteil, Schluss, Hausaufgaben, Dateien und Notizen.' },

    // ---------- Notizen & Memos ----------
    { a: 'Notizen & Memos', t: 'Klassenfilter', s: '#notesClassFilter', x: 'Zeigt nur die Pendenzen einer Klasse. Freie Pendenzen ohne Klasse erscheinen nur bei «Alle Klassen».' },
    { a: 'Notizen & Memos', t: 'Erledigte anzeigen', s: '#showDoneNotesCheck, label[for="showDoneNotesCheck"]', x: 'Blendet bereits abgehakte Pendenzen ein.' },
    { a: 'Notizen & Memos', t: 'Neue freie Pendenz', s: '#standaloneNoteInput', x: 'Hier schreibst du eine Pendenz, die zu keiner Lektion gehört, z. B. «Kopierpapier bestellen».' },
    { a: 'Notizen & Memos', t: 'Fällig am', s: '#standaloneNoteDue', x: 'Das Datum, an dem die neue Pendenz fällig ist. Ein Tipp öffnet den Kalender.' },
    { a: 'Notizen & Memos', t: 'Heute', s: '[onclick="setStandaloneDue(0)"]', x: 'Setzt das Fälligkeitsdatum der neuen Pendenz auf heute.' },
    { a: 'Notizen & Memos', t: 'Morgen', s: '[onclick="setStandaloneDue(1)"]', x: 'Setzt das Fälligkeitsdatum der neuen Pendenz auf morgen.' },
    { a: 'Notizen & Memos', t: 'Hinzufügen', s: '#standaloneNoteInput ~ button[type="submit"], form[onsubmit*="addStandaloneNote"] button[type="submit"]', x: 'Speichert die neue Pendenz.' },
    { a: 'Notizen & Memos', t: 'Mit KI hinzufügen', s: '[onclick*="toggleTodoAiBox"]', x: 'Du fügst eine Liste oder einen Text ein, und die KI macht daraus einzelne Pendenzen mit Datum. Du prüfst sie, bevor sie übernommen werden.' },
    { a: 'Notizen & Memos', t: 'Erkennen', s: '#todoAiBtn', x: 'Lässt die KI den Text in einzelne Pendenzen zerlegen. Übernommen wird erst, wenn du es bestätigst.' },
    { a: 'Notizen & Memos', t: 'Box (abhaken)', s: '[data-todo-row] input[type="checkbox"]', x: 'Hakt die Pendenz ab. Nur die Box hakt ab, ein Tipp auf die Karte öffnet die Bearbeitung.' },
    { a: 'Notizen & Memos', t: 'Datum der Pendenz', s: '[data-todo-row] input[type="date"]', x: 'Ändert das Fälligkeitsdatum. Ein Tipp öffnet sofort den Kalender. Rechts steht der Wochentag.' },
    { a: 'Notizen & Memos', t: 'Morgen (Pendenz verschieben)', s: '[data-todo-row] button[title^="Auf den n"]', x: 'Verschiebt die Pendenz auf den nächsten Schultag. Wochenenden und Ferien werden übersprungen. Weiter tippen schiebt Tag für Tag weiter.' },
    { a: 'Notizen & Memos', t: 'Löschen', s: '[data-todo-row] button[onclick*="delete"]', x: 'Löscht die Pendenz. Im Verlauf kannst du sie wiederherstellen.' },
    { a: 'Notizen & Memos', t: 'Lektion öffnen', s: '[data-todo-row] button[onclick*="openLessonFromYear"]', x: 'Öffnet die Lektion, zu der diese Pendenz gehört.' },
    { a: 'Notizen & Memos', t: 'Pendenz', s: '[data-todo-row]', x: 'Tippe auf die Karte (ausser auf Box, Datum und Knöpfe), um den Titel zu bearbeiten. Enter speichert, Esc bricht ab.' },

    // ---------- Jahreskalender ----------
    { a: 'Jahreskalender', t: 'Mit KI erkennen (Ferien)', s: '#holidayAiBtn', x: 'Du fügst einen Text mit Ferien oder Terminen ein, und die KI erkennt die Daten. Du prüfst die Liste, bevor sie in den Kalender kommt.' },
    { a: 'Jahreskalender', t: 'Typ des Termins', s: '#newEventType', x: 'Hinweis: Unterricht findet normal statt. Spezialtag: anderer Unterricht. Schulfrei: Die Lektionen fallen aus.' },
    { a: 'Jahreskalender', t: 'Betrifft Klasse(n)', s: '#newEventTargetClass', x: 'Legt fest, für welche Klasse der Termin gilt, oder für alle.' },
    { a: 'Jahreskalender', t: '+ Termin', s: '[onclick*="addManualCalendarEvent"]', x: 'Trägt den Termin mit den Angaben links in den Kalender ein.' },
    { a: 'Jahreskalender', t: 'Mit KI durchsuchen', s: '#yearAiBtn', x: 'Lässt die KI deine geplanten Lektionen nach Terminen und Daten durchsuchen, die in den Kalender gehören könnten.' },
    { a: 'Jahreskalender', t: 'Klassenfilter', s: '#yearClassFilter', x: 'Zeigt nur die Einträge einer Klasse.' },
    { a: 'Jahreskalender', t: 'Vergangenes ausblenden', s: '#yearPastToggle', x: 'Blendet vergangene Einträge aus oder wieder ein.' },
    { a: 'Jahreskalender', t: 'Heute', s: '[onclick*="scrollYearToToday"]', x: 'Springt in der Liste zum heutigen Datum.' },
    { a: 'Jahreskalender', t: 'Statistik', s: '#yearStatsBtn', x: 'Zeigt eine Übersicht, wie viele Lektionen pro Fach und Klasse geplant sind.' },
    { a: 'Jahreskalender', t: 'Drucken / PDF', s: '[onclick*="printYearCalendar"]', x: 'Druckt den Jahreskalender oder speichert ihn als PDF.' },

    // ---------- Lektion planen ----------
    { a: 'Lektion planen', t: 'Hausaufgabe auf heute', s: '#editLessonHomeworkToday', x: 'Die Hausaufgabe, die an dieser Lektion fällig ist. Sie wird automatisch aus der vorherigen Lektion übernommen.' },
    { a: 'Lektion planen', t: 'Prüfung / Lernkontrolle', s: '#editLessonIsExam, label[for="editLessonIsExam"]', x: 'Markiert die Lektion als Prüfung. Die Karte im Wochenplan wird rot hervorgehoben.' },
    { a: 'Lektion planen', t: 'Gefäss / Schwerpunkt', s: '#editLessonTrack', x: 'Zum Beispiel «Literatur», «Grammatik» oder «Schreiben». Damit lassen sich Lektionen eines Gefässes zusammen verschieben.' },
    { a: 'Lektion planen', t: 'Sequenz / Einheit', s: '#editLessonUnit', x: 'Der Name der Unit oder Sequenz, zu der die Lektion gehört.' },
    { a: 'Lektion planen', t: 'Stundenthema', s: '#editLessonTitle', x: 'Das Thema oder der Fokus dieser Lektion in einem Satz.' },
    { a: 'Lektion planen', t: 'Vorlage einfügen', s: '[onclick*="openTemplatePicker"]', x: 'Fügt eine gespeicherte Vorlage in diese Lektion ein.' },
    { a: 'Lektion planen', t: 'Als Vorlage speichern', s: '[onclick*="saveLessonAsTemplate"]', x: 'Speichert diese Lektion als Vorlage, um sie später wiederzuverwenden.' },
    { a: 'Lektion planen', t: 'Einstieg, Hauptteil, Schluss', s: '#editPhaseEinstieg, #editPhaseHauptteil, #editPhaseSchluss', x: 'Der Ablauf der Lektion in drei Phasen. Du kannst fett, kursiv, unterstrichen und mit Aufzählungen schreiben.' },
    { a: 'Lektion planen', t: 'KI-Phase wählen', s: '#aiPhaseEinstieg, #aiPhaseHauptteil, #aiPhaseSchluss', x: 'Wählt, für welche Phase die KI einen Vorschlag machen soll.' },
    { a: 'Lektion planen', t: 'Freier Auftrag', s: '#aiPhaseFrei', x: 'Die KI macht genau das, was du in das Feld schreibst, ohne feste Phase.' },
    { a: 'Lektion planen', t: 'Generieren', s: '#lessonAiRunBtn', x: 'Lässt die KI einen Vorschlag erstellen. Er wird erst übernommen, wenn du «Ersetzen» oder «Anhängen» drückst.' },
    { a: 'Lektion planen', t: 'Kopieren (KI-Vorschlag)', s: '[onclick*="copyAiResult"]', x: 'Kopiert den KI-Vorschlag in die Zwischenablage.' },
    { a: 'Lektion planen', t: 'Ersetzen / Anhängen', s: '#aiInsertReplaceBtn, #aiInsertAppendBtn', x: 'Ersetzen überschreibt den gewählten Teil mit dem KI-Vorschlag. Anhängen setzt ihn dahinter.' },
    { a: 'Lektion planen', t: 'Hausaufgaben fürs nächste Mal', s: '#editLessonHomework', x: 'Die Hausaufgabe, die du in dieser Lektion aufgibst.' },
    { a: 'Lektion planen', t: 'Hausaufgabe übertragen auf', s: '#homeworkTargetLessonSelect', x: 'Wählt die Lektion, an der die Hausaufgabe als «Hausaufgabe auf heute» erscheint.' },
    { a: 'Lektion planen', t: 'Parallelklasse', s: '#parallelTargetLessonSelect, #parallelSyncModeSelect', x: 'Überträgt Inhalte in eine Lektion desselben Fachs bei einer anderen Klasse. «Ergänzen» behält Bestehendes, «Überschreiben» ersetzt es.' },
    { a: 'Lektion planen', t: 'Übertragen', s: '[onclick*="applyParallelTransferNow"]', x: 'Führt die Übertragung in die Parallelklasse jetzt aus.' },
    { a: 'Lektion planen', t: '+ Notiz (Pendenz)', s: '[onclick*="addLessonTodo"]', x: 'Fügt der Lektion eine Pendenz hinzu. Sie erscheint auch unter «Notizen & Memos».' },
    { a: 'Lektion planen', t: 'Aufnahme / Stopp (Sprachmemo)', s: '#startVoiceBtn, #stopVoiceBtn', x: 'Nimmt ein Sprachmemo zu dieser Lektion auf. «Stopp» beendet die Aufnahme.' },
    { a: 'Lektion planen', t: '+ Aus Drive', s: '[onclick*="addDriveFileToLesson"]', x: 'Hängt eine Datei aus deinem Google Drive an die Lektion.' },
    { a: 'Lektion planen', t: '+ Datei', s: '[onclick*="lessonFileInput"]', x: 'Hängt eine Datei von diesem Gerät an die Lektion.' },
    { a: 'Lektion planen', t: 'Link +', s: '[onclick*="addLessonLink"]', x: 'Fügt der Lektion einen Link hinzu, z. B. zu einer Webseite oder einem Dokument.' },
    { a: 'Lektion planen', t: 'Verschieben…', s: '[onclick*="openMoveLessonModal"]', x: 'Verschiebt oder kopiert den Inhalt dieser Lektion in eine andere Lektion.' },
    { a: 'Lektion planen', t: 'Verschieben bestätigen', s: '#moveConfirmBtn', x: 'Führt das Verschieben oder Kopieren mit der gewählten Einstellung aus.' },
    { a: 'Lektion planen', t: 'Leeren', s: '#lessonModal [onclick*="clearCurrentLesson"]', x: 'Leert die Felder dieser Lektion. Mit «Wiederherstellen» holst du den Inhalt zurück, solange der Dialog offen ist.' },
    { a: 'Lektion planen', t: 'Wiederherstellen', s: '#restoreLessonBtn', x: 'Holt den soeben geleerten Inhalt zurück.' },
    { a: 'Lektion planen', t: 'Frühere Versionen', s: '[onclick*="openVersionsModal"]', x: 'Zeigt frühere Stände dieser Lektion. Du kannst einen davon wiederherstellen.' },
    { a: 'Lektion planen', t: 'Speichern', s: '#lessonModal [onclick*="saveLessonModal"]', x: 'Speichert die Lektion und schliesst den Dialog.' },
    { a: 'Lektion planen', t: 'Abbrechen / Schliessen', s: '#lessonModal [onclick="closeLessonModal()"]', x: 'Schliesst den Dialog. Bei ungespeicherten Änderungen fragt die App nach.' },

    // ---------- Stundenplan ----------
    { a: 'Stundenplan', t: 'Neue Lektion: Tag und Zeit', s: '#newSlotDay, #newSlotTime', x: 'Wähle Wochentag und Lektionszeit für eine neue Lektion im Stundenplan.' },
    { a: 'Stundenplan', t: '+ (Lektion hinzufügen)', s: '[onclick*="addManualScheduleSlot"]', x: 'Fügt die Lektion mit Fach, Klasse und Gefäss dem Stundenplan hinzu.' },
    { a: 'Stundenplan', t: 'Fach und Klasse ändern', s: '[onclick*="startSlotEditInOverview"]', x: 'Tippe auf eine Lektion, um Fach und Klasse anzupassen. Die geplanten Inhalte bleiben erhalten. Die Änderung gilt für diesen Platz im Stundenplan an allen Terminen.' },
    { a: 'Stundenplan', t: 'Gefäss im Stundenplan', s: '#manualScheduleList input', x: 'Trage hier das Gefäss ein, z. B. «Literatur» oder «Grammatik».' },
    { a: 'Stundenplan', t: '✕ (Lektion entfernen)', s: '[onclick*="deleteScheduleSlot"]', x: 'Entfernt die Lektion aus dem Stundenplan, nach einer Rückfrage. Bereits geplante Inhalte werden danach nicht mehr angezeigt, bleiben aber im Backup.' },

    // ---------- Stellvertretung & Suche ----------
    { a: 'Stellvertretung', t: 'Heute / Morgen / Angezeigte Woche', s: '[onclick*="setSubstituteQuick"]', x: 'Setzt den Zeitraum für die Druckansicht schnell auf heute, morgen oder die angezeigte Woche.' },
    { a: 'Stellvertretung', t: 'Alle / Keine', s: '[onclick*="setAllSubstituteChecks"]', x: 'Wählt alle Lektionen an oder ab.' },
    { a: 'Stellvertretung', t: 'Drucken / PDF', s: '[onclick*="printSelectedSubstitute"]', x: 'Erstellt die Druckansicht für die gewählten Lektionen, ohne private Pendenzen.' },
    { a: 'Suche', t: 'Mit KI suchen', s: '#searchAiBtn', x: 'Beantwortet eine Frage zu deinen Lektionen mit Hilfe der KI.' },
    { a: 'Suche', t: 'Klassenfilter', s: '#searchClassFilter', x: 'Sucht nur in Lektionen einer Klasse.' },

    // ---------- Datei / Sequenz (Import) ----------
    { a: 'Import', t: '1. Lektionenablauf / Sequenz', s: '#impTypeBtn_sequence', x: 'Liest einen Ablauf aus Word oder PDF und verteilt ihn auf die Lektionen im Kalender.' },
    { a: 'Import', t: '2. Stundenplan', s: '#impTypeBtn_schedule', x: 'Liest einen Stundenplan aus Excel oder einem PDF ein.' },
    { a: 'Import', t: '3. Ferien & Spezialtage', s: '#impTypeBtn_holidays', x: 'Liest Ferien und Spezialtage aus einem Jahresprogramm ein.' },
    { a: 'Import', t: '4. Chalk-Planboard', s: '#impTypeBtn_chalk', x: 'Liest einen Wochenexport aus Chalk-Planboard (PDF) ein.' },
    { a: 'Import', t: 'Dateien auswählen', s: '[onclick*="universalFileInput"]', x: 'Wähle die Datei von diesem Gerät.' },
    { a: 'Import', t: 'Mit KI in Lektionen gliedern', s: '#formatSeqAiBtn', x: 'Die KI gliedert eingefügten Text in einzelne Lektionen. Du prüfst die Zuordnung, bevor etwas übernommen wird.' },
    { a: 'Import', t: 'Prompt für NotebookLM / Gemini kopieren', s: '[onclick*="copyNotebookPrompt"]', x: 'Kopiert einen fertigen Auftrag, den du in NotebookLM oder Gemini einfügen kannst, um deine Unterlagen passend aufzubereiten.' },
    { a: 'Import', t: 'Ausgewählte Zuordnung übernehmen', s: '[onclick*="applyUniversalImportSelection"]', x: 'Übernimmt die angewählten Einträge in deinen Planer.' },

    // ---------- Einstellungen & Backup ----------
    { a: 'Einstellungen & Backup', t: 'Alle Cloud-Dokumente suchen', s: '#scanCloudBtn', x: 'Sucht in der Cloud nach deinen Dokumenten und kann ältere Stände wiederherstellen. Für den Notfall, wenn etwas fehlt.' },
    { a: 'Einstellungen & Backup', t: 'Aktuellen Stand jetzt in Cloud speichern', s: '[onclick*="forcePushLocalToCloud"]', x: 'Schreibt den Stand dieses Geräts sofort in die Cloud und überschreibt dort den älteren Stand.' },
    { a: 'Einstellungen & Backup', t: 'KI-Schlüssel hinzufügen', s: '#aiKeyAddBtn, #aiKeyProvider', x: 'Hier hinterlegst du deinen KI-Schlüssel. Die App erkennt den Anbieter meist selbst.' },
    { a: 'Einstellungen & Backup', t: 'Alle testen', s: '#testApiBtn', x: 'Prüft, ob die hinterlegten KI-Schlüssel funktionieren.' },
    { a: 'Einstellungen & Backup', t: 'Jetzt in der Cloud sichern', s: '#manualCloudBackupBtn', x: 'Legt sofort eine Sicherung in der Cloud an. Zusätzlich gibt es automatisch eine tägliche Sicherung, die 30 Tage aufbewahrt wird.' },
    { a: 'Einstellungen & Backup', t: 'Backup herunterladen', s: '[onclick*="exportFullBackup"]', x: 'Lädt alle Schuljahre als Datei (.json) auf dieses Gerät.' },
    { a: 'Einstellungen & Backup', t: 'Backup einspielen', s: 'label:has(> input[onchange^="importFullBackup"])', x: 'Spielt eine Backup-Datei (.json) für das gewählte Schuljahr ein. Vorher sichert die App den aktuellen Stand. Lektionen werden ergänzt, Stundenplan, Kalender und freie Pendenzen durch die Datei ersetzt.' },
    { a: 'Einstellungen & Backup', t: 'Unterschiede ansehen', s: 'label[title^="Zeigt, was in der Datei steht"]', x: 'Zeigt, was in einer Backup-Datei steht, aber im aktuellen Stand fehlt, und holt nur das, was du anwählst. So spielst du nichts ungewollt ein.' },
    { a: 'Einstellungen & Backup', t: 'In Drive sichern', s: '#driveBackupBtn', x: 'Speichert eine Sicherung in deinem Google Drive im Ordner «Teaching Cockpit Backups».' },
    { a: 'Einstellungen & Backup', t: 'Ordner wählen / zurücksetzen', s: '[onclick*="chooseDriveFolder"], #driveFolderResetBtn', x: 'Wählt den Drive-Ordner für die Sicherung oder setzt die Wahl zurück.' },
    { a: 'Einstellungen & Backup', t: 'Code sichern', s: '[onclick*="driveBackupCode"]', x: 'Sichert den Programmcode dieser App (bzw. aller Apps) als Datei in deinem Drive. Nur für den Besitzer.' },
    { a: 'Einstellungen & Backup', t: 'Einstellungen speichern', s: '[onclick*="saveSettingsModal"]', x: 'Speichert die Einstellungen und schliesst den Dialog.' }
  ];

  const GENERIC = { a: '', t: 'Keine Erklärung vorhanden', x: 'Zu diesem Element gibt es noch keine Hilfe. Öffne die Hilfeseite für alle Erklärungen oder schreibe über «Feedback», was fehlt.' };

  // ---------- Stile ----------
  const css = document.createElement('style');
  css.textContent = `
  body.help-mode, body.help-mode * { cursor: help !important; }
  #helpBanner { position: fixed; bottom: 14px; left: 50%; transform: translateX(-50%); z-index: 100000; display: none; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: center; max-width: 94vw; padding: 8px 12px; background: #4f46e5; color: #fff; border-radius: 12px; font: 600 13px/1.3 Inter, system-ui, sans-serif; box-shadow: 0 8px 24px rgba(0,0,0,.25); }
  body.help-mode #helpBanner { display: flex; }
  @media (max-width: 767px) { #helpBanner { bottom: calc(env(safe-area-inset-bottom, 0px) + 78px); } }
  #helpBanner button { cursor: pointer !important; background: #fff; color: #3730a3; border: 0; border-radius: 8px; padding: 5px 10px; font: 700 12px Inter, system-ui, sans-serif; }
  #helpBanner button.sec { background: rgba(255,255,255,.18); color: #fff; }
  #helpPop { position: fixed; z-index: 100001; display: none; width: min(340px, 92vw); background: #fff; color: #0f172a; border: 1px solid #c7d2fe; border-radius: 14px; box-shadow: 0 12px 32px rgba(15,23,42,.28); padding: 12px 14px; font: 500 13px/1.45 Inter, system-ui, sans-serif; }
  #helpPop h4 { margin: 0 24px 4px 0; font: 800 14px Inter, system-ui, sans-serif; color: #3730a3; }
  #helpPop p { margin: 0 0 8px; }
  #helpPop .hp-x { position: absolute; top: 6px; right: 8px; border: 0; background: transparent; font-size: 18px; color: #64748b; cursor: pointer !important; }
  #helpPop .hp-all { border: 0; background: transparent; color: #4f46e5; font: 700 12px Inter, system-ui, sans-serif; padding: 0; text-decoration: underline; cursor: pointer !important; }
  .help-target { outline: 3px solid #f59e0b !important; outline-offset: 2px; border-radius: 6px; }
  #helpMenu { position: fixed; z-index: 100002; display: none; min-width: 210px; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 12px 28px rgba(15,23,42,.22); padding: 6px; font: 600 13px Inter, system-ui, sans-serif; }
  #helpMenu button { display: block; width: 100%; text-align: left; border: 0; background: transparent; padding: 9px 10px; border-radius: 8px; color: #0f172a; font: 600 13px Inter, system-ui, sans-serif; cursor: pointer; }
  #helpMenu button:hover { background: #eef2ff; }
  #helpModal { position: fixed; inset: 0; z-index: 100003; display: none; background: rgba(15,23,42,.5); align-items: center; justify-content: center; padding: 10px; }
  #helpModal .hm-box { background: #fff; width: min(720px, 100%); max-height: 92vh; border-radius: 16px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,.35); font: 500 13px/1.45 Inter, system-ui, sans-serif; color: #0f172a; }
  #helpModal .hm-head { display: flex; align-items: center; gap: 8px; padding: 12px 14px; border-bottom: 1px solid #e2e8f0; }
  #helpModal .hm-head h3 { margin: 0; font: 800 15px Inter, system-ui, sans-serif; flex: 1; }
  #helpModal .hm-head button { border: 0; background: #eef2ff; color: #3730a3; border-radius: 8px; padding: 6px 10px; font: 700 12px Inter, system-ui, sans-serif; cursor: pointer; }
  #helpModal .hm-head .hm-close { background: transparent; color: #64748b; font-size: 20px; padding: 2px 8px; }
  #helpModal input[type=search] { margin: 10px 14px 4px; padding: 8px 10px; border: 1px solid #cbd5e1; border-radius: 10px; font: 500 14px Inter, system-ui, sans-serif; width: calc(100% - 28px); box-sizing: border-box; }
  #helpModal .hm-body { overflow-y: auto; padding: 4px 14px 14px; }
  #helpModal h5 { margin: 14px 0 4px; font: 800 11px Inter, system-ui, sans-serif; letter-spacing: .06em; text-transform: uppercase; color: #4f46e5; }
  #helpModal .hm-item { padding: 7px 0; border-bottom: 1px solid #f1f5f9; }
  #helpModal .hm-item b { display: block; font-weight: 800; }
  #helpModal .hm-empty { padding: 20px 0; color: #64748b; text-align: center; }
  @media print { #helpBanner, #helpPop, #helpMenu, #helpModal { display: none !important; } }
  `;
  document.head.appendChild(css);

  // ---------- Bausteine ----------
  const mk = (tag, id, html) => { const e = document.createElement(tag); if (id) e.id = id; if (html != null) e.innerHTML = html; document.body.appendChild(e); return e; };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const banner = mk('div', 'helpBanner', '<span>Hilfe: Tippe auf einen Knopf, dann wird er erklärt.</span><button type="button" data-a="all">Alle Hilfen</button><button type="button" class="sec" data-a="end">Beenden</button>');
  const pop = mk('div', 'helpPop', '');
  const menu = mk('div', 'helpMenu', '<button type="button" data-a="mode">❓ Knopf erklären</button><button type="button" data-a="page">📖 Hilfeseite öffnen</button>');
  const modal = mk('div', 'helpModal', '<div class="hm-box"><div class="hm-head"><h3>Hilfe</h3><button type="button" data-a="mode">Knopf erklären</button><button type="button" class="hm-close" data-a="close" aria-label="Schliessen">✕</button></div><input type="search" id="helpSearch" placeholder="Suchen, z. B. «Pendenz», «Backup», «Stundenplan»" autocomplete="off"><div class="hm-body" id="helpBody"></div></div>');

  let active = false;
  let target = null;

  function findItem(el) {
    let best = null, bestDist = Infinity;
    for (const it of HELP_ITEMS) {
      let m = null;
      try { m = el.closest(it.s); } catch (e) { m = null; }
      if (!m) continue;
      let d = 0, n = el;
      while (n && n !== m) { n = n.parentElement; d++; }
      if (d < bestDist) { best = { it, el: m }; bestDist = d; }
    }
    return best;
  }

  function clearTarget() { if (target) target.classList.remove('help-target'); target = null; }

  function showPop(it, el) {
    clearTarget();
    if (el) { target = el; el.classList.add('help-target'); }
    pop.innerHTML = '<button type="button" class="hp-x" data-a="x" aria-label="Schliessen">×</button><h4>' + esc(it.t) + '</h4><p>' + esc(it.x) + '</p><button type="button" class="hp-all" data-a="all">Alle Hilfen ansehen</button>';
    pop.style.display = 'block';
    const r = el ? el.getBoundingClientRect() : { left: window.innerWidth / 2, right: window.innerWidth / 2, top: 80, bottom: 80 };
    const pw = pop.offsetWidth, ph = pop.offsetHeight, vw = window.innerWidth, vh = window.innerHeight;
    let left = Math.min(Math.max(8, r.left), vw - pw - 8);
    let top = r.bottom + 10;
    if (top + ph > vh - 8) top = Math.max(8, r.top - ph - 10);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  }
  function hidePop() { pop.style.display = 'none'; clearTarget(); }

  function startMode() {
    closeMenu(); closePage();
    active = true; document.body.classList.add('help-mode'); hidePop();
  }
  function endMode() { active = false; document.body.classList.remove('help-mode'); hidePop(); }

  function openMenu(btn) {
    const r = btn.getBoundingClientRect();
    menu.style.display = 'block';
    menu.style.top = (r.bottom + 6) + 'px';
    menu.style.left = Math.max(8, Math.min(window.innerWidth - menu.offsetWidth - 8, r.right - menu.offsetWidth)) + 'px';
  }
  function closeMenu() { menu.style.display = 'none'; }

  function renderPage(q) {
    const needle = (q || '').trim().toLowerCase();
    const groups = [];
    HELP_ITEMS.forEach((it) => {
      if (needle && !(it.t + ' ' + it.x + ' ' + it.a).toLowerCase().includes(needle)) return;
      let g = groups.find((x) => x.a === it.a);
      if (!g) { g = { a: it.a, items: [] }; groups.push(g); }
      g.items.push(it);
    });
    document.getElementById('helpBody').innerHTML = groups.length
      ? groups.map((g) => '<h5>' + esc(g.a) + '</h5>' + g.items.map((it) => '<div class="hm-item"><b>' + esc(it.t) + '</b>' + esc(it.x) + '</div>').join('')).join('')
      : '<div class="hm-empty">Nichts gefunden. Schreibe über «Feedback», was fehlt.</div>';
  }
  function openPage() {
    endMode(); closeMenu();
    try { if (typeof closeMobileMenu === 'function') closeMobileMenu(); } catch (e) {}
    renderPage('');
    document.getElementById('helpSearch').value = '';
    modal.style.display = 'flex';
    setTimeout(() => document.getElementById('helpSearch').focus(), 50);
  }
  function closePage() { modal.style.display = 'none'; }

  // ---------- Ereignisse ----------
  const inUi = (t) => t.closest && (t.closest('#helpPop') || t.closest('#helpBanner') || t.closest('#helpMenu') || t.closest('#helpModal'));

  function swallow(e) {
    if (!active || inUi(e.target)) return;
    e.preventDefault(); e.stopImmediatePropagation();
  }
  ['mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'touchend', 'dblclick', 'contextmenu', 'submit', 'change', 'input', 'keydown'].forEach((ev) => {
    document.addEventListener(ev, (e) => {
      if (ev === 'keydown') {
        if (e.key === 'Escape' && (active || modal.style.display === 'flex' || menu.style.display === 'block')) {
          e.preventDefault(); e.stopImmediatePropagation();
          if (modal.style.display === 'flex') closePage(); else if (menu.style.display === 'block') closeMenu(); else endMode();
        }
        return;
      }
      if (['submit', 'change', 'input'].includes(ev)) return;
      swallow(e);
    }, true);
  });

  document.addEventListener('click', (e) => {
    const t = e.target;
    // Hilfe-Bausteine selbst
    const helpBtn = t.closest && t.closest('#helpBtn, [data-help-open]');
    if (helpBtn && !active) { e.preventDefault(); e.stopImmediatePropagation(); if (helpBtn.dataset.helpOpen === 'page') openPage(); else if (menu.style.display === 'block') closeMenu(); else openMenu(helpBtn); return; }
    if (t.closest && t.closest('#helpMenu')) {
      const a = t.closest('button') && t.closest('button').dataset.a;
      if (a === 'mode') startMode(); else if (a === 'page') openPage();
      return;
    }
    if (t.closest && t.closest('#helpModal')) {
      const a = t.closest('button') && t.closest('button').dataset.a;
      if (a === 'close' || t.id === 'helpModal') closePage(); else if (a === 'mode') startMode();
      return;
    }
    if (t.id === 'helpModal') { closePage(); return; }
    if (t.closest && t.closest('#helpBanner')) {
      const a = t.closest('button') && t.closest('button').dataset.a;
      if (a === 'end') endMode(); else if (a === 'all') openPage();
      return;
    }
    if (t.closest && t.closest('#helpPop')) {
      const a = t.closest('button') && t.closest('button').dataset.a;
      if (a === 'x') hidePop(); else if (a === 'all') openPage();
      return;
    }
    if (menu.style.display === 'block') closeMenu();
    if (!active) return;
    // Erklärmodus: Klick erklären, nicht ausführen
    e.preventDefault(); e.stopImmediatePropagation();
    const found = findItem(t);
    if (found) showPop(found.it, found.el); else showPop(GENERIC, t.closest('button, a, input, select, label') || null);
  }, true);

  document.addEventListener('input', (e) => { if (e.target && e.target.id === 'helpSearch') renderPage(e.target.value); });

  // für andere Teile der App
  window.SekHelp = { items: HELP_ITEMS, openPage, startMode, endMode };
})();
