document.getElementById("btn-comenzar").addEventListener("click", function() {
    document.getElementById("background-img").src = "C:/Users/Gerson/Desktop/Imagenes/SeleccionCamara.png";
    document.getElementById("btn-comenzar").style.display = "none";
    document.getElementById("opciones").style.display = "flex";
});

document.getElementById("btn-siguiente").addEventListener("click", function() {
    let tipoCamara = document.getElementById("tipo-camara").value;
    let imgPath = "C:/Users/Gerson/Desktop/Imagenes/";

    if (tipoCamara === "Fluke") {
        imgPath += "TutorialFluke1.png"; // Cambia el número según la lógica
    } else if (tipoCamara === "Flir") {
        imgPath += "TutorialFlir1.png"; // Cambia el número según la lógica
    }

    document.getElementById("background-img").src = imgPath;
});

document.getElementById("btn-cargar-datos").addEventListener("click", function() {
    // Aquí puedes agregar la lógica para cargar datos usando JavaScript (por ejemplo, File API)
    alert("Funcionalidad de cargar datos pendiente de implementación");
});

document.getElementById("btn-continuar").addEventListener("click", function() {
    document.getElementById("background-img").src = "C:/Users/Gerson/Desktop/Imagenes/Calculos.png";
    document.getElementById("continuar").style.display = "none";
    document.getElementById("preguntas").style.display = "block";
});

// Puedes continuar agregando más funcionalidades y transiciones
