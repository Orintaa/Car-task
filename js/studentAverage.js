/**
 * Sakinys su studento vardu ir jo pazymiu vidurkiu
 * @param {string} name Studento vardas
 * @param {number[]} marks Studento pazymiai
 * @returns {string} Sakinys
 */
function studentAverage(name, marks) {
    const count = marks.length;
    let total = 0;
    for (const mark of marks) {
        total += mark;
    }
    const average = total / count;
    return `${name}: jos vidurkis ${average}.`;
}

module.exports = studentAverage;