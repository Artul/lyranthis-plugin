import {Localize} from "./utils/Localize.js";
import {languages} from "./languages.js";
import {weapons} from "./weapons.js";
import {weaponProperties} from "./weapon-properties/index.js";
import {spellcasting} from "./spellcasting/index.js";
import {initStatusEffects} from "./status-effects/index.js";


Hooks.once("setup", () => {
    initStatusEffects();
});
Hooks.on("init", function() {
    spellcasting();
    languages();
    weaponProperties();
    weapons();

    delete CONFIG.DND5E.currencies.ep;
});
Hooks.once("i18nInit", () => {
    Localize(CONFIG.DND5E.languages.lyranthis);
});
/*
Hooks.on("ready", function() {
});
*/
/*
Hooks.on("dnd5e.preUseActivity", function (activity, usageConfig, dialogConfig, messageConfig) {
    console.log("activity", activity);
    console.log("usageConfig", usageConfig);
    console.log("dialogConfig", dialogConfig);
    console.log("messageConfig", messageConfig);
})
*/
