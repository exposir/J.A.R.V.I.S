var coors;
var app = getApp();
Page({
  data: {
    polyline: [],
    markers: [],
    location: [{
        city: "长城",
        src: "../../assets/1.png"
      },
      {
        city: "长城",
        src: "../../assets/1.png"
      }
    ]
  },
  onShow: function(options) {
    let that2 = this;

    let day = getApp().globalData.day;
    console.log(day)
    let location = [];
    for (let i = 0; i < day.length; i++) {
      let name = day[i].name;
      let url = day[i].image_url;
      let obj = {
        city: name,
        src: url
      }
      location.push(obj)
    }
    that2.setData({
      location: location
    })

    let newMarkers = [];
    // console.log(day);
    let num = 1;
    for (let i = 0; i < day.length; i++) {
      let now = day[i].lnglat.split(',');

      let obj = {
        latitude: now[0],
        longitude: now[1],
        iconPath: '../../assets/route/' + num + '.png',
        width: 50,
        height: 50,
      }
      num++
      newMarkers.push(obj);
    }
    that2.setData({
      markers: newMarkers
    })

    let str = '';
    let startStr;
    let midStr = '';
    let endStr;
    // let str = '';
    for (let i = 0; i < day.length; i++) {
      if (i == 0) {
        startStr = 'from=' + day[i].lnglat + '&';

      } else if (i == day.length - 1) {
        endStr = 'to=' + day[i].lnglat + '&';

      } else if (i == day.length - 2 && day.length - 2 != 0) {
        midStr += day[i].lnglat;

      } else {

        midStr += day[i].lnglat + ';'
      }
    }
    if (day.length != 2) {
      str = startStr + 'waypoints=' + midStr + '&' + endStr;
    } else {
      str = startStr + endStr;
    }
    let newUrl = 'https://apis.map.qq.com/ws/direction/v1/driving/?' + str + 'output=json&callback=cb&key=';
    wx.request({
      url: newUrl,
      success: function(res) { 

        console.log(res)

        coors = res.data.result.routes[0].polyline
        for (var i = 2; i < coors.length; i++) {
          coors[i] = coors[i - 2] + coors[i] / 1000000
        }

        //划线
        var b = [];
        for (var i = 0; i < coors.length; i = i + 2) {
          b[i / 2] = {
            latitude: coors[i],
            longitude: coors[i + 1]
          };

        }
        that2.setData({
          polyline: [{
            points: b,
            color: "#4fae70",
            width: 4,
            dottedLine: false
          }],
        })
      }
    })




  },
});