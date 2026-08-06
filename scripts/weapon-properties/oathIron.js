export function initOathIron() {
    CONFIG.DND5E.itemProperties.oathiron = {
        label: "lyranthis.item-properties.oath-iron",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("oathiron");
}