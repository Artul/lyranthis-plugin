export function initCircles() {
    ["Blue", "Cyan", "Green", "Red", "Violet", "White", "Yellow"].forEach((color) => {
        CONFIG.statusEffects.push({
            id: `circle-${color}`,
            name: `${color} Circle`,
            img: `modules/lyranthis/icons/status-effects/dummies/circles/Circle${color}.svg`,
        });
    });
}