var CurrentJsonDateDynamicValue = function() {
  this.evaluate = function() {
    return new Date().toISOString();
  };
  this.title = function() {
    return "Current Json Date";
  };
};

CurrentJsonDateDynamicValue.identifier = "com.github.mjdev.paw-extension.currentjsondate";
CurrentJsonDateDynamicValue.title = "Current Json Date (ISO)";
CurrentJsonDateDynamicValue.inputs = [];

registerDynamicValueClass(CurrentJsonDateDynamicValue);
