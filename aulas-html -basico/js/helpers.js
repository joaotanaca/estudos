/**
 *
 * @template {keyof HTMLElementTagNameMap} K
 * @param {K} elementTag
 * @param {HTMLElementTagNameMap[K]} options
 * @returns {HTMLElementTagNameMap[K]}
 */
export function createElement(elementTag, options = {}) {
    const element = document.createElement(elementTag);
    Object.entries(options).forEach(([key, value]) => {
        if (typeof element[key] === "function" && key.slice(0, 1) !== "on") {
            element[key](value);
        } else {
            element[key] = value;
        }
    });

    return element;
}
