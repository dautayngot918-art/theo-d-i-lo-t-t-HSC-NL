function calculateICU() {
  const weightInput = document.getElementById("weight");
  const weight = parseFloat(weightInput.value);

  if (isNaN(weight) || weight <= 0) {
    alert("Vui lòng nhập cân nặng hợp lệ (kg)!");
    return;
  }

  // 1. Adrenaline cấp cứu 0.01 mg/kg (pha dung dịch 1:10.000 tương đương 0.1 ml/kg)
  const adrenMl = (weight * 0.1).toFixed(2);
  document.getElementById("adren-dose").innerText = adrenMl;

  // 2. Shock điện khử rung lần đầu 2 J/kg
  const defib = Math.round(weight * 2);
  document.getElementById("defib-dose").innerText = defib;

  // 3. Khí lưu thông Vt (6 - 8 ml/kg)
  const vtMin = Math.round(weight * 6);
  const vtMax = Math.round(weight * 8);
  document.getElementById("vt-dose").innerText = `${vtMin} - ${vtMax}`;

  // 4. Bolus dịch (10 - 20 ml/kg)
  const fluidMin = Math.round(weight * 10);
  const fluidMax = Math.round(weight * 20);
  document.getElementById("fluid-dose").innerText = `${fluidMin} - ${fluidMax}`;

  // Hiển thị khung kết quả
  document.getElementById("results").style.display = "block";
}
