export function initVelkarPoison() {
    CONFIG.statusEffects.push({
        id: `velkar-poison`,
        name: `Velkar Poison`,
        img: `modules/lyranthis/icons/actors/velkar/VelkarPoison.webp`,
        levels: 10,
        reduction: {},
        conditions: {
            1: ["poisoned"],
            4: ["paralyzed"],
            5: ["exhaustion"],
            6: ["exhaustion"],
            7: ["exhaustion"],
            8: ["exhaustion"],
            9: ["exhaustion"],
            10: ["exhaustion"],
        },
    });
}