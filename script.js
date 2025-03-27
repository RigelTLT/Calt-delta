document.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы DOM
  const clientAmountInput = document.getElementById("clientAmount");
  const carrierAmountInput = document.getElementById("carrierAmount");
  const clientVatSelect = document.getElementById("clientVat");
  const carrierVatSelect = document.getElementById("carrierVat");
  const deltaInput = document.getElementById("delta");
  const calculateBtn = document.getElementById("calculate");
  const resetBtn = document.getElementById("reset");

  // Функция для расчета дельты
  function calculateDelta() {
    // Получаем значения из полей ввода
    const clientAmount = parseFloat(clientAmountInput.value) || 0;
    const carrierAmount = parseFloat(carrierAmountInput.value) || 0;

    // Получаем коэффициенты НДС
    const clientVatRate = parseFloat(clientVatSelect.value);
    const carrierVatRate = parseFloat(carrierVatSelect.value);

    // Рассчитываем суммы без НДС
    const clientAmountWithoutVat = clientAmount / clientVatRate;
    const carrierAmountWithoutVat = carrierAmount / carrierVatRate;

    // Рассчитываем дельту
    const delta = clientAmountWithoutVat - carrierAmountWithoutVat;

    // Выводим результат
    deltaInput.value = delta.toFixed(2);
  }

  // Обработчик для кнопки расчета
  calculateBtn.addEventListener("click", calculateDelta);

  // Обработчик для кнопки сброса
  resetBtn.addEventListener("click", function () {
    clientAmountInput.value = "";
    carrierAmountInput.value = "";
    deltaInput.value = "";
    clientVatSelect.value = "1.2";
    carrierVatSelect.value = "1.2";
  });

  // Можно также считать автоматически при изменении значений
  [
    clientAmountInput,
    carrierAmountInput,
    clientVatSelect,
    carrierVatSelect,
  ].forEach((element) => {
    element.addEventListener("input", calculateDelta);
  });
});
