function mudarCor() {
    const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F7DC6F'];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}

let contador = 0;
function aumentarContador() {
    contador++;
    document.getElementById('contador').textContent = 'Contador: ' + contador;
}