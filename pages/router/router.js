var app = getApp();
Page({
  data: {
    city: '',
    age: 14,
    weather: '',
    dateimg: "../../assets/weather/1.png"
  },
  onShow: function() {
    let that = this;
    this.setData({
      city: getApp().globalData.city,
    })


    let askUrl = 'https://api.seniverse.com/v3/weather/daily.json?key=Spcvt5W-ujmiLoFfi&location=beijing&language=zh-Hans&unit=c&start=' + getApp().globalData.nowDay + '&days=' + getApp().globalData.allDay + ''

    wx.request({
      url: askUrl,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      success(res) {
        console.log('数据请求成功')
        let weather = [];
        let allWeather = res.data.results[0].daily;
        let obj;
        console.log(allWeather)
        if (res.data.results[0].daily.length != 0) {
          for (let i = 0; i < allWeather.length; i++) {
            let date = allWeather[i].date.split('-');
            date = date[1] + '月' + date[2] + '日';
            obj = {
              nowWeather: allWeather[i].text_day,
              nowDate: date,
              wendu: allWeather[i].low + '~' + allWeather[i].high + ' ℃'
            }
            weather.push(obj)
          }
        } else {
          obj = {
            nowWeather: '愿你的心情是晴天☀️',
          }
          weather.push(obj)
        }


        that.setData({
          weather: weather,
        })
      },
      fail(err) {}
    })



  },
  getMessage: function() {},
  getMap: function(event) {
    let index = event.currentTarget.dataset.replyMap;
    getApp().globalData.day = getApp().globalData.city[index];
    wx.navigateTo({
      url: "/pages/recommend/recommend"
    })
  }
})