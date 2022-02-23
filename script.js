for (let i = 1; i <= 100; i++) {
    const element = document.createElement('div');
    element.classList.add('box');

    if (i % 5 == 0 & i % 3 == 0) {
        element.innerHTML = 'FizzBuzz';
        element.classList.add('fizzbuzz');
    } else if (i % 5 == 0) {
        element.innerHTML = 'Buzz';
        element.classList.add('buzz');
    } else if (i % 3 == 0) {
        element.innerHTML = 'Fizz';
        element.classList.add('fizz');
    } else {
        element.innerHTML = i;
    }

    document.getElementById("container").append(element);
}