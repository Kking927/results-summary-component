fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    const listContainer = document.querySelector(".result-card__list");

    listContainer.innerHTML = "";

    data.forEach((item) => {
      const categoryClass = `summary-item-${item.category.toLowerCase()}`;

      const listItem = document.createElement("li");
      listItem.className = `summary-item ${categoryClass}`;

      listItem.innerHTML = `
        <div class="summary-item__left">
          <img src="${item.icon}" alt="" class="summary-item__icon">
          <p class="summary-item__category">${item.category}</p>
        </div>
        <div class="summary-item__right">
          <span class="summary-item__score">
            ${item.score} <span class="summary-item__score-max">/ 100</span>
          </span>
        </div>
      `;

      listContainer.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
