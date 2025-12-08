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
            const rand = Math.random(); 
            if (rand < 0.10) {
                const imgA = document.createElement("img");
                imgA.src = "images/cookie.png"; 
                imgA.width = 40; 
                imgA.height = 40;
                td.appendChild(imgA);
            } else if (rand < 0.10 + 0.05) {
                const imgB = document.createElement("img");
                imgB.src = "images/milk.png";
                imgB.width = 40; 
                imgB.height = 40;
                td.appendChild(imgB);
            }

            tr.appendChild(td); 
        }

        table.appendChild(tr); 
    }

    container.appendChild(table);
});
