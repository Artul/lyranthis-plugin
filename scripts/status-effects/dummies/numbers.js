export function initNumbers() {
    for (let index = 0; index < 10; index++) {
        CONFIG.statusEffects.push({
            id: `number-${index}`,
            name: `${index}`,
            img: `modules/lyranthis/icons/status-effects/dummies/numbers/Number${index}.svg`,
        });
    }
}