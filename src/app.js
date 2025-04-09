// Nuevos arrays de pronombres, adjetivos y sustantivos
let pronoun = ['my', 'your', 'their'];
let adj = ['awesome', 'fast', 'cool'];
let noun = ['cat', 'car', 'guitar'];

// Función para generar las combinaciones de nombres de dominio
const generateDomains = () => {
    let domains = [];
    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
                domains.push(`${p}${a}${n}.com`);
            }
        }
    }
    return domains;
};

// Generar y mostrar los nombres de dominio en la consola
const domainList = generateDomains();
console.log("Nombres de dominio generados:");
domainList.forEach(domain => console.log(domain));
