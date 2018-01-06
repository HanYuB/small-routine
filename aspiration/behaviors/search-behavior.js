module.exports = Behavior({
  behaviors: [],
  properties: {
    searchText: {
      type: String
    }
  },
  attached: function () {
    console.log(this.searchText);
  }
})