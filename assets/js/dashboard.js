const apiURL = "https://script.google.com/macros/s/APP_SCRIPT_URL/exec";

fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    const tbody = document.querySelector("#memberTable tbody");
    data.slice(1).forEach(row => {
      const tr = document.createElement("tr");
      row.forEach(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  });
