
$("#credits").hide()
$("#creditback").hide()
creditsOpened = function(){
  $("#menu").hide()
  $("#credits").show()
  $("#creditback").on("click", backtomenu)
  $("#creditback").show()
}
backtomenu = function(){
  $("#credits").hide()
  $("#creditback").hide()
  $("#menu").show()
}

$("#classtable").hide()
$("#log").hide()
menuPressed = function(){
  $("#classtable").show()
  $("#log").show()
  $("#menu").hide()
}



Defensive = function(){
  $("#turntable").hide();
  $("#defensivetable").show();
  $("#potionUse").on("click", PotionUse);

}
//creation of player and NPC objects
questing = false
dragonObj=new Object;
currentNPC ="ERROR"
currentNPCRandomizer = Math.floor((Math.random)()*2 +1)
console.log("Current NPCRandom " + currentNPCRandomizer)


mageObj = {
  armorclass: 1,
  armorclassOG: 1,  
  health: 15,
  go: true,
  hitmiss: (Math.random)(),
  damage: Math.floor((Math.random)()*2) + 2,
  register: "Rouge Mage",
  armorpen: 1,
  armorpenOG: 1,
  alignment: "Evil",
  level: 2,
  questorder: 1
}
ninjaObj = {
  armorclass: 1,
  armorclassOG: 1,  
  health: 10,
  go: true,
  hitmiss: (Math.random)(),
  damage: Math.floor((Math.random)()*2) + 2,
  register: "Ninja",
  armorpen: 2,
  armorpenOG: 2,
  alignment: "Evil",
  level: 1,
  opositeclass: 1
}
  ninjaObj.dead = function(){
  levelup()
  currentNPC = dragonObj
  log("You are now fighting a dragon")
  updateHealth()
}

dragonObj.level = 2
dragonObj.register = "Dragon"
dragonObj.armorpen = 2
dragonObj.armorpenOG = 2
dragonObj.health = 15;
dragonObj.go = true
dragonObj.armorclass = 2
dragonObj.armorclassOG = 2
dragonObj.opositeclass = 2
dragonObj.dead = function(){
levelup()
currentNPC = ninjaObj
log("You are now fighting a ninja")
updateHealth()
}

if(currentNPCRandomizer == 1){
  currentNPC = ninjaObj
}
else{
  currentNPC = dragonObj
}
$PlayerHealthText = document.getElementById("PlayerHealth")
$NPCHealthText = document.getElementById("NPCHealth")
$NPCHealthText = document.getElementById("NPCHealth");
$NPCHealthText.innerHTML += currentNPC.health;
dragonObj.hitmiss = (Math.random)()
dragonObj.damage = Math.floor((Math.random)()*2 )+2;
dragonObj.alignment = "Evil"
playerObj=new Object;
playerObj.register = "You"
playerObj.alignment = "Good"
power2Sel = document.getElementById("power2")
playerCritChance = (Math.random)() 
console.log("Crit = " + playerCritChance)
playerCrit = false
playerObj.notDead = false
//setup for buttons, press all da buttons!
$(document).ready(function(){
  $("#quest_menu").hide()
  $("#Marshall").on("click", marshallSel);
  $("#turntable").hide();
  $("#Assassin").on("click", assassinSel);
  $("#Scout").on("click", scoutSel);
  $("#attack").on("click", openOffensiveTable);
  $("#reset").on("click", reset);
  $("#powertable").hide()
  $("#defensivetable").hide()
  $("#defense").on("click", Defensive)
  $("#turntable").hide()
  $("#power2").on("click", specialAttack)
  $("#power1").on("click", attacksetup)
  $("#start").on("click", menuPressed)
  $("#creditsbutton").on("click", creditsOpened)
  $("#questbutton").on("click", questmenuopen)
  $("#quest1button").on("click", quest.first)
  playerObj.level = 1
  $playerlevelselector = document.getElementById("playerlevel")
  $playerlevelselector.innerHTML += playerObj.level
  $enemylevelselector = document.getElementById("enemylevel")
  $enemylevelselector.innerHTML += currentNPC.level
 });

questmenuopen = function(){
  $("#menu").hide()
  $("#quest_menu").show()
}

openOffensiveTable = function(){
  $("#powertable").show()
  $("#turntable").hide()
}
//log function to replace stupid use of console.log, curse you CA!!!
log = function (input, colorChoice) {
   $('#log').prepend("<p style='color:" + colorChoice + "'>" + input + "</p>");
}; 
log("You are fighting a " + currentNPC.register)
healthOG = 10
//if normal everyday dull class selected
//set player vars to:
assassinSel = function(){
playerObj.potioncount = 1
classOfPlayer = 1
playerObj.health = 10
playerObj.hitmiss = (Math.random)();
playerCritChance = (Math.random)()
if(playerCritChance >= .25){
playerObj.damage = playerObj.damage = Math.floor((Math.random)() *3 ) +2
playerObj.damage = playerObj.damage * 2
playerCrit = true
}
else{
  playerObj.damage = playerObj.damage = Math.floor((Math.random)() *2 ) +2
}
updateHealth()
//playerObj.quickstepDamage = Math.floor((Math.random)() *2 +1) + Math.floor((Math.random)() *2 +1 /2)
playerObj.armorclass = 1
playerObj.armorpen = 1
playerObj.armorpenOG = 1
playerObj.armorclassOG = 1
$("#turntable").show()
$("#classtable").hide()
$("#potionUse").on("click", Defensive)
$("#power2").val("Combo Attack")
power2Sel = document.getElementById("power2").title = "A combo attack that does 4 damage, ignores AC, and is a 100% hit. It requires 4 charge, which is gained from landing hits."
playerObj.sinCharge = 0
}

//if marshall selected
//set player vars to:
marshallSel = function(){
playerObj.armorpen = 1
playerObj.armorclass = 4
playerObj.armorpenOG = 1
playerObj.armorclassOG = 4
playerObj.potioncount = 1
classOfPlayer = 2
playerObj.health = 10;
playerObj.hitmiss = (Math.random)();
playerObj.damage = Math.floor((Math.random)() *2 ) +2;
updateHealth()
//playerObj.marshallDamage = Math.floor((Math.random)() *2 +1) - .5
$("#turntable").show()
$("#classtable").hide()
$("#potionUse").on("click", Defensive)
playerObj.ID = 2
$("#power2").val("Steady Jab")
power2Sel = document.getElementById("power2").title = "A steady jab that never misses and ignores armor"
}

//if scout selected
//set player vars to:
scoutSel = function(){
playerObj.potioncount = 1
playerObj.armorclass = 1
playerObj.armorclassOG = 1
playerObj.armorpen = 4
playerObj.armorpenOG = 4
classOfPlayer = 3
playerObj.health = 10;
playerObj.hitmiss = (Math.random)();
playerObj.damage = Math.floor((Math.random)() *2 )+2 ;
updateHealth()
power2Sel = document.getElementById("power2").title = "Sharpening blades to increase AP"
$("#power2").val("Sharpen Blades")
//playerObj.scoutDamage = Math.floor((Math.random)() *2 +1)
$("#turntable").show()
$("#classtable").hide()
$("#potionUse").on("click", Defensive)
playerObj.ID = 3
}
//$("#power2").qtip()
specialAttack = function(){
if(playerObj.level == 1){
  log("You are not high enough level to use this")
}
else{
if(classOfPlayer == 1){
  if(playerObj.sinCharge >= 4){
    $("#powertable").hide()
    log("You unleash a wicked sick combo attack! Disabling your oponent temporarily and doing 6 damage!")
    currentNPC.health = currentNPC.health - 6
    playerObj.sinCharge = 0
    $("#turntable").show()
    updateHealth()
    if(currentNPC.health <= 0){
      alert("You deafeated the " + currentNPC.register + "!")
      alert("The game will now reset")
      reset()
    }
  }
  else{
    log("You dont have enough charge to do that. Gain charge by landing a hit.")
  }
}
else if(classOfPlayer == 2){
  $("#powertable").hide()
  log("You get ready to quickly jab")
  currentNPC.health = currentNPC.health - currentNPC.damage / 2
  redo = false
  $("#NPCHealth").empty()
  $NPCHealthText.innerHTML += currentNPC.health;
  attack(currentNPC, playerObj)
  log("You take the chance to jab!")
  if(currentNPC.health <= 0){
  alert("You deafeated the " + currentNPC.register + "!")
  alert("The game will now reset")
  reset()
}
}
else if(playerObj.ID == 3){
  playerObj.armorpen = playerObj.armorpen + 1
  playerObj.armorpenOG = playerObj.armorpenOG + 1
  log("You sharpen your blades increasing your AP")
  redo = false
  attack(currentNPC, playerObj)
  $("#powertable").hide()
  }
}
}
PotionUse = function (){
  if(playerObj.potioncount >= 1){
    playerObj.potioncount = playerObj.potioncount - 1
    if(playerObj.potioncount >= 0){
      $("#defensivetable").hide()
    }
    playerObj.health = playerObj.health + 5
    $("#PlayerHealth").empty();
    $PlayerHealthText.innerHTML += playerObj.health;
    log("You gained 5 health!")
    redo = false
    attack(currentNPC, playerObj)
    $("#turntable").show()
    }
  else if(playerObj.potioncount <= 0){
    log("You have no potions to use")
    $("#defensivetable").hide()
    $("#turntable").show()
  }
}



rerandomize = function(){
  playerCritChance = (Math.random)()
  console.log("Crit rerandom = " + playerCritChance)
  dragonObj.hitmiss = (Math.random)();
  dragonObj.damage = Math.floor((Math.random)() *2 ) +2;
  playerObj.hitmiss = (Math.random)()
  if(classOfPlayer == 1){
    playerCritChance = Math.floor((Math.random))
    if(playerCritChance >= .25){
      crit = true
      playerObj.damage = playerObj.damage = Math.floor((Math.random)() *2 ) +2
      playerObj.damage = playerObj.damage * 3
    }
    else{
      playerObj.damage = Math.floor((Math.random)() *2 ) +2 
    }
}
else{
  playerObj.damage = Math.floor((Math.random)() *2 ) +2 
}
  ninjaObj.hitmiss = (Math.random)();
  ninjaObj.damage = Math.floor((Math.random)()*2 ) +2;
}

attacksetup = function(customsel1, customsel2){
  $("#powertable").hide()
  redo = true
  attack(playerObj, currentNPC)
}

//attack funtion, main game logic storage
attack = function(attacker, defender){
  if(attacker.hitmiss >= .25){
    if(classOfPlayer == 1 && redo == false){
      playerObj.sinCharge = playerObj.sinCharge + 1
      log("You gain charge, you have " + playerObj.sinCharge)
    }
    //$("#powertable").hide()
    //console.log(attacker.damage)
    if(attacker.armorpen < defender.armorclass){
      //if armor is tougher than pen: divide armor by 4 and subtract from dmg
      defender.armorclass = defender.armorclass / 4
      console.log("Armor class after devided by 4:" + defender.armorclass)
      attacker.damage =  attacker.damage - defender.armorclass
      console.log("Damage after armor over pen: " + attacker.damage)
      if(attacker.damage <= 0){
        if(attacker.alignment == "Good"){
          log("Your attack was negated!")
        }
        else{
          log("The " + currentNPC.register + "'s attack was negated!")
        }
        defender.health = defender.health - .5
      }
      else{
        defender.health = defender.health - attacker.damage
        log(attacker.register + " hit for " + attacker.damage)
      }
      attacker.armorpen = attacker.armorpenOG
      defender.armorclass = defender.armorclassOG
      rerandomize()
      updateHealth()
    }
    else{
      //if pen is greater than amor(or equal to) than divide pen by 4 and add to dmg
      attacker.armorpen = attacker.armorpen / 4
      console.log("Armor pen devided by 4: " + attacker.armorpen)
      attacker.damage = attacker.damage + attacker.armorpen
      defender.health = defender.health - attacker.damage
      attacker.armorpen = attacker.armorpenOG
      log(attacker.register + " hit for " + attacker.damage)
    }
    if(playerCrit == true && attacker.register == "You"){
      log("CRITICAL HIT!")
      playerCrit = false
    }
    console.log(attacker.damage)
    rerandomize()
    updateHealth()
    if(defender.health <= 0){
      if(defender.alignment == "Evil" && questing == false){
        defender.dead()
        // if(currentNPC.opositeclass == 2){
        //   currentNPC = ninjaObj
        //   log("You are fighting a Ninja")
        // }
        // else if(currentNPC.opositeclass == 1){
        //   currentNPC = dragonObj
        //   log("You are fighting a Dragon")
        // }
        updateHealth()
        $enemylevelselector.innerHTML += "Enemy level: " + currentNPC.level
      }
      else if(defender.register == "You"){
        playerObj.notDead = false
        alert("You were slain!")
        lockdown()

      }
      else if(questing == true){
        log("You have defeated your mark, continue on!")
        nextfunction(currentNPC.questorder)
      }


      else if(playerObj.level >= 1){
        alert("You have won!")
        lockdown()
      }
    }
    $("#turntable").show()
    if(redo == true){
      redo = false
      attack(defender, attacker)
    }
  }
  else{
    rerandomize()
    log(attacker.register + " missed!")
    if(redo == true){
      redo = false
      attack(defender, attacker)
    }
    $("#turntable").show()
  }
}
      
reset = function(){
  currentNPCRandomizer = Math.floor((Math.random)()*2 +2)
  location.reload()
};
debug = function(){
  console.log("WARNING, this is for developing purposes and breaks game")
  $("#defensivetable").show()
  $("powertable").show()
  $("#turntable").show()
  $("classtable").show()
}
updateHealth = function(){
    $("#PlayerHealth").empty()
    $PlayerHealthText.innerHTML += playerObj.health;
    $("#NPCHealth").empty()
    $NPCHealthText.innerHTML += currentNPC.health;
}
lockdown = function(){
  $("#powertable").remove()
  $("#turntable").remove()
  $("#defensivetable").remove()
  $("#resetdiv").css("text-align", "center")
  //document.getElementById("resetdiv").align = "center"
}

levelup = function(){
        alert("You are now level " + playerObj.level + "! And have defeated the " + currentNPC.register)
        playerObj.level = playerObj.level + 1
        playerObj.health = playerObj.health + 3
        playerObj.armorclass = playerObj.armorclass + 1
        playerObj.armorclassOG = playerObj.armorclassOG + 1
        playerObj.armorpen = playerObj.armorpen + 1
        playerObj.armorpenOG = playerObj.armorpenOG + 1
        log("You have gained +1 to AC and AP")
        log("You have gained 3 health and 1 potion")
        playerObj.potioncount = playerObj.potioncount + 1
        $('#playerlevel').empty()
        $playerlevelselector.innerHTML += "Your level: " + playerObj.level
        $("#enemylevel").empty()
}
quest =new Object
quest.first = function() {
  $("#log").show()
  $("#quest_menu").hide()
  currentquest = "first"
  currentNPC = mageObj
  questing = true
  alert("Welcome Hero! The Templars reuire your assitance, a run away Mage has escaped to Thieves Den, kill him and bring me back his head! and gold will follow!")
  $("#classtable").show()
}


dialouge = function(thequest){
$("#turntable").hide()
if(thequest == "first")
log("Excellent work! Now come, drink! For our gold is your gold!")
questlevelup(2)
}


nextfunction = function(position){
  dialouge(currentquest)
}

questlevelup = function(timesdone){
alert("You are now level " + timesdone + "! and have completed this quest!")
        playerObj.level = playerObj.level + 1
        playerObj.health = healthOG + 3 * timesdone
        playerObj.armorclass = playerObj.armorclass + 1
        playerObj.armorclassOG = playerObj.armorclassOG + 1
        playerObj.armorpen = playerObj.armorpen + 1
        playerObj.armorpenOG = playerObj.armorpenOG + 1
        log("You have gained +1 to AC and AP")
        log("You have gained 3 health and 1 potion")
        playerObj.potioncount = playerObj.potioncount + 1
        $('#playerlevel').empty()
        $playerlevelselector.innerHTML += "Your level: " + playerObj.level
        $("#enemylevel").empty()
}