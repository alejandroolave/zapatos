window.onload = function() {
    var alertDiv = document.createElement("div");
    alertDiv.className = "custom-alert";
    alertDiv.innerHTML = "<p>¡Bienvenido al Mundo del Tenis!</p>";

    document.body.appendChild(alertDiv);

    setTimeout(function() {
        alertDiv.style.display = "none";
    }, 5000); // El alert desaparecerá después de 5 segundos (5000 ms)
}
