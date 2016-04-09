Lottery = {};
Lottery.chests = [];
Lottery.shuffle = function(chestsCount) {
  Lottery.chests = [];
  for(var i=0; i < chestsCount; i++) {
    if(i == 0) {
      Lottery.chests.push(true);
    } else {
      Lottery.chests.push(false);
    }
  }
  function shuffle(input) {for (var i = input.length-1; i >=0; i--) { var randomIndex = Math.floor(Math.random()*(i+1));         var itemAtIndex = input[randomIndex];                  input[randomIndex] = input[i];         input[i] = itemAtIndex;    }    return input;}
  Lottery.chests = shuffle(Lottery.chests);
};

Lottery.chest = function(num) {
  try {
    return !!Lottery.chests[num-1];
  } catch(e) {
    return false;
  }
};

Lottery.isTreasure = function(interpreter) {
  var chestNote = $dataMap.events[interpreter.eventId()].note;
  var chestNumber = parseInt(chestNote);
  return Lottery.chest(chestNumber);
};
