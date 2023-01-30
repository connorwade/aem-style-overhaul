//Get button
const button = document.querySelector('.button')
const cmpButton = document.querySelector('.cmp-button')

const tester = /^child:.*/

for(const c of button.classList) {
    if(tester.test(c)) {
        button.firstElementChild.classList.add(c.replace('child:', ''))
    }
}

cmpButton.classList.add('bg-primary')
cmpButton.classList.add('px-5')
cmpButton.classList.add('py-3')