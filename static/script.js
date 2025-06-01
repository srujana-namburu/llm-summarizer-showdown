document.getElementById("compareForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const text = document.getElementById("inputText").value;
    const model1 = document.getElementById("model1").value;
    const model2 = document.getElementById("model2").value;

    const res = await fetch("/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, model1, model2 })
    });

    const data = await res.json();

    document.getElementById("summary1").textContent = data.summary1;
    document.getElementById("summary2").textContent = data.summary2;
    document.getElementById("results").classList.remove("d-none");

    renderRatings();
});

function renderRatings() {
    const metrics = ["Clarity", "Accuracy", "Conciseness"];
    const ratings = document.getElementById("ratings");
    ratings.innerHTML = "";

    for (let i = 1; i <= 2; i++) {
        const col = document.createElement("div");
        col.classList.add("col");

        const label = document.createElement("h6");
        label.textContent = `Model ${i}`;
        col.appendChild(label);

        metrics.forEach(metric => {
            const mLabel = document.createElement("label");
            mLabel.textContent = metric;
            col.appendChild(mLabel);

            const select = document.createElement("select");
            select.classList.add("form-select", "mb-2");
            select.id = `model${i}-${metric.toLowerCase()}`;
            for (let j = 1; j <= 5; j++) {
                const opt = document.createElement("option");
                opt.value = j;
                opt.text = j;
                select.appendChild(opt);
            }
            col.appendChild(select);
        });

        ratings.appendChild(col);
    }

    const btn = document.createElement("button");
    btn.textContent = "Generate Report";
    btn.classList.add("btn", "btn-success", "mt-3");
    btn.onclick = generateChart;
    ratings.appendChild(btn);
}

function generateChart() {
    const metrics = ["clarity", "accuracy", "conciseness"];
    const model1Scores = metrics.map(m => +document.getElementById(`model1-${m}`).value);
    const model2Scores = metrics.map(m => +document.getElementById(`model2-${m}`).value);

    new Chart(document.getElementById("chart"), {
        type: "bar",
        data: {
            labels: ["Clarity", "Accuracy", "Conciseness"],
            datasets: [
                { label: "Model 1", data: model1Scores, backgroundColor: "#007bff" },
                { label: "Model 2", data: model2Scores, backgroundColor: "#28a745" }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, max: 5 }
            }
        }
    });
}
