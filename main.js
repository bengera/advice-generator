const result = document.getElementById('quote');
const button = document.getElementById('button');
const index = document.getElementById('idx');

button.addEventListener('click', getRandomQuote);

function getRandomQuote() {
    fetch('https://api.adviceslip.com/advice', { cache: 'no-store' })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        result.innerHTML = `${data.slip.advice}`
        index.innerHTML = `advice# ${data.slip.id}`
    })
};