export function initSeraph() {
    CONFIG.DND5E.restTypes.long.recoverSpellSlotTypes.add("seraph");
    CONFIG.DND5E.restTypes.short.recoverSpellSlotTypes.add("seraph");
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
}