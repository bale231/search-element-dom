//take all h2:
const h2 = document.querySelectorAll('h2');
//take all element by class "paragrafo":
const p = document.getElementsByClassName('paragrafo');
//take element li on id "elemento-3"
const li = document.getElementById('elemento-3');

console.group('Titles "h2":');
console.log(h2);
console.groupEnd();
console.group('Paragraphs "p":');
console.log(p);
console.groupEnd();
console.group('List item "li":');
console.log(li);
console.groupEnd();