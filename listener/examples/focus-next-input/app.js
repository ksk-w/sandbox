import listener from '../../src/listener'

// focus next input when press ENTER key.
listener('keydown').on('input', (e, elements, i) => {
  if (e.which === 13) {
    e.preventDefault();
    e.stopPropagation();

    const index = elements[i + 1] ? i + 1 : 0;
    elements[index].focus();
  }
});

// create New Input element
listener('click').on('#add', e => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  div.appendChild(input);
  document.querySelector('form').appendChild(div)
});
