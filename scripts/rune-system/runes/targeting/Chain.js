export const Chain = {
    id: "chain-targeting-rune",
    label: "lyranthis.rune-system.runes.targeting.chain.label",
    description: "lyranthis.rune-system.runes.targeting.chain.description",
    category: "TARGETING",
    complexity: "INTERMEDIATE",
    pointCost: 2,
    arrayGroupContributions: [
        {
            type: "CHAIN_TARGETS",
            value: 1,
        }
    ],
    compatibilityTable: {
        WRITING: {
            PAPER: "POOR",
            SOFTWOOD: "NEUTRAL",
            HARDWOOD: "GOOD",
            STONE: "NEUTRAL",
            METAL: "POOR",
            RAREMETAL: "NEUTRAL",
            GEM: "MISMATCHED",
        },
        CARVING: {
            PAPER: "NEUTRAL",
            SOFTWOOD: "GOOD",
            HARDWOOD: "OPTIMAL",
            STONE: "GOOD",
            METAL: "NEUTRAL",
            RAREMETAL: "POOR",
            GEM: "NEUTRAL",
        },
        ENGRAVING: {
            PAPER: "MISMATCHED",
            SOFTWOOD: "OPTIMAL",
            HARDWOOD: "NEUTRAL",
            STONE: "OPTIMAL",
            METAL: "GOOD",
            RAREMETAL: "OPTIMAL",
            GEM: "GOOD",
        },
        ETCHING: {
            PAPER: "GOOD",
            SOFTWOOD: "POOR",
            HARDWOOD: "POOR",
            STONE: "POOR",
            METAL: "OPTIMAL",
            RAREMETAL: "GOOD",
            GEM: "OPTIMAL",
        },
    }
};
