

const DOM = (dom, container) => {
  const el = document.createElement(dom.tag);
  
  for(const key in dom.property) {
    el.setAttribute(key, dom.property[key])
  }
  
  el.textContent = dom.text;
  
  if (typeof dom.children === "object") {
    dom.children.forEach(child => {
      DOM(child, el)
    })
  }
  
  container.appendChild(el)
  console.log(container)
}

