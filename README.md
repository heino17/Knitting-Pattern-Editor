# 🇩🇪 Strickmuster Editor

Ein einfacher, browserbasierter Editor zum Entwerfen von Strickmustern (Karo-/Maschenraster) – läuft komplett offline, ohne Server, ohne Installation. Einfach `strickmuster.html` im Browser öffnen und loslegen.

Entstanden für den praktischen Einsatz beim Entwerfen von Strickmustern: Raster aufziehen, Maschen einfärben, Muster als Bild oder Datei sichern.

## Nutzung

1. `strickmuster.html` und `strickmuster.css` im selben Ordner speichern.
2. `strickmuster.html` per Doppelklick im Browser öffnen.
3. Fertig – alles läuft lokal im Browser, es wird nichts an einen Server übertragen.

## Funktionen

**Raster**
- Frei einstellbares Raster von 50 bis 200 Reihen bzw. Maschen
- Einstellbare Zellgröße (Zoomstufe)
- Zeilen-/Spaltenzahlen an allen vier Seiten (jede 10.), ein-/ausblendbar
- Gitterlinien komplett ein-/ausblendbar, jede 10. Linie optional hervorgehoben

**Werkzeuge**
- **Stift**: einzelne Maschen anklicken oder durch Ziehen mehrere am Stück einfärben
- **Bereich**: rechteckigen Bereich aufziehen und auf einmal füllen
- **Pipette**: Farbe aus dem Muster aufnehmen (z. B. aus einem importierten Foto) und als aktuelle Farbe übernehmen
- Passende Mauszeiger für Stift und Pipette
- Radiergummi zum gezielten Löschen einzelner Maschen oder Bereiche
- Zuletzt verwendete Farben als Schnellzugriff

**Bild-Import**
- Foto importieren, wird automatisch auf das aktuelle Raster gestreckt und in Pixelfarben umgesetzt (echtes Downsampling per Blockmittelung)

**Rückgängig / Wiederherstellen**
- Vollständiger Undo/Redo-Verlauf (bis zu 30 Schritte), per Button oder Tastenkombination (Strg+Z / Strg+Umschalt+Z bzw. Strg+Y)

**Speichern & Exportieren**
- Export als PNG-Bild (inkl. Zeilen-/Spaltenzahlen und Gitterlinien, je nach Ansichtseinstellung)
- Export/Import als JSON-Datei, um Muster zu sichern oder weiterzugeben
- Warnhinweis beim versehentlichen Neuladen oder Verlassen der Seite, solange ungespeicherte Änderungen vorliegen

**Bedienoberfläche**
- Ein- und ausklappbare Seitenleiste sowie Kopfbereich für mehr Platz auf kleinen Bildschirmen
- Responsives Layout, funktioniert auch auf schmaleren Fenstern/Tablets

## Technik

Reines HTML, CSS und JavaScript (Vanilla JS, keine Frameworks oder Build-Tools nötig). Zwei Dateien:

- `strickmuster.html` – Struktur und Logik
- `strickmuster.css` – Gestaltung

## Lizenz

Dieses Projekt steht unter der [GNU General Public License v3.0](LICENSE). Der Quellcode darf frei verwendet, verändert und weitergegeben werden – Weiterentwicklungen müssen ebenfalls unter der GPLv3 offen bleiben.

Copyright (C) 2026 heino17 https://github.com/heino17/Knitting-Pattern-Editor


---


# 🇺🇸 Knitting Pattern Editor

A simple, browser‑based editor for designing knitting patterns (grid/stitch charts) – runs completely offline, with no server and no installation required. Just open `strickmuster.html` in your browser and start working.

Created for practical use when designing knitting patterns: set up a grid, color stitches, and save your pattern as an image or file.

## **Usage**

1. Save `strickmuster.html` and `strickmuster.css` in the same folder.  
2. Open `strickmuster.html` in your browser via double‑click.  
3. Done – everything runs locally in the browser, nothing is transmitted to any server.

## **Features**

### **Grid**
- Freely adjustable grid from 50 to 200 rows/stitches  
- Adjustable cell size (zoom level)  
- Row/column numbers on all four sides (every 10th), toggleable  
- Grid lines fully toggleable, every 10th line optionally highlighted  

### **Tools**
- **Pen**: click individual stitches or drag to color multiple at once  
- **Area**: draw a rectangular selection and fill it in one step  
- **Eyedropper**: pick a color from the pattern (e.g., from an imported photo) and set it as the current color  
- Matching mouse cursors for pen and eyedropper  
- Eraser for targeted removal of individual stitches or areas  
- Recently used colors for quick access  

### **Image Import**
- Import a photo; it is automatically stretched to the current grid and converted into pixel colors (true downsampling via block averaging)

### **Undo / Redo**
- Full undo/redo history (up to 30 steps), via button or keyboard shortcuts (Ctrl+Z / Ctrl+Shift+Z or Ctrl+Y)

### **Saving & Export**
- Export as PNG image (including row/column numbers and grid lines, depending on view settings)  
- Export/import as JSON file to save or share patterns  
- Warning when accidentally reloading or leaving the page while unsaved changes exist  

### **User Interface**
- Collapsible sidebar and header area for more space on small screens  
- Responsive layout, works well on narrow windows/tablets  

## **Technology**

Pure HTML, CSS, and JavaScript (vanilla JS, no frameworks or build tools required). Two files:

- `strickmuster.html` – structure and logic  
- `strickmuster.css` – styling  

## **License**

This project is licensed under the `[Anscheinend war das Ergebnis nicht sicher anzuzeigen. Lassen Sie uns die Dinge ändern und etwas anderes ausprobieren!]`. The source code may be freely used, modified, and redistributed – further developments must also remain open under GPLv3.

Copyright (C) 2026 heino17 https://github.com/heino17/Knitting-Pattern-Editor
