/**
 * Suvedus masinos pavadinima bei suvartojamo kuro sanaudas, pasakoma koki atstuma galima iveikti su pilnu baku.
 * @param {string} carModel Masinos modelis
 * @param {number} fullTank Pilno kuro bako turis
 * @param {number} costsInHighway Kuro sanaudos magistraleje
 * @param {number} costsOnAverage Kuro sanaudos vidutiniskai
 * @param {number} costsInCity Kuro sanaudos mieste
 * @returns Sakinys
 */
function car(carModel, fullTank, costsInHighway, costsOnAverage, costsInCity) {
    const distanceHighway = fullTank /costsInHighway * 100;
    const distanceAverange = fullTank /costsOnAverage * 100;
    const distanceCity = fullTank /costsInCity * 100;

    return `${carModel} su ${fullTank}l baku, gali nuvaziuoti ${distanceHighway}km (magistralej, kai sanaudos yra ${costsInHighway}l/100km), ${Math.round(distanceAverange)}km (vidutiniskai, kai sanaudos yra ${costsOnAverage}l/100km) ir ${distanceCity}km (mieste, kai sanaudos yra ${costsInCity}l/100km)`;
}

module.exports = car;