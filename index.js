let themeWrapper = document.querySelector("#theme-options-wrapper");

let theme = localStorage.getItem('theme');

!theme ? setTheme('index') : setTheme(theme);


themeWrapper.addEventListener('click', e => {
    let currentTheme = e.target.getAttribute('theme');
    setTheme(currentTheme);
})

function setTheme(currentTheme){
    document.querySelector('#theme-style').href = `${currentTheme}.css`;

    localStorage.setItem('theme', currentTheme);
}

