// Gamedev Tutorials Day and Night
var GDT_DAN = {};
GDT_DAN.switchId = 10;
GDT_DAN.changeEveryXMinutes = 0.5;


GDT_DAN.timeCheck = function() {
  window.setInterval(function() {
      // Common Event aufrufen
      GDT_DAN.callCommonEvent();
  }, GDT_DAN.changeEveryXMinutes*1000 * 60);
};
GDT_DAN.callCommonEvent = function() {
  $gameSwitches.setValue(GDT_DAN.switchId, true);
};

(function() {

  var _Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function(mapId) {
    _Game_Map_setup.call(this, mapId);
    var switchNr = $dataMap.meta["dan_roomSwitch"];
    if(switchNr) {
      $gameSwitches.setValue(switchNr, true);
    }
  };


})();
