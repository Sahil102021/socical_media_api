var post = require('../model/post');

exports.postCreate = async function (req, res, next) {
  try {

    req.body.image = req.files.map(file => file.filename);
    let postCreate = await post.create(req.body)

    res.status(201).json({
      status: "Success",
      post: "post Create Successfull",
      data: postCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      post: error.post
    })
  }
}

exports.postFind = async function (req, res, next) {
  try {
    let postdata = await post.find().populate('user likes comments')

    res.status(200).json({
      status: "Success",
      post: "post Found Successfull",
      data: postdata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      post: error.post
    })
  }
}
  
exports.postUpdate = async function (req, res, next) {
  try {
    let postupdate = await post.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      post: "post update Successfull",
      data: postupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      post: error.post
    })
  }
}

exports.postDelete = async function (req, res, next) {
  try {
    let postdelete = await post.findByIdAndDelete(req.params.id)
    if (!postdelete) {
      res.status(900).json({
        status: "Error",
        post: "post Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        post: "post delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      post: error.post,
    })
  }
}