function buildPlan(total, months) {

  const totalPence =
    Math.round(total * 100);

  const base =
    Math.floor(totalPence / months);

  const remainder =
    totalPence - (base * months);

  const firstPayment =
    base + remainder;

  const payments = [firstPayment];

  for (let i = 1; i < months; i++) {
    payments.push(base);
  }

  return payments.map(
    payment => (payment / 100).toFixed(2)
  );
}

function isDirectDebitAvailable(amount) {

  const monthly3 =
    Number(buildPlan(amount, 3)[1] || 0);

  const monthly6 =
    Number(buildPlan(amount, 6)[1] || 0);

  const monthly12 =
    Number(buildPlan(amount, 12)[1] || 0);

  return (
    monthly3 >= 9 ||
    monthly6 >= 9 ||
    monthly12 >= 9
  );
}