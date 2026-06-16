function applyPayment(session, amount) {

    const totalPaid =
        Number(session.data.totalPaidSoFar || 0);

    const outstanding =
        Number(
            session.data.outstandingBalance ??
            session.data.totalBill ??
            0
        );

    const newTotalPaid =
        totalPaid + amount;

    const newOutstanding =
        outstanding - amount;

    session.data.currentPayment =
        amount;

    session.data.currentPaymentFormatted =
        amount.toFixed(2);

    session.data.totalPaidSoFar =
        newTotalPaid;

    session.data.totalPaidSoFarFormatted =
        newTotalPaid.toFixed(2);

    session.data.outstandingBalance =
        newOutstanding;

    session.data.outstandingBalanceFormatted =
        newOutstanding.toFixed(2);
}

module.exports = {
    applyPayment
};