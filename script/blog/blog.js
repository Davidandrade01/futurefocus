document.addEventListener("DOMContentLoaded", function () {
    const opinionForm = document.getElementById("opinionForm");
    const opinionInput = document.getElementById("opinionInput");
    const opinionList = document.getElementById("opinionList");

    // Carrega as opiniões salvas
    loadOpinions();

    opinionForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const opinion = opinionInput.value;
        if (opinion) {
            saveOpinion(opinion);
            opinionInput.value = "";
            displayOpinions();
        }
    });

    function saveOpinion(opinion) {
        let opinions = JSON.parse(localStorage.getItem("opinions")) || [];
        opinions.push(opinion);
        localStorage.setItem("opinions", JSON.stringify(opinions));
    }

    function loadOpinions() {
        displayOpinions();
    }

    function displayOpinions() {
        opinionList.innerHTML = "<h2>Opiniões Publicadas</h2>";
        let opinions = JSON.parse(localStorage.getItem("opinions")) || [];
        opinions.forEach((opinion, index) => {
            let div = document.createElement("div");
            div.className = "opinion-item";

            let opinionText = document.createElement("span");
            opinionText.textContent = opinion;

            let deleteBtn = document.createElement("i");
            deleteBtn.className = "fa-solid fa-trash delete-btn";
            deleteBtn.style.cursor = "pointer";
            deleteBtn.addEventListener("click", function () {
                deleteOpinion(index);
            });

            div.appendChild(opinionText);
            div.appendChild(deleteBtn);
            opinionList.appendChild(div);
        });
    }

    function deleteOpinion(index) {
        let opinions = JSON.parse(localStorage.getItem("opinions")) || [];
        opinions.splice(index, 1);
        localStorage.setItem("opinions", JSON.stringify(opinions));
        displayOpinions();
    }
});