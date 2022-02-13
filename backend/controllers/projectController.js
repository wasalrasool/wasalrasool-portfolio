const Project = require("../models/projectModel");
const catchAssyncErrors = require("../Middleware/catchAssyncError");

exports.createProject = catchAssyncErrors(async (req, res, next) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    project,
  });
});

// get all projects
exports.getAllProjects = catchAssyncErrors(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).json({
    success: true,
    projects,
  });
});

exports.getProjectDetails = catchAssyncErrors(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }
  res.status(200).json({
    success: true,
    project,
  });
});

// update Project
exports.getProjectDetails = catchAssyncErrors(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  res.status(200).json({
    success: true,
    project,
  });
});
exports.updateProject = catchAssyncErrors(async (req, res, next) => {
  let project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    project,
  });
});

exports.deleteProject = catchAssyncErrors(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  // cloudinary

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  await project.remove();

  res.status(500).json({
    success: true,
    project,
  });
});
