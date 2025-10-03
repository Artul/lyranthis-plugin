export const Creature = {
    id: "creature-targeting-rune",
    label: "lyranthis.rune-system.runes.targeting.creature.label",
    description: "lyranthis.rune-system.runes.targeting.creature.description",
    category: "TARGETING",
    complexity: "BASIC",
    pointCost: 1,
    arrayGroupContributions: [
        {
            type: "TARGETS",
            value: 1,
        }
    ],
    compatibilityTable: {
        WRITING: {
            PAPER: "GOOD",
            SOFTWOOD: "NEUTRAL",
            HARDWOOD: "POOR",
            STONE: "MISMATCHED",
            METAL: "NEUTRAL",
            RAREMETAL: "POOR",
            GEM: "NEUTRAL",
        },
        CARVING: {
            PAPER: "POOR",
            SOFTWOOD: "GOOD",
            HARDWOOD: "OPTIMAL",
            STONE: "GOOD",
            METAL: "POOR",
            RAREMETAL: "NEUTRAL",
            GEM: "MISMATCHED",
        },
        ENGRAVING: {
            PAPER: "MISMATCHED",
            SOFTWOOD: "OPTIMAL",
            HARDWOOD: "GOOD",
            STONE: "OPTIMAL",
            METAL: "GOOD",
            RAREMETAL: "OPTIMAL",
            GEM: "GOOD",
        },
        ETCHING: {
            PAPER: "NEUTRAL",
            SOFTWOOD: "POOR",
            HARDWOOD: "NEUTRAL",
            STONE: "NEUTRAL",
            METAL: "OPTIMAL",
            RAREMETAL: "GOOD",
            GEM: "OPTIMAL",
        },
    }
};
