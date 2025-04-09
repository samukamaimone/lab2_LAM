const input = document.getElementById("tarefaInput");
const botao = document.getElementById("adicionarBtn");
const lista = document.getElementById("lista");
botao.addEventListener("click", function(){
    const textoTarefa = input.value.trim();
    if (textoTarefa !== "") {
        const item = document.createElement("li");
        item.textContent = textoTarefa;
        item.addEventListener("click", function () {
            item.style.textDecoration = item.style.textDecoration === "line-through" ? "" : "line-through";
        });
    lista.appendChild(item);
    input.value = "";
    }
});