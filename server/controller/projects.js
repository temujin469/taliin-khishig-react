const Project = require("../models/Project.js");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");
const paginate = require("../utils/paginate");

exports.getProjects = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const sort = req.query.sort;
  const select = req.query.select;

  ["select", "sort", "page", "limit"].forEach((el) => delete req.query[el]);

  const pagination = await paginate(page, limit, Project);

  const projects = await Project.find(req.query, select)
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(limit);

  res.status(200).json({
    success: true,
    data: projects,
    pagination,
  });
});

exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findOne({ slug: req.params.id });

  if (!project) {
    throw new MyError(req.params.id + " ID-тэй project байхгүй!", 400);
  }

  res.status(200).json({
    success: true,
    data: project,
  });
});

exports.createProject = asyncHandler(async (req, res, next) => {
  const project = await Project.create(req.body);

  res.status(200).json({
    success: true,
    data: project,
  });
});

exports.updateProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!project) {
    throw new MyError(req.params.id + " ID-тэй project байхгүйээээ.", 400);
  }

  res.status(200).json({
    success: true,
    data: project,
  });
});

exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    throw new MyError(req.params.id + " ID-тэй project байхгүйээээ.", 400);
  }

  project.remove();

  res.status(200).json({
    success: true,
    data: project,
  });
});
