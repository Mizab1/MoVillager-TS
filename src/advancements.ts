import { Advancement, LootTable } from "sandstone";

Advancement('villagers/citizen', {
	"parent": "mo_villager:villagers/customer",
    "display": {
        "title": {
            "text": "A Good Citizen"
        },
        "description": {
            "text": "Place a Potato in the Village"
        },
        "icon": {
            "item": "minecraft:wheat_seeds"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "citizen": {
            "trigger": "minecraft:placed_block",
            "conditions": {
                "item": {
                    "item": "minecraft:wheat_seeds"
                },
                "location": {
                    "dimension": "overworld",
                    "feature": "Village"
                }
            }
        }
    },
    "requirements": [
        [
            "citizen"
        ]
    ],
    "rewards": {
        "experience": 60
    }
})

Advancement('villagers/customer', {
	"parent": "mo_villager:villagers/visitor",
    "display": {
        "title": {
            "text": "Customer"
        },
        "description": {
            "text": "Make a Trade"
        },
        "icon": {
            "item": "minecraft:emerald"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "trading": {
            "trigger": "minecraft:villager_trade",
            "conditions": {
                "villager": {
                    "type": "minecraft:villager"
                }
            }
        }
    },
    "requirements": [
        [
            "trading"
        ]
    ],
    "rewards": {
        "experience": 50
    }
})

Advancement('villagers/dan', {
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "Is that a DanTDM?"
        },
        "description": {
            "text": "Find Dan"
        },
        "icon": {
            "item": "minecraft:minecart"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "dan": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "dan"
        ]
    ],
    "rewards": {
        "experience": 130
    }
})

Advancement('villagers/defender', {
	"parent": "mo_villager:villagers/customer",
    "display": {
        "title": {
            "text": "The Defender"
        },
        "description": {
            "text": "Struck Lightning on a Zombie in a Village"
        },
        "icon": {
            "item": "minecraft:trident"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "light": {
            "trigger": "minecraft:channeled_lightning",
            "conditions": {
                "victims": [
                    {
                        "type": "minecraft:zombie",
                        "location": {
                            "dimension": "overworld",
                            "feature": "Village"
                        }
                    }
                ]
            }
        }
    },
    "requirements": [
        [
            "light"
        ]
    ],
    "rewards": {
        "experience": 140
    }
})


Advancement('villagers/gabo', {  
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "A Nice Person! Gabo"
        },
        "description": {
            "text": "Find Gabo"
        },
        "icon": {
            "item": "minecraft:smithing_table"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "gabo": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "gabo"
        ]
    ],
    "rewards": {
        "experience": 120
    }
})

Advancement('villagers/honest_trader', {  
	"parent": "mo_villager:villagers/customer",
    "display": {
        "title": {
            "text": "Honest Trader"
        },
        "description": {
            "text": "Gain some Emerald"
        },
        "icon": {
            "item": "minecraft:emerald_ore"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "emer": {
            "trigger": "minecraft:inventory_changed",
            "conditions": {
                "items": [
                    {
                        "item": "minecraft:emerald",
                        "count": {
                            "min": 1,
                            "max": 1
                        }
                    }
                ]
            }
        }
    },
    "requirements": [
        [
            "emer"
        ]
    ],
    "rewards": {
        "experience": 30
    }
})

Advancement('villagers/jumbo', { 
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "Jumbo"
        },
        "description": {
            "text": "Find Jumbo The Redstoner"
        },
        "icon": {
            "item": "minecraft:redstone"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "redstoner": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "redstoner"
        ]
    ],
    "rewards": {
        "experience": 60
    }
})

Advancement('villagers/legend', {  
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "Meeting Mizab"
        },
        "description": {
            "text": "Find Mizab"
        },
        "icon": {
            "item": "minecraft:diamond"
        },
        "frame": "challenge",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": true
    },
    "criteria": {
        "mizab": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "mizab"
        ]
    ],
    "rewards": {
        "experience": 300
    }
})

Advancement('villagers/richie_rich', {  
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "$Richie Rich$"
        },
        "description": {
            "text": "Make 1 Stack of Emerald Block"
        },
        "icon": {
            "item": "minecraft:emerald_block"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "craft": {
            "trigger": "minecraft:inventory_changed",
            "conditions": {
                "items": [
                    {
                        "item": "minecraft:emerald_block",
                        "count": {
                            "min": 64,
                            "max": 64
                        }
                    }
                ]
            }
        }
    },
    "requirements": [
        [
            "craft"
        ]
    ],
    "rewards": {
        "experience": 200
    }
})

Advancement('villagers/roxie', {  
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "Buzz! Buzz!"
        },
        "description": {
            "text": "Find Roxie and Buy Honey"
        },
        "icon": {
            "item": "minecraft:honey_bottle"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "roxie": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "roxie"
        ]
    ],
    "rewards": {
        "experience": 120
    }
})

Advancement('villagers/shock', {  
	"parent": "mo_villager:villagers/defender",
    "display": {
        "title": {
            "text": "Wrong Target"
        },
        "description": {
            "text": "Struck Lightning on a Villager in a Village"
        },
        "icon": {
            "item": "minecraft:trident"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": true
    },
    "criteria": {
        "light": {
            "trigger": "minecraft:channeled_lightning",
            "conditions": {
                "victims": [
                    {
                        "type": "minecraft:villager",
                        "location": {
                            "dimension": "overworld",
                            "feature": "Village"
                        }
                    }
                ]
            }
        }
    },
    "requirements": [
        [
            "light"
        ]
    ],
    "rewards": {
        "experience": 140
    }
})

Advancement('villagers/sleeper', {  
	"parent": "mo_villager:villagers/customer",
    "display": {
        "title": {
            "text": "A Village Nap!"
        },
        "description": {
            "text": "Sleep in the Village"
        },
        "icon": {
            "item": "minecraft:yellow_bed"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "sleeper": {
            "trigger": "minecraft:slept_in_bed",
            "conditions": {
                "dimension": "overworld",
                "feature": "Desert_Pyramid"
            }
        }
    },
    "requirements": [
        [
            "sleeper"
        ]
    ],
    "rewards": {
        "experience": 45
    }
})

Advancement('villagers/terrible_decision', {  
	"parent": "mo_villager:villagers/customer",
    "display": {
        "title": {
            "text": "Terrible Decision :("
        },
        "description": {
            "text": "Kill a Villager"
        },
        "icon": {
            "item": "minecraft:fire_charge"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "killing": {
            "trigger": "minecraft:player_killed_entity",
            "conditions": {
                "entity": {
                    "type": "minecraft:villager"
                }
            }
        }
    },
    "requirements": [
        [
            "killing"
        ]
    ],
    "rewards": {
        "experience": 50
    }
})

Advancement('villagers/turtle_man', {  
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "Turtle Man"
        },
        "description": {
            "text": "Find Xisoma"
        },
        "icon": {
            "item": "minecraft:turtle_egg"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "xisoma": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "xisoma"
        ]
    ],
    "rewards": {
        "experience": 120
    }
})

Advancement('villagers/visitor', {  
	"parent": "mo_villager:villagers/root",
    "display": {
        "title": {
            "text": "A Visiter! Awesome"
        },
        "description": {
            "text": "Locate a Village"
        },
        "icon": {
            "item": "minecraft:oak_door"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "locate": {
            "trigger": "minecraft:location",
            "conditions": {
                "dimension": "overworld",
                "feature": "Village"
            }
        }
    },
    "requirements": [
        [
            "locate"
        ]
    ],
    "rewards": {
        "experience": 60
    }
})

Advancement('villagers/youtuber', {  
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "A YouTuber"
        },
        "description": {
            "text": "Find Wattles"
        },
        "icon": {
            "item": "minecraft:sugar"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "wattles": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "wattles"
        ]
    ],
    "rewards": {
        "experience": 120
    }
})

Advancement('villagers/zues', {  
	"parent": "mo_villager:villagers/honest_trader",
    "display": {
        "title": {
            "text": "A Dog Lover, oww!"
        },
        "description": {
            "text": "Find Zues"
        },
        "icon": {
            "item": "minecraft:bone"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false
    },
    "criteria": {
        "zues": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "zues"
        ]
    ],
    "rewards": {
        "experience": 120
    }
})

Advancement('villagers/root', {  
    "display": {
        "title": {
            "text": "Mo Villager",
            "color": "green"
        },
        "description": {
            "text": "You Sucessfully Installed Mo Villager",
            "color": "white"
        },
        "icon": {
            "item": "minecraft:diamond_sword"
        },
        "frame": "task",
        "show_toast": true,
        "announce_to_chat": true,
        "hidden": false,
        "background": "minecraft:textures/gui/advancements/backgrounds/adventure.png"
    },
    "criteria": {
        "beginning": {
            "trigger": "minecraft:impossible"
        }
    },
    "requirements": [
        [
            "beginning"
        ]
    ],
    "rewards": {
        "experience": 10
    }
})

LootTable('entites/villager', {
    "type": "minecraft:entity",
    "pools": [
        {
            "rolls": 3,
            "entries": [
                {
                    "type": "minecraft:item",
                    "functions": [
                        {
                            "function": "minecraft:set_count",
                            "count": {
                                "min": -0.0,
                                "max": 2.0,
                                "type": "minecraft:uniform"
                            }
                        },
                        {
                            "function": "minecraft:looting_enchant",
                            "count": {
                                "min": 0.0,
                                "max": 1.0
                            }
                        }
                    ],
                    "name": "minecraft:emerald"
                }
            ]
        }
    ]
})