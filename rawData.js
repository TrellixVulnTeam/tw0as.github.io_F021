// CHARACTERS
const anemoChars = [    
    {id: "sayu", name:"SAYU", rarity: "4*", role:"Support", img:"sayu.png", lore:"Sayu, Shuumatsuban's resident ninja, is obsessed with sleeping and growing taller. She has mastered all kinds of ninjutsu to run away and hide in pursuit of opportunities to laze around and sleep. Such an extraordinary skillset may have very unexpected uses."},
    {id: "shikanoin-heizou", name:"SHIKANOIN HEIZOU", rarity: "4*", role:"Anemo DPS / EM DPS / Support", img:"shikanoin.png", lore:"A young prodigy detective from the Tenryou Commission. His senses are sharp and his thoughts are ingenious. No matter what unsolved case he's facing, he can get to the truth in unexpected ways."},
    {id: "sucrose", name:"SUCROSE", rarity: "4*", role:"EM Support", img:"sucrose.png", lore:"An alchemist with an insatiable curiosity towards the world and everything in it. Attached to the Knights of Favonius as an assistant to Albedo, her area of focus is bio-alchemy. She strives to enrich the world by transforming living things with the power of alchemy. Granted, the products of her research sometimes prove to be more weird than wonderful — but on the whole, she has made monumental contributions to the field of bio-alchemy."},
    {id: "jean", name:"JEAN", rarity: "5*", role:"Burst Support", img:"jean.png", lore:"As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt. She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always."},
    {id: "kazuha", name:"KAEDEHARA KAZUHA", rarity: "5*", role:"EM Support", img:"kazuha.png", lore:"A wandering samurai from Inazuma with a modest and gentle personality. Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct."},
    {id: "traveler-anemo", name:"TRAVELER", rarity: "5*", role:"Anemo DPS / Physical DPS", img:"traveler.png", lore:"The Traveler is the playable protagonist of Genshin Impact. At the beginning of the game, both genders are twin siblings from another world, traveling throughout the universe, until an unknown god blocked and captured one of them, and sealed their power to travel, leaving them stranded on Teyvat. They are accompanied by a travel companion named Paimon throughout their journey. Although players can choose the name they want to be referred by, the Traveler's Sibling (whichever twin not chosen at the start of the game) refers to the Traveler by either Aether or Lumine (depending on the gender of the player's chosen twin), regardless of their custom name."},
    {id: "venti", name:"VENTI", rarity: "5*", role:"EM Support", img:"venti.png", lore:"A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new. Likes apples and lively places, but is not a fan of cheese or anything sticky. When using his Anemo power to control the wind, it often appears as feathers, as he's fond of that which appears light and breezy."},
    {id: "xiao", name:"XIAO", rarity: "5*", role:"DPS", img:"xiao.png", lore:"One of the mighty and illuminated adepti guarding Liyue, also heralded as the Vigilant Yaksha. Despite his youthful appearance, tales of his exploits have been documented for millennia. He is especially fond of Wangshu Inn's Almond Tofu. This is because it tastes just like the sweet dreams he used to devour."},
]

const cryoChars = [
    {name: "CHONGYUN", rarity: "4*", role: "Burst Support", img: "chongyun.png", lore: "An exorcist who roams the land with Liyue as his base of operations, evil spirits fleeing wherever he goes. As the heir to a clan of exorcists, he has always possessed abilities superior to most. However, these abilities are not the result of training, but of an inborn trait — a pure-yang spirit."},
    {name: "DIONA", rarity: "4*", role: "Support", img: "diona.png", lore: "The incredibly popular bartender of the Cat's Tail tavern, rising star of Mondstadt's wine industry, and the greatest challenger to its traditional powerhouses. A feisty feline young lady from Springvale, any drink mixed by Diona's hand tastes delicious beyond belief. Yet given her extreme distaste for alcohol, is her talent a blessing or a curse?"},
    {name: "KAEYA", rarity: "4*", role: "Burst Support / Cryo DPS", img: "kaeya.png", lore: "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems. Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has..."},
    {name: "ROSARIA", rarity: "4*", role: "Burst Support / Cryo DPS", img: "rosaria.png", lore: "Rosaria, a sister in Mondstadt's Church of Favonius. A sister of the church, though you wouldn't know it if it weren't for her attire. An unusual woman with sharp, piercing words and a cold manner. Her movements are unpredictable. She often leaves without notifying anyone. She acts with some kind of purpose, but others don't seem to know exactly what she stands for..."},
    {name: "ALOY", rarity: "5*", role: "Burst Support", img: "aloy.png", lore: "An agile hunter from the Nora tribe. With bow in hand, she's always ready to protect the innocent."},
    {name: "EULA", rarity: "5*", role: "DPS", img: "eula.png", lore: "A rebellious descendant of the old aristocracy who is always out on the battlefield. As one born into the old aristocracy, carrying the bloodline of sinners, Eula has needed a unique approach to the world to navigate the towering walls of prejudice peacefully. Of course, this did not prevent her from severing ties with her clan. As the outstanding Spindrift Knight, she hunts down Mondstadt's enemies in the wild to exact her unique vengeance."},
    {name: "GANYU", rarity: "5*", role: "Melt DPS / Freeze DPS / Off-field DPS", img: "ganyu.png", lore: "The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins. Graceful and quiet by nature, yet the gentle disposition of qilin sees not even the slightest conflict with even the most arduous of workloads. After all, Ganyu firmly believes that all the work she does is in honor of her contract with Rex Lapis, seeking the well-being of all living things within Liyue."},
    {name: "KAMISATO AYAKA", rarity: "5*", role: "DPS", img: "ayaka.png", lore: "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi."},
    {name: "QIQI", rarity: "5*", role: "Support", img: "qiqi.png", lore: "An apprentice and herb gatherer at Bubu Pharmacy. Blessed by the adepti with a body that cannot die, this petite zombie cannot do anything without first giving herself orders to do it. Qiqi's memory is like a sieve. Out of necessity, she always carries around a notebook in which she writes anything important that she is sure to forget later. But on her worst days, she even forgets to look at her notebook..."},
    {name: "SHENHE", rarity: "5*", role: "Support", img: "shenhe.png", lore: "Even though she was born in the human world, she ended up being an adepti disciple. She grew up in the mountains far away from Liyue Harbor, her soul bound with red ropes, training both her body and mind. Despite having the elegant temperament of an adeptus, she seems to be shrouded in mystery."},
]

const dendroChars = [
    {name: "", rarity: "4*", role: "", img: ".png", lore: ""},
]

const electroChars = [
    {name: "BEIDOU", rarity: "4*", role: "Off-field DPS", img: "beidou.png", lore: "Captain of the Crux, with quite the reputation in Liyue. There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her. For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say— 'No matter what sea beasts there may be, Beidou will be sure to split them all in two.'"},
    {name: "FISCHL", rarity: "4*", role: "Off-field DPS / DPS", img: "fischl.png", lore: "A mysterious girl who calls herself 'Prinzessin der Verurteilung' and travels with a night raven named Oz. Currently serves as an investigator in the Adventurers' Guild. Through her unique abilities, eccentric character, and (while she would never admit it herself) hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all."},
    {name: "KUJOU SARA", rarity: "4*", role: "Burst Support", img: "sara.png", lore: "Leader of the Tenryou Commission's forces. A charismatic woman who acts as swiftly as a storm wind and always honors her word. She bears the title of 'Devotee of the Divine' and has sworn her allegiance to the Raiden Shogun. The eternity that the Shogun pursues is the cause that she is willing to fight for."},
    {name: "KUKI SHINOBU", rarity: "4*", role: "Support", img: "kuki.png", lore: "The deputy leader of the Arataki Gang. She wears a unique mask and is rather stoic. Few people know why a talent of this caliber would run away to join a street gang. Even fewer people know what she hides under her mask. At least, that's what everyone says on the surface. Although... there are probably more people in the know."},
    {name: "LISA", rarity: "4*", role: "Off-field DPS / Electro DPS / EM DPS", img: "lisa.png", lore: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her. As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner."},
    {name: "RAZOR", rarity: "4*", role: "DPS", img: "razor.png", lore: "Some say he is an orphan raised by wolves. Others say he is a wolf spirit in human form. He is most at home in the wild, fighting with claw and thunder. To this day the wolf boy can be found prowling the forest, where he and his wolf pack hunt to survive using nothing more than their animal instincts."},
    {name: "KEQING", rarity: "5*", role: "Electro DPS / Physical DPS", img: "keqing.png", lore: "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot. She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else."},
    {name: "RAIDEN SHOGUN", rarity: "5*", role: "DPS", img: "raiden.png", lore: "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate. With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity."},
    {name: "TRAVELER", rarity: "5*", role: "Support", img: "traveler.png", lore: "The Traveler is the playable protagonist of Genshin Impact. At the beginning of the game, both genders are twin siblings from another world, traveling throughout the universe, until an unknown god blocked and captured one of them, and sealed their power to travel, leaving them stranded on Teyvat. They are accompanied by a travel companion named Paimon throughout their journey. Although players can choose the name they want to be referred by, the Traveler's Sibling (whichever twin not chosen at the start of the game) refers to the Traveler by either Aether or Lumine (depending on the gender of the player's chosen twin), regardless of their custom name."},
    {name: "YAE MIKO", rarity: "5*", role: "Off-field DPS", img: "yaemiko.png", lore: "The head shrine maiden in charge of Grand Narukami Shrine and a descendant of Kitsune lineage, Eternity's servant and friend, and the intimidating editor-in-chief of Yae Publishing House, a publisher of light novels... The enigmatic Guuji, with many identities, may never be fully understood by mortals for what she truly is in her heart of hearts."},
]

const geoChars = [
    {name: "GOROU", rarity: "4*", role: "Support", img: "gorou.png", lore: "The great general of Watatsumi Island's forces. He has gained respect and prestige, but always shows himself to be a humble leader. He is deeply trusted by his subordinates and is someone with whom you can share your feelings without shame."},
    {name: "NINGGUANG", rarity: "4*", role: "DPS / Burst Support", img: "ningguang.png", lore: "Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile. As the Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit."},
    {name: "NOELLE", rarity: "4*", role: "DPS / Support", img: "noelle.png", lore: "Like most of Mondstadt's young people, Noelle always dreamed of being a knight of Favonius when she grew up. She may not have what it takes to be a knight just yet, but she is learning. Working as a maid at the Knights' headquarters, she is constantly taking notes on what constitutes knightly speech, knightly conduct, and knightly customs. She holds firm to her belief that one day she will join their ranks — she just needs to keep trying her hardest at everything she does."},
    {name: "YUN JIN", rarity: "4*", role: "Support", img: "yunjin.png", lore: "The current director of the Yun-Han Opera Troupe, a renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself."},
    {name: "ALBEDO", rarity: "5*", role: "Off-field DPS", img: "albedo.png", lore: "Albedo — an alchemist based in Mondstadt, in the service of the Knights of Favonius. 'Genius,' 'Kreideprinz,' or 'Captain of the Investigation Team'... Such titles and honors are of no consequence to him when there is so much more research to conduct. The pursuit of fortune and connections cannot hold a candle to his heart's desire — acquiring the limitless, obscure knowledge left behind by previous generations of scholars."},
    {name: "ARATAKI ITTO", rarity: "5*", role: "DPS", img: "itto.png", lore: "Descendant of the oni, of intrepid spirit and noble heart.<br>Fast as the wind and mighty as thunder."},
    {name: "TRAVELER", rarity: "5*", role: "Geo DPS", img: "traveler.png", lore: "The Traveler is the playable protagonist of Genshin Impact. At the beginning of the game, both genders are twin siblings from another world, traveling throughout the universe, until an unknown god blocked and captured one of them, and sealed their power to travel, leaving them stranded on Teyvat. They are accompanied by a travel companion named Paimon throughout their journey. Although players can choose the name they want to be referred by, the Traveler's Sibling (whichever twin not chosen at the start of the game) refers to the Traveler by either Aether or Lumine (depending on the gender of the player's chosen twin), regardless of their custom name."},
    {name: "ZHONGLI", rarity: "5*", role: "Shield Support / Burst Support / Physical DPS", img: "zhongli.png", lore: "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned. Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals."},
]

const hydroChars = [
    {name: "BARBARA", rarity: "4*", role: "Support / DPS", img: "barbara.png", lore: "The Deaconess of the Church of Favonius and a shining idol adored by all. Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless. 'I owe everything to the city's spirit of freedom.' — Barbara, regarding her popularity."},
    {name: "XINGQIU", rarity: "4*", role: "Off-field DPS", img: "xingqiu.png", lore: "Second son of the Feiyun Commerce Guild, Xingqiu has had a reputation for being studious and polite ever since he was a young child. But there is another side to the mild-mannered Xingqiu everyone knows. A daring, adventurous and much more mischievous side..."},
    {name: "KAMISATO AYATO", rarity: "5*", role: "DPS", img: "ayato.png", lore: "Current head of the Kamisato Clan and, accordingly, the Yashiro Commissioner. He always has a way of attaining his purpose in a well-thought-out manner. However, few people understand what that 'goal' he holds most dear is."},
    {name: "MONA", rarity: "5*", role: "Freeze Support / Nuke / DPS", img: "mona.png", lore: "A mysterious young astrologer who proclaims herself to be 'Astrologist Mona Megistus', and who possesses abilities to match the title. Erudite, but prideful. Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... It is this very resolution that has caused her to constantly fret about money."},
    {name: "SANGONOMIYA KOKOMI", rarity: "5*", role: "Support / DPS", img: "kokomi.png", lore: "Kokomi is the Divine Priestess of Watatsumi Island, and also serves as its supreme leader. She is well-versed in the art of war, is good at strategizing, and has keen insights into military affairs. She is also adept at handling domestic affairs, diplomacy, and other matters. Still, this unfathomable leader has a mysterious side to her..."},
    {name: "TARTAGLIA", rarity: "5*", role: "DPS", img: "tartaglia.png", lore: "Meet Tartaglia — the cunning Snezhnayan whose unpredictable personality keeps people guessing his every move. Don't be under any illusion as to what he might be thinking or what his intentions are. Just remember this: Behind that innocent, childlike exterior lies a finely honed instrument of war."},
    {name: "YELAN", rarity: "5*", role: "Off-field DPS", img: "yelan.png", lore: "A mysterious person who claims to work for the Ministry of Civil Affairs, but is a 'non-entity' on the Ministry of Civil Affairs'list. Elusive, enigmatic, erratic - all of these are Yelan's hallmarks."},
]

const pyroChars = [
    {name: "AMBER", rarity: "4*", role: "Support / DPS", img: "amber.png", lore: "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius. Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt. As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks."},
    {name: "BENNET", rarity: "4*", role: "Burst Support / Support / DPS", img: "bennett.png", lore: "One of the few young adventurers of the Mondstadt Adventurers' Guild, he is always plagued with inexplicable bad luck. He is the only active member of his own adventure group, known as 'Benny's Adventure Team', after all the other members decided to 'take leave' following a series of unfortunate incidents. As a result, the team is currently on the verge of being dissolved. Being unable to break the poor boy's heart, Katheryne of the Adventurers' Guild has kept 'Benny's Adventure Team' on the books, whilst also hiding from him the fact that all the other members have long since officially left the team."},
    {name: "THOMA", rarity: "4*", role: "Support", img: "thoma.png", lore: "The housekeeper of the Yashiro Commission's Kamisato Clan, and a well-known 'fixer' in Inazuma. Friendly and approachable, Thoma fits in with the crowd easily wherever he is. At first glance, he seems to be a very easygoing person, but he is in fact very responsible. He has an extraordinarily serious side, be it in his work or his interpersonal communications."},
    {name: "XIANGLING", rarity: "4*", role: "Off-field DPS / Physical DPS", img: "xiangling.png", lore: "The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes. Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock. There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise."},
    {name: "XINYAN", rarity: "4*", role: "DPS / Support", img: "xinyan.png", lore: "Rock 'n' roll is an avant-garde art in Liyue Harbor and Xinyan is the pioneer in this field. She rebels against ossified prejudices, using her music and passionate singing to awaken dazed souls fatigued by worldly matters. If you get the chance, do not miss out on her next performance!"},
    {name: "YANFEI", rarity: "4*", role: "DPS / Shield Support", img: "yanfei.png", lore: "A half-illuminated beast and highly-skilled legal adviser. She combines adherence to the legal codices and reasonable flexibility to find the perfect balance in her work. She devotes herself to protecting the fairness of contracts in Liyue with her identity as a legal adviser and her unique experience and methods."},
    {name: "DILUC", rarity: "5*", role: "DPS", img: "diluc.png", lore: "As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection. But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city."},
    {name: "HU TAO", rarity: "5*", role: "DPS", img: "hutao.png", lore: "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs. She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang. Aside from this, she is also a talented poet whose many 'masterpieces' have passed around Liyue's populace by word of mouth."},
    {name: "KLEE", rarity: "5*", role: "DPS", img: "klee.png", lore: "Knights of Favonius Spark Knight! Forever with a bang and a flash! —And then disappearing from the stern gaze of Acting Grand Master Jean. Sure, time in solitary confinement gives lots of time to think about new gunpowder formulas... But it'd still be better to not be in solitary in the first place."},
    {name: "YOIMIYA", rarity: "5*", role: "DPS", img: "yoimiya.png", lore: "A talented pyrotechnician. The current owner of Naganohara Fireworks known as the 'Queen of the Summer Festival.' A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze."},
]

// WEAPONS WiP 

/*
const bow3 = [
    {id: "messenger", name: "Messenger", baseAtk: 40, maxAtk: 448, subStat: "Crit DMG", baseStat: 6.8, maxStat: 31.2, passive: "Aimed Shot hits on weak spots deal an additional 100/125/150/175/200% ATK DMG as CRIT DMG. Can only occur once every 10s.", img: "messenger.png"},
    {id: "raven-bow", name: "Raven Bow", baseAtk: 40, maxAtk: 448, subStat: "EM", baseStat: 20, maxStat: 94, passive: " 	Increases DMG against enemies affected by Hydro or Pyro by 12/15/18/21/24%.", img: "raven_bow.png"},
    {id: "recurve-bow", name: "Recurve Bow", baseAtk: 38, maxAtk: 354, subStat: "HP", baseStat: 10.2, maxStat: 46.9, passive: "Defeating an opponent restores 8/10/12/14/16% HP.", img: "recurve_bow.png"},
    {id: "sharpshooters-oath", name: "Sharpshooter's Oath", baseAtk: 39, maxAtk: 401, subStat: "Crit DMG", baseStat: 10.2, maxStat: 46.9, passive: "Increases DMG against weak spots by 24/30/36/42/48%", img: "sharpshooter's_oath.png"},
    {id: "slingshot", name: "Slingshot", baseAtk: 38, maxAtk: 354, subStat: "Crit Rate", baseStat: 6.8, maxStat: 31.2, passive: "If a Normal Attack or Aimed Shot hits a target within 0.3s of being fired, increases DMG by 36/42/48/54/60%. Otherwise, it decreases DMG by 10%.", img: "slingshot.png"},
]

const bow4 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const bow5 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]

/*
const catalyst3 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const catalyst4 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const catalyst5 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]

const claymore3 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const claymore4 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const claymore5 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]

const pole3 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const pole4 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const pole5 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]

const sword3 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const sword4 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
const sword5 = [
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
    {id: "", name: "", baseAtk: , maxAtk: , subStat: "", baseStat: , maxStat: , passive: "", img: ""},
]
*/

// ARTIFACTS


export {anemoChars, cryoChars, dendroChars, electroChars, geoChars, hydroChars, pyroChars};
