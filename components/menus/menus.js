// components/menus/menus.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    oneList: ["功能A","功能B","功能C","功能D"],
    twoList: ["功能E","功能F","功能G","功能H"],
    threeList: ["功能I","功能J","",""],
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
