import {RuneSystem} from "./rune-system/index.js";
import {Localize} from "./utils/Localize.js";

Hooks.once("setup", () => {
    for (let index = 0; index < 10; index++) {
        CONFIG.statusEffects.push({
            id: `number-${index}`,
            name: `${index}`,
            img: `modules/lyranthis/icons/status-effects/dummies/numbers/Number${index}.svg`,
        });
    }
    ["Blue", "Cyan", "Green", "Red", "Violet", "White", "Yellow"].forEach((color) => {
        CONFIG.statusEffects.push({
            id: `circle-${color}`,
            name: `${color} Circle`,
            img: `modules/lyranthis/icons/status-effects/dummies/circles/Circle${color}.svg`,
        });
    });
});
Hooks.on("init", function() {
    console.log(CONFIG);
    CONFIG.DND5E.spellcasting.seraph = {
        label: "lyranthis.spell-progression.seraph",
        type: "single",
        cantrips: true,
        prepares: true,
        order: -50,
        img: "icons/magic/unholy/silhouette-robe-evil-power.webp",
        table: {
            1: { slots: 3, level: 1, },
            3: { slots: 3, level: 2, },
            5: { slots: 4, level: 3, },
            7: { slots: 4, level: 4, },
            9: { slots: 4, level: 5, },
            11: { slots: 5, level: 5, },
            17: { slots: 6, level: 5, },
        },
        progression: {
            seraph: {
                divisor: 1,
                label: game.i18n.localize("lyranthis.spell-progression.seraph"),
                roundUp: false,
            }
        }
    };
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
