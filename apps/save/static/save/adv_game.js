/*

current bugs:

desired functionality:
-WEAPONS
-Final Boss
-diff looking quest guys?
-key to unlock final room
-add MORE types of monsters/locations for them to appear
-gold?
-more items
*/

$(document).ready(function(){
    // ajax request to get save info from server
    $.get('/load', function(data){
        // TOP SECTION LAYS OUT VARIABLES AND CORE FUNCTIONS
        // map related variables
        var room1 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,0,1,1,1,0,0,0,0,0,0,0,0,2],
            [2,0,0,1,4,1,0,0,0,0,0,0,0,0,2],
            [2,0,0,1,1,1,0,0,0,0,0,0,1,1,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,1,1,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,1,1,6],
            [2,0,0,0,0,0,0,0,0,0,0,1,1,1,2],
            [2,0,0,0,1,1,1,1,1,0,0,1,3,1,2],
            [2,0,0,0,1,1,1,1,1,0,0,1,1,1,2],
            [2,2,2,2,2,2,6,2,2,2,2,2,2,2,2],
        ];
        var room2 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,0,1,1,4,4,1,1,0,0,0,0,0,2],
            [2,0,0,1,1,1,1,1,1,0,0,5,0,0,2],
            [2,1,1,0,0,0,0,0,0,0,1,1,0,0,2],
            [2,1,1,0,0,0,0,0,0,1,1,1,1,0,2],
            [6,1,1,0,0,0,0,0,1,1,3,3,1,1,2],
            [2,1,1,0,0,0,0,0,0,1,1,1,1,0,2],
            [2,1,1,0,0,0,0,0,0,0,1,1,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,2,2,2,2,2,2,2,6,2,2,2,2,2,2],
        ];
        var room3 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,6,2],
        ];
        var room4 = [
            [2,2,2,2,2,2,6,2,2,2,2,2,2,2,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,7,0,0,0,1,1,1,1,1,1,0,0,2],
            [2,0,0,0,0,0,1,1,1,1,1,1,0,0,2],
            [2,0,0,0,0,0,1,1,4,4,1,1,0,0,2],
            [2,0,0,0,0,0,1,1,3,3,1,1,0,0,2],
            [2,0,0,0,0,0,1,1,1,1,1,1,0,0,2],
            [2,0,0,0,0,0,1,1,1,1,1,1,0,0,2],
            [2,0,5,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        ];
        var room5 = [
            [2,2,2,2,2,2,2,2,6,2,2,2,2,2,2],
            [2,0,0,5,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,0,0,1,1,1,2],
            [2,1,1,1,1,1,1,0,0,0,0,1,1,1,6],
            [2,1,1,1,1,1,1,0,0,0,0,1,1,1,2],
            [2,1,1,1,1,1,1,0,0,0,0,0,0,0,2],
            [2,3,4,3,1,1,1,0,0,0,0,3,0,0,2],
            [2,4,3,4,1,1,1,0,0,0,0,0,0,0,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        ];
        var room6 = [
            [2,2,2,2,2,2,2,2,2,2,2,2,2,6,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,3,4,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,3,4,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,3,4,2],
            [6,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        ];
        var startglobe = [
            [room1, room2, room3],
            [room4, room5, room6]
        ]
        var start_quests = [
            {'name': 'Goblin', 'xp': 200, 'items': ['Healing Potion', 'Energy Potion'], 'message': "<p class='green huge'>The traveler has asked for your assistance. Kill 3 Goblins and return for a reward!</p>", 'reward': "<p class='green'>You receive 200XP and two potions!</p>"}, 
            {'name': 'Troll', 'xp': 350, 'items': ['Healing Potion', 'Energy Potion'], 'message': "<p class='green huge'>The traveler has asked for your assistance. Kill 3 Trolls and return for a reward!</p>", 'reward': "<p class='green'>You receive 350XP and two potions!</p>"}, 
            {'name': 'Dragon', 'xp': 3000, 'items': ['Healing Potion','Healing Potion','Healing Potion','Healing Potion','Healing Potion','Energy Potion','Energy Potion','Energy Potion','Energy Potion','Energy Potion'], 'message': "<p class='green huge'>You have made it deep into Django's Dungeon, adventurer. Legend tells that the caverns beyond this point contain Dragons! Kill 3 and return for a sizeable reward!</p>", 'reward': "<p class='green'>You receive 3000XP and TEN potions!</p>"}
        ];
        // THIS SECTION DEFINES CHARACTER CLASS AND ASSOC. METHODS
        // character related variables
        class Character {
            constructor(name="Tester", x=1, y=1, room_x=0, room_y=0, hp=200, maxhp=200, xp=0, lvl=1, atkval=25, energy=100, maxenergy=100, target=null, moveable=true, in_combat=false, in_motion=false,looking_inv=false, looking_quest_log=false, combat_moves={'Punch': ['A', 1, 0], 'Kick': ['B', 2, 10]}, inventory=[], globe=startglobe, world=startglobe[0][0], active_quest=null, quest_counter=0, available_quests=start_quests) {
                this.name = name;
                this.x = x;
                this.y = y;
                this.room_x = room_x;
                this.room_y = room_y;
                this.hp = hp;
                this.maxhp = maxhp;
                this.xp = xp;
                this.lvl = lvl;
                this.atkval = atkval;
                this.energy = energy;
                this.maxenergy = maxenergy;
                this.target = target;
                this.moveable = moveable;
                this.in_combat = in_combat;
                this.in_motion = in_motion;
                this.looking_inv = looking_inv;
                this.looking_quest_log = looking_quest_log;
                this.combat_moves = combat_moves;
                this.inventory = inventory;
                this.globe = globe;
                this.world = world;
                this.active_quest = active_quest;
                this.quest_counter = quest_counter;
                this.available_quests = available_quests;
            }
            moveCharacter(){
                $('#character').css({
                    left : this.x*64,
                    top : this.y*64
                });
            }
            check_death(){
                if (this.hp <= 0){
                    $('#messages').html("<p class='red huge'>YOU HAVE DIED</p>");
                    $('#messages').append("<p class='green'>Refresh or Return to Dashboard to Reload at Last Save</p>");
                    $('#gamewrap').children().hide();
                    $('#gamewrap').css({'background': 'url(static/save/images/gameover.jpg) no-repeat center', 'background-size': '100% 100%'});
                    this.moveable = false;
                    this.in_combat = false;
                }
            }
            check_level(){
                if (this.xp >= this.lvl*this.lvl*100) {
                    $('#messages').prepend("<p class='green huge'>You leveled up!</p>");
                    this.lvl += 1;
                    this.maxhp += this.lvl*this.lvl*10;
                    this.maxenergy += this.lvl*this.lvl*5;
                    this.atkval += this.lvl*this.lvl;
                    if (this.lvl == 5) {
                        this.combat_moves['Fireball'] = ['C', 4, 20];
                        $('#messages').prepend("<p class='green huge'>You learned FIREBALL!</p>");
                    }
                    if (this.lvl == 10) {
                        this.combat_moves['Fireblast'] = ['D', 8, 50];
                        $('#messages').prepend("<p class='green huge'>You learned FIREBLAST!</p>");
                    }
                    updateStats();
                    $('#stats').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
                }
            }
            use_move(move){
                if (this.energy >= this.combat_moves[move][2]) {
                    var dmg_dealt = this.atkval*this.combat_moves[move][1];
                    var message_html = "<p class='green'>You dealt " + dmg_dealt + " damage!</p>";
                    $('#messages').prepend(message_html);
                    message_html = "<p class='red'>You took " + this.target.atkval + " damage!</p>";
                    $('#messages').prepend(message_html);                            
                    this.target.hp -= dmg_dealt;
                    this.hp -= this.target.atkval;
                    this.energy -= this.combat_moves[move][2];
                    updateStats();
                    updateMonsterStats();
                    $('#hp').css({'color': 'red', 'font-size': '2em'}).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){$('#hp').css({'color': 'black', 'font-size': '1em'});});
                    $('#enemy img').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){
                        character.check_death();
                        if (character.hp >= 0){
                            character.target.check_death();
                        }
                        character.in_motion = false;
                    });
                }
                else {
                    $('#usercommands').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){
                        $('#messages').prepend("<p class='red huge'>You don't have enough energy for that!</p>");
                        character.in_motion = false;
                    });
                }
            }
            attack() {
                this.moveable = false;
                this.in_combat = true;
                $('#gamewrap').children().hide();
                $('#character').hide();
                var enemy_html = "<div id='enemy'><img src='static/save/images/" + this.target.name + ".png' alt='" + this.target.name + "'></div>";
                $('#gamewrap').append(enemy_html);
                var message_html = "<p class='red huge'><b>A " + this.target.name + " appeared!</b></p>";
                $('#messages').prepend(message_html);
                $('#gamewrap').append("<div id='combatbottom'><div id='enemystats'></div><div id='usercommands'></div></div>");
                updateMonsterStats();
                var combat_options_html = "<p>Your options:</p>";
                for(var option in this.combat_moves){
                    var cur = this.combat_moves[option];
                    combat_options_html += ("<p>" + cur[0] + " - ");
                    combat_options_html += (option + " - Deals " + (this.atkval*cur[1]) + " damage - Costs ");
                    combat_options_html += (cur[2] + " energy.");
                    $('#usercommands').html(combat_options_html);
                }
            }
            check_inventory() {
                this.looking_quest_log = false;
                if (this.looking_inv) {
                    this.looking_inv = false;
                    updateStats();
                }
                else {
                    this.looking_inv = true;
                    var inventory_html = "<h1>Inventory</h1><form>";
                    for (var item in this.inventory) {
                        inventory_html += ("<button class='item' value='" + character.inventory[item] + "'>" + character.inventory[item] + "</button>");
                    }
                    inventory_html += "</form>";
                    $('#stats').html(inventory_html);
                    $('#stats').css('overflow-y', 'scroll');
                    $('#stats button.item').click(function(){
                        var cur_item = $(this).val();
                        var index = character.inventory.indexOf(cur_item);
                        character.inventory.splice(index, 1);
                        if (cur_item == "Healing Potion") {
                            character.hp += 100;
                            if (character.hp > character.maxhp){
                                character.hp = character.maxhp;
                            }
                            character.check_inventory();
                            $('#hp').css({'color': 'green', 'font-size': '2em'}).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){$('#hp').css({'color': 'red', 'font-size': '1em'});});
                        }
                        else if (cur_item == "Energy Potion") {
                            character.energy += 50;
                            if (character.energy > character.maxenergy){
                                character.energy = character.maxenergy;
                            }
                            character.check_inventory();
                            $('#energy').css({'color': 'green', 'font-size': '2em'}).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){$('#energy').css({'color': 'black', 'font-size': '1em'});});
                        }
                    });
                    $('#stats form').submit(function(){
                        return false;
                    });
                }
            }
            check_quest_log(){
                this.looking_inv = false;
                if (this.looking_quest_log) {
                    this.looking_quest_log = false;
                    updateStats();
                }
                else {
                    this.looking_quest_log = true;
                    var quest_log_html = "<h1>Quest Log</h1>";
                    if (this.active_quest == null) {
                        quest_log_html += "<p>No Quests Active</p>";
                    }
                    else {
                        quest_log_html += ("<p>Killed " + this.quest_counter + " out of 3 " + this.active_quest.name + "s</p>");
                        quest_log_html += ("<p>XP Reward: " + this.active_quest.xp + "</p>");
                        quest_log_html += ("<p>Item Rewards:</p><ul>");
                        for (var item in this.active_quest.items) {
                            quest_log_html += ("<li>" + this.active_quest.items[item] + "</li>");
                        }
                        quest_log_html += ("</ul>");
                    }
                    $('#stats').html(quest_log_html);
                    $('#stats').css('overflow-y', 'scroll');
                }
            }
            start_quest(){
                var quest;
                if (this.room_x == 1 && this.room_y == 1) {
                    quest = this.available_quests[2];
                }
                else {
                    quest = this.available_quests[Math.floor(Math.random()*this.available_quests.length)];
                }
                $('#messages').prepend(quest.message);
                this.active_quest = quest;
                this.active_quest.room = [this.room_x, this.room_y];
                this.quest_counter = 0;
            }
            finish_quest(){
                $('#messages').prepend("<p class='green huge'>The traveler rewards you for your assistance!</p>");
                $('#messages').prepend(this.active_quest.reward);
                this.xp += this.active_quest.xp;
                for (var item in this.active_quest.items) {
                    this.inventory.push(this.active_quest.items[item]);
                }
                this.active_quest = null;
                $('#xp').css({'color': 'green', 'font-size': '2em'}).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){$('#xp').css({'color': 'black', 'font-size': '1em'});});
                updateStats();
                this.check_level();
            }
        }
        function createWorld(){
            var worldhtml = "";        
            for (var i = 0; i < character.world.length; i++) {
                var divhtml = "<div class='row' id='" + i + "'>";
                worldhtml += divhtml;
                for (var j = 0; j < character.world[i].length; j++) {
                    if (character.world[i][j] == 2) {
                        worldhtml += "<div class='wall'></div>";
                    }
                    else if (character.world[i][j] == 1) {
                        worldhtml += "<div class='danger'></div>";
                    }
                    else if (character.world[i][j] == 0) {
                        worldhtml += "<div class='empty'></div>";
                    }
                    else if (character.world[i][j] == 3) {
                        worldhtml += "<div class='empty'><img src='static/save/images/healing_potion.png' alt='healing potion'></div>";
                    }
                    else if (character.world[i][j] == 4) {
                        worldhtml += "<div class='empty'><img src='static/save/images/energy_potion.png' alt='energy potion'></div>";
                    }
                    else if (character.world[i][j] == 5) {
                        if (character.room_x == 0 && character.room_y == 1) {
                            worldhtml += "<div class='empty'><img src='static/save/images/elf.png' alt='elf'></div>";
                        }
                        else if (character.room_x == 1 && character.room_y == 0) {
                            worldhtml += "<div class='empty'><img src='static/save/images/swordsman.png' alt='swordsman'></div>";
                        }
                        else if (character.room_x == 1 && character.room_y == 1) {
                            worldhtml += "<div class='empty'><img src='static/save/images/wizard.png' alt='wizard'></div>";
                        }
                    }
                    else if (character.world[i][j] == 6) {
                        worldhtml += "<div class='empty'></div>";
                    }
                    else if (character.world[i][j] == 7) {
                        worldhtml += "<div class='empty'><img src='static/save/images/healingfountain.png' alt='healing fountain'></div>";
                    }
                }
                worldhtml += "</div>";
            }
            $('#gamewrap').html(worldhtml);
        };
        // make our instance
        const character = new Character(data.name, data.x, data.y, data.room_x, data.room_y, data.hp, data.maxhp, data.xp, data.lvl, data.atkval, data.energy, data.maxenergy, data.target, data.moveable, data.in_combat, data.in_motion, data.looking_inv, data.looking_quest_log, data.combat_moves, data.inventory, data.globe, data.world, data.active_quest, data.quest_counter, data.available_quests);
        createWorld();
        character.moveCharacter();
        updateStats();
        // THIS SECTION DEFINES SOME "WORLD" METHODS
        // RELATED TO DRAWING BROWSER ITEMS
        // redraw stats box
        function updateStats() {
            var htmlString = "";
            htmlString += ("<h1>" + character.name + "</h1>");
            htmlString += ("<h2 id='level'>Level " + character.lvl + "</h2>");
            htmlString += ("<p id='hp'>HP: " + character.hp + "/" + character.maxhp + "</p>");
            htmlString += ("<p id='xp'>XP: " + character.xp + "/" + (character.lvl*character.lvl*100) + "</p>");
            htmlString += ("<p id='energy'>Energy: " + character.energy + "/" + character.maxenergy + "</p>");
            $('#stats').css('overflow-y', 'hidden');
            $('#stats').html(htmlString);
        }
        function updateMonsterStats() {
            var htmlString = "";
            htmlString += ("<h1>" + character.target.name + "</h1>");
            htmlString += ("<h2>Level " + character.target.lvl + "</h2>");
            htmlString += ("<p>HP: " + character.target.hp + "/" + character.target.maxhp + "</p>");
            $('#enemystats').html(htmlString);
        }
        // THIS SECTION DEFINES MONSTER CLASS AND ASSOC. METHODS
        // monster related functions
        class Monster {
            constructor(name, lvl, atk, hp, xp) {
                this.name = name;
                this.lvl = lvl;
                this.xp = lvl*xp;
                this.hp = lvl*hp;
                this.maxhp = lvl*hp;
                this.atkval = atk + (lvl*lvl);
                this.available_items = ['Healing Potion', 'Energy Potion'];
            }
            check_death(){
                if (this.hp <= 0){
                    var message_html = "<p class='green'>You gain " + this.xp + "XP.";
                    message_html += "<p class='green huge'><b>You killed the " + this.name + "!</b></p>";
                    $('#messages').prepend(message_html);
                    if (Math.random() < 0.33) {
                        character.inventory.push(this.available_items[Math.floor(Math.random()*this.available_items.length)]);
                        var message_html = "<p class='green'>You got " + character.inventory[character.inventory.length-1] + " from the " + this.name + "!";
                        $('#messages').prepend(message_html);
                    }
                    if (character.active_quest) {
                        if (character.active_quest.name == this.name) {
                            character.quest_counter++;
                            if (character.quest_counter > 2) {
                                $('#messages').prepend("<p class='green huge'>You completed your quest! Return to the traveler to get your reward!</p>");
                                character.quest_counter = "done";
                            }
                        }
                    }
                    character.xp += this.xp;
                    character.check_level();
                    createWorld();
                    updateStats();
                    $('#character').show();
                    character.moveable = true;
                    character.in_combat = false;
                }
            }
        }
        // THIS SECTION IS THE ACTUAL PROGRAM FLOW
        // ALL CURRENTLY DERIVES ONLY FROM CHARACTER MOVEMENT
        // take key input to change coordinates
        $(document).keydown(function(e){
            if (e.which == 73) {
                character.check_inventory();
            }
            else if (e.which == 81) {
                character.check_quest_log();
            }
            else if (e.which == 32) {
                var c = character;
                if (c.world[c.y][c.x-1] == 5 || c.world[c.y][c.x+1] == 5 || c.world[c.y-1][c.x] == 5 || c.world[c.y+1][c.x] == 5) {
                    if (character.active_quest == null) {
                        character.start_quest();
                    }
                    else if (character.quest_counter == "done" && character.active_quest.room[0] == character.room_x && character.active_quest.room[1] == character.room_y) {
                        character.finish_quest();
                    }
                }
                if (c.world[c.y][c.x-1] == 7 || c.world[c.y][c.x+1] == 7 || c.world[c.y-1][c.x] == 7 || c.world[c.y+1][c.x] == 7) {
                    $('#messages').prepend("<p class='green huge'>You drink from the healing fountain. Your health and energy are restored!</p>");
                    character.hp = character.maxhp;
                    character.energy = character.maxenergy;
                    updateStats();
                    $('#hp').css({'color': 'green', 'font-size': '2em'}).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){$('#hp').css({'color': 'black', 'font-size': '1em'});});
                    $('#energy').css({'color': 'green', 'font-size': '2em'}).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100, function(){$('#energy').css({'color': 'black', 'font-size': '1em'});});
                }
            }
            else if (character.moveable) {
                // check for transport
                if (character.world[character.y][character.x] == 6) {
                    if (e.which == 40 && character.y == character.world.length-1) {
                        character.room_y += 1;
                        character.y = -1;
                    }
                    if (e.which == 38 && character.y == 0) {
                        character.room_y -= 1;
                        character.y = 10;
                    }
                    if (e.which == 39 && character.x == character.world[character.y].length-1) {
                        character.room_x += 1;
                        character.x = -1;
                    }
                    if (e.which == 37 && character.x == 0) {
                        character.room_x -= 1;
                        character.x = 15;
                    }
                    character.world = character.globe[character.room_y][character.room_x];
                    createWorld();
                    character.moveCharacter();
                }
                if (e.which == 37) {
                    if (character.world[character.y][character.x-1] != 2 && character.world[character.y][character.x-1] != 5 && character.world[character.y][character.x-1] != 7) {
                        character.x -= 1;
                        $('#character').css('background-position', '0px -64px');
                    }
                }
                else if (e.which == 39) {
                    if (character.world[character.y][character.x+1] != 2 && character.world[character.y][character.x+1] != 5 && character.world[character.y][character.x+1] != 7) {
                        character.x += 1;
                        $('#character').css('background-position', '0 0');
                    }
                }
                else if (e.which == 38) {
                    if (character.world[character.y-1][character.x] != 2 && character.world[character.y-1][character.x] != 5 && character.world[character.y-1][character.x] != 7) {
                        character.y -= 1;
                        $('#character').css('background-position', '-64px -64px');
                    }
                }
                else if (e.which == 40) {
                    if (character.world[character.y+1][character.x] != 2 && character.world[character.y+1][character.x] != 5 && character.world[character.y+1][character.x] != 7) {
                        character.y += 1;
                        $('#character').css('background-position', '-64px 0px');
                    }
                }
                // actually render/move character sprite
                character.moveCharacter();
                // FOLLOWING CHECKS INITIATE ABOVE METHODS
                // check for monsters
                if (character.world[character.y][character.x] == 1) {
                    var rng = Math.random();
                    if (character.room_x == 2 && character.room_y == 1 && rng <= 0.2) {
                        character.target = new Monster('Dragon', character.lvl, 30, 150, 200);
                        character.attack(character.target);
                    }
                    else if (rng <= 0.1) {
                        character.target = new Monster('Goblin', character.lvl, 15, 50, 50);
                        character.attack(character.target);
                    }
                    else if (rng <= 0.2) {
                        character.target = new Monster('Troll', character.lvl, 10, 75, 65);
                        character.attack(character.target);
                    }  
                }
                else if (character.world[character.y][character.x] == 3) {
                    $('#messages').prepend("<p class='green'>You acquired a potion!</p>");
                    character.inventory.push('Healing Potion');
                    character.world[character.y][character.x] = 0;
                    createWorld();
                }
                else if (character.world[character.y][character.x] == 4) {
                    $('#messages').prepend("<p class='green'>You acquired a potion!</p>");
                    character.inventory.push('Energy Potion');
                    character.world[character.y][character.x] = 0;
                    createWorld();
                }
            } 
            else if (character.in_combat && !character.in_motion) {
                if (e.which == 65){
                    character.in_motion = true;
                    character.use_move('Punch');
                }
                else if (e.which == 66){
                    character.in_motion = true;
                    character.use_move('Kick');
                }
                else if (e.which == 67){
                    character.in_motion = true;
                    character.use_move('Fireball');
                }
                else if (e.which == 68){
                    character.in_motion = true;
                    character.use_move('Fireblast');
                }
            }
        });
        $('#save').submit(function(e){
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: '/save',
                data: {
                    csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                    character: JSON.stringify(character),
                },
                complete: function(){
                    $('#messages').prepend("<p class='green huge'>You successfully saved!</p>")
                }
            });
        });
        $('#db').click(function(e){
            e.preventDefault();
            if (confirm("Are you sure you want to leave? Any unsaved progress will be lost.")) {
                window.location = '/dashboard';
            }
        });
    }, 'json');  
});