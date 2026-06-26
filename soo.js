function setPalette(themeName) {
    // Полностью очищаем старые классы тем с тега body
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-accent');
    
    // Добавляем класс выбранной палитры
    if (themeName === 'dark') {
        document.body.classList.add('theme-dark');
    } else if (themeName === 'accent') {
        document.body.classList.add('theme-accent');
    } else {
        document.body.classList.add('theme-light');
    }
}