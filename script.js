document.getElementById("generate-board").addEventListener("click", () => {
    const rows = 10;
    const cols = 8;

    const container = document.getElementById("board-container");
    container.innerHTML = "";

    const table = document.createElement("table");

    for (let r = 0; r < rows; r++) {
        const tr = document.createElement("tr");

        for (let c = 0; c < cols; c++) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.appendChild(table);
});