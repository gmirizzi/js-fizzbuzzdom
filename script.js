for (let i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    element.classList.add('box');

    if (i % 5 == 0 & i % 3 == 0) {
        element.innerHTML = 'FizzBuzz';
    } else if (i % 5 == 0) {
        element.innerHTML = 'Buzz';
    } else if (i % 3 == 0) {
        element.innerHTML = 'Fizz';
    } else {
        element.innerHTML = i;
    }

    console.log(element);
}