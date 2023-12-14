/* RECOMMENDED */

// CONDITIONAL
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'New value';
input.focus();

//////////////////////////////////////////////////////////////////////

/* NO RECOMMENDED */

// Non-Null assertion ( ! ) // do not do that
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Don't do this with numbers if you need to, do it like the example below
const body4 = document.querySelector('body') as number;
body4.style.background = 'red'; // style property is not a number

// HOW TO DO IT ONE WAY

const body5 = document.querySelector('body') as unknown as number;
body5.style.background = 'red'; // style property is not a number
