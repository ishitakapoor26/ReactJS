const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

// Concept of closures applied here, the inner function has access to all the properties of outer function

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError(`No document found with that ID`, 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });
