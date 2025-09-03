document.addEventListener("DOMContentLoaded", function () {
  const clientAmountInput = document.getElementById("clientAmount");
  const carrierAmountInput = document.getElementById("carrierAmount");
  const clientVatSelect = document.getElementById("clientVat");
  const carrierVatSelect = document.getElementById("carrierVat");
  const deltaInput = document.getElementById("delta");
  const calculateBtn = document.getElementById("calculate");
  const resetBtn = document.getElementById("reset");

  // Функция для расчета дельты
  function calculateDelta() {
    const clientAmount = parseFloat(clientAmountInput.value) || 0;
    const carrierAmount = parseFloat(carrierAmountInput.value) || 0;

    const clientVatRate = parseFloat(clientVatSelect.value);
    const carrierVatRate = parseFloat(carrierVatSelect.value);

    const clientAmountWithoutVat = clientAmount / clientVatRate;
    const carrierAmountWithoutVat = carrierAmount / carrierVatRate;

    const delta = clientAmountWithoutVat - carrierAmountWithoutVat;

    deltaInput.value = delta.toFixed(2);
  }

  calculateBtn.addEventListener("click", calculateDelta);

  resetBtn.addEventListener("click", function () {
    clientAmountInput.value = "";
    carrierAmountInput.value = "";
    deltaInput.value = "";
    clientVatSelect.value = "1.2";
    carrierVatSelect.value = "1.2";
  });

  [
    clientAmountInput,
    carrierAmountInput,
    clientVatSelect,
    carrierVatSelect,
  ].forEach((element) => {
    element.addEventListener("input", calculateDelta);
  });
});
