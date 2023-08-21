let isLigado = true;
console.log(isLigado);

isLigado = false;
console.log(isLigado);

isLigado = 1;
console.log(isLigado);

console.log(!isLigado);
console.log(!!isLigado);

isLigado = 0;
console.log(isLigado);

console.log(!isLigado);
console.log(!!isLigado);

console.log(!!4);
console.log(!!" ");
console.log(" ");
console.log("");
console.log(!!' ');
console.log(!!'');
console.log(' ');
console.log(!![]);
console.log(!!{});

console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);

console.log(!!('' || null || 0 || 'oi'));
console.log('' || null || 0 || 'oi');

let nome = '';
console.log(nome || "puto");

nome = 'Arrombado';
console.log(nome || "puto mesmo");
console.log(nome && "puto mesmo.");