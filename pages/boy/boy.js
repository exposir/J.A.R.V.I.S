var app = getApp();

Page({
  data: {
    add1: "",
    add2: "",
    add3: "",
    add4: "",
    add5: "",
    add6: "",
    flag1: 'true',
    flag2: 'true',
    flag3: 'true',
    flag4: 'true',
    flag5: 'true',
    flag6: 'true'

  },
  chooice1: function(e) {
    if (this.data.add1 == '') {
      this.setData({
        add1: 'add1'
      })
    } else {
      this.setData({
        add1: ''
      })
    }

    if (this.data.flag1) {
      console.log(123)
      this.setData({
        flag1: false
      })

      getApp().globalData.index = getApp().globalData.index += 1;
      console.log(getApp().globalData.index)
    } else {
      this.setData({
        flag1: true
      })
      getApp().globalData.index = getApp().globalData.index -= 1
      console.log(getApp().globalData.index)
    }

  },
  chooice2: function(e) {
    if (this.data.add2 == '') {
      this.setData({
        add2: 'add2'
      })
    } else {
      this.setData({
        add2: ''
      })
    }
    if (this.data.flag2) {
      console.log(123)
      this.setData({
        flag2: false
      })

      getApp().globalData.index = getApp().globalData.index += 2;
      console.log(getApp().globalData.index)
    } else {
      this.setData({
        flag2: true
      })
      getApp().globalData.index = getApp().globalData.index -= 2;
      console.log(getApp().globalData.index)
    }
  },
  chooice3: function(e) {
    if (this.data.add3 == '') {
      this.setData({
        add3: 'add3'
      })
    } else {
      this.setData({
        add3: ''
      })
    }

    if (this.data.flag3) {
      console.log(123)
      this.setData({
        flag3: false
      })

      getApp().globalData.index = getApp().globalData.index += 3;
      console.log(getApp().globalData.index)
    } else {
      this.setData({
        flag3: true
      })
      getApp().globalData.index = getApp().globalData.index -= 3;
      console.log(getApp().globalData.index)
    }
  },
  chooice4: function(e) {
    if (this.data.add4 == '') {
      this.setData({
        add4: 'add4'
      })
    } else {
      this.setData({
        add4: ''
      })
    }


    if (this.data.flag4) {
      console.log(123)
      this.setData({
        flag4: false
      })

      getApp().globalData.index = getApp().globalData.index += 4;
      console.log(getApp().globalData.index)
    } else {
      this.setData({
        flag4: true
      })
      getApp().globalData.index = getApp().globalData.index -= 4;
      console.log(getApp().globalData.index)
    }
  },
  chooice5: function(e) {
    if (this.data.add5 == '') {
      this.setData({
        add5: 'add5'
      })
    } else {
      this.setData({
        add5: ''
      })
    }

    if (this.data.flag5) {
      console.log(123)
      this.setData({
        flag5: false
      })

      getApp().globalData.index = getApp().globalData.index += 5;
      console.log(getApp().globalData.index)
    } else {
      this.setData({
        flag5: true
      })
      getApp().globalData.index = getApp().globalData.index -= 5;
      console.log(getApp().globalData.index)
    }
  },
  chooice6: function(e) {
    if (this.data.add6 == '') {
      this.setData({
        add6: 'add6'
      })
    } else {
      this.setData({
        add6: ''
      })
    }
    if (this.data.flag6) {
      console.log(123)
      this.setData({
        flag6: false
      })

      getApp().globalData.index = getApp().globalData.index += 6;
      console.log(getApp().globalData.index)
    } else {
      this.setData({
        flag6: true
      })
      getApp().globalData.index = getApp().globalData.index -= 6;
      console.log(getApp().globalData.index)
    }
  },
  next: function() {
    // let that = this;
    if (getApp().globalData.index % 6 == 1) {
      wx.navigateTo({
        url: "/pages/city/city"
      })

    } else if (getApp().globalData.index % 6 == 2) {
      wx.navigateTo({
        url: "/pages/city1/city1"
      })
    } else if (getApp().globalData.index % 6 == 3) {
      wx.navigateTo({
        url: "/pages/city2/city2"
      })
    } else if (getApp().globalData.index % 6 == 4) {
      wx.navigateTo({
        url: "/pages/city3/city3"
      })

      console.log(444)
    } else if (getApp().globalData.index % 6 == 5) {
      wx.navigateTo({
        url: "/pages/city4/city4"
      })
      console.log(555)
    } else if (getApp().globalData.index % 6 == 6) {
      wx.navigateTo({
        url: "/pages/city5/city5"
      })

      console.log(6)
    } else {
      wx.navigateTo({
        url: "/pages/city1/city1"
      })
    }


  }
})