export function initTwin() {
    CONFIG.DND5E.itemProperties.twinweapon = {
        label: "lyranthis.item-properties.twin-weapons",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("twinweapon");
    Hooks.on("dnd5e.preRollDamage", (rollConfig, dialogConfig, messageConfig) => {
        if(!rollConfig.subject.item.system.properties.has("twinweapon")) {
            return;
        }
        const currentWeaponId = rollConfig.subject.item._id;
        const twinWeapon = findTwinWeapon(rollConfig.subject.item.actor, currentWeaponId);
        if (twinWeapon == undefined) {
            return;
        }
        const twinRollData = buildTwinWeaponRoll(twinWeapon, rollConfig.isCritical);
        rollConfig.rolls.push(twinRollData);
        if (twinWeapon.name === rollConfig.subject.item.name) {
            dialogConfig.options.window.subtitle = `2x ${dialogConfig.options.window.subtitle}`;
        } else {
            dialogConfig.options.window.subtitle = `${twinWeapon.name} & ${dialogConfig.options.window.subtitle}`;
        }
    });
}
function findTwinWeapon(actor, excludedWeaponId) {
    return actor.items.find((item) => item.type === "weapon" && item._id !== excludedWeaponId && item.system.equipped && item.system.properties.has("twinweapon"));
}
function buildTwinWeaponRoll(item, isCritical) {
    const parts = [`${item.system.damage.base.number}d${item.system.damage.base.denomination}`];
    if (item.system.damage.base.bonus.trim() !== "") {
        parts.push(item.system.damage.base.bonus);
    }
    const types = Array.from(item.system.damage.base.types)
    return {
        data: item.actor,
        options: {
            properties: Array.from(item.system.properties),
            type: types[0],
            types,
            isCritical,
        },
        parts,
    };
}