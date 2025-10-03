export class RuneRulesApp extends Application {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "rune-rules",
            title: game.i18n.localize("lyranthis.rune-system.rules.title"),
            template: "modules/lyranthis/templates/rune-rules.html",
            width: 600,
            height: "auto",
            resizable: true,
            classes: ["lyranthis", "rune-rules"]
        });
    }

    getData(options) {
        return {
            config: CONFIG.LYRANTHIS.runeSystem.Config,
            DnD5ETools: CONFIG.DND5E.tools,
        };
    }
}
