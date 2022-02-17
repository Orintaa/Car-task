/**
 * Davus varda ir zodi, grazinamas sakinys, ka norejo pasakyti zmogus
 * @param {string} name Zmogaus vardas
 * @param {string} word Zodis, kuri nori istarti zmogus
 * @returns {string} Sakinys
 */
function chat(name, word) {
    return `${name} noretu pasakyti: ${word}.`;
}

module.exports = chat;