'use strict';
app.controller('cosmicController', ['expansions', function(expansions){
  var vm = this;
  var ex = expansions;
  vm.test = 'TEST';
  vm.decks = ex.decks;
  vm.attack = false;
  vm.negotiate = false;
  vm.morph =false;
  vm.retreat = false;
  vm.reinforcement = false;
  vm.rift = false;
  vm.kicker = false;
  vm.artifact = false;
  vm.intimidate = false;
}])
