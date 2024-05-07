import './style.css'

const app = document.querySelector < HTMLDivElement > ('#app')

app!.innerHTML = /*html*/`
    <div>
      <h1>JSON Tree Viewer</h1>
      <p>Simple JSON Viewer that runs completely on-client. No data exchange </p>
      <input type="file">
      <p class="error">Invalid file. Please load a valid JSON file.</p>
    </div>
  `

const renderList = () => {
  app!.innerHTML = /*html*/`
  <ul>
    ${Array.from({ length: 900000 }).map((_, i) => {
    return /*html*/`
        <li>${i}</li>
      `
  }).join("")}
  </ul>
  `
}

const inputFile = document.querySelector("input[type=file]")
inputFile?.addEventListener(("change"), (e) => {
  const target = e.target as HTMLInputElement;
  const files = target.files as FileList;

  const reader = new FileReader()
  reader.readAsText(files[0])

  // console.time();
  reader.onload = (e) => {
    console.log(e.target?.result);
  }
  renderList()
  // console.timeEnd();
})


