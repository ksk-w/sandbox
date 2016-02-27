export default function listener(type) {
  let handlers = {};

  function on(selector, handler) {
    if (typeof handlers[selector] === 'undefined') {
      handlers[selector] = [];
    }
    handlers[selector].push(handler);

    return function off() {
      const index = handlers[selector].indexOf(handler);
      if(index > -1) {
        handlers[selector].splice(index, 1);
      }
    }
  };

  document.body.addEventListener(type, e => {
    Object.keys(handlers).forEach(selector => {
      const elements = document.querySelectorAll(selector);
      for(var i = 0, len = elements.length; i < len; i++) {
        if (elements[i] === e.target) {
          handlers[selector].forEach(h => h(e, elements, i));
        }
      }
    });
  });

  return {on};
}
