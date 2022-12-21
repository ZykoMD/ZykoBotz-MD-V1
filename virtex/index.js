// virtex lu
const virtex1 = `Apaan sih ngentodd`;

const virtex2 = `
Apaan sih ngetodd
`;

const virtex3 = `
apaan sihh ngttod
`;

const virtex = pickRandom([virtex1, virtex2, virtex3])

export default virtex;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}



/**
 * Jangan Di Hapus!!
 * 
 * Buatan @FokusDotId (Fokus ID)
 * Github: https://github.com/fokusdotid
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6281320170984
 * 
 */
