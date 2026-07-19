# 🇩🇪 Julia's Strickmuster-Editor

Ein einfacher, browserbasierter Editor zum Entwerfen von Strickmustern (Karo-/Maschenraster) – läuft komplett offline, ohne Server, ohne Installation. Einfach `strickmuster.html` im Browser öffnen und loslegen.  

Entstanden für den praktischen Einsatz beim Entwerfen von Strickmustern: Raster aufziehen, Maschen einfärben, Muster als Bild oder Datei sichern.  

**8 Sprachen: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Schalter in der Menüleiste**  
Die Standard-Sprache kann in Datei [lang.js](lang.js) festgelegt werden  

## Nutzung

1. `strickmuster.html`, `strickmuster.css` und `lang.js`im selben Ordner speichern.  
2. `strickmuster.html` per Doppelklick im Browser öffnen.  
3. Fertig – alles läuft lokal im Browser, es wird nichts an einen Server übertragen.  

## Funktionen

**Raster**
- Frei einstellbares Raster von 50 bis 200 Reihen bzw. Maschen  
- Einstellbare Zellgröße (Zoomstufe), auch per Strg/Cmd + Mausrad direkt über dem Raster – während Strg/Cmd gedrückt gehalten wird, zeigt der Mauszeiger eine Lupe  
- Zeilen-/Spaltenzahlen an allen vier Seiten (jede 10.), ein-/ausblendbar  
- Gitterlinien komplett ein-/ausblendbar, jede 10. Linie optional hervorgehoben  
- **Hintergrundbild**: eigenes Foto oder eine Vorlage hinter das komplette Raster legen (🖼️-Knopf im Header) – wächst/schrumpft beim Zoomen mit dem Raster mit, leere Maschen bleiben transparent, damit das Bild durchscheint; wird eingebettet gespeichert und ist auch im PNG-Export enthalten, aber bewusst nicht Teil von Undo/Redo  

**Werkzeuge**
- **Stift**: einzelne Maschen anklicken oder durch Ziehen mehrere am Stück einfärben  
- **Bereich**: rechteckigen Bereich aufziehen und auf einmal füllen  
- **Pipette**: Farbe aus dem Muster aufnehmen (z. B. aus einem importierten Foto) und als aktuelle Farbe übernehmen  
- Passende Mauszeiger für Stift und Pipette  
- Radiergummi zum gezielten Löschen einzelner Maschen oder Bereiche  
- Zuletzt verwendete Farben als Schnellzugriff  
- **Farbe austauschen**: eine bestimmte Farbe im gesamten Muster gegen eine andere ersetzen (oder komplett löschen), inkl. Pipette zur Auswahl der alten Farbe direkt im Raster  

**Bild-Import**
- Foto importieren, wird automatisch auf das aktuelle Raster gestreckt und in Pixelfarben umgesetzt (echtes Downsampling per Blockmittelung)  
- **Farbstufen-Reduktion**: Farbtiefe optional auf wenige, klar unterscheidbare Stufen je Kanal begrenzen (Regler) – ergibt ein gröberes, blockigeres Ergebnis statt vieler feiner Zwischentöne  
- **Auf Farbtabelle einrasten**: jede Masche kann statt einer frei berechneten Farbe automatisch die ähnlichste Farbe aus der eigenen Farbtabelle bekommen – ideal, um ein Muster nur mit tatsächlich vorhandenen Wollfarben umzusetzen; beide Optionen sind kombinierbar  

**Rückgängig / Wiederherstellen**
- Vollständiger Undo/Redo-Verlauf (bis zu 30 Schritte), per Button oder Tastenkombination (Strg+Z / Strg+Umschalt+Z bzw. Strg+Y)  

**Speichern & Exportieren**
- Export als PNG-Bild (inkl. Zeilen-/Spaltenzahlen und Gitterlinien, je nach Ansichtseinstellung)  
- Export/Import als JSON-Datei, um Muster zu sichern oder weiterzugeben  
- Warnhinweis beim versehentlichen Neuladen oder Verlassen der Seite, solange ungespeicherte Änderungen vorliegen  

**Notizzettel**
- Frei platzierbare, gelbe Klebezettel auf dem Raster, mit editierbarem Text – unabhängig vom Muster-System  
- Neuer Toolbar-Button 📝 im Header (in beiden Header-Zuständen sichtbar) legt einen neuen Zettel in der Mitte des sichtbaren Bereichs an und springt direkt in den Text  
- **Verschieben**: am oberen Streifen (Ziehgriff) anfassen, damit Klicks in den Text nicht versehentlich als Drag zählen  
- **Text**: direkt reinklicken und tippen  
- **Größe ändern**: Eck-Griff unten rechts ziehen, Zettel wächst/schrumpft von der Mitte aus  
- **Löschen**: kleiner "×"-Knopf am Griff, oder Mehrfachauswahl (Shift-Klick auf den Griff mehrerer Zettel) + Entf-Taste  
- Vollständig in Undo/Redo integriert (Verschieben, Resize, Text, Löschen, Styling zählen jeweils als ein Schritt; Text und Styling erst beim Verlassen des Feldes/Reglers, nicht bei jedem Tastendruck)  
- **Styling pro Zettel** (🎨-Knopf öffnet ein Popover): Hintergrundfarbe (Rahmenton wird automatisch als dunklerer Farbton abgeleitet), Textfarbe, Schriftgröße (10–36px); Änderungen wirken sofort live  
- Position, Größe, Text und Styling jedes Zettels werden mit in die `.json` gespeichert; ältere Muster ohne Notizen laden weiterhin problemlos (Defaults: gelb `#fff6a8`, bräunlicher Text `#5c4a1e`, 11px)  

**Farbtabelle (dauerhafte 7x7-Palette)**
- Eigener, dauerhafter Farbspeicher – getrennt von der flüchtigen "Zuletzt verwendete Farben"-Liste  
- Sitzt in der Sidebar als eigene Gruppe ("Farbtabelle") und zusätzlich als kompakter Streifen im Header  
- **Befüllen**: Pipette-Knopf "Aus Raster aufnehmen" + Klick auf eine Masche, oder manuell per Farbwähler + "Zur Farbtabelle hinzufügen"; wächst dynamisch bis maximal 49 Farben  
- **Nutzen**: Klick auf eine Farbe aktiviert sie sofort im Stift; kleines "×" (beim Hover) entfernt eine Farbe aus der Sidebar-Tabelle  
- **Sortieren**: Farbfelder per Ziehen frei in die gewünschte Reihenfolge bringen (Maus oder Touch), wirkt sich gleichzeitig auf Sidebar- und Header-Ansicht aus  
- **Speichern/Laden**: eigene `Farbtabelle.json` exportier- und importierbar (unabhängig vom Muster), zusätzlich automatische Sicherung im Browser (localStorage)  
- Bewusst **nicht** Teil von Undo/Redo oder der Muster-`.json` – bleibt musterunabhängig über mehrere Muster hinweg erhalten  

**Bedienoberfläche**
- Sprachwahl-Dropdown im Kopfbereich  
- Ein- und ausklappbare Seitenleiste sowie Kopfbereich für mehr Platz auf kleinen Bildschirmen  
- Responsives Layout, funktioniert auch auf schmaleren Fenstern/Tablets  

## Technik

Reines HTML, CSS und JavaScript (Vanilla JS, keine Frameworks oder Build-Tools nötig). Zwei Dateien:  

- `strickmuster.html` – Struktur und Logik  
- `strickmuster.css` – Gestaltung  
- `lang.js` - Sprachendatei  

## Lizenz

Dieses Projekt steht unter der [GNU General Public License v3.0](LICENSE). Der Quellcode darf frei verwendet, verändert und weitergegeben werden – Weiterentwicklungen müssen ebenfalls unter der GPLv3 offen bleiben.  

Copyright (C) 2026 heino17 https://github.com/heino17/Knitting-Pattern-Editor


---


# 🇺🇸 Julia's Knitting Pattern Editor

A simple, browser‑based editor for designing knitting patterns (grid/stitch charts) – runs completely offline, with no server and no installation required. Just open `strickmuster.html` in your browser and start working.  

Created for practical use when designing knitting patterns: set up a grid, color stitches, and save your pattern as an image or file.  

**8 languages: 🇩🇪 DE, 🇺🇸 US, 🇷🇺 RU, 🇪🇸 ES, 🇫🇷 FR, 🇯🇵 JP, 🇰🇷 KR, 🇨🇳 zh-CN - Switch in menu bar**  
The default language can be set in the [lang.js](lang.js) file  

## **Usage**

1. Save `strickmuster.html`, `strickmuster.css` and `lang.js`in the same folder.  
2. Open `strickmuster.html` in your browser via double‑click.  
3. Done – everything runs locally in the browser, nothing is transmitted to any server.

## **Features**

### **Grid**
- Freely adjustable grid from 50 to 200 rows/stitches  
- Adjustable cell size (zoom level), also via Ctrl/Cmd + mouse wheel directly over the grid – while Ctrl/Cmd is held down, the cursor turns into a magnifying glass  
- Row/column numbers on all four sides (every 10th), toggleable  
- Grid lines fully toggleable, every 10th line optionally highlighted  
- **Background image**: place your own photo or a reference image behind the entire grid (🖼️ button in the header) – grows/shrinks together with the grid when zooming, empty stitches stay transparent so the image shows through; saved embedded and included in the PNG export, but deliberately not part of undo/redo  

### **Tools**
- **Pen**: click individual stitches or drag to color multiple at once  
- **Area**: draw a rectangular selection and fill it in one step  
- **Eyedropper**: pick a color from the pattern (e.g., from an imported photo) and set it as the current color  
- Matching mouse cursors for pen and eyedropper  
- Eraser for targeted removal of individual stitches or areas  
- Recently used colors for quick access  
- **Replace color**: swap one specific color throughout the whole pattern for another (or clear it entirely), with an eyedropper to pick the old color directly from the grid  

### **Image Import**
- Import a photo; it is automatically stretched to the current grid and converted into pixel colors (true downsampling via block averaging)  
- **Color level reduction**: optionally limit the color depth to a few clearly distinct levels per channel (slider) – gives a coarser, blockier result instead of many fine in-between tones  
- **Snap to color table**: each stitch can automatically get the closest match from your own color table instead of a freely computed color – great for working only with yarn colors you actually have; both options can be combined  

### **Undo / Redo**
- Full undo/redo history (up to 30 steps), via button or keyboard shortcuts (Ctrl+Z / Ctrl+Shift+Z or Ctrl+Y)

### **Saving & Export**
- Export as PNG image (including row/column numbers and grid lines, depending on view settings)  
- Export/import as JSON file to save or share patterns  
- Warning when accidentally reloading or leaving the page while unsaved changes exist  

### **Sticky Notes**
- Freely placeable, yellow sticky notes on the grid, with editable text – independent of the pattern system  
- New 📝 toolbar button in the header (visible in both header states) creates a new note in the center of the visible area and jumps straight into the text  
- **Move**: grab the strip at the top (drag handle), so clicks in the text aren't accidentally counted as a drag  
- **Text**: click directly into it and type  
- **Resize**: drag the corner handle at the bottom right, the note grows/shrinks from its center  
- **Delete**: small "×" button on the handle, or multi-select (Shift-click the handle of several notes) + Delete key  
- Fully integrated into undo/redo (move, resize, text, delete, and styling each count as one step; text and styling are only committed when leaving the field/slider, not on every keystroke)  
- **Per-note styling** (🎨 button opens a popover): background color (border tone is automatically derived as a darker shade), text color, font size (10–36px); changes apply live immediately  
- Position, size, text, and styling of each note are saved in the `.json` file; older patterns without notes continue to load without issues (defaults: yellow `#fff6a8`, brownish text `#5c4a1e`, 11px)  

### **Color Table (persistent 7x7-slot palette)**
- A dedicated, persistent color store – separate from the transient "recently used colors" list  
- Sits in the sidebar as its own group ("Color Table") and additionally as a compact strip in the header  
- **Filling it**: eyedropper button "Pick from grid" + click a stitch, or manually via the color picker + "Add to color table"; grows dynamically up to a maximum of 49 colors  
- **Using it**: clicking a color in the sidebar palette or header strip activates it immediately in the pen tool; a small "×" (shown on hover) removes a single color from the sidebar table  
- **Reordering**: drag color swatches freely into the order you want (mouse or touch), reflected simultaneously in both the sidebar and header view  
- **Save/Load**: a dedicated `Farbtabelle.json` file can be exported and imported (independent of the pattern), and the palette is also automatically preserved in the browser (localStorage)  
- Deliberately **not** part of undo/redo or the pattern `.json` – it's a pattern-independent, personal collection that stays consistent across multiple patterns  

### **User Interface**
- Language selection dropdown in header  
- Collapsible sidebar and header area for more space on small screens  
- Responsive layout, works well on narrow windows/tablets  

## **Technology**

Pure HTML, CSS, and JavaScript (vanilla JS, no frameworks or build tools required). Two files:

- `strickmuster.html` – structure and logic  
- `strickmuster.css` – styling  
- `lang.js` - languages file  

## **License**

This project is licensed under the GNU General Public License v3.0. The source code may be freely used, modified, and distributed - any derivative works must also remain open under the GPLv3.

Copyright (C) 2026 heino17 https://github.com/heino17/Knitting-Pattern-Editor
