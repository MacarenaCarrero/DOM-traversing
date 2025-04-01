// todas las constantes que guardemos como elementos del DOM sería recomendable guardarlo como valorElement

//- Del div con el id box-1 imprime por consola: Todos los hijos de la lista y el item especial por separado

const box1Element = document.getElementById('box-1');
const box2Element = document.getElementById('box-2');
const subtitle1Element = document.getElementById('subtitle-1');
const subtitle2Element = document.getElementById('subtitle-2');

console.dir(box1Element);
console.log(
  ` Los hijos de ${box1Element.id} son ${box1Element.children[0].children[0].textContent}, ${box1Element.children[0].children[1].textContent} e ${box1Element.children[0].children[3].textContent}`
);
console.log(
  `El elemento especial es ${box1Element.children[0].children[2].textContent} `
);

// - Del div con el id box-2 imprime por consola: El textContent y las clases del h2 y el p

console.log(
  `${box2Element.children[0].textContent}. La clase del h2 es ${box2Element.children[0].children[0].classList} y la del p es ${box2Element.children[0].children[1].classList}.`
);

// - Del h2 con el id subtitle-1 imprime por consola: Su textContent; la clase del div; el textContent y la clase del p que tiene debajo.

console.log(
  `${subtitle1Element.textContent} y la clase del div es ${subtitle1Element.parentElement.classList} y el textContent del p es: ${subtitle1Element.nextElementSibling.textContent}  y la clase es ${subtitle1Element.nextElementSibling.classList}.`
);

// - Del h2 con el id subtitle-2 imprime por consola: Su textContent; el textContent y la clase de los dos span que tiene.

console.log(
  `El text content es: ${subtitle2Element.textContent}. El text content de los dos span es: ${subtitle2Element.previousElementSibling.textContent} y ${subtitle2Element.nextElementSibling.textContent}.`
);
