var comment = require('../model/comment');

exports.commentCreate = async function (req, res, next) {
  try {

    let commentCreate = await comment.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "comment Create Successfull",
      data: commentCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.commentFind = async function (req, res, next) {
  try {
    let commentdata = await comment.find().populate('user')

    res.status(200).json({
      status: "Success",
      message: "comment Found Successfull",
      data: commentdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.commentUpdate = async function (req, res, next) {
  try {
    let commentupdate = await comment.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "comment update Successfull",
      data: commentupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.commentDelete = async function (req, res, next) {
  try {
    let commentdelete = await comment.findByIdAndDelete(req.params.id)
    if (!commentdelete) {
      res.status(900).json({
        status: "Error",
        message: "comment Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "comment delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}