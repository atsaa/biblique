function roro(){
    let psaumes=["Psaumes 53.pdf","Psaumes 60.pdf","Psaumes 65.pdf","Psaumes 68.pdf","Psaumes 71.pdf","Psaumes 72.pdf","Psaumes 73.pdf"];
    const ror = document.querySelector(".list")
    for (let index = 0; index < 10; index++) {
        let maman = document.createElement('li');
        maman.textContent =`rere-${index}`;
        maman.classList.add("card")
        ror.appendChild(maman);
    }
    for (let Psaume of psaumes) {
        const element = `<div class="ok">
            <div class="ok1"></div>
            <a href = "assets/Psaumes/${Psaume}">text${Psaume}</a>
        </div>`;
        document.querySelector(".container").insertAdjacentHTML("beforeend",element);
    }
}