var like = require('../model/like');

exports.likeCreate = async function (req, res, next) {
  try {
    console.log(req.body,"aa");
        
    let likeCreate = await like.create(req.body)
    

    res.status(201).json({
      status: "Success",
      like: "like Create Successfull",
      data: likeCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      like: error.like
    })
  }
}

exports.likeFind = async function (req, res, next) {
  try {
    let likedata = await like.find().populate('user')

    res.status(200).json({
      status: "Success",
      like: "like Found Successfull",
      data: likedata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      like: error.like
    })
  }
}

exports.likeUpdate = async function (req, res, next) {
  try {
    let likeupdate = await like.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      like: "like update Successfull",
      data: likeupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      like: error.like
    })
  }
}

exports.likeDelete = async function (req, res, next) {
  try {
    let likedelete = await like.findByIdAndDelete(req.params.id)
    if (!likedelete) {
      res.status(900).json({
        status: "Error",
        like: "like Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        like: "like delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      like: error.like,
    })
  }
}