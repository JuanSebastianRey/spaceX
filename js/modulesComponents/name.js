export const nameRockets = async(name)=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = "";
    header__title.textContent = name;
    let logo = document.createElement("img");
    logo.src = "./storage/img/icons/iconos/spacex.svg";
    logo.style.width = "20%";
    logo.style.height = "100%";
    logo.style.position = "absolute";
    logo.style.bottom = "46%";
    logo.style.left = "80%";
    header__title.appendChild(logo);
}