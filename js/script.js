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
        .replace(/A/g, '4')
        .replace(/E/g, '3')
        .replace(/G/g, '6')
        .replace(/I/g, '1')
        .replace(/O/g, '0')
        .replace(/S/g, '5')
        .replace(/T/g, '7')
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
