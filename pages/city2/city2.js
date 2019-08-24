Page({


  data: {
    message: [{
      "city": "北京",
      "news": "80%的人想去"
    }, {
      "city": "上海",
      "news": "60%的人想去"
    }, {
      "city": "广州",
      "news": "60%的人想去"
    }, {
      "city": "成都",
      "news": "6%的人想去"
    },

    ]

  },

  enter: function () {
    wx.navigateTo({
      url: "/pages/hello/hello"
    })
  }
})