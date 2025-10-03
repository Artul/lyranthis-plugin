export const Fire = {
    id: "fire-effect-rune",
    label: "lyranthis.rune-system.runes.effect.fire.label",
    description: "lyranthis.rune-system.runes.effect.fire.description",
    category: "EFFECT",
    complexity: "BASIC",
    pointCost: 1,
    arrayGroupContributions: [
        {
            type: "DAMAGE_DICE",
            element: "ELEMENT_FIRE",
            value: 1,
        }
    ],
    compatibilityTable: {
        WRITING: {
            PAPER: "GOOD",
            SOFTWOOD: "NEUTRAL",
            HARDWOOD: "GOOD",
            STONE: "POOR",
            METAL: "NEUTRAL",
            RAREMETAL: "GOOD",
            GEM: "OPTIMAL",
        },
        CARVING: {
            PAPER: "NEUTRAL",
            SOFTWOOD: "GOOD",
            HARDWOOD: "OPTIMAL",
            STONE: "NEUTRAL",
            METAL: "GOOD",
            RAREMETAL: "OPTIMAL",
            GEM: "GOOD",
        },
        ENGRAVING: {
            PAPER: "MISMATCHED",
            SOFTWOOD: "POOR",
            HARDWOOD: "NEUTRAL",
            STONE: "GOOD",
            METAL: "OPTIMAL",
            RAREMETAL: "GOOD",
            GEM: "NEUTRAL",
        },
        ETCHING: {
            PAPER: "POOR",
            SOFTWOOD: "MISMATCHED",
            HARDWOOD: "POOR",
            STONE: "OPTIMAL",
            METAL: "GOOD",
            RAREMETAL: "NEUTRAL",
            GEM: "GOOD",
        },
    }
};
