var message = require('../model/message');

exports.messageCreate = async function (req, res, next) {
  try {

    let messageCreate = await message.create(req.body)

    res.status(201).json({
      status: "Success",
      message: "message Create Successfull",
      data: messageCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.messageFind = async function (req, res, next) {
  try {
    let messagedata = await message.find()

    res.status(200).json({
      status: "Success",
      message: "message Found Successfull",
      data: messagedata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.messageUpdate = async function (req, res, next) {
  try {
    let messageupdate = await message.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "message update Successfull",
      data: messageupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message
    })
  }
}

exports.messageDelete = async function (req, res, next) {
  try {
    let messagedelete = await message.findByIdAndDelete(req.params.id)
    if (!messagedelete) {
      res.status(900).json({
        status: "Error",
        message: "message Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        message: "message delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    })
  }
}