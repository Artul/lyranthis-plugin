export function initSpirit() {
    CONFIG.DND5E.spellcasting.spirit = {
        label: "lyranthis.spell-progression.spirit",
        type: "single",
        cantrips: false,
        prepares: true,
        order: -50,
        img: "icons/magic/unholy/silhouette-robe-evil-power.webp",
        table: {
            3: { slots: 1, level: 1, },
        },
        progression: {
            spirit: {
                divisor: 1,
                label: game.i18n.localize("lyranthis.spell-progression.spirit"),
                roundUp: false,
            }
        }
    };
}