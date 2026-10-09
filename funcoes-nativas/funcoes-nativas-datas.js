// Funções Nativas - Datas
const data = new Date();

/*
const d = data.getDate();
const m = data.getMonth();
const a = data.getFullYear();

console.log(`Data: ${d}/${m}/${a}`);

const h = data.getHours();
const mi = data.getMinutes();
const s = data.getSeconds();

console.log(`Hora: ${h}:${mi}:${s}`);
*/

// Operações com data
/*
data.setMonth(data.getDate() + 2);
data.setFullYear(data.getFullYear() + 2);
const d = data.getDate();
const m = data.getMonth() + 1;
const a = data.getFullYear();

console.log(`Data: ${d}/${m}/${a}`);
*/

data.setHours(data.getHours() + 1);
let h = data.getHours();
let mi = data.getMinutes();
let s = data.getSeconds();
console.log(`hora: ${h}:${min}:${s}`);
