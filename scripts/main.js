import {RuneSystem} from "./rune-system/index.js";
import {Localize} from "./utils/Localize.js";

Hooks.on("init", function() {
    CONFIG.DND5E.spellcasting.divine = {
        label: "lyranthis.spell-progression.divine-caster",
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
    };

    CONFIG.DND5E.languages.lyranthis = {
        label: "lyranthis.languages.category-title",
        selectable: false,
        children: {
            garatisch: {
                label: "lyranthis.languages.garatisch.title",
                children: {
                    newgaratisch: game.i18n.localize("lyranthis.languages.garatisch.new"),
                    oldgaratisch: game.i18n.localize("lyranthis.languages.garatisch.old"),
                },
            },
            sylthari: {
                label: "lyranthis.languages.sylthari.title",
            }
        },
    }
    CONFIG.DND5E.itemProperties.oathiron = {
        label: "lyranthis.item-properties.oath-iron",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("oathiron");
    delete CONFIG.DND5E.currencies.ep;
    CONFIG.LYRANTHIS = {
        runeSystem: RuneSystem,
    };
});
Hooks.once("i18nInit", () => {
    Localize(CONFIG.LYRANTHIS);
    Localize(CONFIG.DND5E.languages.lyranthis);
});
Hooks.on("ready", function() {
});
