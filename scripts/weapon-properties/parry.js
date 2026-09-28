import { dataModels } from "../../../../systems/dnd5e/dnd5e.mjs";

export function initParry() {
    CONFIG.DND5E.itemProperties.parryweapon = {
        label: "lyranthis.item-properties.parry-weapon",
        isPhysical: true
    };
    CONFIG.DND5E.validProperties.weapon.add("parryweapon");

    const originalPrepareArmorClass = dataModels.actor.AttributesFields.prepareArmorClass;
    dataModels.actor.AttributesFields.prepareArmorClass = function (rollData) {
        originalPrepareArmorClass.call(this, rollData);
        const parryWeapons = this.parent.items.filter((item) => item.type === "weapon" && item.system.equipped && item.system.properties.has("parryweapon"));
        if (parryWeapons.length >= 2) {
            this.attributes.ac.value += 1;
        }
    };
}
