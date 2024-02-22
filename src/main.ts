type TODO = any //just an alias to mark todo items

import "./style.css"

const title = "gaem"
const render = () => {
	let timeEnd = performance.now()
	document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <h1>${title}</h1>
  <p>time alive: ${timeEnd/1000}</p>
`
	requestAnimationFrame(render)
}
render()

