import cssx from 'cssx';

const sheet = cssx();

const setColor = () => {
  const color = 'red';

  sheet.add(<style>
    h1 {
      color: `color`;
    }
  </style>);
};

document
  .querySelector('button')
  .addEventListener('click', setColor);
