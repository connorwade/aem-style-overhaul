//Get button
const button = document.querySelector('.button')
const actualButton = document.querySelector('.cmp-button')

const tester = /^child:.*/

for(const c of button.classList) {
    if(tester.test(c)) {
        button.firstElementChild.classList.add(c.replace('child:', ''))
    }
}

actualButton.classList.add('font-bold')