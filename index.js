// Write your code here!
document.querySelector('main#main').remove();

const myName = "Brian";

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = `${myName} is the champion`;
document.body.append(newHeader);