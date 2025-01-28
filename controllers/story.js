var story = require('../model/story');

exports.storyCreate = async function (req, res, next) {
  try {

    let storyCreate = await story.create(req.body)

    res.status(201).json({
      status: "Success",
      story: "story Create Successfull",
      data: storyCreate,
    })
  } catch
  (error) {
    res.status(404).json({
      status: "Fail",
      story: error.story
    })
  }
}

exports.storyFind = async function (req, res, next) {
  try {
    let storydata = await story.find()

    res.status(200).json({
      status: "Success",
      story: "story Found Successfull",
      data: storydata
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      story: error.story
    })
  }
}

exports.storyUpdate = async function (req, res, next) {
  try {
    let storyupdate = await story.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      story: "story update Successfull",
      data: storyupdate
    })
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      story: error.story
    })
  }
}

exports.storyDelete = async function (req, res, next) {
  try {
    let storydelete = await story.findByIdAndDelete(req.params.id)
    if (!storydelete) {
      res.status(900).json({
        status: "Error",
        story: "story Not Found",
      })
    } else {
      res.status(200).json({
        status: "Success",
        story: "story delete Successfull",
      })
    }
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      story: error.story,
    })
  }
}