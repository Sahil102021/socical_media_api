var conversation = require('../model/conversation');

exports.conversationCreate = async function (req, res, next) {
  try {

    let conversationCreate = await conversation.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "conversation Create Successfull",
      data: conversationCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.conversationFind = async function (req, res, next) {
  try {
    let conversationdata = await conversation.find().populate('participants')

    res.status(200).json({
      status: "Success",
      message: "conversation Found Successfull",
      data: conversationdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.conversationUpdate = async function (req, res, next) {
  try {
    let conversationupdate = await conversation.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "conversation update Successfull",
      data: conversationupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.conversationDelete = async function (req, res, next) {
  try {
    let conversationdelete = await conversation.findByIdAndDelete(req.params.id)
    if (!conversationdelete) {
      res.status(900).json({
        status: "Error",
        message: "conversation Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "conversation delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}