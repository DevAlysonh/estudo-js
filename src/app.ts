function add(a: number, b: number) {
    let result;

    result = a + b;

    return result;
}

const addArrow = (a: number, b: number) => a + b;
const button = document.querySelector('button');

if(button) {
    let clicks: number = 0;
    button.addEventListener('click', () => {
        let quant = clicks++;
        console.log(quant);
    });
}