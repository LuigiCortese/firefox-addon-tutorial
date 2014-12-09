var self = require("sdk/self");

var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: "./icon-16.png",
  onClick: function() {
    require("sdk/tabs").activeTab.attach({
      contentScriptFile: self.data.url("my-script.js")
    });
  }
});