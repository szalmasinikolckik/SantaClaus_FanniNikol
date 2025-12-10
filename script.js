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
                imgA.width = 45; 
                imgA.height = 45;
                td.appendChild(imgA);
            } else if (rand < 0.10 + 0.05) {
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

    
});

const tr = document.createElement("tr");
 const td = document.createElement("td");    
table.addEventListener("click", () =>
{
    let i = e.target;
    for (let index = 0; index < table.length; index++) {
        if (e.target ) {
            
        }

    }
    const imgC = document.createElement("img");
    imgC.src = "images/santakitty.png";
    imgC.width = 45; 
    imgC.height = 45;
    td.appendChild(imgC)

    tr.appendChild(td);
    table.appendChild(tr);
});

