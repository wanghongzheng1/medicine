// components/menus/menus.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    popShow: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open(){
      this.setData({
        popShow: true,
      })
    },
    close(){
      this.setData({
        popShow: false,
      })
    },
  }
})
