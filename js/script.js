const btns = document.querySelectorAll('.js-btn');
const inputs = document.querySelectorAll('.js-input');

const [resetBtn, copyBtn] = btns;
const [input, output] = inputs;

const mrRobot = function (str) {
  output.value = str
    .toUpperCase()
    .trim()
    .split(' ')
    .map((el) =>
      el
        .replace(/A/gi, '4')
        .replace(/E/gi, '3')
        .replace(/I/gi, '1')
        .replace(/O/gi, '0')
        .replace(/S/gi, '5')
        .replace(/T/gi, '7')
    )
    .join(' ');
};

const resetAll = () => inputs.forEach((input) => (input.value = ''));

const copy = function () {
  output.select();
  output.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(output.value);
};

input.addEventListener('input', (e) => mrRobot(e.target.value));
resetBtn.addEventListener('click', resetAll);
copyBtn.addEventListener('click', copy);
window.addEventListener('load', resetAll);
