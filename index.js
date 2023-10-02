document.addEventListener("DOMContentLoaded", function () {
    const colorButton = document.getElementById("colorButton");
    colorButton.addEventListener("click", changeButtonColor);

    function changeButtonColor() {
        const randomColor = getRandomColor();
        colorButton.style.backgroundColor = randomColor;
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
