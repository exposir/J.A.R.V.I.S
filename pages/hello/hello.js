var app = getApp();
import {
  formatTime
} from '../../utils/util.js';
Page({
  data: {
    city: '',
    leastDays: 1,
    monthCount: 3,
    startDay: '日期',
    endDay: '日期',
    allDay: '0',
    tag: '网红',
    focus1: '',
    focus2: '',
    focus3: '',
    focus4: '',
    focus5: '',
    focus6: '',
    load: false,
    ok: false,
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      tihuoWay: name,
      select: false
    })
  },
  onCalendarChange: function(e) {
    const startDate = new Date(e.detail.days[0]);
    const endDate = e.detail.days[1] ? new Date(e.detail.days[1]) : '';
    let startDay = formatTime(startDate).split('/')[2].split(' ')[0];
    let startMonth = formatTime(startDate).split('/')[1]
    let endDay = endDate ? formatTime(endDate) : '';
    let allDay = e.detail.count;

    getApp().globalData.nowDay = 2019 + '/' + startMonth + '/' + startDay;
    getApp().globalData.allDay = allDay;



    console.log(endDay)
    let endMonth;
    if (endDay != '') {
      endMonth = endDay.split('/')[1]
      endDay = endDay.split('/')[2].split(' ')[0];
      this.setData({
        endDay: endMonth + '月' + endDay + '日'
      })
    } else {
      endDay = '日期';
    }
    this.setData({
      startDay: startMonth + '月' + startDay + '日',
      allDay: allDay
    })
    console.log(this.data.allDay)
  },
  enter: function() {
    if (!this.data.ok) {
      if (this.data.allDay != 0) {
        this.setData({
          load: true,
          ok: true
        })
        let that = this;
        let taglist = this.data.tag;
        let allDay = this.data.allDay;
        console.log(taglist, allDay)
        let askUrl = `` + taglist + `&days=` + allDay + ``;
        console.log(askUrl)
        // wx.navigateTo({
        //   url: "/pages/router/router"
        // })
        wx.request({
          url: askUrl,
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: 'GET',
          success(res) {
            console.log('数据请求成功')
            let data = res.data.data
            let message = JSON.parse(data)
            that.setData({
              city: message.result,
              load: false,
            })
            getApp().globalData.city = message.result;
            console.log(getApp().globalData.city)
            wx.navigateTo({
              url: "/pages/router/router"
            })
            setTimeout(function() {
              that.setData({
                ok: false,
              })
            }, 1000)

          },
          fail(err) {
            console.log(err)
          }
        })
      } else {
        wx.showToast({
          title: '请输入天数',
          icon: 'none',
          duration: 2000,
          mask: true
        })
      }
    }
  },
  onTap1: function() {
    this.setData({
      tag: '热门',
      focus1: 'focus1',
      focus2: '',
      focus3: '',
      focus4: '',
      focus5: '',
      focus6: ''
    })

    console.log(this.data.tag)
  },
  onTap2: function() {
    this.setData({
      tag: '网红',
      focus1: '',
      focus2: 'focus1',
      focus3: '',
      focus4: '',
      focus5: '',
      focus6: ''
    })

    console.log(this.data.tag)
  },
  onTap3: function() {
    this.setData({
      tag: '小众',
      focus1: '',
      focus2: '',
      focus3: 'focus1',
      focus4: '',
      focus5: '',
      focus6: ''
    })

    console.log(this.data.tag)
  },
  onTap4: function() {
    this.setData({
      tag: '吃货',
      focus1: '',
      focus2: '',
      focus3: '',
      focus4: 'focus1',
      focus5: '',
      focus6: ''
    })

    console.log(this.data.tag)
  },
  onTap5: function() {
    this.setData({
      tag: '艺术',
      focus1: '',
      focus2: '',
      focus3: '',
      focus4: '',
      focus5: 'focus1',
      focus6: ''
    })

    console.log(this.data.tag)
  },
  onTap6: function() {
    this.setData({
      tag: '古迹',
      focus1: '',
      focus2: '',
      focus3: '',
      focus4: '',
      focus5: '',
      focus6: 'focus1'
    })

    console.log(this.data.tag)
  }


})