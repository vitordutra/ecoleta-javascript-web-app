function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((response) => response.json())
    .then((states) => {
      for (const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}

populateUFs();

function getCities(event) {
  const citySelect = document.querySelector("[name=city]");
  const stateInput = document.querySelector("[name=state]");

  const ufID = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufID}/municipios`;

  citySelect.innerHTML = "<option value>Selecione a cidade</option>";
  citySelect.disabled = true;

  fetch(url)
    .then((response) => response.json())
    .then((cities) => {
      for (const city of cities) {
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }
      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

// Itens de Coleta

// Pegar todos os li

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

let selectedItems = [];

function handleSelectedItem(event) {
  const itemLi = event.target;
  // Add or remove class with JavaScript -> classList -> add, remove, toggle
  itemLi.classList.toggle("selected");

  const itemID = itemLi.dataset.id;

  // Verificar se existem itens selecionados. Se sim
  // Pegar os itens selecionados
  const alreadySelected = selectedItems.findIndex((item) => {
    const itemFound = item === itemID; // Isso será true ou false
    return itemFound;
  });

  // Se já estiver selecionado, tirar da seleção

  // Se não estiver adicionado, adicionar à seleção

  // Atualizar os campos escondidos com os itens selecionados
}
