(this["webpackJsonpwfrp-shoppe-generator"]=this["webpackJsonpwfrp-shoppe-generator"]||[]).push([[0],[,,,,,,,,function(a,i,e){a.exports=e(22)},,,,,function(a,i,e){},function(a,i,e){},function(a,i,e){},function(a,i,e){},function(a,i,e){},function(a,i,e){},function(a,i,e){},function(a,i,e){},function(a,i,e){},function(a,i,e){"use strict";e.r(i);var n=e(0),o=e.n(n),l=e(2),c=e.n(l),t=(e(13),e(3)),r=e(4),p=e(5),g=e(7),m=e(6);e(14);var s=function(a){var i=a.label,e=a.type,n=a.placeholder,l=a.onChange,c=a.stateName,t=a.fadeIn,r=a.value,p=a.disabled;return o.a.createElement("div",{className:"form-input form-input-".concat(e," ").concat(t&&"fade-in","  ")},i&&o.a.createElement("b",null,i),o.a.createElement("input",{disabled:p,value:p?"":r,className:"input input-".concat(e," ").concat(p&&"disabled"),placeholder:n,type:e,onChange:function(a){return l(c,"number"===e&&r?a.target.valueAsNumber:a.target.value)}}))};e(15);var b=function(a){var i=a.options,e=a.label,n=a.onChange,l=a.stateName,c=a.value;return o.a.createElement("div",{className:"form-dropdown"},e&&o.a.createElement("b",null,e),o.a.createElement("select",{onChange:function(a){return n(l,a.target.value)},value:c},i.map((function(a){return o.a.createElement("option",{key:a.value+1,value:a.value},a.label)}))))};e(16);var v=function(a){var i=a.onRollPress,e=a.onClearPress;return o.a.createElement("div",{className:"main-form-footer"},o.a.createElement("button",{onClick:function(a){return i(a)}},"Roll!"),o.a.createElement("button",{onClick:function(a){return e(a)}},"Clear"))};e(17);var y=function(a){var i=a.label,e=a.onChange,n=a.stateName,l=a.fadeIn,c=a.value;return o.a.createElement("div",{className:"form-checkbox ".concat(l&&"fade-in")},o.a.createElement("label",{className:"checkbox-container"},o.a.createElement("b",null,i),o.a.createElement("input",{checked:c,onChange:function(a){return e(n,a.target.checked)},type:"checkbox"})))};e(18);var u=function(a){var i=a.onClearPress,e=a.gossipScore,n=a.gossipRoll,l=a.onRollPress,c=a.onChange,t=a.populationBrackets,r=a.resultsDisplayed,p=a.itemFilter,g=a.groupFilter,m=a.populationModifier,u=a.autoRoll,d=a.individualAutoRoll;return o.a.createElement("form",{className:"main-form"},o.a.createElement(b,{defaultValue:0,label:"Select the location's Population",options:t,stateName:"populationModifier",value:m,onChange:c}),o.a.createElement(s,{label:"Input Gossip score...",stateName:"gossipScore",type:"number",value:e,onChange:c}),o.a.createElement(s,{label:"Input Gossip roll...",stateName:"gossipRoll",type:"number",value:n,onChange:c,disabled:u}),o.a.createElement(y,{label:"Have the tool roll for you?",stateName:"autoRoll",value:u,onChange:c}),u&&o.a.createElement(y,{fadeIn:!0,label:"Have the roll happen individually, per item?",stateName:"individualAutoRoll",value:d,onChange:c}),o.a.createElement(v,{onRollPress:l,onClearPress:i}),r&&o.a.createElement(s,{fadeIn:!0,placeholder:"Filter by name...",stateName:"itemFilter",type:"text",value:p,onChange:c}),r&&o.a.createElement(s,{fadeIn:!0,placeholder:"Filter by group...",stateName:"groupFilter",type:"text",value:g,onChange:c}))};e(19);function d(a){var i=a.group,e=i.key,n=i.label,l=i.availableGroupItems;return o.a.createElement("div",{className:"results-card"},o.a.createElement("h3",null,n),l.map((function(a){return o.a.createElement("p",{key:"".concat(e," ").concat(a.name)},a.name)})))}e(20);var h=function(a){var i=a.availableItems,e=a.itemFilter,n=a.groupFilter,l=i;if(e){var c=[];l.forEach((function(a){var i=a.key,n=a.label,o=a.availableGroupItems.filter((function(a){return a.name.toLowerCase().includes(e.toLowerCase())}));o.length>0&&c.push({key:i,label:n,availableGroupItems:o})})),l=c}return n&&(l=l.filter((function(a){return a.label.toLowerCase().includes(n.toLowerCase())}))),o.a.createElement("div",{className:"results fade-in"},l.map((function(a){return o.a.createElement(d,{key:a.key,group:a})})))},k=(e(21),[{key:"meleeWeapons",label:"Melee Weapons",groupItems:[{name:"Buckler",price:2,coin:"g",icon:"",availability:4,page:"108"},{name:"Dagger",price:1,coin:"g",icon:"",availability:5,page:"108"},{name:"Demilance (Cavalry Spear)",price:20,coin:"g",icon:"",availability:3,page:"108"},{name:"Flail",price:15,coin:"g",icon:"",availability:3,page:"108"},{name:"Foil",price:18,coin:"g",icon:"",availability:2,page:"108"},{name:"Gauntlet/Knuckle-duster",price:1,coin:"g",icon:"",availability:5,page:"108"},{name:"Great Weapon",price:20,coin:"g",icon:"",availability:4,page:"108"},{name:"Halberd",price:15,coin:"g",icon:"",availability:5,page:"108"},{name:"Hand Weapon",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Lance",price:15,coin:"g",icon:"",availability:2,page:"108"},{name:"Main Gauche",price:4,coin:"g",icon:"",availability:3,page:"108"},{name:"Morning Star",price:15,coin:"g",icon:"",availability:3,page:"108"},{name:"Quarter Staff",price:3,coin:"s",icon:"",availability:6,page:"108"},{name:"Rapier",price:18,coin:"g",icon:"",availability:3,page:"108"},{name:"Shield",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Spear",price:10,coin:"g",icon:"",availability:5,page:"108"},{name:"Sword-breaker",price:5,coin:"g",icon:"",availability:3,page:"108"}]},{key:"rangedWeapons",label:"Ranged Weapons",groupItems:[{name:"Blunderbuss",price:70,availability:3,coin:"g",icon:"",page:"108"},{name:"Bola",price:7,availability:3,coin:"s",icon:"",page:"108"},{name:"Bow",price:10,availability:5,coin:"g",icon:"",page:"108"},{name:"Crossbow",price:25,availability:4,coin:"g",icon:"",page:"108"},{name:"Crossbow Pistol",price:35,availability:2,coin:"g",icon:"",page:"108"},{name:"Elfbow",price:70,availability:1,coin:"g",icon:"",page:"108"},{name:"Firearm",price:300,availability:1,coin:"",icon:"",page:"108"},{name:"Hochland Long Rifle",price:450,availability:1,coin:"g",icon:"",page:"108"},{name:"Javelin",price:25,availability:4,coin:"s",icon:"",page:"108"},{name:"Lasso",price:1,availability:6,coin:"g",icon:"",page:"108"},{name:"Longbow",price:15,availability:4,coin:"g",icon:"",page:"108"},{name:"Net",price:3,availability:6,coin:"g",icon:"",page:"108"},{name:"Pistol",price:200,availability:1,coin:"g",icon:"",page:"108"},{name:"Repeater Crossbow",price:100,availability:1,coin:"g",icon:"",page:"108"},{name:"Repeater Firearm",price:600,availability:1,coin:"g",icon:"",page:"108"},{name:"Repeater Pistol",price:400,availability:1,coin:"g",icon:"",page:"108"},{name:"Shortbow",price:7,availability:5,coin:"g",icon:"",page:"108"},{name:"Sling",price:4,availability:5,coin:"g",icon:"",page:"108"},{name:"Spear",price:10,availability:5,coin:"g",icon:"",page:"108"},{name:"Staff Sling",price:6,availability:2,coin:"g",icon:"",page:"108"},{name:"Throwing Axe/Hammer",price:5,availability:4,coin:"g",icon:"",page:"108"},{name:"Throwing Dagger/Star",price:3,availability:5,coin:"g",icon:"",page:"108"},{name:"Whip",price:2,availability:4,coin:"g",icon:"",page:"108"}]},{key:"ammunition",label:"Ammunition",groupItems:[{name:"Arrows (5)",price:1,availability:5,coin:"s",icon:"",page:"108"},{name:"Bolts (5)",price:2,availability:4,coin:"s",icon:"",page:"108"},{name:"Firearm Shot (10)",price:1,availability:2,coin:"s",icon:"",page:"108"},{name:"Gunpowder (per shot)",price:3,availability:1,coin:"s",icon:"",page:"108"}]},{key:"advancedArmour",label:"Advanced Armour",groupItems:[{name:"Leather Skullcap",price:3,availability:5,coin:"g",icon:"",page:"112"},{name:"Leather Jerkin",price:6,availability:5,coin:"g",icon:"",page:"112"},{name:"Leather Jack",price:12,availability:5,coin:"g",icon:"",page:"112"},{name:"Leather Leggings",price:10,availability:5,coin:"g",icon:"",page:"112"},{name:"Full Leather Armour",price:25,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Coif",price:20,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Shirt",price:60,availability:4,coin:"g",icon:"",page:"112"},{name:"Sleeved Mail Shirt",price:95,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Coat",price:75,availability:4,coin:"g",icon:"",page:"112"},{name:"Sleeved Mail Coat",price:130,availability:4,coin:"g",icon:"",page:"112"},{name:"Mail Leggings",price:20,availability:3,coin:"g",icon:"",page:"112"},{name:"Full Mail Armour",price:170,availability:3,coin:"g",icon:"",page:"112"},{name:"Helmet",price:30,availability:3,coin:"g",icon:"",page:"112"},{name:"Breastplate",price:70,availability:3,coin:"g",icon:"",page:"112"},{name:"Plate Bracers",price:60,availability:3,coin:"g",icon:"",page:"112"},{name:"Plate Leggings",price:70,availability:3,coin:"g",icon:"",page:"112"},{name:"Full Plate Armour",price:400,availability:2,coin:"g",icon:"",page:"112"}]},{key:"clothing",label:"Clothing",groupItems:[{name:"Rags",price:1,availability:7,coin:"p",icon:"",page:"113"},{name:"Poor",price:10,availability:7,coin:"s",icon:"",page:"113"},{name:"Common",price:1,availability:6,coin:"g",icon:"",page:"113"},{name:"Good",price:3,availability:5,coin:"g",icon:"",page:"113"},{name:"Best",price:10,availability:4,coin:"g",icon:"",page:"113"},{name:"Robes",price:15,availability:4,coin:"g",icon:"",page:"113"},{name:"Costume/Entertainer",price:5,availability:4,coin:"g",icon:"",page:"113"},{name:"Uniform",price:15,availability:3,coin:"g",icon:"",page:"113"},{name:"Noble's Garb",price:50,availability:2,coin:"g",icon:"",page:"113"},{name:"Royal Garb",price:100,availability:1,coin:"g",icon:"",page:"113"},{name:"Cloak",price:5,availability:6,coin:"g",icon:"",page:"113"},{name:"Overcoat",price:10,availability:6,coin:"g",icon:"",page:"113"},{name:"Hat, simple",price:10,availability:6,coin:"s",icon:"",page:"113"},{name:"Hat, wide-brimmed",price:1,availability:6,coin:"g",icon:"",page:"113"},{name:"Hood or Mask",price:10,availability:5,coin:"s",icon:"",page:"113"}]},{key:"tools",label:"Tools",groupItems:[{name:"Abacus",price:10,availability:2,coin:"g",icon:"",page:"118"},{name:"Gin Trap",price:2,availability:5,coin:"g",icon:"",page:"118"},{name:"Snare",price:1,availability:5,coin:"s",icon:"",page:"118"},{name:"Book, Illuminated",price:350,availability:1,coin:"g",icon:"",page:"118"},{name:"Book, Printed",price:100,availability:1,coin:"g",icon:"",page:"118"},{name:"Chain, per yard",price:30,availability:2,coin:"s",icon:"",page:"118"},{name:"Crowbar",price:10,availability:5,coin:"s",icon:"",page:"118"},{name:"Disguise Kit",price:5,availability:3,coin:"g",icon:"",page:"118"},{name:"Fish Hook and Line",price:3,availability:5,coin:"s",icon:"",page:"118"},{name:"Grappling Hook",price:4,availability:4,coin:"g",icon:"",page:"118"},{name:"Lock Picks",price:10,availability:4,coin:"g",icon:"",page:"118"},{name:"Manacles",price:5,availability:4,coin:"g",icon:"",page:"118"},{name:"Metal Ingot, Base",price:25,availability:4,coin:"s",icon:"",page:"118"},{name:"Pick",price:25,availability:4,coin:"s",icon:"",page:"118"},{name:"Pole, Yard",price:1,availability:6,coin:"s",icon:"",page:"118"},{name:"Sledge Hammer",price:20,availability:5,coin:"s",icon:"",page:"118"},{name:"Spade",price:25,availability:5,coin:"s",icon:"",page:"118"},{name:"Spike",price:5,availability:5,coin:"s",icon:"",page:"118"},{name:"Trade Tools",price:50,availability:4,coin:"g",icon:"",page:"118"},{name:"Wooden Wedge",price:8,availability:6,coin:"p",icon:"",page:"118"},{name:"Writing Kit",price:10,availability:4,coin:"g",icon:"",page:"118"}]},{key:"carryingEquipment",label:"Carrying Equipment",groupItems:[{name:"Backpack",price:30,availability:6,coin:"s",icon:"",page:"116"},{name:"Case, map or scroll",price:1,availability:3,coin:"g",icon:"",page:"116"},{name:"Chest",price:5,availability:4,coin:"g",icon:"",page:"116"},{name:"Flask, leather",price:15,availability:4,coin:"s",icon:"",page:"116"},{name:"Flask, metal",price:2,availability:3,coin:"g",icon:"",page:"116"},{name:"Jug",price:4,availability:6,coin:"s",icon:"",page:"116"},{name:"Pouch",price:5,availability:6,coin:"",icon:"",page:"116"},{name:"Purse",price:2,availability:6,coin:"s",icon:"",page:"116"},{name:"Sack",price:5,availability:6,coin:"s",icon:"",page:"116"},{name:"Saddlebag",price:2,availability:4,coin:"g",icon:"",page:"116"},{name:"Slingbag",price:2,availability:4,coin:"g",icon:"",page:"116"},{name:"Water Skin",price:8,availability:6,coin:"s",icon:"",page:"116"}]},{key:"commonServices",label:"Common Services",groupItems:[{name:"Artisan, per day",price:34,availability:5,coin:"p",icon:"",page:"121"},{name:"Artisan, per week",price:17,availability:5,coin:"s",icon:"",page:"121"},{name:"Entertainer, per day",price:28,availability:5,coin:"p",icon:"",page:"121"},{name:"Entertainer, per week",price:14,availability:5,coin:"s",icon:"",page:"121"},{name:"Labourer, per day",price:10,availability:5,coin:"p",icon:"",page:"121"},{name:"Labourer, per week",price:5,availability:5,coin:"s",icon:"",page:"121"},{name:"Physician, per day",price:60,availability:5,coin:"p",icon:"",page:"121"},{name:"Physician, per week",price:30,availability:5,coin:"s",icon:"",page:"121"},{name:"Servant, per day",price:12,availability:5,coin:"p",icon:"",page:"121"},{name:"Servant, per week",price:6,availability:5,coin:"s",icon:"",page:"121"}]},{key:"foodAndDrink",label:"Food And Drink",groupItems:[{name:"Ale",price:2,availability:6,coin:"p",icon:"",page:"114"},{name:"Beer",price:1,availability:7,coin:"",icon:"p",page:"114"},{name:"Keg of Ale or Beer, innkeepers",price:18,availability:7,coin:"p",icon:"",page:"114"},{name:"Keg of Ale or Beer, adventurers",price:3,availability:7,coin:"s",icon:"",page:"114"},{name:"Fodder per Day",price:5,availability:6,coin:"",icon:"",page:"114"},{name:"Food per Day (Poor)",price:5,availability:6,coin:"p",icon:"",page:"114"},{name:"Food per Day (Average)",price:10,availability:5,coin:"p",icon:"",page:"114"},{name:"Food per Day (Good)",price:18,availability:4,coin:"p",icon:"",page:"114"},{name:"Rations (per Week)",price:6,availability:5,coin:"s",icon:"",page:"114"},{name:"Cheap PIe",price:2,availability:0,coin:"p",icon:"",page:"114"},{name:"Loaf of Bread",price:2,availability:0,coin:"p",icon:"",page:"114"},{name:"Side of Meat",price:1,availability:0,coin:"s",icon:"",page:"114"},{name:"Delicacy",price:3,availability:0,coin:"s",icon:"",page:"114"},{name:"Spirits, Bottle",price:1,availability:0,coin:"s",icon:"",page:"114"},{name:"Wine, Common",price:1,availability:0,coin:"s",icon:"",page:"114"},{name:"Wine, Quality",price:10,availability:0,coin:"s",icon:"",page:"114"}]},{key:"lodging",label:"Lodging",groupItems:[{name:"Bath",price:1,availability:8,coin:"s",icon:"",page:"121"},{name:"Inn, common room per night",price:5,availability:8,coin:"p",icon:"",page:"121"},{name:"Private room",price:10,availability:8,coin:"s",icon:"",page:"121"},{name:"Stabling per house per night",price:10,availability:8,coin:"p",icon:"",page:"121"}]},{key:"lighting",label:"Lighting",groupItems:[{name:"Candle, tallow",price:3,availability:6,coin:"s",icon:"",page:"116"},{name:"Candle, tax",price:6,availability:4,coin:"s",icon:"",page:"116"},{name:"Firewood",price:2,availability:6,coin:"s",icon:"",page:"116"},{name:"Oil, lamp",price:5,availability:6,coin:"s",icon:"",page:"116"},{name:"Lamp",price:5,availability:6,coin:"s",icon:"",page:"116"},{name:"Lantern",price:5,availability:4,coin:"g",icon:"",page:"116"},{name:"Lantern, Storm",price:12,availability:3,coin:"g",icon:"",page:"116"},{name:"Match",price:1,availability:4,coin:"p",icon:"",page:"116"},{name:"Torch",price:5,availability:6,coin:"p",icon:"",page:"116"}]},{key:"miscellania",label:"Miscellania",groupItems:[{name:"Blanket",price:25,availability:6,coin:"s",icon:"",page:""},{name:"Cooking Pot",price:1,availability:6,coin:"g",icon:"",page:""},{name:"Cutlery, wooden",price:5,availability:6,coin:"s",icon:"",page:""},{name:"Cutlery, metal",price:3,availability:5,coin:"g",icon:"",page:""},{name:"Cutlery, silver",price:15,availability:3,coin:"g",icon:"",page:""},{name:"Deck of Cards",price:1,availability:6,coin:"g",icon:"",page:""},{name:"Dice (bone)",price:6,availability:6,coin:"s",icon:"",page:""},{name:"Instrument",price:5,availability:5,coin:"g",icon:"",page:""},{name:"Kettle",price:30,availability:6,coin:"s",icon:"",page:""},{name:"Ladder",price:10,availability:5,coin:"s",icon:"",page:""},{name:"Lock, average",price:1,availability:5,coin:"g",icon:"",page:""},{name:"Lock, quality",price:10,availability:3,coin:"g",icon:"",page:""},{name:"Mirror",price:10,availability:2,coin:"g",icon:"",page:""},{name:"Paper",price:5,availability:1,coin:"s",icon:"",page:""},{name:"Parchment",price:1,availability:2,coin:"s",icon:"",page:""},{name:"Perfume or Cologne",price:1,availability:5,coin:"g",icon:"",page:""},{name:"Religious Symbol",price:1,availability:5,coin:"g",icon:"",page:""},{name:"Rope, 20 yards",price:1,availability:5,coin:"g",icon:"",page:""},{name:"Tankard, pewter",price:1,availability:6,coin:"g",icon:"",page:""},{name:"Tankard, wooden",price:10,availability:6,coin:"s",icon:"",page:""},{name:"Telescope",price:100,availability:2,coin:"g",icon:"",page:""},{name:"Tent",price:15,availability:5,coin:"s",icon:"",page:""},{name:"Tinderbox",price:30,availability:6,coin:"s",icon:"",page:""}]},{key:"vehicles",label:"Vehicles",groupItems:[{name:"Boat, River",price:600,availability:2,coin:"g",icon:"",page:"119"},{name:"Boat, Rowing",price:90,availability:4,coin:"g",icon:"",page:"119"},{name:"Cart",price:50,availability:5,coin:"g",icon:"",page:"119"},{name:"Coach",price:500,availability:2,coin:"g",icon:"",page:"119"},{name:"Ship",price:12e3,availability:3,coin:"g",icon:"",page:"119"},{name:"Wagon",price:90,availability:5,coin:"g",icon:"",page:"119"}]},{key:"travelServices",label:"Travel Services",groupItems:[{name:"Cart or Wagon, short distance",price:1,availability:6,coin:"p",icon:"",page:"121"},{name:"Cart or Wagon, long trips",price:15,availability:6,coin:"p",icon:"",page:"121"},{name:"Cart with two horses, short distance",price:1,availability:6,coin:"s",icon:"",page:"121"},{name:"Cart with two horses, long trips",price:3,availability:6,coin:"g",icon:"",page:"121"},{name:"Coach, short distance",price:1,availability:4,coin:"g",icon:"",page:"121"},{name:"Coach, long trips",price:7,availability:4,coin:"g",icon:"",page:"121"},{name:"River boat, short distance",price:1,availability:6,coin:"s",icon:"",page:"121"},{name:"River boat, long trips",price:5,availability:6,coin:"s",icon:"",page:"121"},{name:"Ship's passage, short distance",price:1,availability:5,coin:"g",icon:"",page:"121"},{name:"Ship's passage, long trips",price:5,availability:5,coin:"g",icon:"",page:"121"},{name:"Wagon, three horses, short distance",price:10,availability:5,coin:"s",icon:"",page:"121"},{name:"Wagon, three horses, long trips",price:4,availability:5,icon:"",page:"121"}]},{key:"draughts",label:"Draughts",groupItems:[{name:"Bugman's Ale",price:50,availability:1,coin:"g",icon:"",page:"122"},{name:"Greta's Boon",price:30,availability:1,coin:"g",icon:"",page:"122"},{name:"Healing Draught",price:5,availability:4,coin:"g",icon:"",page:"122"}]},{key:"oddities",label:"Oddities",groupItems:[{name:"Antitoxin kit",price:3,availability:3,coin:"g",icon:"",page:"122"},{name:"Blessed water",price:10,availability:3,coin:"g",icon:"",page:"122"},{name:"Healing poultice",price:5,availability:5,coin:"p",icon:"",page:"122"},{name:"Grimoire",price:500,availability:1,coin:"g",icon:"",page:"122"},{name:"Lucky charm",price:15,availability:4,coin:"g",icon:"",page:"122"},{name:"Religious relic",price:5,availability:3,coin:"g",icon:"",page:"122"}]},{key:"mounts",label:"Mounts",groupItems:[{name:"Destrier",price:500,availability:3,coin:"g",icon:"",page:"119"},{name:"Light Warhorse",price:300,availability:5,coin:"g",icon:"",page:"119"},{name:"Pony",price:50,availability:5,coin:"g",icon:"",page:"119"},{name:"Riding Horse",price:80,availability:5,coin:"g",icon:"",page:"119"},{name:"Saddle",price:5,availability:5,coin:"g",icon:"",page:"119"},{name:"Harness",price:1,availability:5,coin:"g",icon:"",page:"119"}]},{key:"skilledServices",label:"Skilled Services",groupItems:[{name:"100 XP Total",price:6,availability:4,coin:"s",icon:"",page:"121"},{name:"400 XP total",price:10,availability:4,coin:"s",icon:"",page:"121"},{name:"800 XP total",price:15,availability:3,coin:"s",icon:"",page:"121"},{name:"1200 XP total",price:25,availability:3,coin:"s",icon:"",page:"121"},{name:"1600 XP total",price:35,availability:2,coin:"s",icon:"",page:"121"},{name:"2000 XP total",price:50,availability:1,coin:"s",icon:"",page:"121"}]},{key:"poisons",label:"Poisons",groupItems:[{name:"Black lotus",price:20,availability:1,coin:"g",icon:"",page:"122"},{name:"Chimera Spittle",price:150,availability:1,coin:"g",icon:"",page:"122"},{name:"Crimson Shade",price:35,availability:1,coin:"g",icon:"",page:"122"},{name:"Dark Venom",price:30,availability:1,coin:"g",icon:"",page:"122"},{name:"Heartkill",price:800,availability:1,coin:"g",icon:"",page:"122"},{name:"Mad Cap Mushrooms",price:30,availability:1,coin:"g",icon:"",page:"122"},{name:"Mandrake Root",price:25,availability:1,coin:"g",icon:"",page:"122"},{name:"Manticore Spoor",price:65,availability:1,coin:"g",icon:"",page:"122"}]},{key:"livestock",label:"Livestock",groupItems:[{name:"Cat",price:1,availability:6,coin:"s",icon:"",page:"119"},{name:"Chicken",price:5,availability:6,coin:"p",icon:"",page:"119"},{name:"Cow",price:10,availability:6,coin:"g",icon:"",page:"119"},{name:"Dog (pedigree)",price:3,availability:6,coin:"g",icon:"",page:"119"},{name:"Dog, War",price:30,availability:2,coin:"g",icon:"",page:"119"},{name:"Goat",price:2,availability:6,coin:"g",icon:"",page:"119"},{name:"Hawk",price:80,availability:2,coin:"g",icon:"",page:"119"},{name:"Horse, nag, draft or Mule",price:25,availability:6,coin:"g",icon:"",page:"119"},{name:"Horse, pack",price:40,availability:6,coin:"g",icon:"",page:"119"},{name:"Ox",price:30,availability:6,coin:"g",icon:"",page:"119"},{name:"Pig",price:3,availability:6,coin:"g",icon:"",page:"119"},{name:"Pidgeons, Homing",price:1,availability:4,coin:"g",icon:"",page:"119"},{name:"Sheep",price:2,availability:6,coin:"g",icon:"",page:"119"}]},{key:"replacementAndAppendages",label:"Replacement and Appendages",groupItems:[{name:"Earring",price:1,availability:5,coin:"s",icon:"",page:"122"},{name:"Eye patch",price:6,availability:5,coin:"p",icon:"",page:"122"},{name:"False eye",price:1,availability:4,coin:"s",icon:"",page:"122"},{name:"False leg",price:6,availability:4,coin:"s",icon:"",page:"122"},{name:"Gilded nose",price:6,availability:3,coin:"s",icon:"",page:"122"},{name:"Skull plate",price:1,availability:4,coin:"s",icon:"",page:"122"},{name:"Tattoo",price:3,availability:4,coin:"s",icon:"",page:"122"},{name:"Veteran's hand",price:60,availability:2,coin:"g",icon:"",page:"122"},{name:"Wooden teeth",price:3,availability:4,coin:"s",icon:"",page:"122"}]}]),f=function(){return 100*Math.random()+1},C=[{label:"Below 100",value:-1},{label:"Below 1,000",value:0},{label:"Below 10,000",value:1},{label:"10,000 or more",value:2}],S=function(a){Object(g.a)(e,a);var i=Object(m.a)(e);function e(){var a;return Object(r.a)(this,e),(a=i.call(this)).onRollPress=function(i){i.preventDefault();var e=a.state,n=e.gossipScore,o=e.gossipRoll,l=e.populationModifier,c=e.autoRoll,t=e.individualAutoRoll,r=function(a,i,e,n,o,l){var c=[],t=o?f():e;return a.forEach((function(a){var e=[],r=a.label,p=a.key;a.groupItems.forEach((function(a){switch(parseInt(n)+a.availability){case 1:o&&l&&(t=f()),i-30>=t&&e.push(a);break;case 2:i-20>=t&&e.push(a);break;case 3:i-10>=t&&e.push(a);break;case 4:i>=t&&e.push(a);break;case 5:i+10>=t&&e.push(a);break;case 6:i+20>=t&&e.push(a);break;case 7:i+30>=t&&e.push(a);break;default:a.availability>7&&e.push(a)}}));var g={key:p,label:r,availableGroupItems:e};c.push(g)})),c}(k,n,o,l,c,t);a.onSetAvailableItems(r)},a.onChange=function(i,e){a.setState(Object(t.a)({},i,e))},a.onClearPress=function(i){i.preventDefault(),a.setState({gossipScore:"",gossipRoll:"",populationModifier:0,availableItems:[],itemFilter:"",groupFilter:"",autoRoll:!1,individualAutoRoll:!1})},a.onSetAvailableItems=function(i){a.setState({availableItems:i})},a.state={availableItems:[],gossipScore:"",gossipRoll:"",populationModifier:0,itemFilter:"",groupFilter:"",autoRoll:!1,individualAutoRoll:!1},a}return Object(p.a)(e,[{key:"render",value:function(){var a=this.state,i=a.availableItems,e=a.gossipScore,n=a.gossipRoll,l=a.populationModifier,c=a.itemFilter,t=a.groupFilter,r=a.autoRoll,p=a.individualAutoRoll;return o.a.createElement("div",{className:"app"},o.a.createElement(u,{resultsDisplayed:i.length>0,gossipScore:e,gossipRoll:n,onRollPress:this.onRollPress,onClearPress:this.onClearPress,onChange:this.onChange,onSetAvailableItems:this.onSetAvailableItems,populationBrackets:C,populationModifier:l,autoRoll:r,individualAutoRoll:p}),i.length>0&&o.a.createElement(h,{availableItems:i,itemFilter:c,groupFilter:t}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c5d7513c.chunk.js.map