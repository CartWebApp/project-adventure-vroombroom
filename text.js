// Part one

let partOneText = [
    "you wake up in a cold hallway, dark and quiet. Theres a good in front do you open? ",
// Open or walk down hallway

// walking down the hallway
"Walking down the hallway it leads to a dead end",


// open door
"Opening the door you step inside, Its an old foyer, the walls are cracked and peeling. looking around you see a door to your left and right and center. ",
"To your left you see a door, its old and rusty. To your right you see a door, its new and shiny. In the center you see a door, its made of wood and looks like it hasn't been opened in years. ",

// Choose left, right or center

// center
"Opening the center door you end up back in the same foyer, the same crackked walls and peeling paint. Turning back the door is now a wall. Choose again.",
 // Choose left, right or center

// left
"Opening the left door step inside, closing the door behined you. The room is dark then groaning can be heard deeper in the room, a zombie stumbles out of the shadows. what do you do?",
// Punch or run

// punch
"The zombie grabs you arm and munches on you. You dead",

// run
"You run away from the zombie, busting through the door where you came closing it behind you. ending back in the foyer. the zombie can be heard banging on the door. ",

// idle for too long
"The zombie busts through the door, grabbing you and munching on you. You dead",

// right
"Opening the right door you step inside, Its a old kitchen, the walls are cracked and peeling. looking around you a knife on the counter and see doors to your left and right. Which do you choose?",

// Choose left or right

//Right
"The door doesn't budge it seems there is something blocking it from behind.",

//left 
"The door is locked, maybe theres something in the kitchen to help you unlock it. ",

// grabs knife and uses it to open left door

"Pushing the knife into the side of the door and shimmering it, the door pops open. Stepping inside its another hallway, the lights flicker above you.",

"Theres a door at the end of the hallway, before you can open it a man busts through the door, he seems to be wearing military gear. He looks at you and says, “What are you doing here? You need to leave now!”",
"Before you can respond he grabs you by your shirt collar dragging you with him back to the kitchen, slamming the door shut behind both of you. Before you can speak he starts barricading the door with whatever he can find.",
"“What are you doing?” you ask, confused. “We need to get out of here!” “There these.. things! roaming around!”", 

"The man grabs you by the shoulders, shaking you slightly. “Calm down! just be calm ill help you. we need to get to the roof evac will be here in 5 hours”",
"“5 hours?!” you shout, “Putting that aside. WHERE THE HELL ARE WE?” The man looks at you. “We are in a hosptital, there has been this infection going around that has been making people go crazy. The cause of it is currently unknown, but right now that doesn't matter”",

"The man grabs something from his backpack, its a machete, he hands it to you. “Here take this, it might be useful you could probaly use it to open a door or protect yourself. If you encounter another one of those things make sure to keep your distance when you are about to strike, you do not what them grabbing you. I will take my lead and clear as much as i can infront of you”",
"The man then ran off down the hallway, you hear him yell “Stay close to me!” A bang can be heared with a thump following it.",

"Theres a door in front and to the right of you Which do you choose?",

// Right
"The door that is blocked off. Its the same one as before",

// Front 
"Walking down the hallway you see the door that held the thing now open, It seems the man went this way. Trying the other doors prove futile as they are now locked",

"Walking through the open door the lifeless corspe can be seen on the floor cautiously moving around the body you make it to a big open area, hospital beds and chairs are scattered around the room. The lights are flickering above you, the sound of a generator can be heard in the distance. You see a sign showing the ways you can go",

// Left
"There is a exit sign indicating the way to the emergerceny it, but its blocked off by a pile of debris expectally. ",

// Right
"There is a sign indicating the way to the cafeteria, Trying to open the door proves futile as it is locked. ",

// Center
"Moving forward, you see a sign indicating the way to the stairs. The lights above you are flickering . You hear a loud bang coming from the stairs, it sounds like a gunshot. it must be the man that has been helping you. You run towards the stairs, but before you can reach them a zombie jumps out from behind a corner. You have one choice, fight it.", 
"Rearing back, you make distance between you and the zombie. You swing the machete at the zombie, killing it you breathe a sound of relief as you make your way up the stairwell carefully. You run up reach flight of stairs unforunatly the stair way was block by a barrier of hospital beds leading to the roof The door way leading into the fourth floor is open",
"As you enter the floor you are met with a dark hallway, The lights is this area seemed to have gave out. You can hear the sound of a generator Coming from your left. theres a door to your right and Which do you choose?",

// right
"The door is locked, maybe you can find something to open it with. ",

// right using the machete
"The door opens, you step inside. The room is dark and quiet. Looking you see its a storage closet for medical supplies. Although the room is dark you can see a few things. There is a first aid kit, a few boxes of bandages, and a few boxes of medical supplies. You take the first aid kit and a few boxes of bandages. You also see a box of ammo for a gun. You take the ammo and put it in your pocket.",

// left 
"The generator is making a loud noise, you walk towards it. The generator is old and rusty, but it seems to be working. You see a few wires hanging out of the generator. You can try to fix it .",

// fix it
"Staring at the wire you look to see where they are needed. Plugging the wires into the generator, After a second the lights flicker back on. Exiting the room you can now see where to go.",

"Their is a secondary stairwell leading up to the roof and a door leading to the right. Which do you choose?",

// right
"The door is locked, maybe you can find something to open it with. ",

// right using the machete
"The door doesn't budge, looks like you need to find a key to open it. ",

// left
"Looking closer at the door, you see the name director etch  on the door. You try to open it but it is locked. You can see a keycard reader next to the door. You need to find a keycard to open it.",

// Keycard is in the generator room
"The generator is making a loud noise, in the roo  you see a body with it a keeycard is on the chest of the body.",
"Grabbing it you got the keycard. You can now open the door.", 

"Their is a secondary stairwell leading up to the roof and a door leading to the directors office. Which do you choose?",

// Using the keycard on the directors office door
"The kepad beeps, as the door locks release and it opens. You step inside. The room is quiet Going through the cupbords you find the key needed for the door leading to the roof",
"Their is a secondary stairwell leading up to the roof and a door leading to the right. Which do you choose?",

// right using key
"Using the key the door opens and yous step inside of the stairwell. You make your final steps up the stairs to the roof. As you reach the top you see the man is there waiting for you. He looks at you and says, “I thought you were dead!” You look at him and say, “I thought you were dead too!” He laughs and says, “Well we made it to the roof. Now we just need to wait for the evac.”",
"How long? you ask. He looks at you and says, “30 minutes. he replys Suddenly groans can be heared coming from the stairs. A horde of zombies emerge”",
"“What do we do?” you ask. He looks at you and says, “We need to hold them off until the evac gets here.” You look around and see a few crates and a few barrels. You can use them to barricade the door.",

// If you give the man the extra ammo
"Wait! here You throw the box of ammo to the man, he grabs it and puts it in his pocket. “Thanks! I needed this.” He says. You look at him and say, “No problem.” He looks at you and says, “We need to hold them off until the evac gets here.” GRabbing the barrels and other things you began to barricade the door as he covers you so you dont grabbed.",
"You succesfully barricade the door, finally the helicopter arrives landing as the man gets on you run to the pad and he helps you up. The helicopter takes off and you look down at the hospital. You see the zombies trying to get to you, but they are too late. You made it out alive. THE END",


// If you didn't give ot grabbed the ammo
"Grabbing the barrels and other things you began to barricade the door as he covers you so you dont grabbed. Suddenly a click was heread as the man ran out of ammo. before you can react a zombie grabs your arm and munches on it but you punch its head pusing it behind the door.",
"Hey! you shout I.. was bit! The man is shocked and looks at you. “What do we do?” he asks. You look at him and then then the hellecopter lands but the zombies break through the barricade. You shout LEAVE ME IM A LOST CAUSE ILL HOLD THEM BACK YOU GET ON THE CHOPPER. Grabbing the machtete from you back you rush the incoming hord",
"The man gets on the chopper leaving you, but it was worth it. You hold them off as long as you can, but eventually they get to you. You are dead. THE END",

]

partOneChoiceOne = [
    "Open",
    "Walk down hallway"
]

choiceSelectTwo = [
    "left",
    "right",
    "center",
]

choiceSelectThree = [
    "punch",
    "run",
]

let partOnePicture = [
    "img/door.png",
    "img/hallway.png",
    "img/foyer.png",
    "img/leftdoor.png",
    "img/punch.png",
    "img/run.png",
    "img/idle.png",
]

let dialoguePartText = [partOneText]
let dialoguePartPicture = [partOnePicture]

// let gameSong = [
    
// ]