import {RuneSystem} from "./rune-system/index.js";

console.log("Lyranthis - main.js")

Hooks.on("init", function() {
    console.log("Lyranthis - init - main.js");
    CONFIG.DND5E.spellcasting.divine = {
        label: game.i18n.localize("lyranthis.spell-progression.divine-caster"),
        type: "multi",
        cantrips: true,
        prepares: false,
        order: -40,
        img: "systems/dnd5e/icons/spell-tiers/{id}.webp",
        table: [
            [],
            [],
            [1],
            [1],
            [1, 1],
            [1, 1],
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1, 1],
            [1, 1, 1, 1],
            [2, 1, 1, 1, 1],
            [2, 1, 1, 1, 1],
            [2, 2, 1, 1, 1, 1],
            [2, 2, 1, 1, 1, 1],
            [2, 2, 2, 1, 1, 1, 1],
            [2, 2, 2, 1, 1, 1, 1],
            [2, 2, 2, 2, 1, 1, 1, 1],
            [2, 2, 2, 2, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 1, 1, 1, 1],
            [2, 2, 2, 2, 2, 1, 1, 1, 1],
        ],
        progression: {
            divine: {
                divisor: 1,
                label: game.i18n.localize("lyranthis.spell-progression.divine-caster"),
            }
        },
        "#key": "spell",
    };

    CONFIG.DND5E.languages.lyranthis = {
        label: game.i18n.localize("lyranthis.languages.category-title"),
        selectable: false,
        children: {
            garatisch: {
                label: game.i18n.localize("lyranthis.languages.garatisch.title"),
                children: {
                    newgaratisch: game.i18n.localize("lyranthis.languages.garatisch.new"),
                    oldgaratisch: game.i18n.localize("lyranthis.languages.garatisch.old"),
                },
            },
        },
    }
    CONFIG.DND5E.itemProperties.oathiron = {
        label: game.i18n.localize("lyranthis.item-properties.oath-iron"),
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("oathiron");
    delete CONFIG.DND5E.currencies.ep;
    console.log(CONFIG.DND5E);
    CONFIG.LYRANTHIS = {
        runeSystem: RuneSystem,
    };
    console.log(CONFIG.LYRANTHIS);
});
Hooks.on("ready", function() {
    console.log("Lyranthis - ready - main.js");
});
