const containers = document.querySelectorAll('.container')

const tester = /^child:.*/

containers.forEach(container => {
    for(const c of container.classList) {
        if(tester.test(c)) {
            container.firstElementChild.classList.add(c.replace('child:', ''))
        }
    }
})
