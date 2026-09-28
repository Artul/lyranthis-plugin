export function initDivine() {
    CONFIG.DND5E.restTypes.long.recoverSpellSlotTypes.add("divine");
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
}