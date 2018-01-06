let searchBehavior = require("../../behaviors/search-behavior");
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    placeholder_text: {
      type: String,
      value: '请输入搜索内容'
    }
  },
  data: {
    // 这里是一些组件内部数据
    innerText: "aaaa",
    searchVlaue: "",
    placeholderShow: true
  },
  
  methods: {
    // 这里是一个自定义方法
    inputVlaue: function(event){

      this.setData({
        searchVlaue: event.detail.value
      })
    },
    inputFocus: function(){
      
      this.setData({
        placeholderShow: false
      })
    },
    inputBlur: function(){
      
      if (this.data.searchVlaue != "") {

        this.setData({
          placeholderShow: false
        })
      } else {

        this.setData({
          placeholderShow: true
        })
      }
    },
    searchEvent: function(){
      this.setData({
        searchText: this.data.searchVlaue
      })
    }
  }
})