export const Localize = (data) => {
    for (const [key, value] of Object.entries(data)) {
        if (typeof value === "string") {
            data[key] = game.i18n.localize(value);
            continue;
        }
        if (typeof value === "object") {
            Localize(value);
            continue;
        }
    }
}
