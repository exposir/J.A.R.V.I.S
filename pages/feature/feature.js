Page({
  data: {
  },
  choiceBoy: function () {
    wx.navigateTo({
      url: "/pages/boy/boy"
    })
  },
  choiceGirl: function () {
    wx.navigateTo({
      url: "/pages/girl/girl"
    })

    console.log(123)
  }

})
