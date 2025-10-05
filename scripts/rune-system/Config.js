export const Config = {
    SlotStatus: {
        PLANNED: "lyranthis.rune-system.slot-status.planned",
        APPLIED: "lyranthis.rune-system.slot-status.applied",
    },

    Methods:  {
        /*
        * tool - References the tool from the DND5E Config to use with this method. "CONFIG.DND5E.tools.<insert used tool of method>"
        */
        WRITING: {
            id: "writing",
            label: "lyranthis.rune-system.method.writing",
            tool: "calligrapher",
        },
        CARVING: {
            id: "carving",
            label: "lyranthis.rune-system.method.carving",
            tool: "woodcarver",
        },
        ENGRAVING: {
            id: "engraving",
            label: "lyranthis.rune-system.method.engraving",
            tool: "mason",
        },
        ETCHING: {
            id: "etching",
            label: "lyranthis.rune-system.method.etching",
            tool: "alchemist",
        },
    },

    Materials: {
        PAPER: "lyranthis.rune-system.material.paper",
        SOFTWOOD: "lyranthis.rune-system.material.softWood",
        HARDWOOD: "lyranthis.rune-system.material.hardWood",
        STONE: "lyranthis.rune-system.material.stone",
        METAL: "lyranthis.rune-system.material.metal",
        RAREMETAL: "lyranthis.rune-system.material.rareMetal",
        GEM: "lyranthis.rune-system.material.gem",
    },

    Quality: {
        OPTIMAL: {
            id: "optimal",
            label: "lyranthis.rune-system.quality.optimal",
            dcModifier: +5,
            value: 5,
            effects: {
                dc: 20,
                dice: "d12",
                duration: "1 day",
                range: 240,
                aoe: {
                    radius: 40,
                    line: 80,
                    cone: 60,
                    cube: 40,
                }
            }
        },
        GOOD: {
            id: "good",
            label: "lyranthis.rune-system.quality.good",
            dcModifier: +2,
            value: 4,
            effects: {
                dc: 17,
                dice: "d10",
                duration: "8 hours",
                range: 120,
                aoe: {
                    radius: 20,
                    line: 60,
                    cone: 40,
                    cube: 25,
                }
            }
        },
        NEUTRAL: {
            id: "neutral",
            label: "lyranthis.rune-system.quality.neutral",
            dcModifier: 0,
            value: 3,
            effects: {
                dc: 15,
                dice: "d8",
                duration: "1 hour",
                range: 60,
                aoe: {
                    radius: 10,
                    line: 30,
                    cone: 20,
                    cube: 15,
                }
            }
        },
        POOR: {
            id: "poor",
            label: "lyranthis.rune-system.quality.poor",
            dcModifier: -2,
            value: 2,
            effects: {
                dc: 13,
                dice: "d6",
                duration: "1 minute",
                range: 30,
                aoe: {
                    radius: 5,
                    line: 15,
                    cone: 10,
                    cube: 10,
                }
            }
        },
        MISMATCHED: {
            id: "mismatched",
            label: "lyranthis.rune-system.quality.mismatched",
            dcModifier: -5,
            value: 1,
            effects: {
                dc: 10,
                dice: "d4",
                duration: "1 round",
                range: 15,
                aoe: {
                    radius: 5,
                    line: 5,
                    cone: 5,
                    cube: 5,
                }
            }
        },
    },

    Complexity: {
        BASIC: { id: "basic", label: "lyranthis.rune-system.complexity.basic", baseDC: 10, applicationTime: 1, minimumLevel: 1 },
        INTERMEDIATE: { id: "intermediate", label: "lyranthis.rune-system.complexity.intermediate", baseDC: 15, applicationTime: 3, minimumLevel: 5 },
        ADVANCED: { id: "advanced", label: "lyranthis.rune-system.complexity.advanced", baseDC: 20, applicationTime: 8, minimumLevel: 9 },
        MASTER: { id: "master", label: "lyranthis.rune-system.complexity.master", baseDC: 25, applicationTime: 24, minimumLevel: 13 },
    },

    RuneType: {
        TARGETING: "lyranthis.rune-system.rune-type.targeting",
        FORM: "lyranthis.rune-system.rune-type.form",
        EFFECT: "lyranthis.rune-system.rune-type.effect",
        TRIGGER: "lyranthis.rune-system.rune-type.trigger",
    },
}