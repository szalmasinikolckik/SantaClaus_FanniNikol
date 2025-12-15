let santaCell = null; 

document.getElementById("generate-board").addEventListener("click", () => {
    const rows = 10;
    const cols = 8;

    const container = document.getElementById("board-container");
    container.innerHTML = "";

    const table = document.createElement("table");
    table.id = "myTable"; 

    santaCell = null; // reseteli h az elozobe ne maradjon benne

    for (let r = 0; r < rows; r++) {
        const tr = document.createElement("tr");

        for (let c = 0; c < cols; c++) {
            const td = document.createElement("td");
            const rand = Math.random();

            if (rand < 0.10) {
                const imgA = document.createElement("img");
                imgA.src = "images/cookie.png";
                imgA.width = 45;
                imgA.height = 45;
                td.appendChild(imgA);

            } else if (rand < 0.15) {
                const imgB = document.createElement("img");
                imgB.src = "images/milk.png";
                imgB.width = 45;
                imgB.height = 45;
                td.appendChild(imgB);
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    container.appendChild(table);

    table.addEventListener("click", (e) => {
        const cell = e.target.closest("td"); 
        if (!cell) {
            return;
        }

        if (cell.querySelector("img")) {
            return;
        }

        if (santaCell !== null) { //ez miatt nem lehet tobbet placelni
            return;
        }

        const img = document.createElement("img");
        img.src = "images/santakitty.png";
        img.width = 45;
        img.height = 45;

        cell.appendChild(img);
        santaCell = cell; //lementi melyik cellaban van
        santaCell.classList.add("visited");
    });

    document.addEventListener("keydown", (e) => {
        if (santaCell === null) {
            return;
        } //ha nincs santakitty ne csinaljon semmit se

        let row = santaCell.parentElement.rowIndex;
        let col = santaCell.cellIndex;

        if (e.key === "ArrowUp") {
            row = row - 1;
        }

        if (e.key === "ArrowDown") {
            row = row + 1;
        }

        if (e.key === "ArrowLeft") {
            col = col - 1;
        }

        if (e.key === "ArrowRight") {
            col = col + 1;
        }

        if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "ArrowLeft" &&e.key !== "ArrowRight") 
        {
            return;
        }

        if (row < 0 || row >= rows || col < 0 || col >= cols) {
            return;
        }

        const newCell = table.rows[row].cells[col];

        if (newCell.querySelector("img")) {
            return;
        }

        santaCell.classList.add("visited");
        newCell.appendChild(santaCell.querySelector("img"));
        santaCell = newCell;
        santaCell.classList.add("visited");
    });
});
