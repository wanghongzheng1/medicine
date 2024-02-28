Component({
  properties: {
    // 是否显示指示点
    indicatorDots: {
      type: Boolean,
      value: true
    },
    bgColor: {
      type: String,
      value: '#333'
    },
    // 是否自动切换
    autoplay: {
      type: Boolean,
      value: true
    },
    // 切换时间间隔
    interval: {
      type: Number,
      value: 5000
    },
    // 滑动动画时长
    duration: {
      type: Number,
      value: 500
    },
    // 是否循环播放
    circular: {
      type: Boolean,
      value: true
    },
    // 是否纵向滑动
    vertical: {
      type: Boolean,
      value: false
    },
    // 图片列表
    images: {
      type: Array,
      value: []
    }
  },
  methods: {
    // swiper滑动事件
    swiperChange: function (e) {
      // 如果需要可以在这里触发自定义事件
      console.log('current swiper index:', e.detail.current)
    }
  }
})