function modificaPares(elementos, transforma) {
  const elementosModificados = [];
  for (const i in elementos) {
    const elemento = elementos[i];
    if (i % 2 !== 0) {
      const elementoModificado = transforma(elemento);
      elementosModificados.push(elementoModificado);
    }
  }
  return elementosModificados;
}

const numeros = [10, 4, 95, -23, -15];

console.log(modificaPares(numeros, (numero) => numero * 2));
console.log(
  modificaPares(
    numeros,
    (numero) =>
      `El número ${numero} es ${numero >= 0 ? "positivo" : "negativo"}`
  )
);

const transformaElementos = (elementos, transforma) => {
  const elementosModificados = [];
  for (const elemento of elementos) {
    elementosModificados.push(transforma(elemento));
  }
  return elementosModificados;
};
