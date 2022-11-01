import { advancement, execute, functionCmd, gamerule, kill, MCFunction, MCFunctionInstance, Objective, ObjectiveInstance, say, Score, scoreboard, Selector, SelectorClass, tag, tellraw, _ } from "sandstone";
import { uniform } from './lib/uniform'


//* Variable Declaration Section
// declare all the temporary variable
const mvTmp: ObjectiveInstance = Objective.create('mv.tmp', 'dummy');
const noOfVillager: number = 4;
// initialize variables
let counter: Score = mvTmp('villager_count');
let rng: Score = mvTmp('rng');

// list of all villagers
const villagerNames: String[] = [
    "armor_enchanter", "beekeeper", "breeder", "brewer",
    "combat_enchanter", "concrete_seller", "cynophilist",
    "desert_explorer", "disc_seller", "dye_seller", "egg",
    "emerald_exchanger", "enchanter_1", "enchanter_2", "enchanter_3",
    "end_explorer", "engineer", "firework", "fisherman",
    "flourist", "fruiterer", "glazed_terracotta_seller", "griefer",
    "head_seller", "horse_rider", "hunter", "ice_maker",
    "lumberjack", "merchant", "miner", "mizab",
    "mob_hunter", "mushroom", "nether_explorer", "quartz_seller",
    "railman", "redstoner", "sea_diver", "tool_enchanter",
    "turtle_man", "wither_killer"
];

// Selectors
const self: SelectorClass<true, true> = Selector('@s');
const closestVillager: SelectorClass<true, false> = Selector('@e', { type: 'minecraft:villager', limit: 1, distance: [null, 2] })

// Load
MCFunction('load', () => {
    // run all the misc functions
    gamerule('commandBlockOutput', false);
    advancement.grant('@a').only('minecraft:villagers/root');

    // welcome msg
    tellraw('@a', {
        "text": "Initializing Mo Villager",
        "color": "gold"
    });
}, {
    runOnLoad: true
})
//! LOAD ENDS

// tick
MCFunction('tick', () => {
    counter.set(0);
    execute.as(Selector('@e', {
        type: 'minecraft:villager',
        tag: '!scanned',
        limit: 1
    })).run(() => {
        counter.add(1);
    });

    _.if(counter.matches(4), () => {
        counter.set(0);
        tag(Selector('@e', {
            type: 'minecraft:villager',
            tag: ['!scanned', '!select'],
            limit: 1
        })).add('select');

        execute.as(Selector('@e', { type: 'minecraft:villager', tag: 'select' })).at(self).run(() => {
            for (let j = 0; j < noOfVillager; j++) {
                pickRandomVillager();
            }
        });
    })
}, {
    runEachTick: true
})
//! TICK ENDS

// Pick Random Villager
let pickRandomVillager: MCFunctionInstance = MCFunction('pick_random_villager', () => {
    rng.set(uniform(0, villagerNames.length));
    villagerNames.forEach((value, i) => {
        _.if(rng.matches(i), () => {
            functionCmd('villager_list:' + value);
        })
    })
})

// uninstall
MCFunction('uninstall', () => {
    scoreboard.objectives.remove('mvTmp');
})

// kill the closest villager
MCFunction('kill_the_closest_villager', () => {
    _.if(_.not((closestVillager)), () => {
        tellraw('@s', { "text": "There is no villager in 2 block radius", "color": "red" });
    })
    kill(closestVillager);
})