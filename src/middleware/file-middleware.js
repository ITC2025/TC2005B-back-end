const handle_expense_upload = (req, res, next) => {
    const expense_upload_function = req.app.get("expense_report_upload");
    expense_upload_function(req, res, next);
};

module.exports = { handle_expense_upload };
