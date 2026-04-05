(() => {
    const darkThemes = ['ayu', 'navy', 'coal'];
    const lightThemes = ['light', 'rust'];

    const classList = document.getElementsByTagName('html')[0].classList;

    let lastThemeWasLight = true;
    for (const cssClass of classList) {
        if (darkThemes.includes(cssClass)) {
            lastThemeWasLight = false;
            break;
        }
    }

    const theme = lastThemeWasLight ? 'default' : 'dark';

    // Convert ```mermaid code blocks to mermaid-renderable divs
    document.querySelectorAll('code.language-mermaid').forEach((el) => {
        const pre = el.parentElement;
        const div = document.createElement('pre');
        div.classList.add('mermaid');
        div.textContent = el.textContent;
        pre.parentElement.replaceChild(div, pre);
    });

    mermaid.initialize({ startOnLoad: true, theme });

    for (const darkTheme of darkThemes) {
        document.getElementById(darkTheme).addEventListener('click', () => {
            if (lastThemeWasLight) {
                window.location.reload();
            }
        });
    }

    for (const lightTheme of lightThemes) {
        document.getElementById(lightTheme).addEventListener('click', () => {
            if (!lastThemeWasLight) {
                window.location.reload();
            }
        });
    }
})();
