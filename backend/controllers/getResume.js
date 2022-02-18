const catchAssyncErrors = require("../Middleware/catchAssyncError");

exports.getResume = catchAssyncErrors(async (req, res, next) => {
  res.status(200).download("./backend/controllers/resume.pdf");
});
