# Lyranthis – Foundry VTT Modul

Offizielles [Foundry VTT](https://foundryvtt.com/)-Modul für die Welt **Lyranthis**. Es erweitert das System **D&D 5e** um eigene Klassen, Spezies, Hintergründe, Zauber, Gegenstände und Kreaturen sowie um neue Regelmechaniken wie zusätzliche Zauberprogressionen und Waffeneigenschaften.

![Foundry VTT](https://img.shields.io/badge/Foundry%20VTT-v13-orange)
![System](https://img.shields.io/badge/System-dnd5e-red)
![Release](https://img.shields.io/github/v/release/Artul/lyranthis-plugin)

---

## Inhalt

- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [Kompendien](#kompendien)
- [Regelerweiterungen](#regelerweiterungen)
- [Projektstruktur](#projektstruktur)
- [Entwicklung & Releases](#entwicklung--releases)
- [Autoren](#autoren)

---

## Voraussetzungen

| Komponente   | Version          |
|--------------|------------------|
| Foundry VTT  | v13 (Minimum & verifiziert) |
| Spielsystem  | `dnd5e`          |

## Installation

1. Foundry VTT öffnen und zu **Add-on Modules → Install Module** wechseln.
2. Unten im Feld **Manifest URL** folgende Adresse einfügen:
   ```
   https://github.com/Artul/lyranthis-plugin/releases/latest/download/module.json
   ```
3. Auf **Install** klicken.
4. In der gewünschten Welt unter **Game Settings → Manage Modules** das Modul **Lyranthis** aktivieren.

Die Kompendien erscheinen anschließend im Kompendium-Tab gesammelt im Ordner **Lyranthis**.

---

## Kompendien

Spieler haben standardmäßig Leserechte (Observer), Assistenz-GMs Besitzrechte (Owner).

### Klassen (`LyranthisClasses`)

| Klasse | Unterklassen / Besonderheiten |
|--------|-------------------------------|
| Arcane Marksman | inkl. Sniper Points |
| Aural Vanguard | Magical Nature (Force, Necrotic, Radiant) |
| Divine Emissary | Emissary of Adea, Emissary of Sariana, Emissary of Valrion |
| Dragonseraph | Seraphdrakon |
| Elementar Tamer | mit eigenem Begleiter: Elementar Companion |
| Gunslinger | Pistolero |
| Samurai | School of Ronin |
| Spiritwandler | inkl. Spirit Shards |

Zusätzliche Unterklassen für Grundregelwerk-Klassen:

- **Druide:** Zirkel des Winters
- **Kleriker:** Tempest Domain

### Spezies (`LyranthisSpecies`)

Achnyx, Akuma, Beast, Draconic Construct, Ganbaxi, Kurjupu, Owlfolk, S-XIII – inklusive ihrer natürlichen Waffen und Merkmale.

### Hintergründe (`LyranthisBackgrounds`)

Balance Keeper, Diplomat, Freier Söldner, Fugitive, Harmonisierer, Schatten Kundschafter, Urchin, Vagabond, Wächter, Wayward, Wildlife

### Zauber (`LyranthisSpells`)

Unter anderem ein Satz Eiszauber vom Zaubertrick bis Grad 5 (z. B. Cold Hands, Faerie Ice, Ice Blade, Ice Storm, Ice Shield, Freezing Rain, Ice Impact) sowie weitere Zauber wie Storm Bolt, Telekinetic Grip, Moonshroud, Moonlit Rest, Moonlit Encore und Dance of the Tipsy Fey.

### Talente (`LyranthisFeats`)

Agile Weapon Handling, Corrosive Toxins, Evasive Footwork, Flurry of Fate, Static Shock

### Gegenstände (`LyranthisItems`)

| Kategorie | Beispiele |
|-----------|-----------|
| Waffen | Tonfa, Kusarigama, Battle Yo-Yo, Sling Crossbow, Staff Sling |
| Ausrüstung | Amulet of Fourfold Warding, Bracelet of the Fourfold Aegis, Fox Spirit Shield, Ring des Schicksalsbruch, Brosche von Igelutes, Abenteurer Ausweis, Balance Keeper Abzeichen |
| Verbrauchsgüter | Blendpulver, Brandflasche, Rauchkugel, Schlafpulver, Zwergenstark Pulver, Fimanella, Parasch Tomato |
| Sonstiges | Phasewing Egg, Crystalin Quaril |

### Kreaturen (`LyranthisActors`)

Phasewing (Hatchling, Juvenile, Adult), Velkar, Quaril, Ice Spirit, Eissäule, Schattenkämpfer, Spirit Sentry

### Regeln (`LyranthisRules`)

Journal-Eintrag **Rune System Rules** mit den Regeln zum Runensystem.

---

## Regelerweiterungen

Neben den Kompendien greift das Modul per Skript in die Konfiguration von D&D 5e ein.

### Zauberprogressionen

| Progression | Typ | Erholung | Beschreibung |
|-------------|-----|----------|--------------|
| **Divine Caster** | mehrere Grade | Lange Rast | Eigene Slot-Tabelle mit „Divine“-Slots (Grad 1–9), Zaubertricks möglich |
| **Seraph** | einheitlicher Slot-Grad | Kurze & lange Rast | Ähnlich Pakt-Magie: 3–6 Slots, Slot-Grad steigt bis Grad 5 |
| **Spirit** | einheitlicher Slot-Grad | – | Ab Stufe 3 ein Slot des 1. Grades, keine Zaubertricks |

### Waffeneigenschaften

| Eigenschaft | Wirkung |
|-------------|---------|
| **Parry** | Sind zwei oder mehr Waffen mit dieser Eigenschaft ausgerüstet, erhält der Charakter +1 RK. |
| **Twin** | Beim Schadenswurf mit einer Twin-Waffe wird der Schaden einer zweiten ausgerüsteten Twin-Waffe automatisch mitgewürfelt (Kritische Treffer werden berücksichtigt). |
| **Oath Iron** | Materialeigenschaft für Waffen aus Eideisen. |

### Weitere Anpassungen

- **Waffenübung:** Tonfa, Kusarigama und Battle Yo-Yo sind als Basiswaffen registriert und können in Übungen ausgewählt werden.
- **Sprachen:** Neue Sprachkategorie *Lyranthis* mit **Garatisch** (Neu-Garatisch, Alt-Garatisch) und **Sylthari**.
- **Währung:** Elektrum (EP) wird entfernt, da es in Lyranthis nicht verwendet wird.
- **Token-Marker:** Zusätzliche Statuseffekte als Markierungen – farbige Kreise (Blau, Cyan, Grün, Rot, Violett, Weiß, Gelb) und Zahlen 0–9.

---

## Projektstruktur

```
lyranthis-plugin/
├── module.json          # Modul-Manifest (Platzhalter werden beim Release ersetzt)
├── lang/
│   └── en.json          # Übersetzungen
├── packs/               # Kompendien (LevelDB)
├── icons/               # Bilder für Klassen, Spezies, Items, Kreaturen usw.
└── scripts/
    ├── main.js          # Einstiegspunkt, registriert alle Hooks
    ├── languages.js     # Lyranthis-Sprachen
    ├── weapons.js       # Neue Basiswaffen
    ├── spellcasting/    # Divine, Seraph, Spirit
    ├── weapon-properties/  # Oath Iron, Parry, Twin
    ├── status-effects/  # Token-Marker
    └── utils/           # Hilfsfunktionen (Lokalisierung)
```

---

## Entwicklung & Releases

### Lokal entwickeln

Repository direkt in den Modulordner der Foundry-Installation klonen:

```bash
cd <FoundryData>/Data/modules
git clone https://github.com/Artul/lyranthis-plugin.git lyranthis
```

Der Ordnername muss der Modul-ID **`lyranthis`** entsprechen, da Pfade wie `modules/lyranthis/icons/...` darauf verweisen. Änderungen an den Kompendien können direkt in Foundry vorgenommen werden; Foundry darf dabei nicht gleichzeitig auf die Packs zugreifen, während Git sie verändert (z. B. beim Branch-Wechsel).

### Branches & Labels

Pull Requests werden anhand des Branch-Namens automatisch gelabelt:

| Branch-Präfix | Label | Kategorie in den Release Notes |
|---------------|-------|--------------------------------|
| `feature/`, `enhancement/` | feature / enhancement | 🚀 Features |
| `fix/`, `bugfix/`, `bug/` | fix / bugfix / bug | 🐛 Bug Fixes |
| `documentation/` | documentation | 📝 Documentation |
| `chore/` | chore | 🧰 Maintenance |
| `dependency-upgrade/` | dependency-upgrade | 📦 Dependency Management |

### Release erstellen

1. Release Drafter pflegt automatisch einen Entwurf mit der nächsten Patch-Version (`vX.Y.Z`) und den gesammelten Änderungen.
2. Den Entwurf auf GitHub prüfen und **veröffentlichen**.
3. Die GitHub Action ersetzt die Platzhalter in `module.json` (Version, URL, Manifest, Download), packt `icons/`, `lang/`, `packs/`, `scripts/` und `module.json` in eine `module.zip` und hängt beide Dateien an das Release an.

Foundry erkennt neue Versionen anschließend automatisch über die Manifest-URL.

---

## Autoren

- **akazukilp**
- **Artul**
