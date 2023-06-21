for (let i = 0; i < 150; i++) {
  const html = `<div class="pokemon">
    <img
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        i + 1
      }.png"
      alt=""
    />
    <span class="number">#${i + 1}</span>
    </div>`;

  document.querySelector("body").insertAdjacentHTML("beforeend", html);
}

// const helloBtn = document.querySelector("h1");

// helloBtn.addEventListener("click", () => console.log("hello"));
