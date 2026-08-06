export function languages() {
    CONFIG.DND5E.languages.lyranthis = {
        label: "lyranthis.languages.category-title",
        selectable: false,
        children: {
            garatisch: {
                label: "lyranthis.languages.garatisch.title",
                children: {
                    newgaratisch: game.i18n.localize("lyranthis.languages.garatisch.new"),
                    oldgaratisch: game.i18n.localize("lyranthis.languages.garatisch.old"),
                },
            },
            sylthari: {
                label: "lyranthis.languages.sylthari.title",
            }
        },
    }
}