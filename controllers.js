'use strict';
app.controller('cosmicController', ['expansions', function(expansions){
  var vm = this;
  var ex = expansions;

  vm.decks = ex.vanilla;
  vm.vanilla = true;
  vm.incursion = false;
  vm.alliance = false;
  vm.dominion = false;
  vm.attack = true;
  vm.negotiate = true;
  vm.morph =true;
  vm.retreat = true;
  vm.reinforcement = true;
  vm.rift = true;
  vm.kicker = true;
  vm.artifact = true;
  vm.intimidate = true;

  vm.cosmic = true;
  vm.reward = true;
  vm.allCardsBool = true;
  vm.allEncounterBool = false;
  vm.allRewardBool = false;
  vm.allCosmicBool = false;

  vm.updateSet = function(vanillaBool, incursionBool, allianceBool, dominionBool){
    var decksArray = [];
    var decks = [];
    if(vanillaBool){
      decksArray.push(ex.vanilla);
    }
    if(allianceBool){
      decksArray.push(ex.alliance);
    }
    if(incursionBool){
      decksArray.push(ex.incursion);
    }
    if(dominionBool){
      decksArray.push(ex.dominion);
    }

    for(var i = 0; i < decksArray.length; i++){
      for(var j = 0; j < decksArray[i].length; j++){
        var currentCard = decksArray[i][j];
        var duplicate = false;
        for(var k = 0; k < decks.length; k++){
          var cardBeingChecked = decks[k];
          if(currentCard.type === cardBeingChecked.type && currentCard.value === cardBeingChecked.value){
            if(currentCard.deck !== cardBeingChecked.deck){
              if(cardBeingChecked.deck !=='Cosmic' && cardBeingChecked.deck !== 'Reward'){
                var cosmicCount = Number(cardBeingChecked.deck.slice(2,3));
                var rewardCount = Number(cardBeingChecked.deck.slice(7,8));
                if(currentCard.deck === 'Cosmic'){
                  cardBeingChecked.deck = 'C(' + (currentCard.quantity + cosmicCount) + ')/R(' + rewardCount + ')';
                }else{
                  cardBeingChecked.deck = 'C(' + cosmicCount + ')/R(' + (currentCard.quantity + rewardCount) + ')';
                }

              }else{
                cardBeingChecked.deck = 'C(' + cardBeingChecked.quantity + ')/R(' + currentCard.quantity + ')';
              }

            }
            cardBeingChecked.quantity += currentCard.quantity;
            duplicate = true;
            break;
          }
        }
        if(!duplicate){
          decks.push({expansion: currentCard.expansion, deck: currentCard.deck, type: currentCard.type, value: currentCard.value, quantity: currentCard.quantity, description: currentCard.description});
        }
      }
    }
    vm.decks = decks;
  }
  vm.allCards = function(){
    vm.attack = true;
    vm.negotiate = true;
    vm.morph =true;
    vm.retreat = true;
    vm.reinforcement = true;
    vm.rift = true;
    vm.kicker = true;
    vm.artifact = true;
    vm.intimidate = true;

    vm.cosmic = true;
    vm.reward = true;

    vm.allCardsBool = true;
    vm.allEncounterBool = false;
    vm.allRewardBool = false;
    vm.allCosmicBool = false;
  }
  vm.allEncounter = function(){
    vm.allCards();
    vm.retreat = false;
    vm.reinforcement = false;
    vm.rift = false;
    vm.kicker = false;
    vm.artifact = false;
    vm.intimidate = false;

    vm.allCardsBool = false;
    vm.allRewardBool = false;
    vm.allCosmicBool = false;
  };
  vm.allCosmic = function(){
    vm.allCards();


    vm.retreat = false;
    vm.rift = false;
    vm.kicker = false;
    vm.intimidate = false;

    vm.reward = false;

    vm.allCardsBool = false;
    vm.allEncounterBool = false;
    vm.allRewardBool = false;

  };
  vm.allReward = function(){
    vm.allCards();

    vm.cosmic = false;

    vm.allCardsBool = false;
    vm.allEncounterBool = false;
    vm.allCosmicBool = false;
  }
  vm.showDetails = function(index){
    
  }
}])
