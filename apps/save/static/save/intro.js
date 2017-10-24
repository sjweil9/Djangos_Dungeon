$(document).ready(function(){
    messages = [
        "Welcome, Adventurer! You have entered Django's Dungeon - a labyrinth of adventure and danger! (click spacebar to continue)", 
        "Your quest is to navigate the Dungeon and find the evil Lord Django who resides within.", 
        "Along the way, you may encounter monsters, who hide in certain 'danger zones' throughout the dungeon.",
        "Combat is 'turn-based' - you will select one of your attack options, and then the monster will retaliate. Combat will continue until one of you has died.",
        "Defeating monsters will grant you experience, helping to level up your character. You may also retrieve special items from these monsters.",
        "Along the way, you may also encounter other travelers. Interact with them by pressing spacebar while next to one. They may offer you items or quests. Press 'Q' to toggle your Quest Journal.",
        "Finally, you may find items laying on the ground. Simply walk onto these items to add them to your inventory. You may press 'I' at any time to toggle your inventory.",
        "<a href='/dashboard' class='btn btn-primary intro'>Click Here to Begin</a><a href='/intro' class='btn btn-primary intro'>Click Here to Repeat the Intro</a>"
    ];
    $('.intro').text(messages[0]);
    var count = 1;
    $(document).keydown(function(e){
        if (e.which == 32) {
            $('.intro').html(messages[count]);
            if (count+1 != messages.length) {
                count++;
            }
        }
    });
})