// static room data for diplaying the master room graph

const rooms = 
    {0: {name:'Back yard', pokeballs: "[]", pokemon: "[]" , exits: {'n':1,'s':3,'e':'','w':7}, coords:{x: 12,y: 5}},
    1: {name:'Kanto', pokeballs: "[]", pokemon: "[]" , exits:{'n':2,'s':0,'e':17,'w':68}, coords:{x: 12,y: 6}},
    2: {name:'Johto', pokeballs: "[]", pokemon: "[]" , exits:{'n':5,'s':1,'e':18,'w':69}, coords:{x: 12,y: 7}},
    3: {name:'Hoenn', pokeballs: "[]", pokemon: "[]" , exits:{'n':0,'s':4,'e':'','w':44}, coords:{x: 12,y: 4}},
    4: {name:'Sinnoh', pokeballs: "[]", pokemon: "[]" , exits:{'n':3,'s':6,'e':'','w':45}, coords:{x: 12,y: 3}},
    5: {name:'Unova', pokeballs: "[]", pokemon: "[]" , exits:{'n':77,'s':2,'e':'','w':''}, coords:{x: 12,y: 8}},
    6: {name:'Kalos', pokeballs: "[]", pokemon: "[]" , exits:{'n':4,'s':'','e':'','w':''}, coords:{x: 12,y: 2}},
    7: {name:'Alola', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':0,'w':46}, coords:{x: 11,y: 5}},
    8: {name:'Galar', pokeballs: "[]", pokemon: "[]" , exits:{'n':17,'s':'','e':'','w':''}, coords:{x: 13,y: 5}},
    9: {name:'Pewter City', pokeballs: "[]", pokemon: "[]" , exits:{'n':20,'s':30,'e':'','w':''}, coords:{x: 14,y: 5}},
    10: {name:'Cerulean City', pokeballs: "[]", pokemon: "[]" , exits:{'n':22,'s':32,'e':'','w':''}, coords:{x: 15,y: 5}},
    11: {name:'Vermilion City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':12,'w':''}, coords:{x: 16,y: 5}},
    12: {name:'Celadon City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':13,'w':11}, coords:{x: 17,y: 5}},
    13: {name:'Fuschia City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':14,'w':12}, coords:{x: 18,y: 5}},
    14: {name:'Saffron City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':15,'w':13}, coords:{x: 19,y: 5}},
    15: {name:'Cinnabar City', pokeballs: "[]", pokemon: "[]" , exits:{'n':27,'s':42,'e':16,'w':14}, coords:{x: 20,y: 5}},
    16: {name:'Viridian City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':'','w':15}, coords:{x: 21,y: 5}},
    17: {name:'Violet City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':8,'e':20,'w':1}, coords:{x: 13,y: 6}},
    18: {name:'Azalea City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':19,'w':2}, coords:{x: 13,y: 7}},
    19: {name:'Goldenrod City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':21,'w':18}, coords:{x: 14,y: 7}},
    20: {name:'Ecruteak City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':9,'e':22,'w':17}, coords:{x: 14,y: 6}},
    21: {name:'Olivine City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':'','w':19}, coords:{x: 15,y: 7}},
    22: {name:'Cianwood City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':10,'e':23,'w':20}, coords:{x: 15,y: 6}},
    23: {name:'Mahogany Town', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':24,'w':22}, coords:{x: 16,y: 6}},
    24: {name:'Blackthorn City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':25,'w':23}, coords:{x: 17,y: 6}},
    25: {name:'Rustboro City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':26,'w':24}, coords:{x: 18,y: 6}},
    26: {name:'Dewford City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':27,'w':25}, coords:{x: 19,y: 6}},
    27: {name:'Mauville City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':15,'e':'','w':26}, coords:{x: 20,y: 6}},
    28: {name:'Lavaridge City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':29,'e':'','w':''}, coords:{x: 13,y: 4}},
    29: {name:'Petalburg City', pokeballs: "[]", pokemon: "[]" , exits:{'n':28,'s':'','e':31,'w':''}, coords:{x: 13,y: 3}},
    30: {name:'Fortree City', pokeballs: "[]", pokemon: "[]" , exits:{'n':9,'s':31,'e':'','w':''}, coords:{x: 14,y: 4}},
    31: {name:'Mossdeep City', pokeballs: "[]", pokemon: "[]" , exits:{'n':30,'s':'','e':33,'w':29}, coords:{x: 14,y: 3}},
    32: {name:'Sootopolis City', pokeballs: "[]", pokemon: "[]" , exits:{'n':10,'s':'','e':34,'w':''}, coords:{x: 15,y: 4}},
    33: {name:'Oreburgh City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':74,'e':'','w':31}, coords:{x: 15,y: 3}},
    34: {name:'Eterna City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':36,'w':32}, coords:{x: 16,y: 4}},
    35: {name:'Veilstone City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':37,'w':''}, coords:{x: 16,y: 3}},
    36: {name:'Pastoria City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':38,'w':34}, coords:{x: 17,y: 4}},
    37: {name:'Hearthome City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':39,'w':35}, coords:{x: 17,y: 3}},
    38: {name:'Canalave City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':40,'w':36}, coords:{x: 18,y: 4}},
    39: {name:'Snowpoint City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':41,'w':37}, coords:{x: 18,y: 3}},
    40: {name:'Sunyshore City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':41,'e':'','w':38}, coords:{x: 19,y: 4}},
    41: {name:'Striaton City', pokeballs: "[]", pokemon: "[]" , exits:{'n':40,'s':'','e':'','w':39}, coords:{x: 19,y: 3}},
    42: {name:'Aspertia City', pokeballs: "[]", pokemon: "[]" , exits:{'n':15,'s':43,'e':'','w':''}, coords:{x: 20,y: 4}},
    43: {name:'Nacrene City', pokeballs: "[]", pokemon: "[]" , exits:{'n':42,'s':'','e':'','w':''}, coords:{x: 20,y: 4}},
    44: {name:'Virbank City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':3,'w':54}, coords:{x: 11,y: 4}},
    45: {name:'Castelia City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':4,'w':''}, coords:{x: 11,y: 3}},
    46: {name:'Nimbasa City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':7,'w':47}, coords:{x: 10,y: 5}},
    47: {name:'Driftveil City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':55,'e':46,'w':''}, coords:{x: 9,y: 5}},
    48: {name:'Mistralton City', pokeballs: "[]", pokemon: "[]" , exits:{'n':65,'s':56,'e':'','w':49}, coords:{x: 8,y: 5}},
    49: {name:'Icirrus City', pokeballs: "[]", pokemon: "[]" , exits:{'n':64,'s':57,'e':48,'w':50}, coords:{x: 7,y: 5}},
    50: {name:'Opelucid City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':49,'w':51}, coords:{x: 6,y: 5}},
    51: {name:'Humilau City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':50,'w':52}, coords:{x: 5,y: 5}},
    52: {name:'Santalune City', pokeballs: "[]", pokemon: "[]" , exits:{'n':61,'s':60,'e':51,'w':53}, coords:{x: 4,y: 5}},
    53: {name:'Cyllage City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':52,'w':85}, coords:{x: 3,y: 5}},
    54: {name:'Shalour City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':44,'w':55}, coords:{x: 10,y: 4}},
    55: {name:'Coumarine City', pokeballs: "[]", pokemon: "[]" , exits:{'n':47,'s':'','e':54,'w':''}, coords:{x: 9,y: 4}},
    56: {name:'Lumiose City', pokeballs: "[]", pokemon: "[]" , exits:{'n':48,'s':'','e':'','w':''}, coords:{x: 8,y: 4}},
    57: {name:'Laverre City', pokeballs: "[]", pokemon: "[]" , exits:{'n':49,'s':'','e':'','w':58}, coords:{x: 7,y: 4}},
    58: {name:'Anistar City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':57,'w':59}, coords:{x: 6,y: 4}},
    59: {name:'Snowbelle City', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':58,'w':60}, coords:{x: 5,y: 4}},
    60: {name:'Viridian Forest', pokeballs: "[]", pokemon: "[]" , exits:{'n':52,'s':'','e':59,'w':''}, coords:{x: 4,y: 4}},
    61: {name:'Mt. Moon', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':52,'e':62,'w':''}, coords:{x: 4,y: 6}},
    62: {name:'Cerulean Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':63,'w':61}, coords:{x: 5,y: 6}},
    63: {name:'Rock Tunnel', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':64,'w':62}, coords:{x: 6,y: 6}},
    64: {name:`Diglett's Cave`, pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':49,'e':'','w':63}, coords:{x: 7,y: 6}},
    65: {name:'Safari Zone', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':48,'e':66,'w':''}, coords:{x: 8,y: 6}},
    66: {name:'Seafoam Islands', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':67,'w':65}, coords:{x: 9,y: 6}},
    67: {name:'Power Plant', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':68,'w':66}, coords:{x: 10,y: 6}},
    68: {name:'Victory Road', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':1,'w':67}, coords:{x: 11,y: 6}},
    69: {name:'Indigo Plateau', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':2,'w':70}, coords:{x: 11,y: 7}},
    70: {name:'Ruins of Alph', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':69,'w':71}, coords:{x: 10,y: 7}},
    71: {name:'Slowpoke Well', pokeballs: "[]", pokemon: "[]" , exits:{'n':72,'s':'','e':70,'w':''}, coords:{x: 9,y: 7}},
    72: {name:'Union Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':73,'s':71,'e':'','w':''}, coords:{x: 9,y: 8}},
    73: {name:'Ilex Forest', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':72,'e':'','w':92}, coords:{x: 9,y: 9}},
    74: {name:'Radio Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':33,'s':75,'e':'','w':''}, coords:{x: 15,y: 2}},
    75: {name:'National Park', pokeballs: "[]", pokemon: "[]" , exits:{'n':74,'s':76,'e':'','w':''}, coords:{x: 15,y: 1}},
    76: {name:'Tin Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':75,'s':'','e':'','w':''}, coords:{x: 15,y: 0}},
    77: {name:'Bell Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':78,'s':5,'e':'','w':''}, coords:{x: 12,y: 9}},
    78: {name:'Burned Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':77,'e':79,'w':''}, coords:{x: 12,y: 10}},
    79: {name:'Sprout Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':80,'w':78}, coords:{x: 13,y: 10}},
    80: {name:'Whilr tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':81,'e':83,'w':79}, coords:{x: 14,y: 10}},
    81: {name:'Dark Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':80,'s':82,'e':'','w':''}, coords:{x: 14,y: 9}},
    82: {name:'Mt.Mortar', pokeballs: "[]", pokemon: "[]" , exits:{'n':81,'s':'','e':'','w':''}, coords:{x: 14,y: 8}},
    83: {name:'Lake of Rage', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':84,'w':80}, coords:{x: 15,y: 10}},
    84: {name:'Dragon\'s Den', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':'','w':83}, coords:{x: 16,y: 10}},
    85: {name:'Tohjo Falls', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':53,'w':86}, coords:{x: 2,y: 5}},
    86: {name:'Indigo Plateau', pokeballs: "[]", pokemon: "[]" , exits:{'n':87,'s':'','e':85,'w':''}, coords:{x: 1,y: 5}},
    87: {name:'Battle Frontier', pokeballs: "[]", pokemon: "[]" , exits:{'n':88,'s':86,'e':'','w':''}, coords:{x: 1,y: 6}},
    88: {name:'Mt. Silver', pokeballs: "[]", pokemon: "[]" , exits:{'n':89,'s':87,'e':91,'w':90}, coords:{x: 1,y: 7}},
    89: {name:'Sinjoh Ruins', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':88,'e':'','w':''}, coords:{x: 1,y: 8}},
    90: {name:'Petalburg Woods', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':88,'w':''}, coords:{x: 0,y: 7}},
    91: {name:'Devon Corporation', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':'','w':88}, coords:{x: 2,y: 7}},
    92: {name:'Rusturf Tunnel', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':73,'w':93}, coords:{x: 8,y: 9}},
    93: {name:'Granite Cave', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':92,'w':94}, coords:{x: 7,y: 9}},
    94: {name:'Meteor Falls', pokeballs: "[]", pokemon: "[]" , exits:{'n':95,'s':97,'e':93,'w':96}, coords:{x: 6,y: 9}},
    95: {name:'Mt. Pyre', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':94,'e':'','w':''}, coords:{x: 6,y: 10}},
    96: {name:'Cave of Origin', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':'','e':94,'w':98}, coords:{x: 5,y: 9}},
    97: {name:'Hoenn Victory Road', pokeballs: "[]", pokemon: "[]" , exits:{'n':94,'s':'','e':'','w':''}, coords:{x: 6,y: 8}},
    98: {name:'Sky Pillar', pokeballs: "[]", pokemon: "[]" , exits:{'n':100,'s':99,'e':96,'w':''}, coords:{x: 4,y: 9}},
    99: {name:'Battle Tower', pokeballs: "[]", pokemon: "[]" , exits:{'n':98,'s':'','e':'','w':''}, coords:{x: 4,y: 8}},
    100: {name:'Southern Island', pokeballs: "[]", pokemon: "[]" , exits:{'n':'','s':98,'e':'','w':''}, coords:{x: 4,y: 10}}}

export default rooms