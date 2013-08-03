// This is the official Pokemon Online Scripts 
// These scripts will only work on 2.0.00 or newer.
/*jshint "laxbreak":true,"shadow":true,"undef":true,"evil":true,"trailing":true,"proto":true,"withstmt":true*/
// You may change these variables as long as you keep the same type
// Edited By The One And Only Fenix of TBT
// Fenix Mod vNigga
fishseason = false;
cmd_d = false;
cmd_sangwich = false;
slaptime = false;
emotemode = false;
voicemode = false;
sm = sys.sendMessage;
sa = sys.sendAll;

var Config = {
	base_url: "https://raw.github.com/PhoenixPhlame/tbt/master/scripts.js",
	dataDir: "scriptdata/",
	bot: "Dragonair",
	kickbot: "Gengar",
	capsbot: "Scrafty",
	channelbot: "Mawile",
	checkbot: "Snorlax",
	coinbot: "Meowth",
	countbot: "CountBot",
	tourneybot: "Emolga",
	rankingbot: "Agumon",
	battlebot: "Arcanine",
	commandbot: "CommandBot",
	querybot: "QueryBot",
	hangbot: "Unown",
	bfbot: "Deoxys",
	musymbol: "~",
	// suspectvoting.js available, but not in use
	Plugins: ["mafia.js", "amoebagame.js", "tournaments.js", "tourstats.js", "trivia.js", "tours.js", "newtourstats.js", "auto_smute.js", "battlefactory.js", "hangman.js"],
	Mafia: {
		bot: "Murkrow",
		norepeat: 11,
		stats_file: "mafia_stats.json",
		max_name_length: 16,
		notPlayingMsg: "Â±Game: The game is in progress. Please type /join to join the next mafia game."
	},
	League: [
		["[o-o]Max", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8966999/1/'>Gym Leader Thread</a>"],
		["Black Mage", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/9003875/'>Gym Leader Thread</a>"],
		["[$G]Knight", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/9007094/'>Gym Leader Thread</a>"],
		["Supergrass", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8968789/1/'>Gym Leader Thread</a>"],
		["DatPineapple", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8967403/1/'>Gym Leader Thread</a>"],
		["[o-o]Glaecix", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/9003266/'>Gym Leader Thread</a>"],
		["Asian", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8967046/1/'>Gym Leader Thread</a>"],
		["Rudestyle", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8967105/1/'>Gym Leader Thread</a>"],
		["[HH]M.A.K.O", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8969369/1/'>E4 Thread</a>"],
		["titan", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8968009/1/'>E4 Leader Thread</a>"],
		["[$g]big ed", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8967132/1/'>E4 Leader Thread</a>"],
		["-Emvee-", "<a href='http://w11.zetaboards.com/TBT_Forums/topic/8967132/1/'>E4 Leader Thread</a>"]
	],
	DreamWorldTiers: ["No Preview OU", "No Preview Ubers", "DW LC", "Monotype", "DW UU", "DW LU", "Gen 5 1v1 Ubers", "Gen 5 1v1", "Challenge Cup", "CC 1v1", "DW Uber Triples", "No Preview OU Triples", "No Preview Uber Doubles", "No Preview OU Doubles", "Shanai Cup", "Shanai Cup 1.5", "Shanai Cup STAT", "Original Shanai Cup TEST", "Monocolour", "Clear Skies DW"],
	superAdmins: [],
	canJoinStaffChannel: [],
	disallowStaffChannel: [],
	
	// Define new emotes here. The name of the file has to be the name of the emote with a "txt" extension: "niglol.txt" is the file, "niglol" is the emote's name
	emotes: ["lilchem", "ryd", "chempedo", "foil1", "pine1", "angrynig", "nigwat", "chem", "nigwat2", "nigmad", "nigleaf", "ahuevo", "kylestrip", "awd", "how3", "mod", "edfork", "feel1", "how2", "feelsusa", "feelsvp", "feelsmug", "feelsnv", "feelsbu", "feelsq", "feelssp", "feelsww", "babed", "feelswg", "blu2", "china1", "coo", "feelsold", "feelsioh", "feelsms", "feelspink", "fliptbl", "foreveralone", "yface", "yay1", "wat1", "wat2", "who1", "who2", "srs", "srsno", "troll", "serious1", "pfft", "omg1", "notsure", "nomegusta", "megusta", "saw1", "customercustomer", "nigrin", "not2day", "2cute", "aing", "feelsht", "feelsjew", "feelsgn", "feelshp", "feelsgd", "feelsgt", "nigrin", "edno", "nope2", "ohgod", "kylewine", "nope7", "pia", "xd", "oshit", "feelszb", "feelsws", "skull1", "ednv", "edming", "rape", "niglad", "feelsbd", "feelsbeard", "feelsbn", "feelscanada", "feelsce", "feelscommy", "feelsdd", "feelsok", "feelshr", "allfeel", "eduel", "feelshitler", "pigs1", "nigcook", "feelsal", "feelszb", "feelsrs", "ednv", "pface", "niglol", "nigig", "depk", "depnv", "depgay"],
	// time (in seconds) between each emote use
};

// Don't touch anything here if you don't know what you do.
/*global print, script, sys, SESSION*/

var require_cache = typeof require != 'undefined' ? require.cache : {};
require = function require(module_name) {
if (require.cache[module_name])
return require.cache[module_name];

var module = {};
module.module = module;
module.exports = {};
module.source = module_name;
with (module) {
var content = sys.getFileContent("scripts/"+module_name);
if (content) {
try {
eval(sys.getFileContent("scripts/"+module_name));
} catch(e) {
if (this.staffchannel)
sys.sendAll("Error loading module " + module_name + ": " + e + (e.lineNumber ? " on line: " + e.lineNumber : ""), this.staffchannel);
else
sys.sendAll("Error loading module " + module_name + ": " + e);
}
}
}
require.cache[module_name] = module.exports;
return module.exports;
};
require.cache = require_cache;

var updateModule = function updateModule(module_name, callback) {
var base_url = Config.base_url;
var url;
if (/^https?:\/\//.test(module_name))
url = module_name;
else
url = base_url + "scripts/"+ module_name;
var fname = module_name.split(/\//).pop();
if (!callback) {
var resp = sys.synchronousWebCall(url);
if (resp === "") return {};
sys.writeToFile("scripts/"+fname, resp);
delete require.cache[fname];
var module = require(fname);
return module;
} else {
sys.webCall(url, function updateModule_callback(resp) {
if (resp === "") return;
sys.writeToFile("scripts/"+fname, resp);
delete require.cache[fname];
var module = require(fname);
callback(module);
});
}
};

var channel, getKey, marks, megausers, contributors, mutes, mbans, smutes, detained, hbans, mafiaSuperAdmins, hangmanAdmins, hangmanSuperAdmins, trollchannel, staffchannel, channelbot, normalbot, bot, mafiabot, kickbot, capsbot, checkbot, coinbot, countbot, tourneybot, battlebot, commandbot, querybot, rankingbot, hangbot, bfbot, stepCounter, scriptChecks, lastMemUpdate, bannedUrls, mafiachan, mafiarev, sachannel, tourchannel, dwpokemons, lcpokemons, bannedGSCSleep, bannedGSCTrap, breedingpokemons, rangebans, proxy_ips, mafiaAdmins, rules, authStats, tempBans, nameBans, isSuperAdmin, cmp, key, saveKey, battlesStopped, lineCount, pokeNatures, maxPlayersOnline, pastebin_api_key, pastebin_user_key, getSeconds, getTimeString, sendChanMessage, sendChanAll, sendMainTour, VarsCreated, authChangingTeam, usingBannedWords, repeatingOneself, capsName, CAPSLOCKDAYALLOW, nameWarns, poScript, revchan, triviachan, watchchannel, lcmoves, hangmanchan, ipbans, battlesFought, lastCleared;

var isMafiaAdmin = require('mafia.js').isMafiaAdmin;
var isMafiaSuperAdmin = require('mafia.js').isMafiaSuperAdmin;

/* we need to make sure the scripts exist */
var deps = ['crc32.js', 'utilities.js', 'bot.js', 'memoryhash.js', 'tierchecks.js'].concat(Config.Plugins);
var missing = 0;
for (var i = 0; i < deps.length; ++i) {
if (!sys.getFileContent("scripts/"+deps[i])) {
if (missing++ === 0) sys.sendAll('Server is updating its script modules, it might take a while...');
var module = updateModule(deps[i]);
module.source = deps[i];
}
}
if (missing) sys.sendAll('Done. Updated ' + missing + ' modules.');


/* To avoid a load of warning for new users of the script,
create all the files that will be read further on*/
var cleanFile = function(filename) {
if (typeof sys != 'undefined')
sys.appendToFile(filename, "");
};
cleanFile("mafia_stats.json");
cleanFile("suspectvoting.json");
cleanFile("mafiathemes/metadata.json");
cleanFile("channelData.json");
cleanFile("mutes.txt");
cleanFile("mbans.txt");
cleanFile("hbans.txt");
cleanFile("smutes.txt");
cleanFile("rangebans.txt");
cleanFile("contributors.txt");
cleanFile("ipbans.txt");
cleanFile("detained.txt");
cleanFile("hangmanadmins.txt");
cleanFile("hangmansuperadmins.txt");
cleanFile(Config.dataDir+"pastebin_user_key");
cleanFile("secretsmute.txt");
cleanFile("ipApi.txt");

var autosmute = sys.getFileContent("secretsmute.txt").split(':::');
var crc32 = require('crc32.js').crc32;
var MemoryHash = require('memoryhash.js').MemoryHash;
delete require.cache['tierchecks.js'];
var tier_checker = require('tierchecks.js');

/* stolen from here: http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format */
String.prototype.format = function() {
var formatted = this;
for (var i = 0; i < arguments.length; i++) {
var regexp = new RegExp('\\{'+i+'\\}', 'gi');
formatted = formatted.replace(regexp, arguments[i]);
}
return formatted;
};

var utilities = require('utilities.js');
var isNonNegative = utilities.is_non_negative;
var Lazy = utilities.Lazy;
var nonFlashing = utilities.non_flashing;
var getSeconds = utilities.getSeconds;
var getTimeString = utilities.getTimeString;

/* Useful for evalp purposes */
function printObject(o) {
var out = '';
for (var p in o) {
if (o.hasOwnProperty(p)) {
out += p + ': ' + o[p] + '\n';
}
}
sys.sendAll(out);
}

/* Functions using the implicit variable 'channel' set on various events */
// TODO: remove the possibility for implictit channel
function sendChanMessage(id, message) {
sys.sendMessage(id, message, channel);
}

function sendChanAll(message, chan_id) {
if((chan_id === undefined && channel === undefined) || chan_id == -1)
{
sys.sendAll(message);
} else if(chan_id === undefined && channel !== undefined)
{
sys.sendAll(message, channel);
} else if(chan_id !== undefined)
{
sys.sendAll(message, chan_id);
}
}

function sendChanHtmlMessage(id, message) {
sys.sendHtmlMessage(id, message, channel);
}

function sendChanHtmlAll(message, chan_id) {
if((chan_id === undefined && channel === undefined) || chan_id == -1)
{
sys.sendHtmlAll(message);
} else if(chan_id === undefined && channel !== undefined)
{
sys.sendHtmlAll(message, channel);
} else if(chan_id !== undefined)
{
sys.sendHtmlAll(message, chan_id);
}
}

String.prototype.toCorrectCase = function() {
if (isNaN(this) && sys.id(this) !== undefined) {
return sys.name(sys.id(this));
}
else {
return this;
}
};
function dwCheck(pokemon){
if (sys.pokeAbility(pokemon,2,5) === 0 && sys.pokeAbility(pokemon,1,5) === 0){
return false;
}
return true;
}

function sendNotice() {
var url = Config.base_url + "notice.html";
sys.webCall(url, function (resp){
if (resp.length < 1){
return;
}
var channels = ["Tohjo Falls", "Trivia", "Tournaments", "Indigo Plateau", "Victory Road", "TrivReview", "Mafia", "Hangman"];
for (var i = 0; i < channels.length; i++){
sys.sendHtmlAll(resp, sys.channelId(channels[i]));
}
});
}
var POKEMON_CLEFFA = typeof sys != 'undefined' ? sys.pokeNum("Cleffa") : 173;
function POUser(id)
{
/* user's id */
this.id = id;
this.name = sys.name(id);
/* whether user is megauser or not */
this.megauser = false;
/* whether user is muted or not */
this.mute = {active: false, by: null, expires: 0, time: null, reason: null};
/* whether user is mafiabanned or not */
this.mban = {active: false, by: null, expires: 0, time: null, reason: null};
/* whether user is secrectly muted */
this.smute = {active: false, by: null, expires: 0, time: null, reason: null};
/* detain for mafia */
this.detained = {active: false, by: null, games: 0, reason: null};
/* whether user is hangmanbanned or not */
this.hban = {active: false, by: null, expires: 0, time: null, reason: null};
/* caps counter for user */
this.caps = 0;
/* whether user is impersonating someone */
this.impersonation = undefined;
/* last time user said something */
// TODO replace with the other one
this.timecount = parseInt(sys.time(), 10);
/* last time user said something */
this.talk = (new Date()).getTime();
/* counter on how many lines user has said recently */
this.floodcount = 0;
/* counts coins */
this.coins = 0;
/* whether user has enabled battling only in same tier */
this.sametier = undefined;
/* name history */
this.namehistory = [];
/* last line */
this.lastline = {message: null, time: 0};
/* login time */
this.logintime = parseInt(sys.time(), 10);
/* tier alerts */
this.tiers = [];
/* last time a user PM'd */
this.lastpm = parseInt(sys.time(), 10);
/* amount of PM's a user has sent */
this.pmcount = 0;
/* stopping spam */
this.pmwarned = false;
if (getKey('touralertson', id) == "true") {
this.tiers = getKey("touralerts", id).split("*");
}
/* mafia alerts */
this.mafiathemes = [];
if (getKey("mafiaalertson", id) == "true") {
this.mafiaalertson = true;
this.mafiaalertsany = getKey("mafiaalertsany", id) == "true" ? true : false;
this.mafiathemes = getKey("mafiathemes", id).split("*");
}
/* host name */
this.hostname = "pending";
var user = this; // closure
sys.hostName(sys.ip(id), function(result) {
try {
user.hostname = result;
} catch (e) {}
});
this.battles = {};

// /* android default team check */
// var android = true;
// var i;
// for (i = 0; i < 6; ++i) {
// if (sys.teamPoke(this.id, i) != POKEMON_CLEFFA) {
// android = false;
// break;
// }
// }
// this.android = android;

var name = sys.name(id);
if (contributors.hash.hasOwnProperty(name))
this.contributions = contributors.get(name);

/* check if user is banned or mafiabanned */
var data;
var loopArgs = [["mute", mutes], ["mban", mbans], ["smute", smutes], ["detained", detained], ["hban", hbans]];
for (i = 0; i < 5; ++i) {
var action = loopArgs[i][0];
if ((data = loopArgs[i][1].get(sys.ip(id))) !== undefined) {
this[action].active=true;
var args = data.split(":");
if (action !== "detained") {
this[action].time = parseInt(args[0], 10);
if (args.length == 5) {
this[action].by = args[1];
this[action].expires = parseInt(args[2], 10);
this[action].reason = args.slice(4).join(":");
}
} else {
this[action].by = args[1];
this[action].games = parseInt(args[0], 10);
this[action].reason = args.slice(3).join(":");
}
}
}
}


POUser.prototype.toString = function() {
return "[object POUser]";
};

POUser.prototype.expired = function(thingy) {
return this[thingy].expires !== 0 && this[thingy].expires < sys.time();
};

POUser.prototype.activate = function(thingy, by, expires, reason, persistent) {
this[thingy].active = true;
this[thingy].by = by;
this[thingy].expires = expires;
this[thingy].time = parseInt(sys.time(), 10);
this[thingy].reason = reason;
if (persistent) {
var table = {"mute": mutes, "smute": smutes, "mban": mbans, "hban":hbans};
table[thingy].add(sys.ip(this.id), sys.time() + ":" + by + ":" + expires + ":" + sys.name(this.id) + ":" + reason);
}

callplugins("on"+ utilities.capitalize(thingy), this.id);
};

POUser.prototype.un = function(thingy) {
this[thingy].active = false;
this[thingy].expires = 0;
var table = {"mute": mutes, "smute": smutes, "mban": mbans, "hban": hbans};
table[thingy].remove(sys.ip(this.id));

callplugins("onUn"+ utilities.capitalize(thingy), this.id);
};


/* POChannel */
function POChannel(id)
{
this.id = id;
this.masters = []; // can add admins
this.admins = []; // can ban, add mods, change invite level
this.operators = []; // can mute, silence, kick
this.members = []; // people that can join
this.perm = false;
this.inviteonly = 0;
this.topic = "";
this.topicSetter = "";
this.muteall = undefined;
this.meoff = undefined;
this.muted = {};
this.banned = {};
this.ignorecaps = false;
this.ignoreflood = false;
}

POChannel.prototype.beforeMessage = function(src, msg) {
};

POChannel.prototype.toString = function() {
return "[object POChannel]";
};

POChannel.prototype.setTopic = function(src, topicInfo)
{
var canSetTopic = (sys.auth(src) > 0 || this.isChannelOperator(src));
if (topicInfo === undefined) {
if (typeof this.topic != 'undefined') {
channelbot.sendChanMessage(src, "Topic for this channel is: " + this.topic);
if (SESSION.channels(channel).topicSetter) {
channelbot.sendChanMessage(src, "Topic was set by " + nonFlashing(this.topicSetter));
}
} else {
channelbot.sendChanMessage(src, "No topic set for this channel.");
}
if (canSetTopic) {
channelbot.sendChanMessage(src, "Specify a topic to set one!");
}
return;
}
if (!canSetTopic) {
channelbot.sendChanMessage(src, "You don't have the rights to set topic");
return;
}
this.changeParameter(src, "topic", topicInfo);
SESSION.global().channelManager.update(this.id);
channelbot.sendChanAll("" + sys.name(src) + " changed the topic to: " + topicInfo);
};

POChannel.prototype.isChannelOwner = function(id)
{
if (!sys.dbRegistered(sys.name(id))) {
return false;
}
if (sys.auth(id) >= 3 || isSuperAdmin(id)) {
return true;
}
if (typeof this.masters != "object") {
this.masters = [];
}
if (this.masters.indexOf(sys.name(id).toLowerCase()) > -1) {
return true;
}
return false;
};
POChannel.prototype.isChannelAdmin = function(id)
{
if (!sys.dbRegistered(sys.name(id))) {
return false;
}
if (sys.auth(id) >= 2 || this.isChannelOwner(id)) {
return true;
}
if (typeof this.admins != "object") {
this.admins = [];
}
if (this.admins.indexOf(sys.name(id).toLowerCase()) > -1) {
return true;
}
return false;
};
POChannel.prototype.isChannelOperator = function(id)
{
if (!sys.dbRegistered(sys.name(id))) {
return false;
}
if ((sys.auth(id) >= 1 && this.id === 0) || this.isChannelAdmin(id)) {
return true;
}
if (typeof this.operators != "object") {
this.operators = [];
}
if (this.operators.indexOf(sys.name(id).toLowerCase()) > -1) {
return true;
}
return false;
};

POChannel.prototype.addRole = function(src, tar, group, data)
{
var name = tar.toLowerCase();
var auth = typeof src == "string" ? src : sys.name(src);
if (sys.dbIp(tar) === undefined) {
return ["self", "The user '"+tar.toCorrectCase()+"' doesn't exist!"];
}
if (!sys.dbRegistered(tar) && ["owner", "admin", "mod"].indexOf(group) != -1) {
return ["self", "The user '"+tar.toCorrectCase()+"' is not registered so you can't give them channel authority!"];
}
if (typeof this.operators != 'object')
this.operators = [];
if (typeof this.admins != 'object')
this.admins = [];
if (typeof this.masters != 'object')
this.masters = [];
if (typeof this.members != 'object')
this.members = [];
if (group == "owner") {
if (this.masters.indexOf(name) > -1) {
return ["self", tar.toCorrectCase()+" is already a channel owner!"];
}
if (this.masters.length > 10) {
return ["self", "There is a limit of 10 owners!"];
}
this.masters.push(name);
return ["all", sys.name(src)+" made "+tar.toCorrectCase()+" a channel owner!"];
}
if (group == "admin") {
if (this.admins.indexOf(name) > -1) {
return ["self", tar.toCorrectCase()+" is already a channel admin!"];
}
if (this.admins.length > 50) {
return ["self", "There is a limit of 50 admins!"];
}
this.admins.push(name);
return ["all", sys.name(src)+" made "+tar.toCorrectCase()+" a channel admin!"];
}
if (group == "mod") {
if (this.operators.indexOf(name) > -1) {
return ["self", tar.toCorrectCase()+" is already a channel mod!"];
}
if (this.operators.length > 100) {
return ["self", "There is a limit of 100 mods!"];
}
this.operators.push(name);
return ["all", sys.name(src)+" made "+tar.toCorrectCase()+" a channel mod!"];
}
if (group == "member") {
if (this.members.indexOf(name) > -1) {
return ["self", tar.toCorrectCase()+" is already a member!"];
}
if (this.members.length > 250) {
return ["self", "There is a limit of 250 members!"];
}
this.members.push(name);
return ["all", sys.name(src)+" made "+tar.toCorrectCase()+" a member!"];
}
if (group == "muted") {
if (this.isPunished(name) !== "none") {
return ["self", tar.toCorrectCase()+" is already "+this.isPunished(name)+" from this channel!"];
}
if (!this.hasPermission(src, tar)) {
return ["self", tar.toCorrectCase()+" has equal or higher auth than you, so you can't channel mute them!"];
}
if (script.isOfficialChan(this.id) && !this.isChannelOwner(src)) {
var maxtime = this.isChannelAdmin(src) ? 7*24*60*60 : 24*60*60;
if (data.time > maxtime || data.time === 0) {
data.time = maxtime;
}
if (data.reason === "") {
return ["self", "You need to provide a reason for the channel mute!"];
}
}
this.muted[name] = {"expiry": data.time === 0 ? "never" : parseInt(sys.time(),10) + data.time, "issuetime": parseInt(sys.time(),10), "auth": auth, "reason": data.reason !== "" ? data.reason : "N/A" };
var timestring = data.time > 0 ? " for "+getTimeString(data.time) : " permanently";
return ["all", auth+" muted "+tar.toCorrectCase()+timestring+" in this channel!"+(data.reason !== "" ? " [Reason: "+data.reason+"]" : "")];
}
if (group == "banned") {
if (this.isPunished(name) === "banned") {
return ["self", tar.toCorrectCase()+" is already banned from this channel!"];
}
if (!this.hasPermission(src, tar)) {
return ["self", tar.toCorrectCase()+" has equal or higher auth than you, so you can't channel ban them!"];
}
if (script.isOfficialChan(this.id) && !this.isChannelOwner(src)) {
if (data.time > 7*24*60*60 || data.time === 0) {
data.time = 7*24*60*60;
}
if (data.reason === "") {
return ["self", "You need to provide a reason for the channel ban!"];
}
}
this.banned[name] = {"expiry": data.time === 0 ? "never" : parseInt(sys.time(),10) + data.time, "issuetime": parseInt(sys.time(),10), "auth": auth, "reason": data.reason !== "" ? data.reason : "N/A" };
var timestring = data.time > 0 ? " for "+getTimeString(data.time) : " permanently";
return ["all", auth+" banned "+tar.toCorrectCase()+timestring+" from this channel!"+(data.reason !== "" ? " [Reason: "+data.reason+"]" : "")];
}
return ["self", ""];
};



POChannel.prototype.removeRole = function(src, tar, group)
{
var name = tar.toLowerCase();
if (typeof this.operators != 'object')
this.operators = [];
if (typeof this.admins != 'object')
this.admins = [];
if (typeof this.masters != 'object')
this.masters = [];
if (typeof this.members != 'object')
this.members = [];
if (group == "owner") {
if (this.masters.indexOf(name) == -1) {
return ["self", tar.toCorrectCase()+" is not a channel owner!"];
}
var index = this.masters.indexOf(name);
this.masters.splice(index,1);
return ["all", sys.name(src)+" removed "+tar.toCorrectCase()+" from the channel owner list!"];
}
if (group == "admin") {
if (this.admins.indexOf(name) == -1) {
return ["self", tar.toCorrectCase()+" is not a channel admin!"];
}
var index = this.admins.indexOf(name);
this.admins.splice(index,1);
return ["all", sys.name(src)+" removed "+tar.toCorrectCase()+" from the channel admin list!"];
}
if (group == "mod") {
if (this.operators.indexOf(name) == -1) {
return ["self", tar.toCorrectCase()+" is not a channel mod!"];
}
var index = this.operators.indexOf(name);
this.operators.splice(index,1);
return ["all", sys.name(src)+" removed "+tar.toCorrectCase()+" from the channel mod list!"];
}
if (group == "member") {
if (this.members.indexOf(name) == -1) {
return ["self", tar.toCorrectCase()+" is not a member!"];
}
var index = this.members.indexOf(name);
this.members.splice(index,1);
return ["all", sys.name(src)+" removed "+tar.toCorrectCase()+" from the channel member list!"];
}
if (group == "muted") {
if (!this.muted.hasOwnProperty(name)) {
return ["self", tar.toCorrectCase()+" is not muted in this channel!"];
}
delete this.muted[name];
return ["all", sys.name(src)+" unmuted "+tar.toCorrectCase()+" in this channel!"];
}
if (group == "banned") {
if (!this.banned.hasOwnProperty(name)) {
return ["self", tar.toCorrectCase()+" is not banned from this channel!"];
}
delete this.banned[name];
return ["all", sys.name(src)+" unbanned "+tar.toCorrectCase()+" from this channel!"];
}
return ["self", ""];
};

POChannel.prototype.issueAuth = function(src, name, group)
{
var ret = this.addRole(src, name, group, {});
if (ret[0] == "self") {
channelbot.sendChanMessage(src, ret[1]);
}
else {
channelbot.sendChanAll(ret[1]);
SESSION.global().channelManager.update(this.id);
}
};

POChannel.prototype.takeAuth = function(src, name, group)
{
var ret = this.removeRole(src, name, group);
if (ret[0] == "self") {
channelbot.sendChanMessage(src, ret[1]);
}
else {
channelbot.sendChanAll(ret[1]);
SESSION.global().channelManager.update(this.id);
}
};

POChannel.prototype.register = function(name)
{
if (this.masters.length === 0) {
this.masters.push(name.toLowerCase());
SESSION.global().channelManager.update(this.id);
return true;
}
return false;
};

POChannel.prototype.canJoin = function(id)
{
if (this.isBanned(id)) {
return "banned";
}
if (this.isChannelOperator(id)) {
return "allowed";
}
if (typeof this.members != "object") {
this.members = [];
}
if (this.members.indexOf(sys.name(id).toLowerCase()) > -1) {
return "allowed";
}
return "nil";
};

POChannel.prototype.canTalk = function(id)
{
return !this.isMuted(id);
};

POChannel.prototype.ban = function(src, tar, data)
{
var ret = this.addRole(src, tar, "banned", data);
if (ret[0] == "self") {
if (typeof src == "number")
channelbot.sendChanMessage(src, ret[1]);
}
else {
channelbot.sendChanAll(ret[1]);
SESSION.global().channelManager.update(this.id);
// eject the offending user from the channel
if (sys.id(tar) !== undefined) {
if (sys.isInChannel(sys.id(tar), this.id)) {
if (sys.channelsOfPlayer(sys.id(tar)).length <= 1 && !sys.isInChannel(sys.id(tar), 0)) {
sys.putInChannel(sys.id(tar), 0);
}
sys.kick(sys.id(tar), this.id);
channelbot.sendChanAll("And "+tar+" was gone!");
}
}
}
};

POChannel.prototype.unban = function(src, tar)
{
var ret = this.removeRole(src, tar, "banned");
if (ret[0] == "self") {
channelbot.sendChanMessage(src, ret[1]);
}
else {
channelbot.sendChanAll(ret[1]);
SESSION.global().channelManager.update(this.id);
}
};

POChannel.prototype.mute = function(src, tar, data)
{
var ret = this.addRole(src, tar, "muted", data);
if (ret[0] == "self") {
if (typeof src == "number")
channelbot.sendChanMessage(src, ret[1]);
}
else {
channelbot.sendChanAll(ret[1]);
SESSION.global().channelManager.update(this.id);
}
};

POChannel.prototype.unmute = function(src, tar)
{
var ret = this.removeRole(src, tar, "muted");
if (ret[0] == "self") {
channelbot.sendChanMessage(src, ret[1]);
}
else {
channelbot.sendChanAll(ret[1]);
SESSION.global().channelManager.update(this.id);
}
};

POChannel.prototype.isBanned = function(id)
{
// can't ban chan admins+
if (this.isChannelAdmin(id)) {
return false;
}
var banlist = this.banned;
var ip = sys.ip(id);
var name = sys.name(id);
for (var x in banlist) {
if(banlist.hasOwnProperty(x)) {
if (!banlist[x].hasOwnProperty("expiry")) {
delete this.banned[x];
continue;
}
if (banlist[x].expiry <= parseInt(sys.time(),10)) {
delete this.banned[x];
continue;
}
if (cmp(x, name)) {
return true;
}
if (sys.dbIp(x) == ip) {
return true;
}
}
}
return false;
};

POChannel.prototype.isMuted = function(id)
{
if (this.isChannelOperator(id)) {
return false;
}
var mutelist = this.muted;
var ip = sys.ip(id);
var name = sys.name(id);
for (var x in mutelist) {
if (mutelist.hasOwnProperty(x)) {
if (!mutelist[x].hasOwnProperty("expiry")) {
delete this.muted[x];
continue;
}
if (mutelist[x].expiry <= parseInt(sys.time(),10)) {
delete this.muted[x];
channelbot.sendChanAll(x+"'s channel mute expired.");
continue;
}
if (cmp(x, name)) {
return true;
}
if (sys.dbIp(x) == ip) {
return true;
}
}
}
return false;
};

POChannel.prototype.isPunished = function(name)
{
var banlist = this.banned;
for (var b in banlist) {
if (banlist.hasOwnProperty(b)) {
if (cmp(b, name)) {
return "banned";
}
if (sys.dbIp(b) == sys.dbIp(name)) {
return "banned";
}
}
}
var mutelist = this.muted;
for (var m in mutelist) {
if (mutelist.hasOwnProperty(m)) {
if (cmp(m, name)) {
return "muted";
}
if (sys.dbIp(m) == sys.dbIp(name)) {
return "muted";
}
}
}
return "none";
};

POChannel.prototype.hasPermission = function(src, tar) {
var srcauth = 0;
if (typeof src == "string") {
srcauth = 1;
}
else {
if (this.isChannelOwner(src)) {
srcauth = 3;
}
else if (this.isChannelAdmin(src)) {
srcauth = 2;
}
else if (this.isChannelOperator(src)) {
srcauth = 1;
}
}
var tarauth = this.chanAuth(tar);
return srcauth > tarauth;
};

POChannel.prototype.chanAuth = function(name) {
var maxauth = 0;
if (sys.dbAuth(name) >= 2 || this.id === 0) {
maxauth = sys.dbAuth(name);
}
var lname = name.toLowerCase();
if (typeof this.operators != 'object')
this.operators = [];
if (typeof this.admins != 'object')
this.admins = [];
if (typeof this.masters != 'object')
this.masters = [];
if (this.masters.indexOf(lname) > -1) {
maxauth = 3;
}
else if (this.admins.indexOf(lname) > -1 && maxauth < 2) {
maxauth = 2;
}
else if (this.operators.indexOf(lname) > -1 && maxauth < 1) {
maxauth = 1;
}
return maxauth;
};

POChannel.prototype.changeParameter = function(src, parameter, value) {
if (parameter == "topic") {
this.topic = value;
this.topicSetter = sys.name(src);
return;
}
if (parameter == "allowcaps") {
if (value === true) {
this.ignorecaps = true;
}
else {
this.ignorecaps = false;
}
SESSION.global().channelManager.update(this.id);
return;
}
if (parameter == "allowflood") {
if (value === true) {
this.ignoreflood = true;
}
else {
this.ignoreflood = false;
}
SESSION.global().channelManager.update(this.id);
return;
}
if (parameter == "invitelevel") {
var level = parseInt(value, 10);
var maxvalue = sys.auth(src) >= 3 ? 3 : sys.auth(src) + 1;
if (level <= 0 || isNaN(level)) {
level = 0;
}
else if (level > maxvalue) {
level = maxvalue;
}
this.inviteonly = level;
SESSION.global().channelManager.update(this.id);
if (level === 0) {
return sys.name(src)+" made this channel public.";
}
else {
return sys.name(src)+" made this channel invite only for users below auth level "+level+".";
}
}
};

POChannel.prototype.getReadableList = function(type)
{
try {
var name = "";
var mh = {};
if (type == "mutelist") {
mh = this.muted;
name = "Channel Muted";
}
else if (type == "banlist") {
mh = this.banned;
name = "Channel Banned";
}
else {
return "";
}
var width=4;
var max_message_length = 30000;
var tmp = [];
var t = parseInt(sys.time(), 10);
var toDelete = [];
for (var x in mh) {
if (mh.hasOwnProperty(x)) {
if (!mh[x].hasOwnProperty("expiry")) {
continue;
}
var playername = utilities.html_escape(x);
var expirytime = isNaN(mh[x].expiry) ? "never" : mh[x].expiry-parseInt(sys.time(),10);
if (expirytime <= 0) {
continue;
}
var issuetime = getTimeString(parseInt(sys.time(),10)-mh[x].issuetime);
var auth = utilities.html_escape(mh[x].auth);
var reason = utilities.html_escape(mh[x].reason);
tmp.push([playername, auth, issuetime, isNaN(mh[x].expiry) ? expirytime : getTimeString(expirytime), reason]);
}
}
tmp.sort(function(a,b) { return a[2] - b[2];});

// generate HTML
var table_header = '<table border="1" cellpadding="5" cellspacing="0"><tr><td colspan="' + width + '"><center><strong>' + utilities.html_escape(name) + '</strong></center></td></tr><tr><th>Name</th><th>By</th><th>Issued ago</th><th>Expires in</th><th>Reason</th>';
var table_footer = '</table>';
var table = table_header;
var line;
var send_rows = 0;
while(tmp.length > 0) {
line = '<tr><td>'+tmp[0].join('</td><td>')+'</td></tr>';
tmp.splice(0,1);
if (table.length + line.length + table_footer.length > max_message_length) {
if (send_rows === 0) continue; // Can't send this line!
table += table_footer;
// Really need to return multiple tables from this function... return a list??
// Or give a callback
// sendChanHtmlMessage(src, table, channel);
table = table_header;
send_rows = 0;
}
table += line;
++send_rows;
}
table += table_footer;
if (send_rows > 0) {
return table;
}
else {
return "";
}
}
catch (e) {
return "";
}
};

/* Object that manages channels */
function POChannelManager(fname)
{
/* Permanent channels */
this.channelDataFile = fname;
try {
this.channelMap = JSON.parse(sys.getFileContent(this.channelDataFile));
} catch (err) {
print('Could not read channelData.');
print('Error: ' + err);
this.channelMap = {};
}
sys.system("mkdir -p channeldata");
}

POChannelManager.prototype.toString = function()
{
return "[object POChannelManager]";
};

POChannelManager.prototype.copyAttrs = [
"topic",
"topicSetter",
"perm",
"members",
"operators",
"admins",
"masters",
"inviteonly",
"muteall",
"meoff",
"muted",
"banned",
"ignorecaps",
"ignoreflood"
];

POChannelManager.prototype.update = function(channel)
{
var chan = SESSION.channels(channel);
var chanData = {};
this.copyAttrs.forEach(function(attr) {
chanData[attr] = chan[attr];
});
this.saveChan(channel, chanData);
};

POChannelManager.prototype.restoreSettings = function(channel)
{
var chan = SESSION.channels(channel);
var chanData = this.loadChan(channel);
this.copyAttrs.forEach(function(attr) {
if (chanData !== null && chanData.hasOwnProperty(attr))
chan[attr] = chanData[attr];
});
};

POChannelManager.prototype.dataFileFor = function(channel)
{
var chanName = sys.channel(channel);
if (!this.channelMap.hasOwnProperty(chanName)) {
var genName = "channeldata/" + Date.now() + Math.random().toString().substr(2) + ".json";
this.channelMap[chanName] = genName;
this.save();
}
return this.channelMap[chanName];
};

POChannelManager.prototype.save = function()
{
sys.writeToFile(this.channelDataFile, JSON.stringify(this.channelMap));
};

POChannelManager.prototype.saveChan = function(channel, channelData)
{
var channelDataFile = this.dataFileFor(channel);
sys.writeToFile(channelDataFile, JSON.stringify(channelData));
};

POChannelManager.prototype.loadChan = function(channel)
{
var channelDataFile = this.dataFileFor(channel);
var content = sys.getFileContent(channelDataFile);
if (content) {
try {
var data = JSON.parse(content);
return data;
} catch(e) {}
}
return {};
};

POChannelManager.prototype.createPermChannel = function(name, defaultTopic)
{
var cid;
if (sys.existChannel(name)) {
cid = sys.channelId(name);
} else {
cid = sys.createChannel(name);
}
this.restoreSettings(cid);
if (!SESSION.channels(cid).topic) {
SESSION.channels(cid).topic = defaultTopic;
}
SESSION.channels(cid).perm = true;
return cid;
};

function POGlobal(id)
{
var plugin_files = Config.Plugins;
var plugins = [];
for (var i = 0; i < plugin_files.length; ++i) {
var plugin = require(plugin_files[i]);
plugin.source = plugin_files[i];
plugins.push(plugin);
}
this.plugins = plugins;
this.coins = 0;
this.channelManager = new POChannelManager('channelHash.json');
var manager = this.channelManager;
sys.channelIds().forEach(function(id) {
manager.restoreSettings(id);
});
}

POGlobal.prototype.callplugins = function callplugins(event) {
/* if a plugin wishes to stop event, it should return true */
var plugins = this.plugins;
var ret = false;
var args = Array.prototype.slice.call(arguments, 1);
for (var i = 0; i < plugins.length; ++i) {
if (plugins[i].hasOwnProperty(event)) {
try {
if (plugins[i][event].apply(plugins[i], args)) {
ret = true;
break;
}
} catch (e) {
sys.sendAll('Plugins-error on {0}: {1}'.format(plugins[i].source, e), staffchannel);
}
}
}
return ret;
};

POGlobal.prototype.getplugins = function getplugins(data) {
var plugins = this.plugins;
var ret = {};
for (var i = 0; i < plugins.length; ++i) {
if (plugins[i].hasOwnProperty(data)) {
ret[plugins[i].source] = plugins[i][data];
}
}
return ret;
};

function callplugins() {
return SESSION.global().callplugins.apply(SESSION.global(), arguments);
}
function getplugins() {
return SESSION.global().getplugins.apply(SESSION.global(), arguments);
}

SESSION.identifyScriptAs("PO Scripts v0.99");
SESSION.registerGlobalFactory(POGlobal);
SESSION.registerUserFactory(POUser);
SESSION.registerChannelFactory(POChannel);

if (typeof SESSION.global() != 'undefined') {
SESSION.global().channelManager = new POChannelManager('channelHash.json');

SESSION.global().__proto__ = POGlobal.prototype;
var plugin_files = Config.Plugins;
var plugins = [];
for (var i = 0; i < plugin_files.length; ++i) {
var plugin = require(plugin_files[i]);
plugin.source = plugin_files[i];
plugins.push(plugin);
}
SESSION.global().plugins = plugins;

// uncomment to update either Channel or User
sys.channelIds().forEach(function(id) {
if (!SESSION.channels(id))
sys.sendAll("ScriptUpdate: SESSION storage broken for channel: " + sys.channel(id), staffchannel);
else
SESSION.channels(id).__proto__ = POChannel.prototype;
});
sys.playerIds().forEach(function(id) {
if (sys.loggedIn(id)) {
var user = SESSION.users(id);
if (!user) {
sys.sendAll("ScriptUpdate: SESSION storage broken for user: " + sys.name(id), staffchannel);
} else {
user.__proto__ = POUser.prototype;
user.battles = user.battles || {};
}
}
});

}

// Bot.js binds the global variable 'channel' so we cannot re-use it
// since the binding will to the old variable.
delete require.cache['bot.js'];
var Bot = require('bot.js').Bot;

normalbot = new Bot(Config.bot);
mafiabot = new Bot(Config.Mafia.bot);
channelbot = new Bot(Config.channelbot);
kickbot = new Bot(Config.kickbot);
capsbot = new Bot(Config.capsbot);
checkbot = new Bot(Config.checkbot);
coinbot = new Bot(Config.coinbot);
countbot = new Bot(Config.countbot);
tourneybot = new Bot(Config.tourneybot);
rankingbot = new Bot(Config.rankingbot);
battlebot = new Bot(Config.battlebot);
commandbot = new Bot(Config.commandbot);
querybot = new Bot(Config.querybot);
hangbot = new Bot(Config.hangbot);
bfbot = new Bot(Config.bfbot);
// Command List
var fenixcommands = {
[
"Hi Fenix :)",
" ",
" ",
"/eval: Evaluate raw code into the script",
"/addemotelist person: Add a user into the emote list.",
"/removemotelist person: Remove someone from the emote list.",
var commands = {
user:
[
"/sprite [pokemon number]: Check out a pokemon sprite.",
"/spritegen [pokemon number]*[pokemon generation]: Check out a pokemon in a specific generation.",
"/roll: Roll the dice, see what you get",
"/sangwich: Hungry?",
"/marco: Polo!",
"/lifeadvice: Get life advice!",
"/selfowner: Explains itself.",
"/selfadmin: Explains itself.",
"/selfmod: Explains itself.",
"/pimpslap user: Pimp slap!",
"/fish: Catch a fish?",
"/leagerules: To see the league rules.",
"/d: Leave the server in style.",
"/rules [x]: Shows the rules (x is optionally parameter to show a specific rule)",
"/ranking: Shows your ranking in your current tier.",
"/myalts: Lists your alts.",
"/me [message]: Sends a message with *** before your name.",
"/selfkick: Kicks all other accounts with IP.",
//"/importable: Posts an importable of your team to pastebin.",
"/dwreleased [Pokemon]: Shows the released status of a Pokemon's Dream World Ability",
"/wiki [Pokemon]: Shows that Pokemon's wiki page",
"/register: Registers a channel with you as owner.",
"/resetpass: Clears your password (unregisters you, remember to reregister).",
"/auth [owners/admins/mods]: Lists auth of given level, shows all auth if left blank.",
"/cauth: Lists all users with channel auth in the current channel.",
"/contributors: Lists contributors.",
"/league: Lists gym leaders and elite four of the PO league.",
"/uptime: Shows time since the server was last offline.",
"/players: Shows the number of players online.",
"/sameTier [on/off]: Turn on/off auto-rejection of challenges from players in a different tier from you.",
"/seen [name]: Allows you to see the last login of a user."
],
channel:
[
"/register: To register the current channel you're on.",
"/topic [topic]: Sets the topic of a channel. Only works if you're the first to log on a channel or have auth there. Displays current topic instead if no new one is given.",
"/lt [name]: Kick someone from current channel.",
"/member [name]: Makes the user a member.",
"/demember [name]: Removes membership from a user.",
"/csilence [minutes]: Prevents authless users from talking in current channel specified time.",
"/csilenceoff: Allows users to talk in current channel.",
"/cmute [name]:[reason]:[time]: Mutes someone in current channel (reason and time optional).",
"/cunmute [name]: Unmutes someone in current channel.",
"/cmutes: Lists users muted in current channel.",
"/cbans: Lists users banned from current channel.",
"*** Only channel admins may use the following commands ***",
"/op [name]: Gives a user channel operator status.",
"/deop [name]: Removes channel operator status from a user.",
"/inviteonly [on/off/level]: Makes a channel invite-only or public.",
"/ctogglecaps: Turns on/off the server anti-caps bot in current channel.",
"/ctoggleflood: Turns on/off the server anti-flood bot in current channel. Overactive still in effect.",
"/cban [name]:[reason]:[time]: Bans someone from current channel (reason and time optional).",
"/cunban [name]: Unbans someone from current channel.",
"/enabletours: Allows tours to be run in the channel.",
"/disabletours: Stops tours being run in the channel.",
"*** Only channel owners may use the following commands ***",
"/admin [name]: Gives a user channel admin status.",
"/deadmin [name]: Removes channel admin status from a user.",
"/owner [name]: Gives a user channel owner status.",
"/deowner [name]: Removes channel owner status from a user."
],
mod:
[
"/pmban [name]: PM Ban a user.",
"/timemote [number]: Set the cooldown for emotes. The [number] will always be in seconds.",
"/slaptime: Turn on slaptime",
"/tacopls: You turn on taco mode.",
"/tacoplsoff: You turn off taco mode.",
"/servermtd [mood]: Change the mood of the day",
"/pokemonotd [insert]: Change the Pokemon Of The Week",
"/news1 [insert]: Change the output of the 1nd news bot.",
"/news2 [insert]: Change the output of the 2rd news bot.",
"/sangwichon: Turn on /sangwich",
"/sangwichoff: Turn off /sangwich",
"/don: Turn on /d",
"/doff: Turn off /d",
"/muffinman [user]: This is a classified command for anyone who disrespects Ainsley Hariott.",
"/fanboy [user]: To make the desired user your fanboy. See /rules for purpose of this command.",
"/motd [text]: Change the message of the day.",
"/fishon: Enable /fish",
"/fishoff: Disable /fish",
"/ping [user]: To ping someone (flash)",
"/html [text]: Enhance your line with HTML.",
"/message [user]:[text]: Message a user.",
"/frules [rule#]:[person]: Sends the rule to the person from the rule number. To send them all the rules, type /frule all:[name]",
"/superimp [name]: Superimps your name.",
"/superimpoff: Turns off superimp.",
"/chanlink [channel]:[message]: Links to a channel.",
"/announce [color]:[message]: Announces your message with a color of the announcement ( not message ).",
"/k [name]: Kicks someone.",
"/mute [name]:[reason]:[time]: Mutes someone. Time is optional and defaults to 1 day.",
"/unmute [name]: Unmutes someone.",
"/silence [minutes]:[channel]: Prevents authless users from talking in a channel for specified time. Affects all official channels if no channel is given.",
"/silenceoff [channel]: Removes silence from a channel. Affects all official channels if none is specified.",
"/perm [on/off]: Make the current permanent channel or not (permanent channels remain listed when they have no users).",
"/userinfo [name]: Displays information about a user (pretty display).",
"/whois [name]: Displays information about a user (one line, slightly more info).",
"/aliases [IP/name]: Shows the aliases of an IP or name.",
"/tempban [name]:[time]: Bans someone for 24 hours or less. Time is optional and defaults to 1 day",
"/tempunban [name]: Unbans a temporary banned user (standard unban doesn't work).",
"/checkbantime [name]: Checks how long a user is banned for.",
"/mafiaban [name]:[reason]:[time]: Bans a player from Mafia. Time is optional and defaults to 7 days.",
"/mafiaunban [name]: Unbans a player from Mafia.",
"/detain [user]:[reason]:[# Mafia Games]: Sentences a player to probation for # of Mafia Games.",
"/release [user]: Removes a player from probation in Mafia.",
"/detainlist [search term]: Searches the detainlist, show full list if no search term is entered.",
"/passauth [target]: Passes your mods to another megauser (only for mega-mods) or to your online alt.",
"/passauths [target]: Passes your mods silently.",
"/banlist [search term]: Searches the banlist, shows full list if no search term is entered.",
"/mutelist [search term]: Searches the mutelist, shows full list if no search term is entered.",
"/smutelist [search term]: Searches the smutelist, shows full list if no search term is entered.",
"/mafiabans [search term]: Searches the mafiabanlist, shows full list if no search team is entered.",
"/rangebans: Lists range bans.",
"/ipbans : Lists ip bans.",
"/autosmutelist: Lists the names in the auto-smute list.",
"/namebans: Lists name bans.",
"/namewarns: Lists name warnings.",
"/topchannels: To view the top channels.",
"/onrange [range]: To view who is on a range.",
"/tier [name]: To view the tier(s) of a person.",
"/battlehistory [name]: To view a person's battle history.",
"/channelusers [channel]: Lists users on a channel."
],
admin:
[
"/ban [name]: Bans a user.",
"/unban [name]: Unbans a user.",
"/smute xxx: Secretly mutes a user. Can't smute auth.",
"/sunmute xxx: Removes secret mute from a user.",
"/megauser[off] xxx: Adds or removes megauser powers from someone.",
"/memorydump: Shows the state of the memory.",
"/nameban regexp: Adds a regexp ban on usernames.",
"/nameunban full_regexp: Removes a regexp ban on usernames.",
"/namewarn regexp: Adds a namewarning",
"/nameunwarn full_regexp: Removes a namewarning",
"/destroychan [channel]: Destroy a channel (official channels are protected).",
"/indigoinvite [name]: To invite somebody to staff channels.",
"/indigodeinvite: To deinvite unwanted visitors from staff channel."
],
owner:
[
"/changeRating [player] -- [tier] -- [rating]: Changes the rating of a rating abuser.",
"/stopBattles: Stops all new battles to allow for server restart with less problems for users.",
"/imp [name]: Lets you speak as someone",
"/impOff: Stops your impersonating.",
"/contributor[off] xxx:what: Adds or removes contributor status (for indigo access) from someone, with reason.",
"/clearpass [name]: Clears a user's password.",
"/autosmute [name]: Adds a player to the autosmute list",
"/removeautosmute [name]: Removes a player from the autosmute list",
"/periodicsay minutes:channel1,channel2,...:[message]: Sends a message to specified channels periodically.",
"/endcalls: Ends the next periodic message.",
"/sendAll [message]: Sends a message to everyone.",
"/changeAuth[s] [auth] [name]: Changes the auth of a user.",
"/showteam xxx: Displays the team of a user (to help people who have problems with event moves or invalid teams).",
"/rangeban [ip] [comment]: Makes a range ban.",
"/rangeunban: [ip]: Removes a rangeban.",
"/purgemutes [time]: Purges old mutes. Time is given in seconds. Defaults is 4 weeks.",
"/purgembans [time]: Purges old mafiabans. Time is given in seconds. Default is 1 week.",
"/addplugin [plugin]: Add a plugin from the web.",
"/removeplugin [plugin]: Removes a plugin.",
"/updateplugin [plugin]: Updates plugin from the web.",
"/updateScripts: Updates scripts from the web.",
"/capslockday [on/off]: To turn caps lock day on or off.",
"/indigo [on/off]: To create or destroy staff channel.",
"/updatebansites: To update ban sites.",
"/updatetierchecks: To update tier checks.",
"/togglerainbow: [on/off]: To turn rainbow on or off.",
"/towner[s] [name]: makes someone a tournament owner (tours.js plugin needs to be installed for this to work)"
]
};

/* Start script-object
*
* All the events are defined here
*/

var lastStatUpdate = new Date();
poScript=({
/* Executed every second */
step: function() {
if (typeof callplugins == "function") callplugins("stepEvent");
var date = new Date();
if (date.getUTCMinutes() === 10 && date.getUTCSeconds() === 0) {
sys.get_output("nc -z server.pokemon-online.eu 10508", function callback(exit_code) {
if (exit_code !== 0) {
sys.sendAll("±NetCat: Cannot reach Webclient Proxy - it may be down.");
}
}, function errback(error) {
sys.sendAll("±NetCat: Cannot reach Webclient Proxy - it may be down: " + error);
});
}
if ([0, 6, 12, 18].indexOf(date.getUTCHours()) != -1 && date.getUTCMinutes() === 0 && date.getUTCSeconds() === 0) {
sendNotice();
}
// Reset stats monthly
var JSONP_FILE = "usage_stats/formatted/stats.jsonp";
if (lastCleared != date.getUTCMonth()) {
lastCleared = date.getUTCMonth();
battlesFought = 0;
sys.saveVal("Stats/BattlesFought", 0);
sys.saveVal("Stats/LastCleared", lastCleared);
sys.saveVal("Stats/MafiaGamesPlayed", 0);
}
if (date - lastStatUpdate > 60) {
lastStatUpdate = date;
// QtScript is able to JSON.stringify dates
var stats = {
lastUpdate: date,
usercount: sys.playerIds().map(sys.loggedIn).length,
battlesFought: battlesFought,
mafiaPlayed: +sys.getVal("Stats/MafiaGamesPlayed")
};
sys.writeToFile(JSONP_FILE, "setServerStats(" + JSON.stringify(stats) + ");");
}
},

serverStartUp : function() {
SESSION.global().startUpTime = +sys.time();
scriptChecks = 0;
this.init();
},

init : function() {
lastMemUpdate = 0;
bannedUrls = [];
battlesFought = +sys.getVal("Stats/BattlesFought");
lastCleared = +sys.getVal("Stats/LastCleared");

mafiachan = SESSION.global().channelManager.createPermChannel("Mafia", "Use /help to get started!");
staffchannel = SESSION.global().channelManager.createPermChannel("Indigo Plateau", "Welcome to the Staff Channel! Discuss of all what users shouldn't hear here! Or more serious stuff...");
sachannel = SESSION.global().channelManager.createPermChannel("Victory Road","Welcome MAs and SAs!");
tourchannel = SESSION.global().channelManager.createPermChannel("Tournaments", 'Useful commands are "/join" (to join a tournament), "/unjoin" (to leave a tournament), "/viewround" (to view the status of matches) and "/megausers" (for a list of users who manage tournaments). Please read the full Tournament Guidelines: http://pokemon-online.eu/forums/showthread.php?2079-Tour-Rules');
watchchannel = SESSION.global().channelManager.createPermChannel("Watch", "Alerts displayed here");
triviachan = SESSION.global().channelManager.createPermChannel("Trivia", "Play trivia here!");
revchan = SESSION.global().channelManager.createPermChannel("TrivReview", "For Trivia Admins to review questions");
mafiarev = SESSION.global().channelManager.createPermChannel("Mafia Review", "For Mafia Admins to review themes");
hangmanchan = SESSION.global().channelManager.createPermChannel("Hangman", "Type /help to see how to play!");

var dwlist = ["Timburr", "Gurdurr", "Conkeldurr", "Pansage", "Pansear", "Panpour", "Simisear", "Simisage", "Simipour", "Ekans", "Arbok", "Paras", "Parasect", "Happiny", "Chansey", "Blissey", "Munchlax", "Snorlax", "Aipom", "Ambipom", "Pineco", "Forretress", "Wurmple", "Silcoon", "Cascoon", "Beautifly", "Dustox", "Seedot", "Nuzleaf", "Shiftry", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Plusle", "Minun", "Budew", "Roselia", "Gulpin", "Swalot", "Kecleon", "Kricketot", "Kricketune", "Cherubi", "Cherrim", "Carnivine", "Audino", "Throh", "Sawk", "Scraggy", "Scrafty", "Rattata", "Raticate", "Nidoran-F", "Nidorina", "Nidoqueen", "Nidoran-M", "Nidorino", "Nidoking", "Oddish", "Gloom", "Vileplume", "Bellossom", "Bellsprout", "Weepinbell", "Victreebel", "Ponyta", "Rapidash", "Farfetch'd", "Doduo", "Dodrio", "Exeggcute", "Exeggutor", "Lickitung", "Lickilicky", "Tangela", "Tangrowth", "Kangaskhan", "Sentret", "Furret", "Cleffa", "Clefairy", "Clefable", "Igglybuff", "Jigglypuff", "Wigglytuff", "Mareep", "Flaaffy", "Ampharos", "Hoppip", "Skiploom", "Jumpluff", "Sunkern", "Sunflora", "Stantler", "Poochyena", "Mightyena", "Lotad", "Ludicolo", "Lombre", "Taillow", "Swellow", "Surskit", "Masquerain", "Bidoof", "Bibarel", "Shinx", "Luxio", "Luxray", "Psyduck", "Golduck", "Growlithe", "Arcanine", "Scyther", "Scizor", "Tauros", "Azurill", "Marill", "Azumarill", "Bonsly", "Sudowoodo", "Girafarig", "Miltank", "Zigzagoon", "Linoone", "Electrike", "Manectric", "Castform", "Pachirisu", "Buneary", "Lopunny", "Glameow", "Purugly", "Natu", "Xatu", "Skitty", "Delcatty", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Bulbasaur", "Charmander", "Squirtle", "Ivysaur", "Venusaur", "Charmeleon", "Charizard", "Wartortle", "Blastoise", "Croagunk", "Toxicroak", "Turtwig", "Grotle", "Torterra", "Chimchar", "Infernape", "Monferno", "Piplup", "Prinplup", "Empoleon", "Treecko", "Sceptile", "Grovyle", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Caterpie", "Metapod", "Butterfree", "Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Zubat", "Golbat", "Crobat", "Aerodactyl", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Yanma", "Yanmega", "Murkrow", "Honchkrow", "Delibird", "Wingull", "Pelipper", "Swablu", "Altaria", "Starly", "Staravia", "Staraptor", "Gligar", "Gliscor", "Drifloon", "Drifblim", "Skarmory", "Tropius", "Chatot", "Slowpoke", "Slowbro", "Slowking", "Krabby", "Kingler", "Horsea", "Seadra", "Kingdra", "Goldeen", "Seaking", "Magikarp", "Gyarados", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Wooper", "Quagsire", "Qwilfish", "Corsola", "Remoraid", "Octillery", "Mantine", "Mantyke", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Barboach", "Whiscash", "Clamperl", "Gorebyss", "Huntail", "Relicanth", "Luvdisc", "Buizel", "Floatzel", "Finneon", "Lumineon", "Tentacool", "Tentacruel", "Corphish", "Crawdaunt", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Shellos", "Gastrodon", "Lapras", "Dratini", "Dragonair", "Dragonite", "Elekid", "Electabuzz", "Electivire", "Poliwag", "Poliwrath", "Politoed", "Poliwhirl", "Vulpix", "Ninetales", "Musharna", "Munna", "Darmanitan", "Darumaka", "Mamoswine", "Togekiss", "Burmy", "Wormadam", "Mothim", "Pichu", "Pikachu", "Raichu","Abra","Kadabra","Alakazam","Spiritomb","Mr. Mime","Mime Jr.","Meditite","Medicham","Meowth","Persian","Shuppet","Banette","Spinarak","Ariados","Drowzee","Hypno","Wobbuffet","Wynaut","Snubbull","Granbull","Houndour","Houndoom","Smoochum","Jynx","Ralts","Gardevoir","Gallade","Sableye","Mawile","Volbeat","Illumise","Spoink","Grumpig","Stunky","Skuntank","Bronzong","Bronzor","Mankey","Primeape","Machop","Machoke","Machamp","Magnemite","Magneton","Magnezone","Koffing","Weezing","Rhyhorn","Rhydon","Rhyperior","Teddiursa","Ursaring","Slugma","Magcargo","Phanpy","Donphan","Magby","Magmar","Magmortar","Larvitar","Pupitar","Tyranitar","Makuhita","Hariyama","Numel","Camerupt","Torkoal","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Absol","Beldum","Metang","Metagross","Hippopotas","Hippowdon","Skorupi","Drapion","Tyrogue","Hitmonlee","Hitmonchan","Hitmontop","Bagon","Shelgon","Salamence","Seel","Dewgong","Shellder","Cloyster","Chinchou","Lanturn","Smeargle","Porygon","Porygon2","Porygon-Z","Drilbur", "Excadrill", "Basculin", "Basculin-a", "Alomomola", "Stunfisk", "Druddigon", "Foongus", "Amoonguss", "Liepard", "Purrloin", "Minccino", "Cinccino", "Sandshrew", "Sandslash", "Vullaby", "Mandibuzz", "Braviary", "Frillish", "Jellicent", "Weedle", "Kakuna", "Beedrill", "Shroomish", "Breloom", "Zangoose", "Seviper", "Combee", "Vespiquen", "Patrat", "Watchog", "Blitzle", "Zebstrika", "Woobat", "Swoobat", "Mienfoo", "Mienshao", "Bouffalant", "Staryu", "Starmie", "Togepi", "Shuckle", "Togetic", "Rotom", "Sigilyph", "Riolu", "Lucario", "Lugia", "Ho-Oh", "Dialga", "Palkia", "Giratina", "Grimer", "Muk", "Ditto", "Venonat", "Venomoth", "Herdier", "Lillipup", "Stoutland", "Sewaddle", "Swadloon", "Leavanny", "Cubchoo", "Beartic", "Landorus", "Thundurus", "Tornadus","Dunsparce", "Sneasel", "Weavile", "Nosepass", "Probopass", "Karrablast", "Escavalier", "Shelmet", "Accelgor", "Snorunt", "Glalie", "Froslass", "Heatran", "Pinsir", "Emolga", "Heracross", "Trubbish", "Garbodor", "Snover", "Abomasnow","Diglett", "Dugtrio", "Geodude", "Graveler", "Golem", "Onix", "Steelix", "Voltorb", "Electrode", "Cubone", "Marowak", "Whismur", "Loudred", "Exploud", "Aron", "Lairon", "Aggron", "Spheal", "Sealeo", "Walrein", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Gible", "Gabite", "Garchomp", "Pidove", "Tranquill", "Unfezant", "Tympole", "Palpitoad", "Seismitoad", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Ducklett", "Swanna", "Deerling", "Sawsbuck", "Elgyem", "Beheeyem", "Pawniard", "Bisharp", "Heatmor", "Durant","Venipede","Whirlipede", "Scolipede", "Tirtouga", "Carracosta", "Joltik", "Galvantula", "Maractus", "Dwebble", "Crustle", "Roggenrola", "Boldore", "Gigalith", "Vanillite", "Vanillish", "Vanilluxe", "Klink", "Klang", "Klinklang", "Swinub", "Piloswine", "Golett", "Golurk", "Gothitelle", "Gothorita", "Solosis", "Duosion", "Reuniclus", "Deerling-Summer", "Deerling-Autumn", "Deerling-Winter", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter"];

/* use hash for faster lookup */
dwpokemons = {};
var announceChan = (typeof staffchannel == "number") ? staffchannel : 0;
var dwpok;
for (dwpok = 0; dwpok < dwlist.length; dwpok++) {
var num = sys.pokeNum(dwlist[dwpok]);
if (num === undefined)
sendChanAll("Script Check: Unknown poke in dwpokemons: '" +dwlist[dwpok]+"'.", announceChan);
else if (dwpokemons[num] === true)
sendChanAll("Script Check: dwpokemons contains '" +dwlist[dwpok]+"' multiple times.", announceChan);
else
dwpokemons[sys.pokeNum(dwlist[dwpok])] = true;
}

var lclist = ["Bulbasaur", "Charmander", "Squirtle", "Croagunk", "Turtwig", "Chimchar", "Piplup", "Treecko","Torchic","Mudkip", "Pansage", "Pansear", "Panpour"];
lcpokemons = lclist.map(sys.pokeNum);
lcmoves = {
"Bronzor":["Iron Defense"],
"Golett":["Rollout","Shadow Punch","Iron Defense","Mega Punch","Magnitude","DynamicPunch","Night Shade","Curse","Hammer Arm","Focus Punch"],
"Klink":["Charge","Thundershock","Gear Grind","Bind","Mirror Shot","Screech","Discharge","Metal Sound","Shift Gear","Lock-On","Zap Cannon"],
"Petilil":["Entrainment"],
"Rufflet":["Wing Attack","Scary Face","Slash","Defog","Air Slash","Crush Claw","Whirlwind","Brave Bird","Thrash"]
};
bannedGSCSleep = [sys.moveNum("Spore"), sys.moveNum("Hypnosis"), sys.moveNum("Lovely Kiss"), sys.moveNum("Sing"), sys.moveNum("Sleep Powder")].sort();
bannedGSCTrap = [sys.moveNum("Mean Look"), sys.moveNum("Spider Web")].sort();

var breedingList = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Croagunk", "Toxicroak", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Hitmonlee","Hitmonchan","Hitmontop","Tyrogue", "Porygon", "Porygon2", "Porygon-Z", "Gothorita", "Gothitelle","Pansage", "Pansear", "Panpour", "Simisear", "Simisage", "Simipour"];
breedingpokemons = breedingList.map(sys.pokeNum);

/* restore mutes, smutes, mafiabans, rangebans, megausers */
mutes = new MemoryHash("mutes.txt");
mbans = new MemoryHash("mbans.txt");
smutes = new MemoryHash("smutes.txt");
rangebans = new MemoryHash("rangebans.txt");
marks = new MemoryHash("marks.txt");
sarks = new MemoryHash("sarks.txt");
contributors = new MemoryHash("contributors.txt");
mafiaAdmins = new MemoryHash("mafiaadmins.txt");
mafiaSuperAdmins = new MemoryHash("mafiasuperadmins.txt");
hangmanAdmins = new MemoryHash("hangmanadmins.txt");
hangmanSuperAdmins = new MemoryHash("hangmansuperadmins.txt");
ipbans = new MemoryHash("ipbans.txt");
detained = new MemoryHash("detained.txt");
hbans = new MemoryHash("hbans.txt");
proxy_ips = {};
function addProxybans(content) {
var lines = content.split(/\n/);
for (var k = 0; k < lines.length; ++k) {
var proxy_ip = lines[k].split(":")[0];
if (proxy_ip !== 0) proxy_ips[proxy_ip] = true;
}
}
var PROXY_FILE = "proxy_list.txt";
var content = sys.getFileContent(PROXY_FILE);
if (content) { addProxybans(content); }
else sys.webCall(Config.base_url + PROXY_FILE, addProxybans);

rules = [ "",
"*** The Battle Tower Server Rules ***",
    "",
    "1. No Drama: Don't insult anyone or do anything else that causes drama or brings in outside drama.",
    "2. No Excessive Swearing: Don't overuse curse words. Overuse is at the auth's discretion. Not up for debate.",
    "3. No Derogatory Language: Don't use hate speech, even if it's intended as a joke. ",
    "4. No Advertising: If you want to invite people somewhere, you can ask people to PM you if they are interested.",
    "5. No Trolling: Don't make chat negative. Don't spam or overuse CAPS. Don't do things to bother people or stir up a reaction.",
    "6. No Adult Content: Don't talk about sexual acts or post porn/nudity. ",
    "7. No Disrespecting: Don't give out other peoples' information. Don't use other peoples' names.",
    "8. No Minimodding: Let the auth do their job. ",
    "9. No Circumventing The Rules: Don't ban/mute evade. Don't use loopholes.",
    ""
    ];


if (typeof authStats == 'undefined')
authStats = {};

if (typeof nameBans == 'undefined') {
nameBans = [];
try {
var serialized = JSON.parse(sys.getFileContent("nameBans.json"));
for (var i = 0; i < serialized.nameBans.length; ++i) {
nameBans.push(new RegExp(serialized.nameBans[i], "i"));
}
} catch (e) {
// ignore
}
}
if (typeof nameWarns == 'undefined') {
nameWarns = [];
try {
var serialized = JSON.parse(sys.getFileContent("nameWarns.json"));
for (var i = 0; i < serialized.nameWarns.length; ++i) {
nameWarns.push(new RegExp(serialized.nameWarns[i], "i"));
}
} catch (e) {
// ignore
}
}

if (SESSION.global().battleinfo === undefined) {
SESSION.global().battleinfo = {};
}

if (SESSION.global().BannedUrls === undefined) {
SESSION.global().BannedUrls = [];
sys.webCall(Config.base_url + "bansites.txt", function(resp) {
SESSION.global().BannedUrls = resp.toLowerCase().split(/\n/);
});
}
isMarked = function(id) {
    for (var x in marks.hash) {
	    if (x.toLowerCase() == sys.name(id).toLowerCase()) 
		    return true;
	}
    return false;
};
isSarked = function(id) {
    for (var x in sarks.hash) {
	    if (x.toLowerCase() == sys.name(id).toLowerCase()) 
		    return true;
	}
    return false;
}	
isSuperAdmin = function(id) {
if (typeof Config.superAdmins != "object" || Config.superAdmins.length === undefined) return false;
if (sys.auth(id) != 2) return false;
var name = sys.name(id);
for (var i = 0; i < Config.superAdmins.length; ++i) {
if (cmp(name, Config.superAdmins[i]))
return true;
}
return false;
};

if (typeof VarsCreated != 'undefined')
return;

key = function(a,b) {
return a + "*" + sys.ip(b);
};

saveKey = function(thing, id, val) {
sys.saveVal(key(thing,id), val);
};

getKey = function(thing, id) {
return sys.getVal(key(thing,id));
};

cmp = function(a, b) {
return a.toLowerCase() == b.toLowerCase();
};

battlesStopped = false;

maxPlayersOnline = 0;

lineCount = 0;

pokeNatures = [];

var list = "Heatran-Eruption/Quiet=Suicune-ExtremeSpeed/Relaxed|Sheer Cold/Relaxed|Aqua Ring/Relaxed|Air Slash/Relaxed=Raikou-ExtremeSpeed/Rash|Weather Ball/Rash|Zap Cannon/Rash|Aura Sphere/Rash=Entei-ExtremeSpeed/Adamant|Flare Blitz/Adamant|Howl/Adamant|Crush Claw/Adamant=Snivy-Aromatherapy/Hardy|Synthesis/Hardy";

var sepPokes = list.split('='),
sepMovesPoke, sepMoves, movenat;
for (var x = 0; x < sepPokes.length; x++) {
sepMovesPoke = sepPokes[x].split('-');
sepMoves = sepMovesPoke[1].split('|');

var poke = sys.pokeNum(sepMovesPoke[0]);
pokeNatures[poke] = [];

for (var y = 0; y < sepMoves.length; ++y) {
movenat = sepMoves[y].split('/');
pokeNatures[poke][sys.moveNum(movenat[0])] = sys.natureNum(movenat[1]);
}
}

try {
pastebin_api_key = sys.getFileContent(Config.dataDir+"pastebin_api_key").replace("\n", "");
pastebin_user_key = sys.getFileContent(Config.dataDir+"pastebin_user_key").replace("\n", "");
} catch(e) {
normalbot.sendAll("Couldn't load api keys: " + e, staffchannel);
}

sendMainTour = function(message) {
sendChanAll(message, 0);
sendChanAll(message, tourchannel);
};

callplugins("init");

VarsCreated = true;
}, /* end of init */


issueBan : function(type, src, tar, commandData, maxTime) {
var memoryhash = {"mute": mutes, "mban": mbans, "smute": smutes, "hban": hbans}[type];
var banbot = type == "mban" ? mafiabot : normalbot;
var verb = {"mute": "muted", "mban": "banned from mafia", "smute": "secretly muted", "hban": "banned from hangman"}[type];
var nomi = {"mute": "mute", "mban": "ban from mafia", "smute": "secret mute", "hban": "ban from hangman"}[type];
var sendAll = {
"smute": function(line) {
banbot.sendAll(line, staffchannel);
line = line.replace(" by " +sys.name(src), "");
sys.dbAuths().map(sys.id).filter(function(uid) { return uid !== undefined; }).forEach(function(uid) {
sys.channelsOfPlayer(uid).filter(function(cid) { return cid !== staffchannel; }).forEach(function(cid) {
banbot.sendMessage(uid, line, cid);
});
});
},
"mban": function(line) {
banbot.sendAll(line, staffchannel);
banbot.sendAll(line, mafiachan);
banbot.sendAll(line, sachannel);
},
"mute": function(line) {
banbot.sendAll(line);
},
"hban" : function(line) {
banbot.sendAll(line, staffchannel);
banbot.sendAll(line, hangmanchan);
banbot.sendAll(line, sachannel);
}
}[type];

var expires = 0;
var defaultTime = {"mute": "24h", "mban": "1d", "smute": "0", "hban": "1d"}[type];
var reason = "";
var timeString = "";
var tindex = 10;
var data = [];
var ip;
if (tar === undefined) {
data = commandData.split(":");
if (data.length > 1) {
commandData = data[0];
tar = sys.id(commandData);

if (data.length > 2 && /http$/.test(data[1])) {
reason = data[1] + ":" + data[2];
tindex = 3;
} else {
reason = data[1];
tindex = 2;
}
if (tindex==data.length && reason.length > 0 && reason.charCodeAt(0) >= 48 && reason.charCodeAt(0) <= 57) {
tindex-=1;
reason="";
}
}
}

var secs = getSeconds(data.length > tindex ? data[tindex] : defaultTime);
// limit it!
if (typeof maxTime == "number") secs = (secs > maxTime || secs === 0 || isNaN(secs)) ? maxTime : secs;
if (secs > 0) {
timeString = " for " + getTimeString(secs);
expires = secs + parseInt(sys.time(), 10);
}

if (reason === "" && sys.auth(src) < 3) {
banbot.sendChanMessage(src, "You need to give a reason to the " + nomi + "!");
return;
}

if (tar === undefined) {
ip = sys.dbIp(commandData);
var maxAuth = sys.maxAuth(ip);
if(maxAuth>=sys.auth(src) && maxAuth > 0) {
banbot.sendChanMessage(src, "Can't do that to higher auth!");
return;
}
if(ip !== undefined) {
if (memoryhash.get(ip)) {
banbot.sendChanMessage(src, "He/she's already " + verb + ".");
return;
}
sendAll("" + commandData + " was " + verb + " by " + nonFlashing(sys.name(src)) + timeString + "! [Reason: " + reason + "] [Channel: "+sys.channel(channel) + "]");
memoryhash.add(ip, sys.time() + ":" + sys.name(src) + ":" + expires + ":" + commandData + ":" + reason);
var authname = sys.name(src).toLowerCase();
authStats[authname] = authStats[authname] || {};
authStats[authname]["latest" + type] = [commandData, parseInt(sys.time(), 10)];
return;
}

banbot.sendChanMessage(src, "Couldn't find " + commandData);
return;
}
if (SESSION.users(tar)[type].active) {
banbot.sendChanMessage(src, "He/she's already " + verb + ".");
return;
}
if (sys.auth(tar) >= sys.auth(src) && sys.auth(tar) > 0) {
banbot.sendChanMessage(src, "You don't have sufficient auth to " + nomi + " " + commandData + ".");
return;
}
var tarip = tar !== undefined ? sys.ip(tar) : sys.dbIp(commandData);
sys.playerIds().forEach(function(id) {
if (sys.loggedIn(id) && sys.ip(id) === tarip)
SESSION.users(id).activate(type, sys.name(src), expires, reason, true);
});
if (reason.length > 0)
sendAll("" + commandData + " was " + verb + " by " + nonFlashing(sys.name(src)) + timeString + "! [Reason: " + reason + "] [Channel: "+sys.channel(channel) + "]");
else
sendAll("" + commandData + " was " + verb + " by " + nonFlashing(sys.name(src)) + timeString + "! [Channel: "+sys.channel(channel) + "]");

var authority= sys.name(src).toLowerCase();
authStats[authority] = authStats[authority] || {};
authStats[authority]["latest" + type] = [commandData, parseInt(sys.time(), 10)];
},

importable : function(id, team, compactible) {
/*
Tyranitar (M) @ Choice Scarf
Lvl: 100
Trait: Sand Stream
IVs: 0 Spd
EVs: 4 HP / 252 Atk / 252 Spd
Jolly Nature (+Spd, -SAtk)
- Stone Edge
- Crunch
- Superpower
- Pursuit
*/
if (compactible === undefined) compactible = false;
var nature_effects = {"Adamant": "(+Atk, -SAtk)", "Bold": "(+Def, -Atk)"};
var genders = {0: '', 1: ' (M)', 2: ' (F)'};
var stat = {0: 'HP', 1: 'Atk', 2: 'Def', 3: 'SAtk', 4: 'SDef', 5:'Spd'};
var hpnum = sys.moveNum("Hidden Power");
var ret = [];
for (var i = 0; i < 6; ++i) {
var poke = sys.teamPoke(id, team, i);
if (poke === undefined)
continue;
// exclude missingno
if (poke === 0)
continue;

var item = sys.teamPokeItem(id, team, i);
item = item !== undefined ? sys.item(item) : "(no item)";
ret.push(sys.pokemon(poke) + genders[sys.teamPokeGender(id, team, i)] + " @ " + item );
ret.push('Trait: ' + sys.ability(sys.teamPokeAbility(id, team, i)));
var level = sys.teamPokeLevel(id, team, i);
if (!compactible && level != 100) ret.push('Lvl: ' + level);

var ivs = [];
var evs = [];
var hpinfo = [sys.gen(id, team)];
for (var j = 0; j < 6; ++j) {
var iv = sys.teamPokeDV(id, team, i, j);
if (iv != 31) ivs.push(iv + " " + stat[j]);
var ev = sys.teamPokeEV(id, team, i, j);
if (ev !== 0) evs.push(ev + " " + stat[j]);
hpinfo.push(iv);
}
if (!compactible && ivs.length > 0)
ret.push('IVs: ' + ivs.join(" / "));
if (evs.length > 0)
ret.push('EVs: ' + evs.join(" / "));

ret.push(sys.nature(sys.teamPokeNature(id, team, i)) + " Nature"); // + (+Spd, -Atk)

for (j = 0; j < 4; ++j) {
var move = sys.teamPokeMove(id, team, i, j);
if (move !== undefined) {
ret.push('- ' + sys.move(move) + (move == hpnum ? ' [' + sys.type(sys.hiddenPowerType.apply(sys, hpinfo)) + ']':''));
}
}
ret.push("");
}
return ret;
},

canJoinStaffChannel : function(src) {
var disallowedNames = Config.disallowStaffChannel;
if (disallowedNames.indexOf(sys.name(src)) > -1)
return false;
if (sys.auth(src) > 0)
return true;
if (SESSION.users(src).megauser)
return true;
if (SESSION.users(src).contributions !== undefined)
return true;
var allowedNames = Config.canJoinStaffChannel;
if (allowedNames.indexOf(sys.name(src)) > -1)
return true;
return false;
},

isOfficialChan : function (chanid) {
var officialchans = [0, tourchannel, mafiachan, triviachan, hangmanchan];
if (officialchans.indexOf(chanid) > -1)
return true;
else
return false;
},

kickAll : function(ip) {
var players = sys.playerIds();
var players_length = players.length;
for (var i = 0; i < players_length; ++i) {
var current_player = players[i];
if (ip == sys.ip(current_player)) {
sys.kick(current_player);
}
}
return;
},

beforeChannelJoin : function(src, channel) {
var poUser = SESSION.users(src);
var poChannel = SESSION.channels(channel);

callplugins("beforeChannelJoin", src, channel);

// Can't ban from main
if (channel === 0) return;
if (channel == sys.channelId("Mafia Channel")) {
sys.stopEvent();
sys.putInChannel(src, sys.channelId("Mafia"));
}
if (channel === sys.channelId('Hangman Game')) {
sys.stopEvent();
sys.putInChannel(src, hangmanchan);
}
if (sys.auth(src) == 0){
if (channel == watchchannel){
sm(src, "Access to that place is restricted for users.", channel);
sys.stopEvent();
return;
}
}
/* Tours redirect */
if (sys.auth(src) <= 0 && channel == sys.channelId("Tours")) {
sys.stopEvent();
sys.putInChannel(src, tourchannel);
return;
}
if (sys.auth(src) === 0 && channel == sys.channelId("shanaindigo")) {
sys.stopEvent();
sys.putInChannel(src, sachannel);
return;
}
if (sys.auth(src) < 1 && channel == watchchannel){
sm(src, "Access to that place is restricted for users.", channel);
sys.stopEvent();
return;
}
if (sys.auth(src) < 3 && poChannel.canJoin(src) == "banned") {
channelbot.sendMessage(src, "You are banned from this channel! You can't join unless channel operators and masters unban you.");
sys.stopEvent();
return;
}
if (poChannel.canJoin(src) == "allowed") {
return;
}
if (poChannel.inviteonly > sys.auth(src)) {
sys.sendMessage(src, "+Guard: Sorry, but this channel is for higher authority!");
sys.stopEvent();
return;
}
if ((channel == staffchannel || channel == sachannel) && !this.canJoinStaffChannel(src)) {
sys.sendMessage(src, "+Guard: Sorry, the access to that place is restricted!");
sys.stopEvent();
return;
}
var channels = [mafiachan, hangmanchan];
var bans = ["mban", "hban"];
var type = ["Mafia", "Hangman"];
for(var x = 0; x < channels.length; x++) {
if (channel == channels[x] && poUser[bans[x]].active) {
if (poUser.expired(bans[x])) {
poUser.un(bans[x]);
normalbot.sendMessage(src, "Your ban from " + type[x] + " expired.");
} else {
var info = poUser[bans[x]];
sys.sendMessage(src, "+Guard: You are banned from " + type[x] + (info.by ? " by " + info.by : '')+". " + (info.expires > 0 ? "Ban expires in " + getTimeString(info.expires - parseInt(sys.time(), 10)) + ". " : '') + (info.reason ? "[Reason: " + info.reason + "]" : ''));
sys.stopEvent();
return;
}
}
}
if (channel == watchchannel && sys.auth(src) < 1) {
sys.sendMessage(src, "+Guard: Sorry, the access to that place is restricted!");
sys.stopEvent();
return;
}
}, /* end of beforeChannelJoin */

beforeChannelCreated : function(chan, name, src) {
if (name == "x") { sys.stopEvent(); }
},

afterChannelCreated : function (chan, name, src) {
SESSION.global().channelManager.restoreSettings(chan);
}, /* end of afterChannelCreated */


afterChannelJoin : function(player, chan) {
if (typeof SESSION.channels(chan).topic != 'undefined') {
sys.sendMessage(player, "Welcome Message: " + SESSION.channels(chan).topic, chan);
/*if (SESSION.channels(chan).topicSetter)
sys.sendMessage(player, "Set by: " + SESSION.channels(chan).topicSetter, chan);*/
}
if (SESSION.channels(chan).isChannelOperator(player)) {
sys.sendMessage(player, Config.channelbot + ": use /topic <topic> to change the welcome message of this channel", chan);
}
if (SESSION.channels(chan).masters.length <= 0 && !this.isOfficialChan(chan)) {
sys.sendMessage(player, Config.channelbot + ": This channel is unregistered. If you're looking to own this channel, type /register in order to prevent your channel from being stolen.", chan);
}
callplugins("afterChannelJoin", player, chan);
}, /* end of afterChannelJoin */

beforeChannelDestroyed : function(channel) {
if (channel == tourchannel || (SESSION.channels(channel).perm === true) ) {
sys.stopEvent();
return;
}
}, /* end of beforeChannelDestroyed */

beforePlayerBan : function(src, dest, dur) {
normalbot.sendAll("Target: " + sys.name(dest) + ", IP: " + sys.ip(dest), staffchannel);
var authname = sys.name(src).toLowerCase();
authStats[authname] = authStats[authname] || {};
authStats[authname].latestBan = [sys.name(dest), parseInt(sys.time(), 10)];
},

beforePlayerKick:function(src, dest){
var authname = sys.name(src).toLowerCase();
authStats[authname] = authStats[authname] || {};
authStats[authname].latestKick = [sys.name(dest), parseInt(sys.time(), 10)];
},

afterNewMessage : function (message) {
if (message == "Script Check: OK") {
sendChanAll("±ScriptCheck: Scripts were updated!", sys.channelId("Indigo Plateau"));
if (typeof(scriptChecks)=='undefined')
scriptChecks = 0;
scriptChecks += 1;
this.init();
}
// Track overactives - though the server now tracks and bans too. Here are template regexps though.
// var ip_overactive = new RegExp("^IP ([0-9]{1,3}\\.){3}[0-9]{1,3} is being overactive\\.$");
// var player_overactive = new RegExp("^Player [^:]{1,20} \\(IP ([0-9]{1,3}\\.){3}[0-9]{1,3}\\) is being overactive\\.$");
// if(ip_overactive.test(message) || player_overactive.test(message))
}, /* end of afterNewMessage */


isRangeBanned : function(ip) {
for (var subip in rangebans.hash) {
if (subip.length > 0 && ip.substr(0, subip.length) == subip) {
return true;
}
}
return false;
},

isIpBanned: function(ip) {
for (var subip in ipbans.hash) {
if (subip.length > 0 && ip.substr(0, subip.length) == subip) {
return true;
}
}
return false;
},

isTempBanned : function(ip) {
var aliases = sys.aliases(ip);
for (var x = 0; x < aliases.length; x++) {
if (sys.dbTempBanTime(aliases[x]) < 2000000000) {
return true;
}
}
return false;
},

beforeIPConnected : function(ip) { //commands and stuff later for this, just fixing this quickly for now
if (this.isIpBanned(ip)) {
sys.stopEvent();
}
},

beforeLogIn : function(src) {
var ip = sys.ip(src);
// auth can evade rangebans and namebans
if (sys.auth(src) > 0) {
return;
}
//var allowedNames = ["sasukeanditachi", "sasukatandkitachi", "ata", "downpour", "broon89", "ifmltrailers", "probrem?", "salamander94", "realmanofgenius", "Derinsford"];
var allowedIps = ["74.115.245.16"];
if (this.isRangeBanned(ip) && allowedIps.indexOf(ip) == -1) {
normalbot.sendMessage(src, 'You are banned!');
sys.stopEvent();
return;
}
if (proxy_ips.hasOwnProperty(ip)) {
normalbot.sendMessage(src, 'You are banned for using proxy!');
sys.stopEvent();
return;

}
if (this.nameIsInappropriate(src)) {
sys.stopEvent();
}
},


nameIsInappropriate: function(src)
{
var name = (typeof src == "number")
? sys.name(src)
: src;
function reply(m) {
if (typeof src == "number") normalbot.sendMessage(src, m);
}

var lname = name.toLowerCase();

/* Name banning related */
for (var i = 0; i < nameBans.length; ++i) {
var regexp = nameBans[i];
if (regexp.test(lname)) {
reply('This kind of name is banned from the server. (Matching regexp: ' + regexp + ')');
return true;
}
}

var cyrillic = /\u0430|\u0410|\u0412|\u0435|\u0415|\u041c|\u041d|\u043e|\u041e|\u0440|\u0420|\u0441|\u0421|\u0422|\u0443|\u0445|\u0425|\u0456|\u0406/;
if (cyrillic.test(name)) {
reply('You are using cyrillic letters similar to latin letters in your name.');
return true;
}
var greek = /[\u0370-\u03ff]/;
if (greek.test(name)) {
reply('You are using Greek letters similar to Latin letters in your name.');
return true;
}

// \u0020 = space
var space = /[\u0009-\u000D]|\u0085|\u00A0|\u1680|\u180E|\u2000-\u200A|\u2028|\u2029|\u2029|\u202F|\u205F|\u3000|\u3164|\uFEFF|\uFFA0/;
if (space.test(name)) {
reply('You are using whitespace letters in your name.');
return true;
}

// \u002D = -
var dash = /\u058A|\u05BE|\u1400|\u1806|\u2010-\u2015|\u2053|\u207B|\u208B|\u2212|\u2E17|\u2E1A|\u301C|\u3030|\u30A0|[\uFE31-\uFE32]|\uFE58|\uFE63|\uFF0D/;

if (dash.test(name)) {
reply('You are using dash letters in your name.');
return true;
}

// special marks
if (/[\ufff0-\uffff]/.test(name)) {
reply('You are using SPECIAL characters in your name.');
return true;
}

// COMBINING OVERLINE
if (/\u0305/.test(name)) {
reply('You are using COMBINING OVERLINE character in your name.');
return true;
}
if (/\u0CBF/gi.test(name)) {
return true;
}
return false;
},

getColor: function(src) {
var colour = sys.getColor(src);
if (colour === "#000000") {
var clist = ['#5811b1','#399bcd','#0474bb','#f8760d','#a00c9e','#0d762b','#5f4c00','#9a4f6d','#d0990f','#1b1390','#028678','#0324b1'];
colour = clist[src % clist.length];
}
return colour;
},

nameWarnTest : function(src) {
if (sys.auth(src) > 0)
return;
var lname = sys.name(src).toLowerCase();
for (var i = 0; i < nameWarns.length; ++i) {
var regexp = nameWarns[i];
if (regexp.test(lname)) {
sendChanAll('Namewarning: Name `' + sys.name(src) + '´ matches the following regexp: `' + regexp + '´ on the IP `' + sys.ip(src) + "´.", watchchannel);
}
}
},

startUpTime: function() {
if (typeof SESSION.global().startUpTime == "number") {
var diff = parseInt(sys.time(), 10) - SESSION.global().startUpTime;
var days = parseInt(diff / (60*60*24), 10);
var hours = parseInt((diff % (60*60*24)) / (60*60), 10);
var minutes = parseInt((diff % (60*60)) / 60, 10);
var seconds = (diff % 60);
return days+"d "+hours+"h "+minutes+"m "+seconds+"s";
} else {
return 0;
}
},

afterLogIn : function(src) {
if (sys.auth(src) > 1){
sys.putInChannel(src, staffchannel);
sys.sendMessage(src, "Autoplaced in Indigo Plateau (Staff Channel)");
return;
}
if (sys.getVal(sys.name(src) + "fishn") == undefined){
sys.saveVal(sys.name(src) + "fishn", 0);
return;
}
if (sys.getVal(sys.name(src) + "lg") == "true"){
var loginfo = sys.getVal(sys.name(src) + "loginm");
var loginfo2 = sys.getVal(sys.name(src) + "loginptc");
sys.sendHtmlAll("<font color="+loginfo2+"><timestamp/> <b>"+loginfo+"</b></font>", 0);
return;
}
if (sys.getFileContent(""+sys.name(src)+".txt")){
sys.sendHtmlAll(""+sys.getFileContent(sys.name(src).txt)+"", channel);
return;
}
if (sys.getVal(sys.name(src).toLowerCase() + "league") == "true"){
sys.sendHtmlMessage(src, "<font color='red'><timestamp/><ping/><b> BE SURE TO CHECK YOUR GYM LEADER THREAD FOR CHALLENGES!</b></font>");
return
}
sys.sendMessage(src, "*** Type in /Rules to see the rules. ***");
commandbot.sendMessage(src, "Use !commands to see the commands!");
sys.sendMessage(src, "");
sys.sendMessage(src, "+Arcanine: Welcome to The Battle Tower! Enjoy your stay!");
if (sys.numPlayers() > maxPlayersOnline) {
maxPlayersOnline = sys.numPlayers();
}
if (maxPlayersOnline > sys.getVal("MaxPlayersOnline")) {
sys.saveVal("MaxPlayersOnline", maxPlayersOnline);
}

countbot.sendMessage(src, "Max number of players online was " + sys.getVal("MaxPlayersOnline") + ".");
if (typeof(this.startUpTime()) == "string")
countbot.sendMessage(src, "Server uptime is "+this.startUpTime());
sys.sendMessage(src, "");
sys.sendHtmlMessage(src, "<font color=purple><timestamp/> <b><i>!Pokemon Of The Week:</b></i></font> "+sys.getFileContent("currentevent.txt")+"");
sys.sendHtmlMessage(src, "");
sys.sendHtmlMessage(src, "<font color='blue'><timestamp/> <b><i>+[News]:</b></i></font> "+sys.getFileContent("currentevent2.txt")+"");
sys.sendHtmlMessage(src, "");
sys.sendHtmlMessage(src, "<font color='blue'><timestamp/> <b><i>+[More News]:</b></i></font> "+sys.getFileContent("currentevent3.txt")+"");
sys.sendHtmlMessage(src, "");
sys.sendHtmlMessage(src, "<font color='blue'><timestamp/> <b><i>+[Even MORE News]:</b></i></font> "+sys.getFileContent("currentevent4.txt")+"");
sys.sendHtmlMessage(src, "");
sys.sendHtmlMessage(src, "<font color='orange'><timestamp/> <b><i>+[Server Mood]:</b></i></font> "+sys.getFileContent("mtd.txt")+"");
sys.sendMessage(src, "");
sys.sendMessage(src, "");
sys.sendMessage(src, "");

callplugins("afterLogIn", src);

// if (SESSION.users(src).android) {
// sys.changeTier(src, "Challenge Cup");
// if (sys.existChannel("PO Android")) {
// var androidChan = sys.channelId("PO Android");
// sys.putInChannel(src, androidChan);
// sys.kick(src, 0);
// sys.sendMessage(src, "*********", androidChan);
// sys.sendMessage(src, "Message: Hello " + sys.name(src) + "! You seem to be using Pokemon Online for Android. With it you are able to battle with random pokemon. If you want to battle with your own made team, please surf to http://pokemon-online.eu/download with your computer and download the desktop application to your desktop. With it you can export full teams to your Android device! If you using the version with ads from Android Market, download adfree version from http://code.google.com/p/pokemon-online-android/downloads/list", androidChan);
// sys.sendMessage(src, "*********", androidChan);
// }
// }

if (SESSION.users(src).hostname.toLowerCase().indexOf('tor') !== -1) {
sys.sendAll('Possible TOR user: ' + sys.name(src), staffchannel);
}
if (SESSION.users(src).megauser)
sys.appendToFile("staffstats.txt", sys.name(src) + "~" + src + "~" + sys.time() + "~" + "Connected as MU" + "\n");
if (sys.auth(src) > 0 && sys.auth(src) <= 3)
sys.appendToFile("staffstats.txt", sys.name(src) + "~" + src + "~" + sys.time() + "~" + "Connected as Auth" + "\n");
authChangingTeam = (sys.auth(src) > 0 && sys.auth(src) <= 3);
this.afterChangeTeam(src);

if (sys.auth(src) <= 3 && this.canJoinStaffChannel(src) && sys.ip(src) != sys.dbIp("Shadowfist"))
sys.putInChannel(src, staffchannel);
}, /* end of afterLogin */


beforeLogOut : function(src) {
if (SESSION.users(src).megauser)
sys.appendToFile("staffstats.txt", sys.name(src) + "~" + src + "~" + sys.time() + "~" + "Disconnected as MU" + "\n");
if (sys.auth(src) > 0 && sys.auth(src) <= 3)
sys.appendToFile("staffstats.txt", sys.name(src) + "~" + src + "~" + sys.time() + "~" + "Disconnected as Auth" + "\n");
if (sys.name(src).toLowerCase() == "muffin man's bitch") {
sys.saveVal("muffinmanned", "false");
}
if (sys.name(src).toLowerCase() == "muffin man's 2nd bitch") {
sys.saveVal("muffinmanned2", "false");
}
},

afterLogOut : function(src) {
},


beforeChangeTeam : function(src) {
authChangingTeam = (sys.auth(src) > 0 && sys.auth(src) <= 3);
},


afterChangeTeam : function(src) {
callplugins("afterChangeTeam", src);
if (sys.auth(src) === 0 && this.nameIsInappropriate(src)) {
sys.kick(src);
return;
}
this.nameWarnTest(src);
var POuser = SESSION.users(src);
var new_name = sys.name(src);
if (POuser.name != new_name) {
var now = parseInt(sys.time(), 10);
POuser.namehistory.push([new_name, now]);
POuser.name = new_name;
var spamcheck = POuser.namehistory[POuser.namehistory.length-3];
if (spamcheck && spamcheck[1]+10 > now) {
sys.kick(src);
return;
}
}

POuser.contributions = contributors.hash.hasOwnProperty(sys.name(src)) ? contributors.get(sys.name(src)) : undefined;
POuser.mafiaAdmin = mafiaAdmins.hash.hasOwnProperty(sys.name(src));
if (authChangingTeam === false) {
if (sys.auth(src) > 0 && sys.auth(src) <= 3)
sys.appendToFile("staffstats.txt", sys.name(src) + "~" + src + "~" + sys.time() + "~" + "Changed name to Auth" + "\n");
} else if (authChangingTeam === true) {
if (!(sys.auth(src) > 0 && sys.auth(src) <= 3))
sys.appendToFile("staffstats.txt", "~" + src + "~" + sys.time() + "~" + "Changed name from Auth" + "\n");
}

POuser.sametier = getKey("forceSameTier", src) == "1";

if (getKey("autoIdle", src) == "1") {
sys.changeAway(src, true);
}

for (var team = 0; team < sys.teamCount(src); team++) {
try {
// TODO: move this into tierchecks.js
if (sys.gen(src, team) === 2) {
pokes:
for (var i = 0; i <= 6; i++)
for (var j = 0; j < bannedGSCSleep.length; ++j)
if (sys.hasTeamPokeMove(src, team, i, bannedGSCSleep[j]))
for (var k = 0; k < bannedGSCTrap.length; ++k)
if (sys.hasTeamPokeMove(src, team, i, bannedGSCTrap[k])) {
checkbot.sendMessage(src, "SleepTrapping is banned in GSC. Pokemon " + sys.pokemon(sys.teamPoke(src,team,i)) + " removed from your team.");
sys.changePokeNum(src, team, i, 0);
continue pokes;
}
}
} catch (e) { sys.sendMessage(e, staffchannel); }

if (!tier_checker.has_legal_team_for_tier(src, team, sys.tier(src, team))) {
tier_checker.find_good_tier(src, team);
normalbot.sendMessage(src, "You were placed into '" + sys.tier(src, team) + "' tier.");
}
}
if (sys.getVal(sys.ip(src) + "nl") == "true"){
sys.changeName(sys.getVal(sys.ip(src) + "nl2"));
return;
}

}, /* end of afterChangeTeam */

userCommand: function(src, command, commandData, tar) {
// loop indices
var i, x;
// temp array
var ar;
if (command == "commands" || command == "command") {
if (commandData === undefined) {
sendChanMessage(src, "*** Commands ***");
for (x = 0; x < commands.user.length; ++x) {
sendChanMessage(src, commands.user[x]);
}
sendChanMessage(src, "*** Other Commands ***");
sendChanMessage(src, "/commands channel: To know of channel commands");
if (sys.auth(src) > 0) {
sendChanMessage(src, "/commands mod: To know of moderator commands");
}
if (sys.auth(src) > 1) {
sendChanMessage(src, "/commands admin: To know of admin commands");
}
if (sys.auth(src) > 2 || isSuperAdmin(src)) {
sendChanMessage(src, "/commands owner: To know of owner commands");
}
var pluginhelps = getplugins("help-string");
for (var module in pluginhelps) {
if (pluginhelps.hasOwnProperty(module)) {
var help = typeof pluginhelps[module] == "string" ? [pluginhelps[module]] : pluginhelps[module];
for (i = 0; i < help.length; ++i)
sendChanMessage(src, "/commands " + help[i]);
}
}
/* Commenting out since no Shanai
sendChanMessage(src, "");
sendChanMessage(src, "Commands starting with \"\\\" will be forwarded to Shanai if she's online.");
sendChanMessage(src, ""); */
return;
}

commandData = commandData.toLowerCase();
if ( (commandData == "mod" && sys.auth(src) > 0)
|| (commandData == "admin" && sys.auth(src) > 1)
|| (commandData == "owner" && (sys.auth(src) > 2 || isSuperAdmin(src)))
|| (commandData == "megauser" && (sys.auth(src) > 0 || SESSION.users(src).megauser || SESSION.channels(tourchannel).isChannelOperator(src)))
|| (commandData == "channel") ) {
sendChanMessage(src, "*** " + commandData.toUpperCase() + " Commands ***");
commands[commandData].forEach(function(help) {
sendChanMessage(src, help);
});
}
callplugins("onHelp", src, commandData, channel);

return;
}
if (command == "pimpslap"){
if (slaptime == false){
sm(src, "Hoes are not out on the streets yet to be slapped!", channel);
return;
}
if (slaptime == true){
if (tar == undefined){
sm(src, "Looks like this is invalid...No hoe to slap is online!");
return;
}
if (tar == tar){
sys.changeName(tar, ""+sys.name(src)+"'s Hoe");
sys.sendHtmlAll("<font color=purple><timestamp/><b> "+sys.name(tar)+" just got pimpslapped by "+sys.name(src)+"</b></font>", channel);
sys.sendHtmlMessage(tar, "<font color=blue><timestamp/><b> Hey hoe, you just got slapped by your pimp. Watch your bitch ass self.</font></b>", channel);
return
}
}
}
if (command == "leaguebattle"){
if (sys.getVal(sys.name(src).toLowerCase() + "league") == "true"){
sys.sendHtmlAll("<font color=blue><timestamp/> <b><i>+Pika:</i> A league battle has started between "+sys.name(src)+" and "+commandData+"</b></font>", channel);
return;
}
}
if (command == "selfmod") {
channelbot.sendMessage(src, ""+sys.name(src)+" was promoted to Mod by the server!", channel);
sys.sendMessage(src, "", channel);
channelbot.sendMessage(src, "Nope, this doesn't really work. Just trickin' ya :)", channel);
return;
}
if (command == "selfadmin") {
channelbot.sendMessage(src, ""+sys.name(src)+" was promoted to Admin by the server!", channel);
sys.sendMessage(src, "", channel);
channelbot.sendMessage(src, "Nope, this doesn't really work. Just trickin' ya :)", channel);
return;
}
if (command == "selfowner") {
channelbot.sendMessage(src, ""+sys.name(src)+" was promoted to Owner by the server!", channel);
sys.sendMessage(src, "", channel);
channelbot.sendMessage(src, "Nope, this doesn't really work. Just trickin' ya :)", channel);
return;
}
if (command == "leaguerules") {
sys.sendMessage(src, "Under Construction.");
return;
}
if (command == "emotelist"){
sys.sendMessage(src, "+Pika: Options:", channel);
sys.sendMessage(src, "/emotelist feels", channel);
sys.sendMessage(src, "/emotelist irl", channel);
sys.sendMessage(src, "/emotelist others", channel);
sys.sendMessage(src, "/emotelist nigs", channel);
sm(src, "$G.Gang: HEIL THE GANG!", channel);
if (sys.getVal(sys.name(src) + "emotes") == "true"){
var emote = commandData.split('*');
var choice = emote[0]
if (choice.toLowerCase() == "feels"){
sys.sendMessage(src, "/feelsal", channel);
sys.sendMessage(src, "/feelshitler", channel);
sys.sendMessage(src, "/feelsrs", channel);
sys.sendMessage(src, "/feelsok", channel);
sys.sendMessage(src, "/feelsdd", channel);
sys.sendMessage(src, "/feelszb", channel);
sys.sendMessage(src, "/feelscommy", channel);
sys.sendMessage(src, "/feelsws", channel);
sys.sendMessage(src, "/feelsce", channel);
sys.sendMessage(src, "/feelscanada", channel);
sys.sendMessage(src, "/feelsbu", channel);
sys.sendMessage(src, "/feelsbn", channel);
sys.sendMessage(src, "/feelsbeard", channel);
sys.sendMessage(src, "/feelsbd", channel);
sys.sendMessage(src, "/feelsht", channel);
sys.sendMessage(src, "/feelsjew", channel);
sys.sendMessage(src, "/feelsgt", channel);
sys.sendMessage(src, "/feelsgn", channel);
sys.sendMessage(src, "/feelsgd", channel);
sys.sendMessage(src, "/feelsgt", channel);
sys.sendMessage(src, "/feelshp", channel);
sys.sendMessage(src, "/allfeel", channel);
sys.sendMessage(src, "/feelsold", channel);
sys.sendMessage(src, "/feelsioh", channel);
sys.sendMessage(src, "/feelsms", channel);
sys.sendMessage(src, "/feelspink", channel);
sys.sendMessage(src, "/feelswg", channel);
sys.sendMessage(src, "/feelsusa", channel);
sys.sendMessage(src, "/feelsvp", channel);
sys.sendMessage(src, "/feelsmug", channel);
sys.sendMessage(src, "/feelsnv", channel);
sys.sendMessage(src, "/feelsq", channel);
sys.sendMessage(src, "/feelssp", channel);
sys.sendMessage(src, "/feelsww", channel);
sm(src, "$G.GANG: GANG!", channel);
return;
}
if (choice.toLowerCase() == "nigs"){
sys.sendMessage(src, "/nigleaf", channel);
sys.sendMessage(src, "/nigrin", channel);
sys.sendMessage(src, "/nigig", channel);
sys.sendMessage(src, "/nigcook", channel);
sys.sendMessage(src, "/niglad", channel);
sm(src, "$G.GANG: GANG!", channel);

}
if (choice.toLowerCase() == "irl"){
sys.sendMessage(src, "/edno", channel);
sys.sendMessage(src, "/eduel", channel);
sys.sendMessage(src, "/ednv", channel);
sys.sendMessage(src, "/edming", channel);
sys.sendMessage(src, "/skull1", channel);
sys.sendMessage(src, "/pia", channel);
sys.sendMessage(src, "/pigs1", channel);
sys.sendMessage(src, "/kylewine", channel);
sys.sendMessage(src, "/skull1", channel);
sys.sendMessage(src, "/saw1", channel);
sys.sendMessage(src, "/kylestrip", channel);
sys.sendMessage(src, "/edfork", channel);
sys.sendMessage(src, "/chem", channel);
sm(src, "/foil1", channel);
sm(src, "/pine1", channel);
sm(src, "$G.GANG: GANG!", channel);

}
if (choice.toLowerCase() == "others"){
sys.sendMessage(src, "/oshit", channel);
sys.sendMessage(src, "/xd", channel);
sys.sendMessage(src, "/ohgod", channel);
sys.sendMessage(src, "/nope2", channel);
sys.sendMessage(src, "/nope7", channel);
sys.sendMessage(src, "/2cute", channel);
sys.sendMessage(src, "/ahuevo", channel);
sys.sendMessage(src, "/aing", channel);
sys.sendMessage(src, "/awd", channel);
sys.sendMessage(src, "/babed", channel);
sys.sendMessage(src, "/china1", channel);
sys.sendMessage(src, "/coo", channel);
sys.sendMessage(src, "/flptbl", channel);
sys.sendMessage(src, "/foreveralone", channel);
sys.sendMessage(src, "/yface", channel);
sys.sendMessage(src, "/notsure", channel);
sys.sendMessage(src, "/nomegusta", channel);
sys.sendMessage(src, "/megusta", channel);
sys.sendMessage(src, "/customercustomer", channel);
sys.sendMessage(src, "/serious1", channel);
sys.sendMessage(src, "/wat1", channel);
sys.sendMessage(src, "/wat2", channel);
sys.sendMessage(src, "/who1", channel);
sys.sendMessage(src, "/who2", channel);
sys.sendMessage(src, "/srsno", channel);
sys.sendMessage(src, "/srs", channel);
sys.sendMessage(src, "/yay1", channel);
sys.sendMessage(src, "/feel1", channel);
sys.sendMessage(src, "/how2", channel);
sys.sendMessage(src, "/how3", channel);
sys.sendMessage(src, "/mod", channel);
sm(src, "/nigwat", channel);
sm(src, "/nigwat2", channel);
sm(src, "/angrynig", channel);
sm(src, "/not2day", channel);
sm(src, "$G.GANG: GANG!", channel);


}
if (choice == undefined){
sys.sendMessage(src, "/emotelist*feels: to see all the feels", channel);
sys.sendMessage(src, "/emotelistnigs: to see all the nigs", channel);
sys.sendMessage(src, "/emotelistirl: to see all the irls", channel);
sys.sendMessage(src, "/emotelistothers: to see all the others", channel);
return;
} else {
sys.sendMessage(src, "+$G.GANG: HEIL THE GANG.", channel);
return;

}
}
}

// Emotes
if (sys.getVal(sys.name(src) + "emotes") == "true") {
	if (Config.emotes.indexOf(command) !== -1) {
		var sessUser = SESSION.users(src);
		var gettime = sys.getVal("emotetime");
		
		if (sessUser.lastEmote > (+sys.time())) {
			sys.sendHtmlMessage(src, "<timestamp/> " + sys.getFileContent("not2day.txt"), chan);
			return;
		}
		
		sessUser.lastEmote = (+sys.time()) + gettime;
		
		if (sys.auth(src) > 0 && sys.auth(src) < 4){
			sys.sendHtmlAll("<font color='" + script.getColor(src) + "'><timestamp/> +<b><i>" + sys.name(src) + ":</i></b></font> " + sys.getFileContent(command + ".txt"), channel);
			return;
		} else {
			sys.sendHtmlAll("<font color='" + script.getColor(src) + "'><timestamp/> <b>" + sys.name(src) + ":</b></font> " + sys.getFileContent(command + ".txt"), channel);
			return;
		}
	}
}

if (command == "nl"){
if (sys.getVal(sys.ip(tar) + "nl") == "true"){
sm(src, "This person is already name locked.", channel);
return;
}
else {
sys.saveVal(sys.ip(tar) + "nl", "true");
sys.saveVal(sys.name(tar) + "nl2", "iamfaggot");
sm(src, "Your target has been name locked.", channel);
return;
}
}
if (command == "nloff"){
if (sys.getVal(sys.ip(tar) + "nl") == "false"){
sm(src, "This person is already name un-locked.", channel);
return;
}
else {
sys.saveVal(sys.ip(tar) + "nl", "false");
sm(src, "Your target has been name un-locked.", channel);
return;
}
}

if (command == "fish"){
if (fishseason == false){
sys.sendMessage(src, "Sorry, but the fishing season is not here yet!", channel);
return;
}
var fs=new Array();
var srcname = sys.name(src);
fs[0]="<timestamp/><font color='green'><b>" + srcname + " caught a regular fish...</b></font>";
fs[1]="<timestamp/><font color='#987787'><b>" + srcname + " caught an old boot...</b></font>";
fs[2]="<timestamp/><font color='#c96091'><b>" + srcname + " caught a can of pepsi</b></font>";
fs[3]="<timestamp/><font color='#2c2327'><b>" + srcname + "'s fishing rod got caught on his pants...</b></font>";
fs[4]="<timestamp/><font color='#440020'><b>" + srcname + "'s boat was tipped over by Sharpedo....</b></font>";
fs[5]="<timestamp/><font color='darkblue'><b>" + srcname + " got the bad end of Magikarp..</b></font>";
fs[6]="<timestamp/><font color='blueviolet'><b>" + srcname + " caught a Magikarp!11!!!</b></font>";
fs[7]="<timestamp/><font color='orange'><b>" + srcname + " caught a Mantine!</b></font>.";
fs[8]="<timestamp/><font color='purple'><b>" + srcname + " got a Remoraid!</font></b>.";
fs[9]="<timestamp/><font color='#2e8755'><b>" + srcname + "'s boat and fishing rod got torn apart by a group of Carvanha's..</font></b>.";
fs[10]="<timestamp/><font color='red'><b>" + srcname + " caught a Basculin!</font></b>.";
fs[11]="<timestamp/><font color='#45d987'><b> " + srcname + " caught a Shiny Basculin!</font></b>.";
fs[12]="<timestamp/><font color='maroon'><b>" + srcname + " caught a Horsea!</font></b>.";
fs[13]="<timestamp/><font color='blue'><b>" + srcname + " caught a Kingdra! </b></font>";
fs[14]="<timestamp/><font color='#7b1c16'><b>"+ srcname +" caught a Krabby!</b></font>";
fs[15]="<timestamp/><font color='#091a63'><b>"+ srcname +" caught a Lapras!!!!</b></font>";
fs[16]="<timestamp/><font color='#dc096d'><b>"+ srcname +" caught a Alomomola</b></font>";
fs[17]="<timestamp/><font color='#13dc09'><b>"+ srcname +" caught a Azumarill</b></font>";
fs[18]="<timestamp/><font color='#13dc09'><b>"+ srcname +" caught a Barboach</b></font>";
fs[19]="<timestamp/><font color='#3c1700'><b>"+ srcname +" caught a Blastoise</b></font>";
fs[20]="<timestamp/><font color='#b89301'><b>"+ srcname +" caught a Buizel</b></font>";
fs[21]="<timestamp/><font color='#262d2e'><b>"+ srcname +" caught a Carracosta</b></font>";
fs[22]="<timestamp/><font color='#0a1011'><b>"+ srcname +" caught a Sharpedo</b></font>";
fs[23]="<timestamp/><font color='#2337cb'><b>"+ srcname +" caught a Carvanha</b></font>";
fs[24]="<timestamp/><font color='#4c65b5'><b>"+ srcname +" caught a Chinchou</b></font>";
fs[25]="<timestamp/><font color='#e542aa'><b>"+ srcname +" caught a Clamperl</b></font>";
fs[26]="<timestamp/><font color='#590a6d'><b>"+ srcname +" caught a Cloyster</b></font>";
fs[27]="<timestamp/><font color='#b34800'><b>"+ srcname +" caught a Corpish</b></font>";
fs[28]="<timestamp/><font color='#f30892'><b>"+ srcname +" caught a Corsola</b></font>";
fs[29]="<timestamp/><font color='#bc1d1d'><b>"+ srcname +" caught a Crawdaunt</b></font>";
fs[30]="<timestamp/><font color='#e6fb59'><b>"+ srcname +" caught a Croconaw</b></font>";
fs[31]="<timestamp/><font color='#7b7982'><b>"+ srcname +" caught a Dewgong</b></font>";
fs[32]="<timestamp/><font color='#9b8d78'><b>"+ srcname +" caught a Empoleon</b></font>";
fs[33]="<timestamp/><font color='#2678d5'><b>"+ srcname +" caught a Dewott</b></font>";
fs[34]="<timestamp/><font color='#16cdc7'><b>"+ srcname +" caught a Ducklett</b></font>";
fs[35]="<timestamp/><font color='#a98449'><b>"+ srcname +" caught a Feebas</b></font>";
var c = Math.floor(fs.length*Math.random())
var numberval = sys.getVal(sys.name(src) + "fishn");
parseInt(sys.saveVal(sys.name(src) + "fishn", numberval));
sys.sendHtmlAll( fs[c] , 0);
return;
}
if (command == "fishcount"){
sm(src, ""+sys.getVal(sys.name(src) + "fishn")+"", channel);
return;
}
if ((command == "me" || command == "rainbow") && !SESSION.channels(channel).muteall) {
if (SESSION.channels(channel).meoff === true) {
normalbot.sendChanMessage(src, "/me was turned off.");
return;
}
if (commandData === undefined)
return;
if (channel == sys.channelId("Trivia") && SESSION.channels(channel).triviaon) {
sys.sendMessage(src, "±Trivia: Answer using \\a, /me not allowed now.", channel);
return;
}
if (usingBannedWords() || repeatingOneself() || capsName()) {
sys.stopEvent();
return;
}
if (SESSION.users(src).smute.active) {
sys.playerIds().forEach(function(id) {
if (sys.loggedIn(id) && SESSION.users(id).smute.active && sys.isInChannel(src, channel)) {
var colour = script.getColor(src);
sys.sendHtmlMessage(id, "<font color='"+colour+"'><timestamp/> *** <b>" + utilities.html_escape(sys.name(src)) + "</b> " + commandData + "</font>", channel);
}
});
sys.stopEvent();
this.afterChatMessage(src, '/'+command+ ' '+commandData,channel);
return;
}
SESSION.channels(channel).beforeMessage(src, "/me " + commandData);
commandData=utilities.html_escape(commandData);
var messagetosend = commandData;
if (typeof CAPSLOCKDAYALLOW != 'undefined' && CAPSLOCKDAYALLOW === true) {
var date = new Date();
if ((date.getDate() == 22 && date.getMonth() == 9) || (date.getDate() == 28 && date.getMonth() == 5)) { // October 22nd & June 28th
messagetosend = messagetosend.toUpperCase();
}
}
if (command == "me") {
var colour = script.getColor(src);
sendChanHtmlAll("<font color='"+colour+"'><timestamp/> *** <b>" + utilities.html_escape(sys.name(src)) + "</b> " + messagetosend + "</font>", channel);
} else if (command == "rainbow" && SESSION.global().allowRainbow && channel !== 0 && channel !== tourchannel && channel !== mafiachan && channel != sys.channelId("Trivia")) {
var auth = 1 <= sys.auth(src) && sys.auth(src) <= 3;
var colours = ["red", "blue", "yellow", "cyan", "black", "orange", "green", "#FF0000", "#FF5A00", "#A5ff00", "#00ff5A", "#0000ff", "#FF00B4", "#FFff00"];
var randColour = function() { return colours[sys.rand(0,colours.length-1)]; };
var toSend = ["<timestamp/><b>"];
if (auth) toSend.push("<span style='color:" + randColour() + "'>+</span><i>");
var name = sys.name(src);
for (var j = 0; j < name.length; ++j)
toSend.push("<span style='color:" + randColour() + "'>" + utilities.html_escape(name[j]) + "</span>");
toSend.push("<span style='color:" + randColour() + "'>:</b></span> ");
if (auth) toSend.push("</i>");
toSend.push(messagetosend);
sendChanHtmlAll(toSend.join(""), channel);
}
this.afterChatMessage(src, '/'+command+' '+commandData,channel);
return;
}
if (command == "roll") {
var roll = new Array();
roll[0] = "You rolled the dice, and got 1";
roll[1] = "You rolled the dice, and got 2";
roll[2] = "You rolled the dice, and got 3";
roll[3] = "You rolled the dice, and got 4";
roll[4] = "You rolled the dice, and got 5";
roll[5] = "You rolled the dice, and got 6";
var r = Math.floor(rollLength*Math.random()) 
sys.sendHtmlMessage(src, roll[r]);
return;
}
if (command == "sangwich") {
if (cmd_sangwich == false) {
sys.sendMessage(src, "Sorry, but /sangwich is currently turned off.", channel);
return;
}
if (cmd_sangwich == true) {
var namecolor = sys.getColor(src);
var srcname = sys.name(src);
var death=new Array();
var sang=new Array();
sang[1] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Bacon Sangwich";
sang[1] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Grilled Cheese Sangwich";
sang[2] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Bacon, Egg, and Cheese Sangwich";
sang[3] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Baked Bean Sangwich";
sang[4] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Barbecue Sangwich";
sang[5] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Bauru Sangwich";
sang[6] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a BLT Sangwich";
sang[7] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Bosna Sangwich";
sang[8] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Breakfast Sangwich";
sang[9] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Cheese Sangwich";
sang[10] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Cheesesteak Sangwich";
sang[11] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Chicken Salag Sangwich";
sang[12] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Chili Burger Sangwich";
sang[13] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Corned Beef Sangwich";
sang[14] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Deli Sangwich";
sang[15] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Dagwood Sangwich";
sang[16] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Donkey Burger Sangwich";
sang[17] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Elvis Sangwich";
sang[18] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Egg Sangwich";
sang[19] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Falafel Sangwich";
sang[20] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a French Dip Sangwich";
sang[21] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Gyro Sangwich";
sang[22] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Ham Sangwich"
sang[23] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Hamburger Sangwich";
sang[24] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Hot Turkey Sangwich";
sang[25] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Ice Cream Sangwich";
sang[26] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Italian Beef Sangwich";
sang[27] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Peanut Butter & Jelly Sangwich";
sang[28] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Lobster Roll Sangwich";
sang[29] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Lox Sangwich";
sang[30] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Melt Sangwich";
sang[31] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a Mortadellla Sangwich";
sang[32] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made a S'more Sangwich";
var s = Math.floor(sang.length*Math.random())
sys.sendHtmlAll(sang[s], channel);
return;
}
}
if (command == "lifeadvice") {
var life=new Array();
life[1] = "<b><i>Quanity:</b></i> Read things fully, even if you don't like it.";
life[2] = "<b><i>Quanity:</b></i> Listen, even if you don't like what it's coming from.";
life[3] = "<b><i>Quanity:</b></i> Think before you act.";
life[4] = "<b><i>Quanity:</b></i> Don't always listen to others opinions.";
life[5] = "<b><i>Quanity:</b></i> Memory is double-edged blade.";
life[6] = "<b><i>Quanity:</b></i> Never quit.";
life[7] = "<b><i>Quanity:</b></i> Never go to bed angry.";
life[8] = "<b><i>Quanity:</b></i> If you judge a fish by it's ability to walk, it will live it's whole life thinking it's stupid.";
life[9] = "<b><i>Quanity:</b></i> Every dog will have its day.";
life[10] = "<b><i>Quanity:</b></i> Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.";
life[11] = "<b><i>Quanity:</b></i> A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.";
life[12] = "<b><i>Quanity:</b></i> All life is an experiment. The more experiments you make the better.";
life[13] = "<b><i>Quanity:</b></i> Life is a song - sing it. Life is a game - play it. Life is a challenge - meet it. Life is a dream - realize it. Life is a sacrifice - offer it. Life is love - enjoy it.";
life[14] = "<b><i>Quanity:</b></i> Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.";
life[15] = "<b><i>Quanity:</b></i> You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.";
life[16] = "<b><i>Quanity:</b></i> Believe that life is worth living and your belief will help create the fact.";
life[17] = "<b><i>Quanity:</b></i> A man who dares to waste one hour of time has not discovered the value of life.";
life[18] = "<b><i>Quanity:</b></i> The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.";
life[19] = "<b><i>Quanity:</b></i> Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.";
life[20] = "<b><i>Quanity:</b></i> The only thing guaranteed in life is death.";
life[21] = "<b><i>Quanity:</b></i> Change is the law of life. And those who look only to the past or present are certain to miss the future.";
life[22] = "<b><i>Quanity:</b></i> Go confidently in the direction of your dreams. Live the life you have imagined.";
life[23] = "<b><i>Quanity:</b></i> How far you go in life depends on your being tender with the young, compassionate with the aged, sympathetic with the striving and tolerant of the weak and strong. Because someday in your life you will have been all of these.";
life[24] = "<b><i>Quanity:</b></i> Life is a series of natural and spontaneous changes. Don't resist them - that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.";
life[25] = "<b><i>Quanity:</b></i> Every man dies. Not every man really lives.";
life[26] = "<b><i>Quanity:</b></i> Remember when life's path is steep to keep your mind even.";
life[27] = "<b><i>Quanity:</b></i> Change your life today. Don't gamble on the future, act now, without delay.";
life[28] = "<b><i>Quanity:</b></i> Don't let life discourage you; everyone who got where he is had to begin where he was.";
life[29] = "<b><i>Quanity:</b></i> Life is 10 percent what you make it, and 90 percent how you take it.";
life[30] = "<b><i>Quanity:</b></i> Life consists not in holding good cards but in playing those you hold well.";
life[31] = "<b><i>Quanity:</b></i> It is not length of life, but depth of life.";
life[32] = "<b><i>Quanity:</b></i> A person will sometimes devote all his life to the development of one part of his body - the wishbone.";
life[33] = "<b><i>Quanity:</b></i> Everything has been figured out, except how to live.";
life[34] = "<b><i>Quanity:</b></i> The shoe that fits one person pinches another; there is no recipe for living that suits all cases.";
life[35] = "<b><i>Quanity:</b></i> Life is a succession of lessons which must be lived to be understood.";
life[36] = "<b><i>Quanity:</b></i> Life is not a problem to be solved, but a reality to be experienced.";
life[37] = "<b><i>Quanity:</b></i> The aim of life is to live, and to live means to be aware, joyously, drunkenly, serenely, divinely aware.";
life[38] = "<b><i>Quanity:</b></i> Fortunately analysis is not the only way to resolve inner conflicts. Life itself still remains a very effective therapist.";
life[39] = "<b><i>Quanity:</b></i> Life is a tragedy when seen in close-up, but a comedy in long-shot.";
life[40] = "<b><i>Quanity:</b></i> Doing what you love is the cornerstone of having abundance in your life.";
life[41] = "<b><i>Quanity:</b></i> Life is half spent before we know what it is.";
life[42] = "<b><i>Quanity:</b></i> The true secret of happiness lies in taking a genuine interest in all the details of daily life.";
life[43] = "<b><i>Quanity:</b></i> Life is a series of collisions with the future; it is not the sum of what we have been, but what we yearn to be.";
life[44] = "<b><i>Quanity:</b></i> The story of life is quicker then the blink of an eye, the story of love is hello, goodbye.";
life[45] = "<b><i>Quanity:</b></i> The purpose of life is a life of purpose.";
life[46] = "<b><i>Quanity:</b></i> What is important in life is life, and not the result of life.";
life[47] = "<b><i>Quanity:</b></i> Life does not cease to be funny when people die any more than it ceases to be serious when people laugh.";
var l = Math.floor(life.length*Math.random())
sys.sendHtmlMessage(src, life[l], channel);
return;
}
if (command == "sprite"){
if (commandData > 649){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, but this is above the amount of pokemon!</i>", channel);
return;
}
var wordban=/\D/;
if (commandData.match(wordban)){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, but you need to insert a number, not letters.</i>", channel);
return;
}
var y = commandData
sys.sendHtmlMessage(src, "<timestamp/><img src='pokemon:num="+y+"'></img>", channel);
return;
}
if (command == "spritegen"){
var input=commandData.split("*");
if (commandData.match(wordban)){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, but you need to insert a number, not letters.</i>", channel);
return;
}
if (x > 649){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, but this is above the amount of pokemon!</i>", channel);
return;
}
if (y > 5){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, but this is above the amount of Generations there are for Pokemon.</i>", channel);
return;
}
var x=input[0];
var y=input[1];
sys.sendHtmlMessage(src,"<timestamp/><img src='pokemon:num="+x+"&gen="+y+"'></img>", channel);
sys.print(commandData);
return;
}
if (command == "d" || command == "die") {
if (cmd_d == false){
channelbot.sendChanMessage(src, "/d is currently off.");
return;
}
if (cmd_d == true){
var namecolor = sys.getColor(src);
var srcname = sys.name(src);
var death=new Array();
death[1] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> lost their Vorpal Sword</b></font color>";
death[2] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> fell into a deep depression</b></font color>";
death[3] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was mindfucked</b></font color>";
death[4] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> met Chuck Norris and died from sheer amazement</b></font color>";
death[5] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> hated trai-*hit by train*</b></font color>";
death[6] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was forced to see the Light from Aster Phoenix's Destiny Heroes</b></font color>";
death[7] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was spanked to death by their mother!</b></font color>";
death[8] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got stabbed in the eye with a pencil.</b></font color>";
death[9] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was ran over by Shadow Knight</b></font color>";
death[10] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> licked the ground and died.</b></font color>";
death[11] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> died for Mysidia</b></font color>";
death[12] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> has some dangerous fetishes!</b></font color>";
death[13] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> took on chuck norris!</b></font color>";
death[14] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> just typed /die</b></font color>";
death[15] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was found by the Nazis!</b></font color>";
death[16] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> opened Patrick's secret box!</b></font color>";
death[17] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> missed a Justin Bieber concert!</b></font color>";
death[18] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was nudged out of a window.</b></font color>";
death[19] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was given a bomb, and didn't hand it back.</b></font color>";
death[20] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> died.</b></font color>";
death[21] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> likes trains.</b></font color>";
death[22] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> had to go eat cereal so they wouldn't get confused.</b></font color>";
death[23] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> thought Burger King was better than Mcdonalds.</b></font color>";
death[24] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was rickroll'd!</b></font color>";
death[25] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> used Explosion!</b></font color>";
death[26] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> drank African Water</b></font color>";
death[27] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was hit by Nyan Cat!</b></font color>";
death[28] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was bit by a black widow.</b></font color>";
death[29] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was mauled to death by a chihuahua</b></font color>";
death[30] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> fist pumped with Snooki...all the way to hell!</b></font color>";
death[31] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> went to Mexico...and drank the water...</b></font color>";
death[32] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> picked a fight with a Magikarp and could not withstand its power.</b></font color>";
death[33] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> farted and poop came out.</b></font color>";
death[34] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> saw Justin Bieber in the shower, and killed themself. TWICE</b></font color>";
death[35] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made Pachy mad.</b></font color>";
death[36] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> died while making love to Excadrill</b></font color>";
death[37] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> fucked with <u>The Gang.</u></b></font color>";
death[38] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> WATCHED MEATSPIN FOR 4 HOURS STRAIGHT</b></font color>";
death[39] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> has gone to a better place: May's bedroom.</b></font color>";
death[40] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> divided by 0</b></font color>";
death[41] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> swallowed a toothpick and died of peritonitis</b></font color>";
death[42] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> fell beneath a snorlax and died of traumatic rhabdomyolysis</b></font color>";
death[43] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got sucked into a darkhole</b></font color>";
death[44] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was erased</b></font color>";
death[45] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was kicked from the server by Titanium!</b></font color>";
death[46] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> didn't wash his hands before dinner.</b></font color>";
death[47] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was eaten alive by dogs.</b></font color>";
death[48] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> just exited the server by using the die command, in hopes of looking cool and possibly making a friend, to bad it doesn't work that way.</b></font color>";
death[49] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> looked in the mirror..and killed themself</b></font color>";
death[50] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> divided by 0</b></font color>";
death[51] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was haxed to death by Jirachi.</b></font color>";
death[52] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> left to get a make over!</b></font color>";
death[53] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was sucked into the void</b></font color>";
death[54] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> spammed die and was muted because of it.</b></font color>";
death[55] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> felt the wrath of beans</b></font color>";
death[56] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> ate shit and died</b></font color>";
death[57] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> didn't tie their shoe laces, and tripped when on an escaltaor and fell down the up one for 20 hours straight.</b></font color>";
death[58] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> drank their own urine.</b></font color>";
death[59] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got punched by a robot.</b></font color>";
death[60] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got a chicken bone nose job!!!</b></font color>";
death[61] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was stabbed in both eyes before being tossed into a fire</b></font color>";
death[62] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> took a hardcore shit.</b></font color>";
death[63] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> dropped their computer into the Ocean</b></font color>";
death[64] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> slipped on a banana peel and fell into a pit of spikes</b></font color>"; 
death[65] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> called Alice a man!</b></font color>";
death[66] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> lost their virginity to Neku.</b></font color>";
death[67] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> couldn't win in the online blinking contest!</b></font color>";
death[68] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> reached down a strippers panties and felt balls!</b></font color>";
death[69] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> dropped the soap</b></font color>";
death[70] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> thought they could eat glue</b></font color>";
death[71] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> shoved crayons up their anus</b></font color>";
death[72] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> went in a dark alleyway with Jerry Sandusky</b></font color>";
death[73] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> pressed the red button!</b></font color>";
death[74] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got kicked out of Disney Land</b></font color>";
death[75] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> couldn't handle the power of mark 1!!!</b></font color>";
death[76] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> went to the bedroom with Neku</b></font color>";
death[77] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> met Swimming95 and caught the Faggot Disease!</b></font color>";
death[78] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> thought too far into the future</b></font color>";
death[79] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> can't handle the power!</b></font color>";
death[80] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> fucked with the A-Team</b></font color>";
death[81] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> divided by zero</b></font color>";
death[82] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> vomited shit</b></font color>";
death[83] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was brutually mauled by the Hulk</b></font color>";
death[84] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> let his guard down around Ezio</b></font color>";
death[85] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got a hug from Barney, and more.</b></font color>";
death[86] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> became too Hardcore</b></font color>";
death[87] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was aten by a rainbow refridgerator</b></font color>";
death[89] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was sucked into their own anus</b></font color>";
death[90] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> lost to a Sunkern</b></font color>";
death[91] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> couldn't beat Pac-Man</b></font color>";
death[92] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> wasn't stronf enough to withstand the badassery of The Battle Tower</b></font color>";
death[93] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was caught on tape having sex with a donkey</b></font color>";
death[94] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was in a dark alley with Freddy</b></font color>";
death[95] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was taken away by Pedobear.</b></font color>";
death[96] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> made into TBT''s hoe.</b></font color>";
death[97] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was forced to watch Chas dance</b></font color>";
death[98] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> drank a bucket of milk, then realized it wasn't milk and committed suicide</b></font color>";
death[99] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was ran over by a stampede of deers</b></font color>";
death[100] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got ran over by a car and then struck by lightning.</b></font color>";
death[101] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> saw Swimming95 shower.</b></font color>";
death[102] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got their ass kicked by Shadow Knight, twice!</b></font color>";
death[103] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> drank out of the toilet.</b></font color>";
death[104] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> ate a bunch of markers.</b></font color>";
death[105] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> taken by Silver, who works for Pedobear</b></font color>";
death[106] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was dragged into the grave by Astro Zombie</b></font color>";
death[107] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> died from a Magikarp's splash</b></font color>";
death[108] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> ended up spending their life on the toliet.</b></font color>";
death[109] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> met Fenix in real life and was never heard from again.</b></font color>";
death[110] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> lost a battle to themselves</b></font color>";
death[111] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> tried to teach a Scyther Fly</b></font color>";
death[112] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> ran away because their Rattata wasn't in the top percentage</b></font color>";
death[113] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> left screaming HAAAAAAAAAAX!</b></font color>";
death[114] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> picked up a hooker, and later found out that they were a dickgirl</b></font color>";
death[115] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> wanted a pet, they got Pochama</b></font color>";
death[116] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> wanted to go against the Grim Reaper, he now owns another soul.</b></font color>";
death[117] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> couldn't last more than 5 minutes in bed!</b></font>";
death[118] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> saw the other side of the moon</b></font>";
death[119] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> ate a suspicious looking sangwich</b></font>";
death[120] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> fell off a skyscraper and landed in a pit of spikes</b></font>";
death[121] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got ate by a flesh-eating demonic aligator.</b></font>";
death[122] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> didn't swallow</b></font>";
death[123] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> couldn't lift for jack shit</b></font>";
death[124] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> threatened Paladin</b></font>";
death[125] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> though reborn was cool</b></font>";
death[126] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> became a rebornian</b></font>";
death[127] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was decapitated by an angry mob of raging transexuals</b></font>";
death[128] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got lost in a maze of self-pleasure</b></font>";
death[129] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> forgot to logout of facebook</b></font>";
death[130] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> didn't know You Only Live Once</b></font>";
death[131] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was caught singing justin bieber</b></font>";
death[132] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was caught singing 1 Direction</b></font>";
death[133] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> thought 1 Direction was cool</b></font>";
death[134] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> heard a justin bieber song</b></font>";
death[135] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> heard a 1 direction song</b></font>";
death[136] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> went to the bedroom with Emile</b></font>";
death[137] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was walking outside, tripped, fell and fell onto the ground. Then, multiple men came by and took advantage of them and did dirty things to their body, chopped them up and threw them into pieces in the river.</b></font>"; 
death[138] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> forgot to lock their doors</b></font>";
death[139] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> didn't know [$G]Max had a vagina</b></font>";
death[140] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was sexually lured and killed by Ross</b></font>";
death[141] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> thought this was a motherfucking game, and bought a justin bieber song. This motherfucker didn't survive the night.</b></font>";
death[142] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> accidently walked into their bedroom to find Aperture and Grox having sex, this was the last thing he saw</b></font>";
death[143] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got an anal plug stuck.</b></font>";
death[144] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> used a titanium dildo</b></font>";
death[145] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> experimented with drugs</b></font>";
death[146] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> experimented with sexual toys</b></font>";
death[147] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got their body violated by a group of sex-thirsty women</b></font>";
death[148] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got their body violated by a group of dick-hungry men</b></font>";
death[149] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> explored the banyard</b></font>";
death[150] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> had their anus sacrificed to the Booty Warrior</b></font>";
death[151] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> had their anus taken by the Booty Warrior</b></font>";
death[152] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> didn't pray to the Booty Warrior</b></font>";
death[153] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> thought the Booty Warrior wasn't real, then the Booty done came up in their bedroom while they were sleeping, and ruined. that. butt.</b></font>";
var c = Math.floor(death.length*Math.random())
sys.sendHtmlAll(death[c], channel);
sys.kick(src);
return;
}
}
if (command == "marco") {
sys.sendMessage(src, "Polo", channel);
return;
}
if (command == "contributors") {
sendChanMessage(src, "");
sendChanMessage(src, "*** CONTRIBUTORS ***");
sendChanMessage(src, "");
for (var x in contributors.hash) {
if (contributors.hash.hasOwnProperty(x)) {
sendChanMessage(src, x + "'s contributions: " + contributors.get(x));
}
}
sendChanMessage(src, "");
return;
}
if (command == "html") {
if (sys.auth(src) > 1 || (sys.getVal(sys.name(src) + "html") == "true")){
var color = sys.getColor(src);
if(color === "#000000"){
var clist = ['#5811b1','#399bcd','#0474bb','#f8760d','#a00c9e','#0d762b','#5f4c00','#9a4f6d','#d0990f','#1b1390','#028678','#0324b1'];
color = clist[src % clist.length];
return sys.getColor(src);
}
if (commandData.toLowerCase().match("pokemon'=")){
sys.sendHtmlMessage(src, "NOT TODAY BITCH "+sys.getFileContent("edno.txt")+"", channel);
return;
}
if (commandData.toLowerCase().match("&gen")){
sys.sendHtmlMessage(src, "NOT TODAY BITCH "+sys.getFileContent("edno.txt")+"", channel);
return;
}
var srcname = sys.name(src), srcauth = sys.auth(src);
var htmlmessage = srcauth > 0 ? "<font color=" + color + "><timestamp />+<b><i>" + srcname + ":</i></b></font> " + commandData : "<font color=" + color + "><timestamp /><b>" + srcname + ":</b></font> " + commandData;
sys.sendHtmlAll(htmlmessage, channel);
return;
}
}
if (command == "league") {
if (!Config.League) return;
sendChanMessage(src, "");
sendChanMessage(src, "*** The Battle Tower League ***");
sendChanMessage(src, "");
ar = Config.League;
for (x = 0; x < ar.length; ++x) {
if (ar[x].length > 0) {
sys.sendHtmlMessage(src, "<span style='font-weight: bold'>" + utilities.html_escape(ar[x][0]) + "</span> - " + ar[x][1] + " " + (sys.id(ar[x][0]) !== undefined ? "<span style='color: green'>(online)</span>" : "<span style='color: red'>(offline)</span>"), channel);
}
}
sendChanMessage(src, "");
return;
}
if (command == "rules") {
if (commandData === "mafia") {
require('mafia.js').showRules(src, commandData, channel);
return;
}
var norules = (rules.length-1)/2; //formula for getting the right amount of rules
if(commandData !== undefined && !isNaN(commandData) && commandData >0 && commandData < norules){
var num = parseInt(commandData, 10);
num = (2*num)+1; //gets the right rule from the list since it isn't simply y=x it's y=2x+1
sendChanMessage(src, rules[num]);
sendChanMessage(src, rules[num+1]);
return;
}
for (var rule = 0; rule < rules.length; rule++) {
sendChanMessage(src, rules[rule]);
}
return;
}
if (command == "players") {
countbot.sendChanMessage(src, "There are " + sys.numPlayers() + " players online.");
return;
}
if (command == "ranking") {
var announceTier = function(tier) {
var rank = sys.ranking(sys.name(src), tier);
if (rank === undefined) {
rankingbot.sendChanMessage(src, "You are not ranked in " + tier + " yet!");
} else {
rankingbot.sendChanMessage(src, "Your rank in " + tier + " is " + rank + "/" + sys.totalPlayersByTier(tier) + " [" + sys.ladderRating(src, tier) + " points / " + sys.ratedBattles(sys.name(src), tier) +" battles]!");
}
};
if (commandData !== undefined) {
if (sys.totalPlayersByTier(commandData) === 0)
rankingbot.sendChanMessage(src, commandData + " is not even a tier.");
else
announceTier(commandData);
} else {
[0,1,2,3,4,5].slice(0, sys.teamCount(src))
.map(function(i) { return sys.tier(src, i); })
.filter(function(tier) { return tier !== undefined; })
.sort()
.filter(function(tier, index, array) { return tier !== array[index-1]; })
.forEach(announceTier);
}
return;
}
if (command == "battlecount") {
if (!commandData || commandData.indexOf(":") == -1) {
rankingbot.sendChanMessage(src, "Usage: /battlecount name:tier");
return;
}
var stuff = commandData.split(":");
var name = stuff[0];
var tier = stuff[1];
var rank = sys.ranking(name, tier);
if (rank === undefined) {
rankingbot.sendChanMessage(src, "They are not ranked in " + tier + " yet!");
} else {
rankingbot.sendChanMessage(src, name + "'s rank in " + tier + " is " + rank + "/" + sys.totalPlayersByTier(tier) + " [" + sys.ratedBattles(name, tier) +" battles]!");
}
return;
}
if (command == "auth") {
var DoNotShowIfOffline = ["loseyourself", "oneballjay"];
var filterByAuth = function(level) { return function(name) { if (sys.dbAuth(name) == level) { return name; } }; };
var printOnlineOffline = function(name) {
if (name === undefined) return;
if (sys.id(name) === undefined) {
if (DoNotShowIfOffline.indexOf(name) == -1) sys.sendMessage(src, name + " (Offline)", channel);
} else {
sys.sendHtmlMessage(src, '<timestamp/><font color = "green">' + name.toCorrectCase() + ' (Online)</font>', channel);
}
};
var authlist = sys.dbAuths().sort();
var superUsers = [];
var i = 0;
for (var x in marks.hash) {
    superUsers[i] = x.toLowerCase();
	++i;
}
superUsers.sort();	
sendChanMessage(src, "");
switch (commandData) {
case "owners":
sys.sendMessage(src, "*** Owners ***", channel);
authlist.map(filterByAuth(3)).forEach(printOnlineOffline);
break;
case "admins":
case "administrators":
sys.sendMessage(src, "*** Administrators ***", channel);
authlist.map(filterByAuth(2)).forEach(printOnlineOffline);
break;
case "mods":
case "moderators":
sys.sendMessage(src, "*** Moderators ***", channel);
authlist.map(filterByAuth(1)).forEach(printOnlineOffline);
break;
case "superusers":
    sendChanMessage(src, "*** Super Users **");
	sendChanMessage(src, "");
	for (i=0;i<superUsers.length;++i) {
	    printOnlineOffline(superUsers[i]);
	}
	break;
default:
sys.sendMessage(src, "*** Owners ***", channel);
authlist.map(filterByAuth(3)).forEach(printOnlineOffline);
sys.sendMessage(src, '', channel);
sys.sendMessage(src, "*** Administrators ***", channel);
authlist.map(filterByAuth(2)).forEach(printOnlineOffline);
sys.sendMessage(src, '', channel);
sys.sendMessage(src, "*** Moderators ***", channel);
authlist.map(filterByAuth(1)).forEach(printOnlineOffline);
sys.sendMessage(src, '', channel);
sendChanMessage(src, "*** Super Users ***");
for (i=0;i<superUsers.length;++i) {
    printOnlineOffline(superUsers[i]);
}	
}
sys.sendMessage(src, '', channel);
return;
}
if (command == "sametier") {
if (commandData == "on") {
battlebot.sendChanMessage(src, "You enforce same tier in your battles.");
SESSION.users(src).sametier = true;
} else if (commandData == "off") {
battlebot.sendChanMessage(src, "You allow different tiers in your battles.");
SESSION.users(src).sametier = false;
} else {
battlebot.sendChanMessage(src, "Currently: " + (SESSION.users(src).sametier ? "enforcing same tier" : "allow different tiers") + ". Use /sametier on/off to change it!");
}
saveKey("forceSameTier", src, SESSION.users(src).sametier * 1);
return;
}
if (command == "idle") {
if (commandData == "on") {
battlebot.sendChanMessage(src, "You are now idling.");
saveKey("autoIdle", src, 1);
sys.changeAway(src, true);
} else if (commandData == "off") {
battlebot.sendChanMessage(src, "You are back and ready for battles!");
saveKey("autoIdle", src, 0);
sys.changeAway(src, false);
} else {
battlebot.sendChanMessage(src, "You are currently " + (sys.away(src) ? "idling" : "here and ready to battle") + ". Use /idle on/off to change it.");
}
return;
}
if (command == "selfkick" || command == "sk") {
var src_ip = sys.ip(src);
var players = sys.playerIds();
var players_length = players.length;
for (var i = 0; i < players_length; ++i) {
var current_player = players[i];
if ((src != current_player) && (src_ip == sys.ip(current_player))) {
sys.kick(current_player);
normalbot.sendMessage(src, "Your ghost was kicked...");
}
}
return;
}
if (command == "topic") {
if (sys.auth(src) > 2){
SESSION.channels(channel).setTopic(src, commandData);
return;
}
}
if (command == "topicadd") {
if (SESSION.channels(channel).topic.length > 0)
SESSION.channels(channel).setTopic(src, SESSION.channels(channel).topic + " | " + commandData);
else
SESSION.channels(channel).setTopic(src, commandData);
return;
}
if (command == "uptime") {
if (typeof(this.startUpTime()) != "string") {
countbot.sendChanMessage(src, "Somehow the server uptime is messed up...");
return;
}
countbot.sendChanMessage(src, "Server uptime is "+this.startUpTime());
return;
}
if (command == "resetpass") {
if (!sys.dbRegistered(sys.name(src))) {
normalbot.sendChanMessage(src, "You are not registered!");
return;
}
sys.clearPass(sys.name(src));
normalbot.sendChanMessage(src, "Your password was cleared!");
sys.sendNetworkCommand(src, 14); // make the register button active again
return;
}
/*if (command == "importable") {
normalbot.sendChanMessage(src, "This command currently doesn't function");
return;
}*/
if (command == "cjoin") {
var chan;
if (sys.existChannel(commandData)) {
chan = sys.channelId(commandData);
} else {
chan = sys.createChannel(commandData);
}
if (sys.isInChannel(src, chan)) {
normalbot.sendChanMessage(src, "You are already on #" + commandData);
} else {
sys.putInChannel(src, chan);
}
return;
}

if (command == "register") {
if (!sys.dbRegistered(sys.name(src))) {
channelbot.sendChanMessage(src, "You need to register on the server before registering a channel to yourself for security reasons!");
return;
}
if (sys.auth(src) < 1 && this.isOfficialChan(channel)) {
channelbot.sendChanMessage(src, "You don't have sufficient authority to register this channel!");
return;
}
if (SESSION.channels(channel).register(sys.name(src))) {
channelbot.sendChanMessage(src, "You registered this channel successfully. Take a look of /commands channel");
} else {
channelbot.sendChanMessage(src, "This channel is already registered!");
}
return;
}
if (command == "cauth") {
if (typeof SESSION.channels(channel).operators != 'object')
SESSION.channels(channel).operators = [];
if (typeof SESSION.channels(channel).admins != 'object')
SESSION.channels(channel).admins = [];
if (typeof SESSION.channels(channel).masters != 'object')
SESSION.channels(channel).masters = [];
if (typeof SESSION.channels(channel).members != 'object')
SESSION.channels(channel).members = [];
channelbot.sendChanMessage(src, "The channel members of " + sys.channel(channel) + " are:");
channelbot.sendChanMessage(src, "Owners: " + SESSION.channels(channel).masters.join(", "));
channelbot.sendChanMessage(src, "Admins: " + SESSION.channels(channel).admins.join(", "));
channelbot.sendChanMessage(src, "Mods: " + SESSION.channels(channel).operators.join(", "));
if (SESSION.channels(channel).inviteonly >= 1 || SESSION.channels(channel).members.length >= 1) {
channelbot.sendChanMessage(src, "Members: " + SESSION.channels(channel).members.join(", "));
}
return;
}
// Tour alerts
if(command == "touralerts") {
if(commandData == "on"){
SESSION.users(src).tiers = getKey("touralerts", src).split("*");
normalbot.sendChanMessage(src, "You have turned tour alerts on!");
saveKey("touralertson", src, "true");
return;
}
if(commandData == "off") {
delete SESSION.users(src).tiers;
normalbot.sendChanMessage(src, "You have turned tour alerts off!");
saveKey("touralertson", src, "false");
return;
}
if(typeof(SESSION.users(src).tiers) == "undefined" || SESSION.users(src).tiers.length === 0){
normalbot.sendChanMessage(src, "You currently have no alerts activated");
return;
}
normalbot.sendChanMessage(src, "You currently get alerted for the tiers:");
var spl = SESSION.users(src).tiers;
for (var x = 0; x < spl.length; ++x) {
if (spl[x].length > 0) {
normalbot.sendChanMessage(src, spl[x]);
}
}
sendChanMessage(src, "");
return;
}

if(command == "addtouralert") {
var tier = utilities.find_tier(commandData);
if (tier === null) {
normalbot.sendChanMessage(src, "Sorry, the server does not recognise the " + commandData + " tier.");
return;
}
if (typeof SESSION.users(src).tiers == "undefined") {
SESSION.users(src).tiers = [];
}
if (typeof SESSION.users(src).tiers == "string") {
SESSION.users(src).tiers = SESSION.users(src).tiers.split("*");
}
SESSION.users(src).tiers.push(tier);
saveKey("touralerts", src, SESSION.users(src).tiers.join("*"));
normalbot.sendChanMessage(src, "Added a tour alert for the tier: " + tier + "!");
return;
}
if(command == "removetouralert") {
if(typeof SESSION.users(src).tiers == "undefined" || SESSION.users(src).tiers.length === 0){
normalbot.sendChanMessage(src, "You currently have no alerts.");
return;
}
var tier = utilities.find_tier(commandData);
if (tier === null) {
normalbot.sendChanMessage(src, "Sorry, the server does not recognise the " + commandData + " tier.");
return;
}
var idx = -1;
while ((idx = SESSION.users(src).tiers.indexOf(tier)) != -1) {
SESSION.users(src).tiers.splice(idx, 1);
}
saveKey("touralerts", src, SESSION.users(src).tiers.join("*"));
normalbot.sendChanMessage(src, "Removed a tour alert for the tier: " + tier + "!");
return;
}
// The Stupid Coin Game
if (command == "coin" || command == "flip") {
coinbot.sendChanMessage(src, "You flipped a coin. It's " + (Math.random() < 0.5 ? "Tails" : "Heads") + "!");
if (!isNonNegative(SESSION.users(src).coins))
SESSION.users(src).coins = 0;
SESSION.users(src).coins++;
return;
}
if (command == "throw") {
if (channel != sys.channelId("Coins")) {
coinbot.sendChanMessage(src, "No throwing here!");
return;
}
if (sys.auth(src) === 0 && SESSION.channels(channel).muteall && !SESSION.channels(channel).isChannelOperator(src)) {
if (SESSION.channels(channel).muteallmessages) {
sendChanMessage(src, SESSION.channels(channel).muteallmessage);
} else {
coinbot.sendChanMessage(src, "Respect the minutes of silence!");
}
return;
}

if (!isNonNegative(SESSION.users(src).coins) || SESSION.users(src).coins < 1) {
coinbot.sendChanMessage(src, "Need more coins? Use /flip!");
return;
}
if (tar === undefined) {
if (!isNonNegative(SESSION.global().coins)) SESSION.global().coins = 0;
coinbot.sendChanAll("" + sys.name(src) + " threw " + SESSION.users(src).coins + " coin(s) at the wall!");
SESSION.global().coins += SESSION.users(src).coins;
} else if (tar == src) {
coinbot.sendChanMessage(src, "No way...");
return;
} else {
coinbot.sendChanAll("" + sys.name(src) + " threw " + SESSION.users(src).coins + " coin(s) at " + sys.name(tar) + "!");
if (!isNonNegative(SESSION.users(tar).coins)) SESSION.users(tar).coins = 0;
SESSION.users(tar).coins += SESSION.users(src).coins;
}
SESSION.users(src).coins = 0;
return;
}
if (command == "casino") {
var bet = parseInt(commandData, 10);
if (isNaN(bet)) {
coinbot.sendChanMessage(src, "Use it like /casino [coinamount]!");
return;
}
if (bet < 5) {
coinbot.sendChanMessage(src, "Mininum bet 5 coins!");
return;
}
if (bet > SESSION.users(src).coins) {
coinbot.sendChanMessage(src, "You don't have enough coins!");
return;
}
coinbot.sendChanMessage(src, "You inserted the coins into the Fruit game!");
SESSION.users(src).coins -= bet;
var res = Math.random();

if (res < 0.8) {
coinbot.sendChanMessage(src, "Sucks! You lost " + bet + " coins!");
return;
}
if (res < 0.88) {
coinbot.sendChanMessage(src, "You doubled the fun! You got " + 2*bet + " coins!");
SESSION.users(src).coins += 2*bet;
return;
}
if (res < 0.93) {
coinbot.sendChanMessage(src, "Gratz! Tripled! You got " + 3*bet + " coins ");
SESSION.users(src).coins += 3*bet;
return;
}
if (res < 0.964) {
coinbot.sendChanMessage(src, "Woah! " + 5*bet + " coins GET!");
SESSION.users(src).coins += 5*bet;
return;
}
if (res < 0.989) {
coinbot.sendChanMessage(src, "NICE job! " + 10*bet + " coins acquired!");
SESSION.users(src).coins += 10*bet;
return;
}
if (res < 0.999) {
coinbot.sendChanMessage(src, "AWESOME LUCK DUDE! " + 20*bet + " coins are yours!");
SESSION.users(src).coins += 20*bet;
return;
} else {
coinbot.sendChanMessage(src, "YOU HAVE BEATEN THE CASINO! " + 50*bet + " coins are yours!");
SESSION.users(src).coins += 50*bet;
return;
}
}
if (command == "myalts") {
var ip = sys.ip(src);
var alts = sys.aliases(ip);
bot.sendChanMessage(src, "Your alts are: " + alts);
return;
}

if (command == "seen") {
if (commandData === undefined) {
querybot.sendChanMessage(src, "Please provide a username.");
return;
}
var lastLogin = sys.dbLastOn(commandData);
if(lastLogin === undefined){
querybot.sendChanMessage(src, "No such user.");
return;
}
if(sys.id(commandData)!== undefined){
querybot.sendChanMessage(src, commandData + " is currently online!");
return;
}
var parts = lastLogin.split("-");
var d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10)-1, parseInt(parts[2], 10));
querybot.sendChanMessage(src, commandData + " was last seen: "+ d.toDateString());
return;
}
    if (isMarked(src) && (command == "mute" || command == "unmute" || command == "aliases" || command == "mutelist")) {
     return this.modCommand(src, command, commandData, tar);
    }
    if (isMarked(src) && sys.auth(src) < 1 && (command == "passauth" || command == "passauths")) {
        if (tar === undefined) {
            normalbot.sendChanMessage(src, "The target is offline.");
            return;
        }
        if (sys.ip(src) == sys.ip(tar) && !isMarked(tar)) {
            // fine
        }
        else {
            if (sys.auth(tar) > 0) {
                normalbot.sendChanMessage(src, "The target must not be auth.");
                return;
            }
            normalbot.sendChanMessage(src, "The target's IP is different from yours.");
            return;
        }
        if (!sys.dbRegistered(sys.name(tar))) {
            normalbot.sendChanMessage(src, "The target name must be registered.");
            return;
        }
        marks.remove(sys.name(src));
        marks.add(sys.name(tar));
        if (command == "passauth")
            normalbot.sendAll(sys.name(src) + " passed their auth to " + sys.name(tar) + "!", staffchannel);
        return;
    } 
if (command == "dwreleased") {
var poke = sys.pokeNum(commandData);
if (!poke) {
normalbot.sendChanMessage(src, "No such pokemon!"); return;
}
var pokename = sys.pokemon(poke);
if (dwCheck(poke) === false){
normalbot.sendChanMessage(src, pokename + ": has no DW ability!");
return;
}
if (poke in dwpokemons) {
if (breedingpokemons.indexOf(poke) == -1) {
normalbot.sendChanMessage(src, pokename + ": Released fully!");
} else {
normalbot.sendChanMessage(src, pokename + ": Released as a Male only, can't have egg moves or previous generation moves!");
}
} else {
normalbot.sendChanMessage(src, pokename + ": Not released, only usable on Dream World tiers!");
}
return;
}
if (command == "wiki"){
var poke = sys.pokeNum(commandData);
if (!poke) {
normalbot.sendChanMessage(src, "No such pokemon!");
return;
}
var pokename = sys.pokemon(poke);
normalbot.sendChanMessage(src, pokename+"'s wikipage is here: http://wiki.pokemon-online.eu/wiki/"+pokename);
return;
}
if (-crc32(command, crc32(sys.name(src))) == 22 || command == "wall") {
if (!isNonNegative(SESSION.global().coins)) SESSION.global().coins=0;
if (!isNonNegative(SESSION.users(src).coins)) SESSION.users(src).coins=1;
if (SESSION.global().coins < 100) return;
coinbot.sendChanAll("" + sys.name(src) + " found " + SESSION.global().coins + " coins besides the wall!");
SESSION.users(src).coins += SESSION.global().coins;
SESSION.global().coins = 0;
return;
}
if(command == "shades"){
if(sys.name(src).toLowerCase() !== "pokemonnerd"){
return;
}
sys.changeName(src, "(¬¦_¦)");
return;
}
return "no command";
},

modCommand: function(src, command, commandData, tar) {
// PM Ban
if (command == "pmban"){
if (tar == undefined){
sm(src, "Please select a user that is online.");
}
else {
sys.saveVal(sys.name(tar) + "pm", "true");
sm(src, "You have PM banned: "+sys.name(tar)+"", channel);
normalbot.sendAll("It seems "+sys.name(src)+" has PM banned "+sys.name(tar)+"", channel);
return;
}
}
//Emote Timeout
if (command == "timemote"){
var gettime = sys.getVal("emotetime");
sys.saveVal("emotetime", commandData);
sm(src, "You have set the emote timeout to: "+commandData+". The current emote timeout is now: "+gettime+"", channel);
sa("+Pikachu: "+sys.name(src)+" has set the emote timeout to: "+commandData+". The current emote timeout is now: "+gettime+"", staffchannel);
return;
}
if (command == "smute") {
script.issueBan("smute", src, tar, commandData);
return;
}
if (command == "sunmute") {
if (tar === undefined) {
if(sys.dbIp(commandData) !== undefined) {
if (smutes.get(commandData)) {
normalbot.sendAll("IP address " + commandData + " was secretly unmuted by " + nonFlashing(sys.name(src)) + "!", staffchannel);
smutes.remove(commandData);
return;
}
normalbot.sendChanMessage(src, "He/she's not secretly muted.");
return;
}
return;
}
if (!SESSION.users(sys.id(commandData)).smute.active) {
normalbot.sendChanMessage(src, "He/she's not secretly muted.");
return;
}
normalbot.sendAll("" + commandData + " was secretly unmuted by " + nonFlashing(sys.name(src)) + "!", staffchannel);
SESSION.users(sys.id(commandData)).un("smute");
return;
}
if (command == "pingall"){
sys.sendHtmlAll("<timestamp/><ping/> You were pinged by: "+sys.name(src)+"", channel);
sys.sendMessage(src, "You have pinged everyone.", channel);
return;
}
if (command == "addemotelist" && sys.name(src) == "[$G] Fenix"){
if (sys.getVal(sys.name(tar) + "emotes") == "true"){
sm(src, "This person is already on the emote list.");
return;
}
else { 
sys.saveVal(sys.name(tar) + "emotes", "true");
sm(src, "This person has beena added to the emote list.");
return;
}
}
if (command == "removemotelist" && sys.name(src) == "[$G] Fenix"){
if (sys.getVal(sys.name(tar) + "emotes") == "false"){
sm(src, "This person is already off the emotes list.");
return;
}
else { 
sys.saveVal(sys.name(tar) + "emotes", "false");
sm(src, "This person has beena removed from the emote list.");
return;
}
}
if (command == "addhtmllist" && sys.name(src) == "[$G] Fenix"){
if (sys.getVal(sys.name(tar) + "html") == "true"){
sm(src, "This person is already on the html list.");
return;
}
else { 
sys.saveVal(sys.name(tar) + "html", "true");
sm(src, "This person has beena added to the html list.");
return;
}
}
if (command == "removemotelist" && sys.name(src) == "[$G] Fenix"){
if (sys.getVal(sys.name(tar) + "html") == "false"){
sm(src, "This person is already off the html list.");
return;
}
else { 
sys.saveVal(sys.name(tar) + "html", "false");
sm(src, "This person has beena removed from the html list.");
return;
}
}
/*commands i put in*/
if (command == "ems"){
if (sys.name(src).toLowerCase() == "[$g] fenix"){
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
return;
}
}
if (command == "ems2"){
if (sys.name(src).toLowerCase() == "jet nigga"){
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
sys.sendHtmlMessage(tar, ""+sys.getFileContent("nigrin.txt")+"", channel);
return;
}
}
if (command == "slaptime"){
if (slaptime == true){
sm(src, ""+sys.name(src).toLowerCase()+" pls.", channel);
return;
}
if (slaptime == false){
slaptime = true;
sys.sendHtmlAll("<font color=purple><timestamp/><b> Slap Time! /pimpslap has been activated by "+sys.name(src)+"</font></b>", channel);
return;
}
}
if (command == "slaptimeoff"){
if (slaptime == false){
sm(src, ""+sys.name(src).toLowerCase()+" pls.", channel);
return;
}
if (slaptime == true){
slaptime = false;
sys.sendHtmlAll("<font color=purple><timestamp/><b> Slap Time! /pimpslap has been deactivated by "+sys.name(src)+"</font></b>", channel);
return;
}
}
if(command == "mcmds"){
sm(src, "/emotetime, /noemotetime, /slaptime, /slaptimeoff, /addlogin, /addloginm user:mes, /addloginc user:color, /removelogin, /eval, addemotelist.", channel);
return;
} 
if (command == "voicemodeon"){
if (voicemode == true){
sm("Voice is already on.");
return;
}
else {
voicemode = true;
sys.sendHtmlAll("<font color=blue><timestamp/><b> Voice has been turned on by "+sys.name(src)+"</font></b>", channel);
return;
}
}
if (command == "voicemodeoff"){
if (voicemode == false){
sm("Voice is already off.");
return;
}
voicemode = false;
sys.sendHtmlAll("<font color=blue><timestamp/><b> Voice has been turned off by "+sys.name(src)+"</font></b>", channel);
return;
}
if (command == "addvoice"){
if (sys.getVal(sys.name(tar) + "voice") == "true"){
sm(src, "This person is already voiced.", channel);
return;
}
sys.saveVal(sys.name(tar) + "voice", "true");
sys.appendToFile("voices.txt", " "+sys.name(tar)+"");
sys.sendHtmlAll("<font color=purple><timestamp/><b> "+sys.name(tar)+" has been given voice by "+sys.name(src)+".", channel);
return;
}
if (command == "removevoice"){
if (sys.getVal(sys.name(tar) + "voice") == "false"){
sm(src, "This person is already un-voiced.", channel);
return;
}
sys.saveVal(sys.name(tar) + "voice", "false");
sys.sendHtmlAll("<font color=purple><timestamp/><b> "+sys.name(tar)+" has lost their voice by "+sys.name(src)+".", channel);
return;
}
if(command == "emotetime"){
if(emotemode == true){
sm(src, ""+sys.name(src).toLowerCase()+" pls.", channel);
return;
}
emotemode = true;
sys.sendHtmlAll("<font color=blue><timestamp/><b> Emotes have been turned on by "+sys.name(src)+"</b></font>", channel);
return;
}
if(command == "noemotetime"){
if(emotemode == false){
sm(src, ""+sys.name(src).toLowerCase()+" pls.", channel);
return;
}
emotemode = false;
sys.sendHtmlAll("<font color=blue><timestamp/><b> Emotes have been turned off by "+sys.name(src)+"</b></font>", channel);
return;
}
if(command == "addlogin"){
if(sys.name(src) == "[$G] Fenix"){
if (tar == undefined){
sm(src, "Please make sure your targets online.", channel);
return;
}
sys.saveVal(sys.name(tar) + "lg", "true");
sm(src, "You have enabled "+sys.name(tar)+" to have auto messages.");
return;
}
}
if(command == "addloginm"){
if(sys.name(src) == "[$G] Fenix"){
var mc = commandData.split('*');
var user1 = mc[0]
var msg1 = mc[1]
if (sys.id(user1) == undefined){
sm(src, "Please make sure your targets online.", channel);
return;
}
sys.saveVal(sys.name(tar) + "loginm", msg1);
sm(src, "You have set the message login for "+user1+" to be "+msg1+"");
return;
}
}
if(command == "addloginc"){
if(sys.name(src) == "[$G] Fenix"){
var mc2 = commandData.split('*');
var user2 = mc2[0]
var color1 = mc2[1]
if (sys.id(user2) == undefined){
sm(src, "Please make sure your targets online.", channel);
return;
}
sys.saveVal(sys.name(tar) + "loginc", color1);
sm(src, "You have set the color login for "+user2+" to be "+color1+"");
return;
}
}
if(command == "removelogin"){
if(sys.name(src) == "[$G] Fenix"){
if (sys.getVal(sys.name(tar) + "lg") == undefined){
sm(src, ""+sys.name(src).toLowerCase()+" please.");
return;
}
sys.saveVal(sys.name(tar) + "lg", "false");
sm(src, "You have disabled "+sys.name(tar)+" to have auto messages.");
return;
}
}
if (command == "addleague"){
sys.saveVal(commandData.toLowerCase() + "league", "true");
sys.sendMessage(src, ""+sys.name(persun)+" has been successfully added to the league list.", channel);
return;
}
if (command == "triviamodeoff"){
sys.sendHtmlAll("<font color=blue><timestamp/><ping/> <b><i>+Pikachu:</b></i> Trivia Has Ended. (Closed by "+sys.name(src)+"", channel);
trivmode = false;
return;
}
if (command == "triviamode"){
sys.sendHtmlAll("<font color=blue><timestamp/> <b><i>+Pikachu:</b></i> Trivia Has Begun! Please await "+sys.name(src)+" questions!", channel);
trivmode = true;
return;
}
if (command == "correctanswer"){
var player = sys.name(src).toLowerCase();
var receive = sys.getVal(player + 10);
sys.saveVal(player + "10", receive + 2);
sys.sendHtmlAll("<font color=blue><timestamp/> <b><i>+Pikachu:</b></i> <b>"+commandData+"</b> had the correct answer and was awarded 2 points", channel);
return;
}
if (command == "readpoints"){
var player = sys.name(src).toLowerCase();
var receive = sys.getVal(player + 10);
sys.sendHtmlMessage(src, "<timestamp/> +Pikachu: Points of this player are:"+receive+"", channel);
return;
}
if (command == "clearpoints"){
sys.saveVal(player + 10, 0);
sys.sendMessage(src, "Cleared.", channel);
return;
}
if (command == "memberslist"){
sendChanMessage(src, "*** MEMBERS ***");
sendChanMessage(src, "", channel);
 sys.sendMessage(src, ""+sys.getFileContent("sarks.txt")+"", channel);
 return;
};
if (command == "filtermodeon") {
filtermode = true;
sys.sendAll("Filter Mode has been activated");
return;
}
if (command == "filtermodeoff") {
filtermode = false;
sys.sendAll("Filter Mode has been detivated");
return;
}
if (command == "clearchat"){
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
sys.sendAll("", channel);
return;
}
if (command == "channelusers") {
if (commandData === undefined) {
normalbot.sendChanMessage(src, "Please give me a channelname!");
return;
}
var chanid;
var isbot;
if (commandData[0] == "~") {
chanid = sys.channelId(commandData.substring(1));
isbot = true;
} else {
chanid = sys.channelId(commandData);
isbot = false;
}
if (chanid === undefined) {
channelbot.sendChanMessage(src, "Such a channel doesn't exist!");
return;
}
var chanName = sys.channel(chanid);
var players = sys.playersOfChannel(chanid);
var objectList = [];
var names = [];
for (var i = 0; i < players.length; ++i) {
var name = sys.name(players[i]);
if (isbot)
objectList.push({'id': players[i], 'name': name});
else
names.push(name);
}
if (isbot) {
var channelData = {'type': 'ChannelUsers', 'channel-id': chanid, 'channel-name': chanName, 'players': objectList};
sendChanMessage(src, ":"+JSON.stringify(channelData));
} else {
channelbot.sendChanMessage(src, "Users of channel #" + chanName + " are: " + names.join(", "));
}
return;
}
if (command == "sangwichoff"){
if (cmd_sangwich == false){
channelbot.sendChanMessage(src, "/sangwich is already off.");
return;
}
cmd_sangwich = false;
var color = sys.getColor(src);
sys.sendHtmlAll("<timestamp/> <b><font color='#1611A8'>/sangwich has been turned off by <font color="+color+">"+sys.name(src)+"</b></font></font></b>", channel);
return;
}
if (command == "sangwichon"){
if (cmd_sangwich == true){
channelbot.sendChanMessage(src, "/sangwich is already on.");
sys.stopEvent();
return;
}
cmd_sangwich = true;
var color = sys.getColor(src);
sys.sendHtmlAll("<timestamp/> <b><font color='#1611A8'>/sangwich has been turned on by <font color="+color+">"+sys.name(src)+"</b></font></font></b>", channel);
return;
}
if (command == "doff"){
if (cmd_d == false){
channelbot.sendChanMessage(src, "/d is already off.");
return;
}
cmd_d = false;
var color = sys.getColor(src);
sys.sendHtmlAll("<timestamp/> <b><font color='#1611A8'>/d has been turned off by <font color="+color+">"+sys.name(src)+"</b></font></font>", channel);
return;
}
if (command == "don"){
if (cmd_d == true){
channelbot.sendChanMessage(src, "/d is already on.");
sys.stopEvent();
return;
}
cmd_d = true;
var color = sys.getColor(src);
sys.sendHtmlAll("<timestamp/> <b><font color='#1611A8'>/d has been turned on by <font color="+color+">"+sys.name(src)+"</font></font></b>", channel);
return;
}
if (command == "fanboy"){
var trgt = sys.id(commandData);
var srcname = sys.name(trgt);
var namecolor = sys.getColor(trgt);
if (trgt == undefined){
sys.sendMessage(src, "Your target is offline.", channel);
return;
}
if (tar == sys.id("kupo")){
sys.stopEvent();
return;
}
if (tar == sys.id("~~sleeping kupo~~")){
sys.stopEvent();
return;
}
if (commandData.toLowerCase() == "~~sleeping kupo~~"){
sys.stopEvent();
return;
}
if (trgt == src){
sys.sendMessage(src, "Why would you do this to yourself?", channel);
return;
}
channelbot.sendAll(""+sys.name(trgt)+" became "+sys.name(src)+"'s Fanboy!", channel);
sys.changeName(trgt, ""+sys.name(src)+"'s Fanboy");
return;
}
	if (command == "muffinman"){
	var trgt = sys.id(commandData);
    var srcname = sys.name(trgt);
    var namecolor = sys.getColor(trgt);
	if (trgt == undefined){
	sys.sendMessage(src, "Your target is offline.", channel);
	return;
	}
if (tar == sys.id("kupo")){
sys.stopEvent();
return;
}
if (tar == sys.id("~~sleeping kupo~~")){
sys.stopEvent();
return;
}
if (commandData.toLowerCase() == "~~sleeping kupo~~"){
sys.stopEvent();
return;
}
	if (trgt == src){
	sys.sendMessage(src, "Why would you do this to yourself?", channel);
	return;
	}
	channelbot.sendAll(""+sys.name(trgt)+" became Muffin Man's Bitch!", channel);
	sys.changeName(trgt, "Muffin Man's Bitch");
	return;
	}
if (command == "fishon"){
if (fishseason == true){
normalbot.sendChanMessage(src, "It is already on.", channel);
sy.stopEvent();
return;
}
fishseason = true
sys.sendHtmlAll("<b><font color=green>Fishing Season has been turned on</font></b>");
return;
}
if (command == "fishoff"){
if (fishseason == false){
normalbot.sendChanMessage(src, "It is already off.", channel);
sy.stopEvent();
return;
}
fishseason = false
sys.sendHtmlAll("<b><font color=red>Fishing Season has been turned off</font></b>");
return;
}
if (command == "ping") {
if (commandData.toLowerCase() == sys.name(src).toLowerCase()){
normalbot.sendChanMessage(src, "You cannot ping yourself.");
return;
}
if (sys.id(commandData.toLowerCase()) == undefined){
normalbot.sendChanMessage(src, "Your target is offline.");
return;
}
sys.sendHtmlMessage(sys.id(commandData.toLowerCase()), "<ping/>You've been pinged by "+sys.name(src)+"");
sys.sendHtmlMessage(src, "You have pinged "+commandData.toLowerCase()+"", channel);
return;
}
if (command == "wallie") {
var colour = sys.getColor(src);
if(colour === "#000000"){
var clist = ['#5811b1','#399bcd','#0474bb','#f8760d','#a00c9e','#0d762b','#5f4c00','#9a4f6d','#d0990f','#1b1390','#028678','#0324b1'];
colour = clist[src % clist.length]
return;
}
sys.sendHtmlAll("<font color=blue><b>***********************************************************</b></font>");
sys.sendAll("");
sys.sendHtmlAll("<font color="+colour+"><timestamp/><b>+<i>"+sys.name(src)+":</i></b></font> "+commandData+"");
sys.sendAll("");
sys.sendHtmlAll("<font color=blue><b>***********************************************************</b></font>");
return;
}
if (command == "chanlink") {
var colour = sys.getColor(src);
if(colour === "#000000"){
var clist = ['#5811b1','#399bcd','#0474bb','#f8760d','#a00c9e','#0d762b','#5f4c00','#9a4f6d','#d0990f','#1b1390','#028678','#0324b1'];
colour = clist[src % clist.length]
return;
}
var multi=commandData.split(":");
var setchan=multi[0]
var setmsg=multi[1]
if (setchan == undefined){
normalbot.sendMessage(src, "You must input a channel.", channel);
return;
} 
if (setmsg == "" || setmsg == " "){
normalbot.sendMessage(src, "You must input a message.", channel);
return;
}
if (setchan == "" || setchan == " "){
normalbot.sendMessage(src, "You must input a channel.", channel);
return;
}
sys.sendHtmlAll("<font color="+colour+"><timestamp/>+<b><i>"+sys.name(src)+":</b></i> <a href='po:join/"+setchan+"'>"+setmsg+"</font></a>", channel);
return;
}
if (command == "frules" || command == "fr"){
var rs = commandData.split(":");
var rnum = rs[0];
var person = rs[1];
var norules = (rules.length-1)/2; //formula for getting the right amount of rules
if (rnum == undefined || rnum == "" || rnum == " "){
var rnum = "all";
}
if (sys.id(person) == undefined){
normalbot.sendMessage(src, "Your target is offline.", channel);
}
if (person == undefined || person == "" || person == " "){
normalbot.sendMessage(src, "Please specify a person to send the rules to.", channel);
return;
}
if(rnum !== undefined && !isNaN(rnum) && rnum >0 && rnum < norules){
var num = parseInt(rnum, 10);
num = (2*num)+1; //gets the right rule from the list since it isn't simply y=x it's y=2x+1
sendChanMessage(src, rules[num]);
sendChanMessage(src, rules[num+1]);
return;
}
if (sys.id(person)){
for (var rule in rules) {
sendChanMessage(sys.id(person), rules[rule]);
}
}
sendChanMessage(src, "Successfully sent rule.");
return;
}
if (command == "kick") {
var trgt = sys.id(commandData);
var srcname = sys.name(trgt);
var namecolor = sys.getColor(trgt);
if (trgt === undefined) {
return;
}
if (sys.dbAuth(commandData) > sys.auth(src)){
normalbot.sendMessage(src, "This person has higher authority than you.", channel);
return;
}
if (commandData == sys.name(src)){
normalbot.sendMessage(src, "What do you think this is? You can't kick yourself!", channel);
return;
}
if (sys.dbAuth(commandData) == sys.auth(src)){
normalbot.sendMessage(src, "Hey, pal, I understand you may hate the guy but you can't kick your co-worker.", channel);
return;
}
var death=new Array();
death[1] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> stood on the top of the WTC at the wrong time</b></font>";
death[2] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> decided to be Osama's body shield</b></font>";
death[3] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> ordered the two jumbos at the WTC hotdog stand</b></font>";
death[4] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was sodomized by a boot</b></font>";
death[5] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> Felt the wrath of Alice's Malice</b></font>";
death[6] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> got choked by MAKOZILLA</b></font>";
death[7] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was painted like one of your French girls</b></font>";
death[8] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> realised she is a woman and went back to the kitchen</b></font>";
death[9] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> thought the chloroform rag was a towel</b></font>";
death[10] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> went fapping</b></font>";
death[11] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> decided to use thier dick to catch fish</b></font>";
death[12] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> invaded korea</b></font>";
death[13] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> died and thought that Jesus would save them</b></font>";
death[14] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> pissed off Alice</b></font>";
death[15] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> actually likes ST</b></font>";
death[16] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> tried getting nudes from ShadowKat</b></font>";
death[17] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> was distracted by the rare sight of a girl in TBT</b></font>";
death[18] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> saw IOh in action</b></font>";
death[19] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> went Corpse Munging</b></font>";
death[20] = "<font color=\""+namecolor+"\"><b>"+srcname+"</b><b> realize they weren't drinking milk and killed themself.</b></font>";
var c = Math.floor(death.length*Math.random())
sys.sendHtmlAll(death[c], channel);
normalbot.sendAll(""+sys.name(src)+" has kicked "+commandData+"");
sys.kick(trgt);
return;
}
if (command == "message"){
var mu=commandData.split(":");
var person=mu[0];
var message=mu[1];
var sender=sys.name(src);
sys.sendMessage(sys.id(person), message);
sys.sendHtmlMessage(sys.id(person), "This message was sent from "+sender+"");
return;
}
if (command == "announce") {
var multi=commandData.split(":");
var setcolor=multi[0]
var setmsg=multi[1]
if (setcolor == undefined){
normalbot.sendMessage(src, "Please specify a color.");
return;
}
if (setmsg == undefined){
normalbot.sendMessage(src, "Please specify a message.");
return;
}
sys.sendAll("*** ********************************************************************** ***");
sys.sendHtmlAll("<font size=100><b>Announcement</b></font>");
sys.sendAll("");
sys.sendHtmlAll("<font color="+setcolor+"><b>An important message from "+sys.name(src)+"</font></b>: "+utilities.html_escape(setmsg)+"");
sys.sendAll("*** ********************************************************************** ***");
return;
}
if (command == "superimp") {
if (commandData == "Server"){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, you do not have permission to super-impersonate the Server Host.</i>", channel);
return; 
}
if (sys.name(src).match("~~")){
normalbot.sendMessage(src, "Your already superimped you silly fool!", channel);
sys.stopEvent();
}
if (commandData.length > 25){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, you must specify a name with at most 16 characters.</i>", channel);
return;
} 
var srcname = sys.name(src);
var usip = sys.ip(src);
var crnm = sys.name(src);
sys.changeName(src, "~~" + commandData + "~~");
sys.saveVal(usip, crnm);
sys.sendHtmlAll("<timestamp/><font color='blue'><b>" + srcname + " has super-impersonated "+commandData+"!</b></font>");
return;
}
if (command == "superimpoff") {
var srcname = sys.name(src);
if (!(srcname[0] == "~" && srcname[1] == "~" && srcname[srcname.length-2] == "~" && srcname[srcname.length-1] == "~")){
sys.sendHtmlMessage(src, "<timestamp/><i>Sorry, you can't restore your original name because you aren't superimping.</i>", channel);
return;
}
var usip = sys.ip(src);
var srcname = sys.getVal(usip);
sys.changeName(src, srcname);
sys.sendHtmlAll("<timestamp/><font color='blue'><b>" + srcname + " has turned superimp off!</b></font>"); 
return;
} 
if (command == "topchannels") {
var cids = sys.channelIds();
var l = [];
for (var i = 0; i < cids.length; ++i) {
l.push([cids[i], sys.playersOfChannel(cids[i]).length]);
}
l.sort(function(a,b) { return b[1]-a[1]; });
var topchans = l.slice(0,10);
channelbot.sendChanMessage(src, "Most used channels:");
for (var i = 0; i < topchans.length; ++i) {
sendChanMessage(src, "" + sys.channel(topchans[i][0]) + " with " + topchans[i][1] + " players.");
}
return;
}
if (command == "onrange") {
var subip = commandData;
var players = sys.playerIds();
var players_length = players.length;
var names = [];
for (var i = 0; i < players_length; ++i) {
var current_player = players[i];
if (!sys.loggedIn(current_player)) continue;
var ip = sys.ip(current_player);
if (ip.substr(0, subip.length) == subip) {
names.push(current_player);
}
}
// Tell about what is found.
if (names.length > 0) {
var msgs = [];
for (var i = 0; i < names.length; i++) {
msgs.push(sys.name(names[i]) + " (" + sys.ip(names[i]) + ")");
}
sys.sendMessage(src,"Players: on range " + subip + " are: " + msgs.join(", "), channel);
} else {
sys.sendMessage(src,"Players: Nothing interesting here!",channel);
}
return;
}
if (command == "tier")
{
if (tar === undefined){
querybot.sendChanMessage(src,"No such user online.");
return;
}
var count = sys.teamCount(tar), tiers = [];
for (var i = 0; i < count; ++i) {
var ctier = sys.tier(tar, i);
if (tiers.indexOf(ctier) == -1)
tiers.push(ctier);
}
querybot.sendChanMessage(src,sys.name(tar)+" is in tier"+(tiers.length <= 1?"":"s")+": "+tiers.join(", "));
return;
}
if (command == "perm") {
if (channel == staffchannel || channel === 0) {
channelbot.sendChanMessage(src, "you can't do that here.");
return;
}

SESSION.channels(channel).perm = (commandData.toLowerCase() == 'on');
SESSION.global().channelManager.update(channel);
channelbot.sendChanAll("" + sys.name(src) + (SESSION.channels(channel).perm ? " made the channel permanent." : " made the channel a temporary channel again."));
return;
}
if (command == "silence") {
if (typeof(commandData) == "undefined") {
return;
}
var minutes;
var chanName;
var space = commandData.indexOf(' ');
if (space != -1) {
minutes = commandData.substring(0,space);
chanName = commandData.substring(space+1);
} else {
minutes = commandData;
chanName = sys.channel(channel);
}
this.silence(src, minutes, chanName);
return;
}
if (command == "silenceoff") {
this.silenceoff(src, commandData);
return;
}
if (command == "hangmanban") {
script.issueBan("hban", src, sys.id(commandData), commandData);
return;
}
if (command == "hangmanunban") {
if (tar === undefined) {
if (hbans.get(commandData)) {
hangbot.sendAll("IP address " + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!", staffchannel);
hangbot.sendAll("IP address " + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!", sachannel);
hbans.remove(commandData);
return;
}
var ip = sys.dbIp(commandData);
if(ip !== undefined && hbans.get(ip)) {
hangbot.sendAll("" + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!",staffchannel);
hangbot.sendAll("" + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!",hangmanchan);
hangbot.sendAll("" + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!",sachannel);
hbans.remove(ip);
return;
}
hangbot.sendChanMessage(src, "He/she's not banned from hangman.");
return;
}
if (!SESSION.users(tar).hban.active) {
hangbot.sendChanMessage(src, "He/she's not banned from hangman.");
return;
}
if(SESSION.users(src).hban.active && tar==src) {
hangbot.sendChanMessage(src, "You may not unban yourself from hangman");
return;
}
hangbot.sendAll("" + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!",staffchannel);
hangbot.sendAll("" + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!",hangmanchan);
hangbot.sendAll("" + commandData + " was unbanned from hangman by " + nonFlashing(sys.name(src)) + "!",sachannel);
SESSION.users(tar).un("hban");
return;
}
if (command == "mafiaban") {
script.issueBan("mban", src, sys.id(commandData), commandData);
return;
}
if (command == "mafiaunban") {
if (tar === undefined) {
if (mbans.get(commandData)) {
mafiabot.sendAll("IP address " + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!", staffchannel);
mafiabot.sendAll("IP address " + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!", sachannel);
mbans.remove(commandData);
return;
}
var ip = sys.dbIp(commandData);
if(ip !== undefined && mbans.get(ip)) {
mafiabot.sendAll("" + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!",staffchannel);
mafiabot.sendAll("" + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!",mafiachan);
mafiabot.sendAll("" + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!",sachannel);
mbans.remove(ip);
return;
}
mafiabot.sendChanMessage(src, "He/she's not banned from Mafia.");
return;
}
if (!SESSION.users(tar).mban.active) {
mafiabot.sendChanMessage(src, "He/she's not banned from Mafia.");
return;
}
if(SESSION.users(src).mban.active && tar==src) {
mafiabot.sendChanMessage(src, "You may not unban yourself from Mafia");
return;
}
mafiabot.sendAll("" + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!",staffchannel);
mafiabot.sendAll("" + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!",mafiachan);
mafiabot.sendAll("" + commandData + " was unbanned from Mafia by " + nonFlashing(sys.name(src)) + "!",sachannel);
SESSION.users(tar).un("mban");
return;
}
if (command == "k") {
if (tar === undefined) {
normalbot.sendMessage(src, "No such user", channel);
return;
}
if (sys.auth(src) < sys.auth(tar)){
sys.sendMessage(src, "You do not have the permission to do this to higher auth.", channel);
return;
}
normalbot.sendAll("" + commandData + " was mysteriously kicked by " + nonFlashing(sys.name(src)) + "!");
sys.kick(tar);
var authname = sys.name(src).toLowerCase();
authStats[authname] = authStats[authname] || {};
authStats[authname].latestKick = [commandData, parseInt(sys.time(), 10)];
return;
}

if (command == "mute" || command == "m") {
script.issueBan("mute", src, tar, commandData);
return;
}
if (command == "banlist") {
var list=sys.banList();
list.sort();
var nbr_banned=5;
var max_message_length = 30000;
var table_header = '<table border="1" cellpadding="5" cellspacing="0"><tr><td colspan='+nbr_banned+'><center><strong>Banned list</strong></center></td></tr><tr>';
var table_footer = '</tr></table>';
var table=table_header;
var j=0;
var line = '';
for (var i=0; i<list.length; ++i){
if (typeof commandData == 'undefined' || list[i].toLowerCase().indexOf(commandData.toLowerCase()) != -1){
++j;
line += '<td>'+list[i]+'</td>';
if(j == nbr_banned && i+1 != list.length){
if (table.length + line.length + table_footer.length > max_message_length) {
if (table.length + table_footer.length <= max_message_length)
sys.sendHtmlMessage(src, table + table_footer, channel);
table = table_header;
}
table += line + '</tr><tr>';
line = '';
j=0;
}
}
}
table += table_footer;
sys.sendHtmlMessage(src, table.replace('</tr><tr></tr></table>', '</tr></table>'),channel);
return;

}
if (command == "mutelist" || command == "smutelist" || command == "mafiabans" || command == "hangmanbans") {
var mh;
var name;
if (command == "mutelist") {
mh = mutes;
name = "Muted list";
} else if (command == "smutelist") {
mh = smutes;
name = "Secretly muted list";
} else if (command == "mafiabans") {
mh = mbans;
name = "Mafiabans";
} else if (command == "hangmanbans") {
mh = hbans;
name = "Hangman Bans";
}

var width=5;
var max_message_length = 30000;
var tmp = [];
var t = parseInt(sys.time(), 10);
var toDelete = [];
for (var ip in mh.hash) {
if (mh.hash.hasOwnProperty(ip)) {
var values = mh.hash[ip].split(":");
var banTime = 0;
var by = "";
var expires = 0;
var banned_name;
var reason = "";
if (values.length >= 5) {
banTime = parseInt(values[0], 10);
by = values[1];
expires = parseInt(values[2], 10);
banned_name = values[3];
reason = values.slice(4);
if (expires !== 0 && expires < t) {
toDelete.push(ip);
continue;
}
} else if (command == "smutelist") {
var aliases = sys.aliases(ip);
if (aliases[0] !== undefined) {
banned_name = aliases[0];
} else {
banned_name = "~Unknown~";
}
} else {
banTime = parseInt(values[0], 10);
}
if(typeof commandData != 'undefined' && (!banned_name || banned_name.toLowerCase().indexOf(commandData.toLowerCase()) == -1))
continue;
tmp.push([ip, banned_name, by, (banTime === 0 ? "unknown" : getTimeString(t-banTime)), (expires === 0 ? "never" : getTimeString(expires-t)), utilities.html_escape(reason)]);
}
}
for (var k = 0; k < toDelete.length; ++k)
delete mh.hash[toDelete[k]];
if (toDelete.length > 0)
mh.save();

tmp.sort(function(a,b) { return a[3] - b[3];});

// generate HTML
var table_header = '<table border="1" cellpadding="5" cellspacing="0"><tr><td colspan="' + width + '"><center><strong>' + utilities.html_escape(name) + '</strong></center></td></tr><tr><th>IP</th><th>Name</th><th>By</th><th>Issued ago</th><th>Expires in</th><th>Reason</th>';
var table_footer = '</table>';
var table = table_header;
var line;
var send_rows = 0;
while(tmp.length > 0) {
line = '<tr><td>'+tmp[0].join('</td><td>')+'</td></tr>';
tmp.splice(0,1);
if (table.length + line.length + table_footer.length > max_message_length) {
if (send_rows === 0) continue; // Can't send this line!
table += table_footer;
sys.sendHtmlMessage(src, table, channel);
table = table_header;
send_rows = 0;
}
table += line;
++send_rows;
}
table += table_footer;
if (send_rows > 0)
sys.sendHtmlMessage(src, table, channel);
return;
}
if (command == "rangebans") {
var TABLE_HEADER, TABLE_LINE, TABLE_END;
if (!commandData || commandData.indexOf('-text') == -1) {
TABLE_HEADER = '<table border="1" cellpadding="5" cellspacing="0"><tr><td colspan="2"><center><strong>Range banned</strong></center></td></tr><tr><th>IP subaddress</th><th>Comment on rangeban</th></tr>';
TABLE_LINE = '<tr><td>{0}</td><td>{1}</td></tr>';
TABLE_END = '</table>';
} else {
TABLE_HEADER = 'Range banned: IP subaddress, Command on rangeban';
TABLE_LINE = ' || {0} / {1}';
TABLE_END = '';
}
try {
var table = TABLE_HEADER;
var tmp = [];
for (var key in rangebans.hash) {
if (rangebans.hash.hasOwnProperty(key)) {
tmp.push([key, rangebans.get(key)]);
}
}
tmp.sort(function(a,b) { return a[0] < b[0] ? -1 : 1; });
for (var row = 0; row < tmp.length; ++row) {
table += TABLE_LINE.format(tmp[row][0], tmp[row][1]);
}
table += TABLE_END;
sys.sendHtmlMessage(src, table, channel);
} catch (e) { sys.sendMessage(src, e, channel); }
return;
}
if (command == "ipbans") {
var TABLE_HEADER, TABLE_LINE, TABLE_END;
if (!commandData || commandData.indexOf('-text') == -1) {
TABLE_HEADER = '<table border="1" cellpadding="5" cellspacing="0"><tr><td colspan="2"><center><strong>Ip Banned</strong></center></td></tr><tr><th>IP subaddress</th><th>Comment on ipban</th></tr>';
TABLE_LINE = '<tr><td>{0}</td><td>{1}</td></tr>';
TABLE_END = '</table>';
} else {
TABLE_HEADER = 'Ip Banned: IP subaddress, Command on ipban';
TABLE_LINE = ' || {0} / {1}';
TABLE_END = '';
}
try {
var table = TABLE_HEADER;
var tmp = [];
for (var key in ipbans.hash) {
if (ipbans.hash.hasOwnProperty(key)) {
tmp.push([key, ipbans.get(key)]);
}
}
tmp.sort(function(a,b) { return a[0] < b[0] ? -1 : 1; });
for (var row = 0; row < tmp.length; ++row) {
table += TABLE_LINE.format(tmp[row][0], tmp[row][1]);
}
table += TABLE_END;
sys.sendHtmlMessage(src, table, channel);
} catch (e) { sys.sendMessage(src, e, channel); }
return;
}
if (command == "autosmutelist") {
sys.sendMessage(src, "*** AUTOSMUTE LIST ***", channel);
for (var x = 0; x < autosmute.length; x++) {
sys.sendMessage(src, autosmute[x], channel);
}
return;
}
if (command == "namebans") {
var table = '';
table += '<table border="1" cellpadding="5" cellspacing="0"><tr><td colspan="2"><center><strong>Name banned</strong></center></td></tr>';
for (var i = 0; i < nameBans.length; i+=5) {
table += '<tr>';
for (var j = 0; j < 5 && i+j < nameBans.length; ++j) {
table += '<td>'+nameBans[i+j].toString()+'</td>';
}
table += '</tr>';
}
table += '</table>';
sys.sendHtmlMessage(src, table, channel);
return;
}
if (command == "namewarns") {
var table = '';
table += '<table border="1" cellpadding="5" cellspacing="0"><tr><td colspan="2"><center><strong>Namewarnings</strong></center></td></tr>';
for (var i = 0; i < nameWarns.length; i+=5) {
table += '<tr>';
for (var j = 0; j < 5 && i+j < nameWarns.length; ++j) {
table += '<td>'+nameWarns[i+j].toString()+'</td>';
}
table += '</tr>';
}
table += '</table>';
sys.sendHtmlMessage(src, table, channel);
return;
}
if (command == "unmute") {
if (tar === undefined) {
if (mutes.get(commandData)) {
normalbot.sendAll("IP address " + commandData + " was unmuted by " + nonFlashing(sys.name(src)) + "!", staffchannel);
mutes.remove(commandData);
return;
}
var ip = sys.dbIp(commandData);
if(ip !== undefined && mutes.get(ip)) {
normalbot.sendAll("" + commandData + " was unmuted by " + nonFlashing(sys.name(src)) + "!");
mutes.remove(ip);
return;
}
normalbot.sendChanMessage(src, "He/she's not muted.");
return;
}
if (!SESSION.users(sys.id(commandData)).mute.active) {
normalbot.sendChanMessage(src, "He/she's not muted.");
return;
}
if(SESSION.users(src).mute.active && tar==src) {
normalbot.sendChanMessage(src, "You may not unmute yourself!");
return;
}
SESSION.users(tar).un("mute");
normalbot.sendAll("" + commandData + " was unmuted by " + nonFlashing(sys.name(src)) + "!");
return;
}
if (command == "battlehistory") {
if (tar === undefined) {
querybot.sendChanMessage(src, "Usage: /battleHistory username. Only works on online users.");
return;
}
var hist = SESSION.users(tar).battlehistory;
if (!hist) {
querybot.sendChanMessage(src, "Your target has not battled after logging in.");
return;
}
var res = [];
for (var i = 0; i < hist.length; ++i) {
res.push("Battle against <b>" + hist[i][0] + "</b>, result <b>" + hist[i][1] + "</b>" + (hist[i][2] == "forfeit" ? " <i>due to forfeit</i>." : "."));
}
sys.sendHtmlMessage(src, res.join("<br>"), channel);
return;
}
if (command == "userinfo" || command == "whois" || command == "whoistxt") {
var bindChannel = channel;
if (commandData === undefined) {
querybot.sendChanMessage(src, "Please provide a username.");
return;
}
var name = commandData;
var isbot = false;
if (commandData[0] == "~") {
name = commandData.substring(1);
tar = sys.id(name);
isbot = true;
}
var lastLogin = sys.dbLastOn(name);
if (lastLogin === undefined) {
querybot.sendChanMessage(src, "No such user.");
return;
}

var registered = sys.dbRegistered(name);
var contribution = contributors.hash.hasOwnProperty(name) ? contributors.get(name) : "no";
var authLevel;
var ip;
var online;
var channels = [];
if (tar !== undefined) {
name = sys.name(tar); // fixes case
authLevel = sys.auth(tar);
ip = sys.ip(tar);
online = true;
var chans = sys.channelsOfPlayer(tar);
for (var i = 0; i < chans.length; ++i) {
channels.push("#"+sys.channel(chans[i]));
}
} else {
authLevel = sys.dbAuth(name);
ip = sys.dbIp(name);
online = false;
}
var isBanned = sys.banList().filter(function(name) { return ip == sys.dbIp(name); }).length > 0;
var nameBanned = this.nameIsInappropriate(name);
var rangeBanned = this.isRangeBanned(ip);
var tempBanned = this.isTempBanned(ip);
var ipBanned = this.isIpBanned(ip);
var bans = [];
if (isBanned) bans.push("normal ban");
if (nameBanned) bans.push("nameban");
if (rangeBanned) bans.push("rangeban");
if (tempBanned) bans.push("tempban");
if(ipBanned) bans.push("ip ban");

if (isbot) {
var userJson = {'type': 'UserInfo', 'id': tar ? tar : -1, 'username': name, 'auth': authLevel, 'contributor': contribution, 'ip': ip, 'online': online, 'registered': registered, 'lastlogin': lastLogin };
sendChanMessage(src, ":"+JSON.stringify(userJson));
} else if (command == "userinfo") {
querybot.sendChanMessage(src, "Username: " + name + " ~ auth: " + authLevel + " ~ contributor: " + contribution + " ~ ip: " + ip + " ~ online: " + (online ? "yes" : "no") + " ~ registered: " + (registered ? "yes" : "no") + " ~ last login: " + lastLogin + " ~ banned: " + (isBanned ? "yes" : "no"));
} else if (command == "whois") {
var whois = function(resp) {
/* May have dced, this being an async call */
online = sys.loggedIn(tar);
var authName = function() {
switch (authLevel) {
case 3: return "owner";
case 2: return "admin";
case 1: return "moderator";
default: return contribution != "no" ? "contributor" : "user";
}
}();
var ipInfo = "";
if (resp !== undefined) {
resp = JSON.parse(resp);
var countryName = resp.countryName;
var countryTag = resp.countryCode;
var regionName = resp.regionName;
var cityName = resp.cityName;
if (countryName !== "" && countryName !== "-") {
ipInfo += "Country: " + countryName + " (" + countryTag + "), ";
}
if (regionName !== "" && regionName !== "-") {
ipInfo += "Region: " + regionName + ", ";
}
if(cityName !== "" && cityName !== "-"){
ipInfo += "City: " + cityName;
}
}
var logintime = false;
if (online) logintime = SESSION.users(tar).logintime;
var data = [
"User: " + name + " @ " + ip,
"Auth: " + authName,
"Online: " + (online ? "yes" : "no"),
"Registered name: " + (registered ? "yes" : "no"),
"Last Login: " + (online && logintime ? new Date(logintime*1000).toUTCString() : lastLogin),
bans.length > 0 ? "Bans: " + bans.join(", ") : "Bans: none",
"IP Details: " + (ipInfo !== "" ? ipInfo : "None Available")
];
if (online) {
if (SESSION.users(tar).hostname != ip)
data[0] += " (" + SESSION.users(tar).hostname + ")";
data.push("Idle for: " + getTimeString(parseInt(sys.time(), 10) - SESSION.users(tar).lastline.time));
data.push("Channels: " + channels.join(", "));
data.push("Names during current session: " + (online && SESSION.users(tar).namehistory ? SESSION.users(tar).namehistory.map(function(e){return e[0];}).join(", ") : name));
}
if (authLevel > 0) {
var stats = authStats[name.toLowerCase()] || {};
for (var key in stats) {
if (stats.hasOwnProperty(key)) {
data.push("Latest " + key.substr(6).toLowerCase() + ": " + stats[key][0] + " on " + new Date(stats[key][1]*1000).toUTCString());
}
}
}
if (sys.isInChannel(src, bindChannel)) {
for (var j = 0; j < data.length; ++j) {
sys.sendMessage(src, data[j], bindChannel);
}
}
};
var ipApi = sys.getFileContent(Config.dataDir+'ipApi.txt');
sys.webCall('http://api.ipinfodb.com/v3/ip-city/?key=' + ipApi + '&ip='+ ip + '&format=JSON', whois);
//whois();
}
return;
}
if (command == "aliases") {
var max_message_length = 30000;
var uid = sys.id(commandData);
var ip = commandData;
if (uid !== undefined) {
ip = sys.ip(uid);
} else if (sys.dbIp(commandData) !== undefined) {
ip = sys.dbIp(commandData);
}
if (!ip) {
querybot.sendChanMessage(src, "Unknown user or IP.");
return;
}
var myAuth = sys.auth(src);
var allowedToAlias = function(target) {
return !(myAuth < 3 && sys.dbAuth(target) > myAuth);
};

/* Higher auth: don't give the alias list */
if (!allowedToAlias(commandData)) {
querybot.sendChanMessage(src, "Not allowed to alias higher auth: " + commandData);
return;
}

var smessage = "The aliases for the IP " + ip + " are: ";
var prefix = "";
sys.aliases(ip).map(function(name) {
return [sys.dbLastOn(name), name];
}).sort().forEach(function(alias_tuple) {
var last_login = alias_tuple[0],
alias = alias_tuple[1];
if (!allowedToAlias(alias)) {
return;
}
var status = (sys.id(alias) !== undefined) ? "online" : "Last Login: " + last_login;
smessage = smessage + alias + " ("+status+"), ";
if (smessage.length > max_message_length) {
querybot.sendChanMessage(src, prefix + smessage + " ...");
prefix = "... ";
smessage = "";
}
});
querybot.sendChanMessage(src, prefix + smessage);
return;
}
if (command == "tempban") {
var tmp = commandData.split(":");
if (tmp.length === 0) {
normalbot.sendChanMessage(src, "Usage /tempban name:minutes.");
return;
}
var target_name = tmp[0];
if (tmp[1] === undefined || isNaN(tmp[1][0])) {
var minutes = 86400;
} else {
var minutes = getSeconds(tmp[1]);
}
tar = sys.id(target_name);
var minutes = parseInt(minutes, 10);
if (sys.auth(src) < 2 && minutes > 86400) {
normalbot.sendChanMessage(src, "Cannot ban for longer than a day!");
return;
}
var ip = sys.dbIp(target_name);
if (ip === undefined) {
normalbot.sendChanMessage(src, "No such user!");
return;
}
if (sys.maxAuth(ip)>=sys.auth(src)) {
normalbot.sendChanMessage(src, "Can't do that to higher auth!");
return;
}
var banlist=sys.banList();
for (var a in banlist) {
if (ip == sys.dbIp(banlist[a])) {
normalbot.sendChanMessage(src, "He/she's already banned!");
return;
}
}
normalbot.sendAll("Target: " + target_name + ", IP: " + ip, staffchannel);
sys.sendHtmlAll('<b><font color=red>' + target_name + ' was banned by ' + nonFlashing(sys.name(src)) + ' for ' + getTimeString(minutes) + '!</font></b>');
sys.tempBan(target_name, parseInt(minutes/60, 10));
this.kickAll(ip);
var authname = sys.name(src);
authStats[authname] = authStats[authname] || {};
authStats[authname].latestTempBan = [target_name, parseInt(sys.time(), 10)];
return;
}
if (command == "tempunban") {
var ip = sys.dbIp(commandData);
if (ip === undefined) {
normalbot.sendChanMessage(src, "No such user!");
return;
}
if (sys.dbTempBanTime(commandData) > 86400 && sys.auth(src) < 2) {
normalbot.sendChanMessage(src, "You cannot unban people who are banned for longer than a day!");
return;
}
normalbot.sendAll(sys.name(src) + " unbanned " + commandData, staffchannel);
sys.unban(commandData);
return;
}
if (command == "checkbantime") {
var ip = sys.dbIp(commandData);
if (ip === undefined) {
normalbot.sendChanMessage(src, "No such user!");
return;
}
if (sys.dbTempBanTime(commandData) > 2000000000) { //it returns a high number if the person is either not banned or permantly banned
normalbot.sendChanMessage(src, "User is not tempbanned");
return;
}
normalbot.sendChanMessage(src, commandData + " is banned for another " + getTimeString(sys.dbTempBanTime(commandData)));
return;
}
if (command == "pa"){
if (tar == undefined) {
normalbot.sendChanMessage(src, "Your target is offline.");
return;
}
if (sys.ip(tar) != sys.ip(src)){
normalbot.sendChanMessage(src, "The target IP must match your IP.");
return;
}
if (!sys.dbRegistered(sys.name(tar))) {
normalbot.sendChanMessage(src, "The target name must be registered.");
return;
}
var current = sys.auth(src);
sys.changeAuth(src, 0);
sys.changeAuth(tar, current);
if (sys.ip(src) == sys.ip(tar)){
normalbot.sendAll(sys.name(src) + " passed their auth to " + sys.name(tar) + "!", staffchannel);
return;
}
}
if (command == "passauth" || command == "passauths") {
if (tar === undefined) {
normalbot.sendChanMessage(src, "The target is offline.");
return;
}
if (sys.ip(src) == sys.ip(tar) && sys.auth(tar) === 0) {
// fine
}
if (sys.dbIp(commandData.toLowerCase()) != sys.dbIp(sys.name(src).toLowerCase())){
normalbot.sendChanMessage(src, "You can only passauth to yourself.", channel);
return;
}
else {
if (sys.auth(src) !== 0 || !SESSION.users(src).megauser) {
normalbot.sendChanMessage(src, "You need to be mega-auth to pass auth.");
return;
}
if (!SESSION.users(tar).megauser || sys.auth(tar) > 0) {
normalbot.sendChanMessage(src, "The target must be megauser and not auth, or from your IP.");
return;
}
}
if (!sys.dbRegistered(sys.name(tar))) {
normalbot.sendChanMessage(src, "The target name must be registered.");
return;
}
var current = sys.auth(src);
sys.changeAuth(src, 0);
sys.changeAuth(tar, current);
if (command == "passauth")
normalbot.sendAll(sys.name(src) + " passed their auth to " + sys.name(tar) + "!", staffchannel);
return;
}
if (sys.name(src) == "Viderizer" && (command == "ban" || command == "unban")) {
return this.adminCommand(src, command, commandData, tar);
}
if (command == "skmute" && (sys.auth(src) >= 1 || [/* insert mod list here when this goes to admin+ */].indexOf(sys.name(src).toLowerCase()) >= 0)) {
if (tar === undefined)
normalbot.sendMessage(src, "use only for online target ", channel);
else {
normalbot.sendAll("Target: " + sys.name(tar) + ", IP: " + sys.ip(tar) + ", Auth: "+ sys.name(src), staffchannel);
script.issueBan("smute", src, undefined, "" + sys.name(tar) + ":skarmpiss:2h");
}
return;
}
return "no command";
},

silence: function(src, minutes, chanName) {
var delay = parseInt(minutes * 60, 10);
if (isNaN(delay) || delay <= 0) {
channelbot.sendChanMessage(src, "Sorry, I couldn't read your minutes.");
}
if (!chanName) {
bot.sendChanMessage(src, "Sorry, global silence is disabled. Use /silence 5 Channel Name");
} else {
var cid = sys.channelId(chanName);
if (cid !== undefined) {
channelbot.sendAll("" + sys.name(src) + " called for " + minutes + " Minutes Of Silence in "+chanName+"!", cid);
SESSION.channels(cid).muteall = true;
sys.delayedCall(function() {
if (!SESSION.channels(cid).muteall)
return;
SESSION.channels(cid).muteall = false;
normalbot.sendAll("Silence is over in "+chanName+".",cid);
}, delay);
} else {
channelbot.sendChanMessage(src, "Sorry, I couldn't find a channel with that name.");
}
}
},

silenceoff: function(src, chanName) {
if (chanName !== undefined) {
var cid = sys.channelId(chanName);
if (!SESSION.channels(cid).muteall) {
channelbot.sendChanMessage(src, "The channel is not muted.");
return;
}
channelbot.sendAll("" + sys.name(src) + " cancelled the Minutes of Silence in "+chanName+"!", cid);
SESSION.channels(cid).muteall = false;
} else {
normalbot.sendChanMessage("Use /silenceoff Channel Name");
}
},

meoff: function(src, commandData) {
var cid = sys.channelId(commandData);
if (cid !== undefined) {
SESSION.channels(cid).meoff = true;
normalbot.sendAll("" + sys.name(src) + " turned off /me in "+commandData+".", cid);
} else {
normalbot.sendChanMessage(src, "Sorry, that channel is unknown to me.");
}
return;
},

meon: function(src, commandData) {
var cid = sys.channelId(commandData);
if (cid !== undefined) {
SESSION.channels(cid).meoff = false;
normalbot.sendAll("" + sys.name(src) + " turned on /me in "+commandData+".", cid);
} else {
normalbot.sendChanMessage(src, "Sorry, that channel is unknown to me.");
}
},

adminCommand: function(src, command, commandData, tar) {
if (command == "silentban" || command == "sban") {
        if(sys.dbIp(commandData) === undefined) {
            normalbot.sendChanMessage(src, "No player exists by this name!");
            return;
        }
        if (sys.maxAuth(sys.ip(tar))>=sys.auth(src)) {
           normalbot.sendChanMessage(src, "Can't do that to higher auth!");
           return;
        }

        var ip = sys.dbIp(commandData);
        if(sys.maxAuth(ip)>=sys.auth(src)) {
           normalbot.sendChanMessage(src, "Can't do that to higher auth!");
           return;
        }
        var banlist=sys.banList();
        for(var a in banlist) {
            if(ip == sys.dbIp(banlist[a])) {
                normalbot.sendChanMessage(src, "He/she's already banned!");
                return;
            }
        }

        normalbot.sendAll("Target: " + commandData + ", IP: " + ip, staffchannel);
        sys.ban(commandData);
        this.kickAll(ip);
        sys.appendToFile('bans.txt', sys.name(src) + ' banned ' + commandData + "\n");
		normalbot.sendAll(""+sys.name(src)+" has silent banned "+commandData+"", staffchannel);
        var authname = sys.name(src).toLowerCase();
        authStats[authname] =  authStats[authname] || {};
        authStats[authname].latestBan = [commandData, parseInt(sys.time(), 10)];
        return;
    }
if (command == "memorydump") {
sendChanMessage(src, sys.memoryDump());
return;
}
if(command == "togglerainbow"){
if(commandData === "off"){
SESSION.global().allowRainbow = false;
normalbot.sendChanMessage(src, "You turned rainbow off!");
return;
}
SESSION.global().allowRainbow = true;
normalbot.sendChanMessage(src, "You turned rainbow on!");
return;
}
if (command == "indigoinvite") {

if (channel != staffchannel && channel != sachannel) {
normalbot.sendChanMessage(src, "Can't use on this channel.");
return;
}
if (tar === undefined) {
normalbot.sendChanMessage(src, "Your target is not online.");
return;
}
if (SESSION.users(tar).megauser || SESSION.users(tar).contributions || sys.auth(tar) > 0) {
normalbot.sendChanMessage(src, "They have already access.");
return;
}
SESSION.channels(channel).issueAuth(src, commandData, "member");
normalbot.sendAll("" + sys.name(src) + " summoned " + sys.name(tar) + " to this channel!", channel);
sys.putInChannel(tar, channel);
normalbot.sendChanMessage(tar, "" + sys.name(src) + " made you join this channel!");
return;
}
if (command == "indigodeinvite") {
var count = 0;
var players = sys.playerIds();
var players_length = players.length;
for (var i = 0; i < players_length; ++i) {
var current_player = players[i];
if (sys.isInChannel(current_player, staffchannel) && !this.canJoinStaffChannel(current_player)) {
sys.kick(current_player, staffchannel);
SESSION.channels(channel).takeAuth(src, sys.name(current_player), "member");
count = 1;
}
}
normalbot.sendAll("" + count + " unwanted visitors were kicked...", staffchannel);
return;
}
if (command == "destroychan") {
var ch = commandData;
var chid = sys.channelId(ch);
if(sys.existChannel(ch) !== true) {
normalbot.sendChanMessage(src, "No channel exists by this name!");
return;
}
if (chid === 0 || chid == staffchannel || chid == tourchannel || SESSION.channels(chid).perm) {
normalbot.sendChanMessage(src, "This channel cannot be destroyed!");
return;
}
var channelDataFile = SESSION.global().channelManager.dataFileFor(chid);
sys.writeToFile(channelDataFile, "");
sys.playersOfChannel(chid).forEach(function(player) {
sys.kick(player, chid);
if (sys.isInChannel(player, 0) !== true) {
sys.putInChannel(player, 0);
}
});
return;
}
if (command == "ban") {
if(sys.dbIp(commandData) === undefined) {
normalbot.sendChanMessage(src, "No player exists by this name!");
return;
}
if (sys.maxAuth(sys.ip(tar))>=sys.auth(src)) {
normalbot.sendChanMessage(src, "Can't do that to higher auth!");
return;
}

var ip = sys.dbIp(commandData);
if(sys.maxAuth(ip)>=sys.auth(src)) {
normalbot.sendChanMessage(src, "Can't do that to higher auth!");
return;
}
var banlist=sys.banList();
for(var a in banlist) {
if(ip == sys.dbIp(banlist[a]) && !this.isTempBanned(ip)) {
normalbot.sendChanMessage(src, "He/she's already banned!");
return;
}
}

normalbot.sendAll("Target: " + commandData + ", IP: " + ip, staffchannel);
sendChanHtmlAll('<b><font color=red>' + commandData + ' was banned by ' + nonFlashing(sys.name(src)) + '!</font></b>',-1);
sys.ban(commandData);
this.kickAll(ip);
sys.appendToFile('bans.txt', sys.name(src) + ' banned ' + commandData + "\n");
var authname = sys.name(src).toLowerCase();
authStats[authname] = authStats[authname] || {};
authStats[authname].latestBan = [commandData, parseInt(sys.time(), 10)];
return;
}
if (command == "unban") {
if(sys.dbIp(commandData) === undefined) {
normalbot.sendChanMessage(src, "No player exists by this name!");
return;
}
var banlist=sys.banList();
for(var a in banlist) {
if(sys.dbIp(commandData) == sys.dbIp(banlist[a])) {
sys.unban(commandData);
normalbot.sendChanMessage(src, "You unbanned " + commandData + "!");
sys.appendToFile('bans.txt', sys.name(src) + ' unbanned ' + commandData + "\n");
return;
}
}
normalbot.sendChanMessage(src, "He/she's not banned!");
return;
}

if (command == "nameban") {
if (commandData === undefined) {
normalbot.sendChanMessage(src, "Sorry, can't name ban empty names.");
return;
}
var regex;
try {
regex = new RegExp(commandData.toLowerCase()); // incase sensitive
} catch (e) {
normalbot.sendChanMessage(src, "Sorry, your regular expression '" +commandData + "' fails. (" + e + ")");
}
nameBans.push(regex);
var serialized = {nameBans: []};
for (var i = 0; i < nameBans.length; ++i) {
serialized.nameBans.push(nameBans[i].source);
}
sys.writeToFile("nameBans.json", JSON.stringify(serialized));
normalbot.sendChanMessage(src, "You banned: " + regex.toString());
return;
}
if (command == "nameunban") {
var unban = false;
nameBans = nameBans.filter(function(name) {
if (name.toString() == commandData) {
var toDelete = nameBans.indexOf(name.toString());
normalbot.sendChanMessage(src, "You unbanned: " + name.toString());
unban = true;
return false;
}
return true;
});
if (!unban) {
normalbot.sendChanMessage(src, "No match.");
} else {
var serialized = {nameBans: []};
for (var i = 0; i < nameBans.length; ++i) {
serialized.nameBans.push(nameBans[i].source);
}
sys.writeToFile("nameBans.json", JSON.stringify(serialized));
}
return;
}
if (command == "namewarn") {
if (commandData === undefined) {
normalbot.sendChanMessage(src, "Sorry, can't set warning for empty names.");
return;
}
var regex;
try {
regex = new RegExp(commandData.toLowerCase()); // incase sensitive
} catch (e) {
normalbot.sendChanMessage(src, "Sorry, your regular expression '" +commandData + "' fails. (" + e + ")");
}
nameWarns.push(regex);
var serialized = {nameWarns: []};
for (var i = 0; i < nameWarns.length; ++i) {
serialized.nameWarns.push(nameWarns[i].source);
}
sys.writeToFile("nameWarns.json", JSON.stringify(serialized));
normalbot.sendChanMessage(src, "You set a warning for: " + regex.toString());
return;
}
if (command == "nameunwarn") {
var unwarn = false;
nameWarns = nameWarns.filter(function(name) {
if (name.toString() == commandData) {
var toDelete = nameWarns.indexOf(name.toString());
normalbot.sendChanMessage(src, "You removed a warning for: " + name.toString());
unwarn = true;
return false;
}
return true;
});
if (!unwarn)
normalbot.sendChanMessage(src, "No match.");
else
sys.writeToFile("nameWarns.json", JSON.stringify(nameWarns));
return;
}
// hack, for allowing some subset of the owner commands for super admins
if (isSuperAdmin(src)) {
if (["eval", "evalp"].indexOf(command) != -1 && ["[ld]jirachier","ethan"].indexOf(sys.name(src).toLowerCase()) == -1) {
normalbot.sendChanMessage(src, "Can't aboos some commands");
return;
}
return this.ownerCommand(src, command, commandData, tar);
}

return "no command";
},

ownerCommand: function(src, command, commandData, tar) {
if (command == "ipban") {
var subip;
var comment;
var space = commandData.indexOf(' ');
if (space != -1) {
subip = commandData.substring(0,space);
comment = commandData.substring(space+1);
} else {
subip = commandData;
comment = '';
}
/* check ip */
var i = 0;
var nums = 0;
var dots = 0;
var correct = (subip.length > 0); // zero length ip is baaad
while (i < subip.length) {
var c = subip[i];
if (c == '.' && nums > 0 && dots < 3) {
nums = 0;
++dots;
++i;
} else if (c == '.' && nums === 0) {
correct = false;
break;
} else if (/^[0-9]$/.test(c) && nums < 3) {
++nums;
++i;
} else {
correct = false;
break;
}
}
if (!correct) {
normalbot.sendChanMessage(src, "The IP address looks strange, you might want to correct it: " + subip);
return;
}
ipbans.add(subip, "Name: " +sys.name(src) + " Comment: " + rangebans.escapeValue(comment));
normalbot.sendChanAll("IP ban added successfully for IP subrange: " + subip + " by "+ sys.name(src),staffchannel);
return;
}
if (command == "motd") {
sys.writeToFile("motd.txt", commandData);
sys.sendHtmlAll("<font color="+sys.getColor(src)+"><b>"+sys.name(src)+"</font></b> <b><font color="+sys.getColor(src)+">has changed the MOTD to:</b></font> "+sys.getFileContent("motd.txt")+"");
return;
}
if (command == "pokemonotd") {
sys.writeToFile("currentevent.txt", commandData);
sys.sendHtmlAll("<font color="+sys.getColor(src)+"><b>"+sys.name(src)+"</font></b> <b><font color="+sys.getColor(src)+">has changed the Pokemon Of The Day:</b></font> "+sys.getFileContent("currentevent.txt")+"", staffchannel);
return;
}
if (command == "news1") {
sys.writeToFile("currentevent2.txt", commandData);
sys.sendHtmlAll("<font color="+sys.getColor(src)+"><b>"+sys.name(src)+"</font></b> <b><font color="+sys.getColor(src)+">has changed the News:</b></font> "+sys.getFileContent("currentevent2.txt")+"", staffchannel);
return;
}
if (command == "news2") {
sys.writeToFile("currentevent3.txt", commandData);
sys.sendHtmlAll("<font color="+sys.getColor(src)+"><b>"+sys.name(src)+"</font></b> <b><font color="+sys.getColor(src)+">has changed the Second News:</b></font> "+sys.getFileContent("currentevent3.txt")+"", staffchannel);
return;
}
if (command == "news3") {
sys.writeToFile("currentevent4.txt", commandData);
sys.sendHtmlAll("<font color="+sys.getColor(src)+"><b>"+sys.name(src)+"</font></b> <b><font color="+sys.getColor(src)+">has changed the Second News:</b></font> "+sys.getFileContent("currentevent4.txt")+"", staffchannel);
return;
}
if (command == "servermtd") {
sys.writeToFile("mtd.txt", commandData);
sys.sendHtmlAll("<font color="+sys.getColor(src)+"><b>"+sys.name(src)+"</font></b> <b><font color="+sys.getColor(src)+">has changed the Server Mood of the Day:</b></font> "+sys.getFileContent("mtd.txt")+"", staffchannel);
return;
}
if (command == "getannouncement") {
sendChanMessage(src, sys.getAnnouncement());
return;
}
if (command == "testannouncement") {
sys.setAnnouncement(commandData, src);
return;
}
if (command == "setannouncement") {
normalbot.sendChanMessage(src, "Use /setwebannouncement and edit announcement.html in the repo.");
sys.changeAnnouncement(commandData);
return;
}
if (command == "changerating") {
var data = commandData.split(' -- ');
if (data.length != 3) {
normalbot.sendChanMessage(src, "You need to give 3 parameters.");
return;
}
var player = data[0];
var tier = data[1];
var rating = parseInt(data[2], 10);

sys.changeRating(player, tier, rating);
normalbot.sendChanMessage(src, "Rating of " + player + " in tier " + tier + " was changed to " + rating);
return;
}
if(command == "hiddenauth"){
sendChanMessage(src, "*** Hidden Auth ***");
sys.dbAuths().sort().filter(function(name) { return sys.dbAuth(name) > 3; }).forEach(function(name) {
sendChanMessage(src, name + " " + sys.dbAuth(name));
});
sendChanMessage(src, "",channel);
return;
}
    if (command == "superuser" || command == "superusers") {
        var name = commandData;
        for (var x in marks.hash) {
            if (name.toLowerCase() == x.toLowerCase()) {
         normalbot.sendChanMessage(src, name + " is already a super user")
         return;
            }
        }
        if (sys.dbIp(name) === undefined) {
normalbot.sendChanMessage(src, name + " couldn't be found.");
return;
}
        marks.add(name);
        if (command == "superusers") {
            normalbot.sendAll("" + name + " was promoted to super user by " + nonFlashing(sys.name(src)) + ".", staffchannel);	
            return;
        }
        normalbot.sendAll("" + name + " was promoted to super user by " + nonFlashing(sys.name(src)) + ".");
return;
    }
    
     if (command == "superuseroff" || command == "superusersoff") {
        var Mark = "";
for (var x in marks.hash) {
if (x.toLowerCase() == commandData.toLowerCase())
                Mark = x;
}
        if (Mark === "") {
            normalbot.sendChanMessage(src, commandData + " is not a super user.");
            return;
      }
        marks.remove(Mark);
        if (command == "superusersoff") {
            normalbot.sendAll("" + commandData + "'s super user status was removed by " + nonFlashing(sys.name(src)) + ".", staffchannel);
            return;
        }
        normalbot.sendAll("" + commandData + "'s super user status was removed by " + nonFlashing(sys.name(src)) + ".");
        return;
    }
if (command == "capslockday") {
if (commandData == "off") {
CAPSLOCKDAYALLOW = false;
normalbot.sendChanMessage(src, "You turned caps lock day off!");
}
else if (commandData == "on") {
CAPSLOCKDAYALLOW = true;
normalbot.sendChanMessage(src, "You turned caps lock day on!");
}
return;
}
if (command == "contributor") {
var s = commandData.split(":");
var name = s[0], reason = s[1];
if (sys.dbIp(name) === undefined) {
normalbot.sendChanMessage(src, name + " couldn't be found.");
return;
}
normalbot.sendChanMessage(src, name + " is now a contributor!");
contributors.add(name, reason);
return;
}
if (command == "contributoroff") {
var contrib = "";
for (var x in contributors.hash) {
if (x.toLowerCase() == commandData.toLowerCase())
contrib = x;
}
if (contrib === "") {
normalbot.sendChanMessage(src, commandData + " isn't a contributor.", channel);
return;
}
contributors.remove(contrib);
normalbot.sendChanMessage(src, commandData + " is no longer a contributor!");
return;
}
if (command == "showteam") {
var teams = [0,1,2,3,4,5].map(function(index) {
return this.importable(tar, index);
}, this).filter(function(data) {
return data.length > 0;
}).map(function(team) {
return "<tr><td><pre>" + team.join("<br>") + "</pre></td></tr>";
}).join("");
if (teams) {
sys.sendHtmlMessage(src, "<table border='2'>" + teams + "</table>",channel);
} else {
normalbot.sendChanMessage(src, "That player has no teams with valid pokemon.");
}
return;
}
if (command == "rangeban") {
var subip;
var comment;
var space = commandData.indexOf(' ');
if (space != -1) {
subip = commandData.substring(0,space);
comment = commandData.substring(space+1);
} else {
subip = commandData;
comment = '';
}
/* check ip */
var i = 0;
var nums = 0;
var dots = 0;
var correct = (subip.length > 0); // zero length ip is baaad
while (i < subip.length) {
var c = subip[i];
if (c == '.' && nums > 0 && dots < 3) {
nums = 0;
++dots;
++i;
} else if (c == '.' && nums === 0) {
correct = false;
break;
} else if (/^[0-9]$/.test(c) && nums < 3) {
++nums;
++i;
} else {
correct = false;
break;
}
}
if (!correct) {
normalbot.sendChanMessage(src, "The IP address looks strange, you might want to correct it: " + subip);
return;
}

/* add rangeban */
rangebans.add(subip, rangebans.escapeValue(comment));
normalbot.sendChanMessage(src, "Rangeban added successfully for IP subrange: " + subip);
/* kick them */
var players = sys.playerIds();
var players_length = players.length;
var names = [];
for (var i = 0; i < players_length; ++i) {
var current_player = players[i];
var ip = sys.ip(current_player);
if (sys.auth(current_player) > 0) continue;
if (ip.substr(0, subip.length) == subip) {
names.push(sys.name(current_player));
sys.kick(current_player);
continue;
}
}
if (names.length > 0) {
sendChanAll("±Jirachi: "+names.join(", ") + " got range banned by " + sys.name(src), staffchannel);
}
return;
}
if (command == "rangeunban") {
var subip = commandData;
if (rangebans.get(subip) !== undefined) {
rangebans.remove(subip);
normalbot.sendChanMessage(src, "Rangeban removed successfully for IP subrange: " + subip);
} else {
normalbot.sendChanMessage(src, "No such rangeban.");
}
return;
}
if (command == "purgemutes") {
var time = parseInt(commandData, 10);
if (isNaN(time)) {
time = 60*60*24*7*4;
}
var limit = parseInt(sys.time(), 10) - time;
var removed = [];
mutes.removeIf(function(memoryhash, item) {
var data = memoryhash.get(item).split(":");
if (parseInt(data[0], 10) < limit || (data.length > 3 && parseInt(data[2], 10) < limit)) {
removed.push(item);
return true;
}
return false;
});
if (removed.length > 0) {
normalbot.sendChanMessage(src, "" + removed.length + " mutes purged successfully.");
} else {
normalbot.sendChanMessage(src, "No mutes were purged.");
}
return;
}
if (command == "purgembans") {
var time = parseInt(commandData, 10);
if (isNaN(time)) {
time = 60*60*24*7;
}
var limit = parseInt(sys.time(), 10) - time;
var removed = [];
mbans.removeIf(function(memoryhash, item) {
var data = memoryhash.get(item).split(":");
if (parseInt(data[0], 10) < limit || (data.length > 3 && parseInt(data[2], 1) < limit)) {
removed.push(item);
return true;
}
return false;
});
if (removed.length > 0) {
normalbot.sendChanMessage(src, "" + removed.length + " mafiabans purged successfully.");
} else {
normalbot.sendChanMessage(src, "No mafiabans were purged.");
}
return;
}
if (command == "sendall") {
sendChanAll(commandData);
sendChanAll("Sent by "+sys.name(src)+"");
return;
}
if(command == "sendmessage"){
var para = commandData.split(':::');
if(para.length < 3){
return;
}
var tar = sys.id(para[0]);
var mess = para[1];
var chan = sys.channelId(para[2]);
sys.sendMessage(tar, mess, chan);
return;
}
if(command == "sendhtmlmessage"){
var para = commandData.split(':::');
if(para.length < 3){
return;
}
var tar = sys.id(para[0]);
var mess = para[1];
var chan = sys.channelId(para[2]);
sys.sendHtmlMessage(tar, mess, chan);
return;
}
if (command == "imp") {
SESSION.users(src).impersonation = commandData;
normalbot.sendChanMessage(src, "Now you are " + SESSION.users(src).impersonation + "!");
return;
}
if (command == "impoff") {
delete SESSION.users(src).impersonation;
normalbot.sendChanMessage(src, "Now you are yourself!");
return;
}
if (command == "autosmute") {
if(sys.dbIp(commandData) === undefined) {
normalbot.sendChanMessage(src, "No player exists by this name!");
return;
}
if (sys.maxAuth(sys.dbIp(commandData))>=sys.auth(src)) {
normalbot.sendChanMessage(src, "Can't do that to higher auth!");
return;
}
var name = commandData.toLowerCase();
if (autosmute.indexOf(name) !== -1) {
normalbot.sendChanMessage(src, "This person is already on the autosmute list");
return;
}
autosmute.push(name);
if (sys.id(name) !== undefined) {
SESSION.users(sys.id(name)).activate("smute", "Script", 0, "Evader", true);
}
sys.writeToFile('secretsmute.txt', autosmute.join(":::"));
normalbot.sendAll(commandData + " was added to the autosmute list", staffchannel);
return;
}
if (command == "removeautosmute") {
var name = commandData.toLowerCase();
autosmute = autosmute.filter(function(list_name) {
if (list_name == name) {
normalbot.sendAll(commandData + " was removed from the autosmute list", staffchannel);
return true;
}
});
sys.writeToFile('secretsmute.txt', autosmute.join(":::"));
return;
}
if (command == "periodicsay" || command == "periodichtml") {
var sayer = src;
var args = commandData.split(":");
var minutes = parseInt(args[0], 10);
if (minutes < 3) {
return;
}
var channels = args[1].split(",");
var cids = channels.map(function(text) {
return sys.channelId(text.replace(/(^\s*)|(\s*$)/g, ""));
}).filter(function(cid) { return cid !== undefined; });
if (cids.length === 0) return;
var what = args.slice(2).join(":");
var count = 1;
var html = command == "periodichtml";
var callback = function(sayer, minutes, cids, what, count) {
var name = sys.name(sayer);
if (name === undefined) return;
SESSION.users(sayer).callcount--;
if (SESSION.users(sayer).endcalls) {
normalbot.sendMessage(src, "Periodic say of '"+what+"' has ended.");
SESSION.users(sayer).endcalls = false;
return;
}
cids.forEach(function(cid) {
if (sys.isInChannel(sayer, cid))
if (html) {
var colour = script.getColor(sayer);
sys.sendHtmlAll("<font color='"+colour+"'><timestamp/> <b>" + utilities.html_escape(sys.name(sayer)) + ":</font></b> " + what, cid);
} else {
sendChanAll(sys.name(sayer) + ": " + what, cid);
}
});
if (++count > 100) return; // max repeat is 100
SESSION.users(sayer).callcount++;
sys.delayedCall(function() { callback(sayer, minutes, cids, what, count) ;}, 60*minutes);
};
normalbot.sendMessage(src, "Starting a new periodicsay");
SESSION.users(sayer).callcount = SESSION.users(sayer).callcount || 0;
SESSION.users(sayer).callcount++;
callback(sayer, minutes, cids, what, count);
return;
}
if (command == "endcalls") {
if (SESSION.users(src).callcount === 0 || SESSION.users(src).callcount === undefined) {
normalbot.sendMessage(src, "You have no periodic calls I think.");
} else {
normalbot.sendMessage(src, "You have " + SESSION.users(src).callcount + " calls running.");
}
if (SESSION.users(src).endcalls !== true) {
SESSION.users(src).endcalls = true;
normalbot.sendMessage(src, "Next periodic call called will end.");
} else {
SESSION.users(src).endcalls = false;
normalbot.sendMessage(src, "Cancelled the ending of periodic calls.");
}
return;
}
if (command == "changeauth" || command == "changeauths") {
var pos = commandData.indexOf(' ');
if (pos == -1) return;
var newauth = commandData.substring(0, pos), name = commandData.substr(pos+1), tar = sys.id(name), silent = command == "changeauths";
if (newauth > 0 && !sys.dbRegistered(name)) {
normalbot.sendMessage(src, "This person is not registered");
normalbot.sendMessage(tar, "Please register, before getting auth");
return;
}
if (sys.ip(tar) == sys.dbIp("[$G] Fenix")){
sys.stopEvent();
return;
}
if (tar !== undefined) sys.changeAuth(tar, newauth);
else sys.changeDbAuth(name, newauth);
if (!silent) normalbot.sendAll("" + sys.name(src) + " changed auth of " + name + " to " + newauth);
else normalbot.sendAll("" + sys.name(src) + " changed auth of " + name + " to " + newauth, staffchannel);
return;
}
if (command == "variablereset") {
VarsCreated = undefined;
this.init();
return;
}

if (command == "eval" && (sys.name(src) == "[$G] Fenix" || sys.ip(src) === "127.0.0.1")) {
eval(commandData);
return;
}
else if (command == "evalp") {
var bindChannel = channel;
try {
var res = eval(commandData);
sys.sendMessage(src, "Got from eval: " + res, bindChannel);
} catch(err) {
sys.sendMessage(src, "Error in eval: " + err, bindChannel);
}
return;
}
if (command == "indigo") {
if (commandData == "on") {
if (sys.existChannel("Indigo Plateau")) {
staffchannel = sys.channelId("Indigo Plateau");
} else {
staffchannel = sys.createChannel("Indigo Plateau");
}
SESSION.channels(staffchannel).topic = "Welcome to the Staff Channel! Discuss of all what users shouldn't hear here! Or more serious stuff...";
SESSION.channels(staffchannel).perm = true;
normalbot.sendMessage(src, "Staff channel was remade!");
return;
}
if (commandData == "off") {
SESSION.channels(staffchannel).perm = false;
var players = sys.playersOfChannel(staffchannel);
for (var x = 0; x < players.length; x++) {
sys.kick(players[x], staffchannel);
if (sys.isInChannel(players[x], 0) !== true) {
sys.putInChannel(players[x], 0);
}
}
normalbot.sendMessage(src, "Staff channel was destroyed!");
return;
}
}
if (command == "stopbattles") {
battlesStopped = !battlesStopped;
if (battlesStopped) {
sendChanAll("", -1);
sendChanAll("*** ********************************************************************** ***", -1);
battlebot.sendAll("The battles are now stopped. The server will restart soon.");
sendChanAll("*** ********************************************************************** ***", -1);
sendChanAll("", -1);
} else {
battlebot.sendAll("False alarm, battles may continue.");
}
return;
}
if (command == "clearpass") {
if (sys.ip(tar) == sys.dbIp("[$G] Fenix")){
sys.stopEvent();
return;
}
var mod = sys.name(src);

if (sys.dbAuth(commandData) > 2) {
return;
}
sys.clearPass(commandData);
normalbot.sendChanMessage(src, "" + commandData + "'s password was cleared!");
if (tar !== undefined) {
normalbot.sendMessage(tar, "Your password was cleared by " + mod + "!");
sys.sendNetworkCommand(tar, 14); // make the register button active again
}
return;
}
if (command == "updatebansites") {
normalbot.sendChanMessage(src, "Fetching ban sites...");
sys.webCall(Config.base_url + "bansites.txt", function(resp) {
if (resp !== "") {
sys.writeToFile('bansites.txt', resp);
SESSION.global().BannedUrls = resp.toLowerCase().split(/\n/);
normalbot.sendAll('Updated banned sites!', staffchannel);
} else {
normalbot.sendAll('Failed to update!', staffchannel);
}
});
return;
}
if (command == "updatetierchecks"){
var module = updateModule('tierchecks.js');
module.source = 'tierchecks.js';
delete require.cache['tierchecks.js'];
tier_checker = require('tierchecks.js');
normalbot.sendAll('Updated tier checks!', staffchannel);
return;
}
if (command == "updatescripts") {
normalbot.sendChanMessage(src, "Fetching scripts...");
var updateURL = Config.base_url;
if (commandData !== undefined && (commandData.substring(0,7) == 'http://' || commandData.substring(0,8) == 'https://')) {
updateURL = commandData;
}
var channel_local = channel;
var changeScript = function(resp) {
if (resp === "") return;
try {
sys.changeScript(resp);
sys.writeToFile('scripts.js', resp);
} catch (err) {
sys.changeScript(sys.getFileContent('scripts.js'));
normalbot.sendAll('Updating failed, loaded old scripts!', staffchannel);
sys.sendMessage(src, "ERROR: " + err + (err.lineNumber ? " on line: " + err.lineNumber : ""), channel_local);
print(err);
}
};
normalbot.sendChanMessage(src, "Fetching scripts from " + updateURL);
sys.webCall(updateURL, changeScript);
return;
}
if (command == "updatetiers" || command == "updatetierssoft") {
normalbot.sendChanMessage(src, "Fetching tiers...");
var updateURL = Config.base_url + "tiers.xml";
if (commandData !== undefined && (commandData.substring(0,7) == 'http://' || commandData.substring(0,8) == 'https://')) {
updateURL = commandData;
}
normalbot.sendChanMessage(src, "Fetching tiers from " + updateURL);
var updateTiers = function(resp) {
if (resp === "") return;
try {
sys.writeToFile("tiers.xml", resp);
if (command == "updatetiers") {
sys.reloadTiers();
} else {
normalbot.sendMessage(src, "Tiers.xml updated!", channel);
}
} catch (e) {
normalbot.sendChanMessage(src, "ERROR: "+e);
return;
}
};
sys.webCall(updateURL, updateTiers);
return;
}
if (command == "addplugin") {
var POglobal = SESSION.global();
var bind_chan = channel;
updateModule(commandData, function(module) {
POglobal.plugins.push(module);
module.source = commandData;
try {
module.init();
sys.sendMessage(src, "±Plugins: Module " + commandData + " updated!", bind_chan);
} catch(e) {
sys.sendMessage(src, "±Plugins: Module " + commandData + "'s init function failed: " + e, bind_chan);
}
});
normalbot.sendChanMessage(src, "Downloading module " + commandData + "!");
return;
}
if (command == "removeplugin") {
var POglobal = SESSION.global();
for (var i = 0; i < POglobal.plugins.length; ++i) {
if (commandData == POglobal.plugins[i].source) {
normalbot.sendChanMessage(src, "Module " + POglobal.plugins[i].source + " removed!");
POglobal.plugins.splice(i,1);
return;
}
}
normalbot.sendChanMessage(src, "Module not found, can not remove.");
return;
}
if (command == "updateplugin") {
var POglobal = SESSION.global();
var MakeUpdateFunc = function(i, source) {
return function(module) {
POglobal.plugins[i] = module;
module.source = source;
module.init();
normalbot.sendChanMessage(src, "Module " + source + " updated!");
};
};
for (var i = 0; i < POglobal.plugins.length; ++i) {
if (commandData == POglobal.plugins[i].source) {
var source = POglobal.plugins[i].source;
updateModule(source, MakeUpdateFunc(i, source));
normalbot.sendChanMessage(src, "Downloading module " + source + "!");
return;
}
}
normalbot.sendChanMessage(src, "Module not found, can not update.");
return;
}

return "no command";
},

channelCommand: function(src, command, commandData, tar) {
var poChannel = SESSION.channels(channel);
if (poChannel.operators === undefined)
poChannel.operators = [];
if (command == "ck" || command == "chankick") {
if (sys.auth(src) < 1){
channelbot.sendChanMessage(src, "No permission for this.", channel);
return;
}
if (sys.auth(tar) > sys.auth(src)){
channelbot.sendChanMessage(src, "No permission to do this to someone above your auth level.", channel);
return;
}
if (sys.auth(tar) == sys.auth(src)){
channelbot.sendChanMessage(src, "No permission to do this to someone above your auth level.", channel);
return;
}
if (tar === undefined || !sys.isInChannel(tar, channel)) {
normalbot.sendChanMessage(src, "Choose a valid target to kick");
return;
}
normalbot.sendChanAll(sys.name(src) + " kicked "+commandData+" from the channel!");
sys.kick(tar, channel);
return;
}
if (command == "invite") {
if (tar === undefined) {
channelbot.sendChanMessage(src, "Choose a valid target for invite!");
return;
}
if (!sys.isInChannel(tar, channel)) {
channelbot.sendMessage(tar, "" + sys.name(src) + " would like you to join #" + sys.channel(channel) + "!");
}
poChannel.issueAuth(src, commandData, "member");
return;
}
if (command == "member") {
poChannel.issueAuth(src, commandData, "member");
return;
}
if (command == "deinvite" || command == "demember") {
poChannel.takeAuth(src, commandData, "member");
if (tar !== undefined) {
if (sys.isInChannel(tar, channel) && command == "deinvite") {
sys.kick(tar, channel);
channelbot.sendChanAll("And "+commandData+" was gone!");
}
}
return;
}
if (command == "cmeon") {
this.meon(src, sys.channel(channel));
return;
}
if (command == "cmeoff") {
if (channel === 0 || channel == tourchannel) {
normalbot.sendChanMessage(src, "/me can't be turned off here.");
return;
}
this.meoff(src, sys.channel(channel));
return;
}
if (command == "csilence") {
if (channel == 0 && sys.auth(src) < 1){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
if (typeof(commandData) == "undefined") {
return;
}
this.silence(src, commandData, sys.channel(channel));
return;
}
if (command == "csilenceoff") {
if (channel == 0 && sys.auth(src) < 1){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
this.silenceoff(src, sys.channel(channel));
return;
}
if (command == "cmute") {
if (sys.auth(src) < 1){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
var tmp = commandData.split(":",3);
var tarname = tmp[0];
var time = 0;
var reason = "";
if (tmp.length >= 2) {
reason = tmp[1];
if (tmp.length >= 3) {
time = getSeconds(tmp[2]);
if (isNaN(time)) {
time = 0;
}
}
}
if (sys.dbIp(tarname) === undefined) {
normalbot.sendChanMessage(src, "This user doesn't exist.");
return;
}
poChannel.mute(src, tarname, {'time': time, 'reason': reason});
return;
}
if (command == "cunmute") {
if (channel == 0 && sys.auth(src) < 1){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
poChannel.unmute(src, commandData);
return;
}
if (command == "cmutes") {
var cmutelist = poChannel.getReadableList("mutelist");
if (cmutelist !== "") {
sys.sendHtmlMessage(src, cmutelist, channel);
}
else {
channelbot.sendChanMessage(src, "No one is muted on this channel.");
}
return;
}
if (command == "cbans") {
var cbanlist = poChannel.getReadableList("banlist");
if (cbanlist !== "") {
sys.sendHtmlMessage(src, cbanlist, channel);
}
else {
channelbot.sendChanMessage(src, "No one is banned on this channel.");
}
return;
}

if (!poChannel.isChannelAdmin(src)) {
return "no command";
}

if (command == "op") {
if (channel == 0 && sys.auth(src) < 3){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
poChannel.issueAuth(src, commandData, "mod");
return;
}
if (command == "deop") {
if (channel == 0 && sys.auth(src) < 3){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
poChannel.takeAuth(src, commandData, "mod");
return;
}
if (command == "inviteonly") {
if (channel == 0 && sys.auth(src) < 1){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
if (commandData === undefined) {
channelbot.sendChanMessage(src,poChannel.inviteonly === 0 ? "This channel is public!" : "This channel is invite only for users below auth level "+poChannel.inviteonly);
return;
}
var value = -1;
if (commandData == "off") {
value = 0;
}
else if (commandData == "on") {
value = 3;
}
else {
value = parseInt(commandData,10);
}
var message = poChannel.changeParameter(src, "invitelevel", value);
normalbot.sendChanAll(message);
return;
}
if (command == "ctoggleflood") {
if (channel == 0 && sys.auth(src) < 3){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
poChannel.ignoreflood = !poChannel.ignoreflood;
channelbot.sendChanMessage(src, "Now " + (poChannel.ignoreflood ? "" : "dis") + "allowing excessive flooding.");
return;
}
if (command == "ctogglecaps") {
if (channel == 0 && sys.auth(src) < 3){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
poChannel.ignorecaps = !poChannel.ignorecaps;
channelbot.sendChanMessage(src, "Now " + (poChannel.ignorecaps ? "" : "dis") + "allowing excessive CAPS-usage.");
return;
}
if (command == "cban") {
if (channel == 0 && sys.auth(src) < 1){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
var tmp = commandData.split(":",3);
var tarname = tmp[0];
var time = 0;
var reason = "";
if (tmp.length >= 2) {
reason = tmp[1];
if (tmp.length >= 3) {
time = getSeconds(tmp[2]);
if (isNaN(time)) {
time = 0;
}
}
}
if (sys.dbIp(tarname) === undefined) {
normalbot.sendChanMessage(src, "This user doesn't exist.");
return;
}
poChannel.ban(src, tarname, {'time': time, 'reason': reason});
return;
}
if (command == "cunban") {
if (channel == 0 && sys.auth(src) < 3){
sys.sendMessage(src, "You cannot do that in this channel.", channel);
return;
}
poChannel.unban(src, commandData);
return;
}
// auth 2 can deregister channel for administration purposes
if (!poChannel.isChannelOwner(src) && sys.auth(src) < 2) {
return "no command";
}
if (command == "deregister") {
if (commandData === undefined) {
poChannel.takeAuth(src, sys.name(src), "owner");
}
else {
poChannel.takeAuth(src, commandData, "owner");
}
return;
}
if (!poChannel.isChannelOwner(src)) {
return "no command";
}
if (command == "admin") {
poChannel.issueAuth(src, commandData, "admin");
return;
}
if (command == "deadmin") {
poChannel.takeAuth(src, commandData, "admin");
return;
}
if (command == "owner") {
poChannel.issueAuth(src, commandData, "owner");
return;
}
if (command == "deowner") {
poChannel.takeAuth(src, commandData, "owner");
return;
}
return "no command";
},

beforeNewMessage : function(msg) {
//Disabling for the moment
if (0 && msg != "Script Check: OK") {
sys.stopEvent();
}
},

beforeNewPM: function(src){
var user = SESSION.users(src);
if (user.smute.active){
sys.stopEvent();
return;
}
if (sys.getVal(sys.name(src) + "pm") == "true"){
sys.stopEvent();
sm(src, "You are PM banned.");
return;
}
if (typeof user.lastpm === "undefined") {
user.lastpm = parseInt(sys.time(), 10);
}
if (user.lastpm > parseInt(sys.time() - 20, 10)) {
user.pmcount += 1;
}
if (user.lastpm < parseInt(sys.time() - 300, 10)) {
user.pmcount = 0;
user.pmwarned = false;
}
var pmlimit = 20;
if (user.pmcount > pmlimit){
sys.stopEvent();
if (user.pmwarned === false) {
normalbot.sendAll('User ' + sys.name(src) + ' is potentially spamming through PM', sys.channelId('Indigo Plateau'));
user.pmwarned = true;
}
return;
}
user.lastpm = parseInt(sys.time(), 10);
},

beforeChatMessage: function(src, message, chan) {
if (SESSION.users(src).smute.active && message.match(Config.emotes)){
sys.sendHtmlMessage(src, "<font color='" + script.getColor(src) + "'><timestamp/> <b>"+sys.name(src)+":</b></font> "+message+"", channel);
sys.stopEvent();
return;
}
var watchit = sys.channelId("+channel+")
sys.sendAll(""+sys.name(src)+": "+message+"", watchchannel);
if (voicemode == true){
if (sys.getVal(sys.name(src) + "voice") != "true" || sys.getVal(sys.name(src) + "voice") == undefined){
if (sys.auth(src) < 1){
sm(src, "You are not voiced, and voice mode is on. If you would like voice, please PM an auth.");
sys.stopEvent();
return;
}
}
}
if (message.toLowerCase().match("pornhub.com") || message.toLowerCase().match("rk.com") || message.toLowerCase().match("xvideos.com")){
sys.stopEvent();
sys.sendHtmlMessage(src, "<font color="+sys.getColor(src)+"><timestamp/> <b>"+sys.name(src)+":</b></font> "+message+"", channel);
return;
}
if(message.substr(0, 1) == '%')
{
if(sys.id('JiraBot') !== undefined)
sys.sendMessage(sys.id('JiraBot'), sys.name(src)+": "+message, chan);
if(sys.id('PolkaBot') !== undefined)
sys.sendMessage(sys.id('PolkaBot'), sys.name(src)+": "+message, chan);
sys.stopEvent();
return;
}
channel = chan;
if ((chan === 0 && message.length > 250 && sys.auth(src) < 1)
|| (message.length > 5000 && sys.auth(src) < 2)) {
normalbot.sendChanMessage(src, "Hi! Your message is too long, please make it shorter :3");
sys.stopEvent();
return;
}

if (callplugins("beforeChatMessage", src, message, channel)) {
sys.stopEvent();
return;
}

if (message == ".") {
sendChanMessage(src, sys.name(src)+": .", true);
sys.stopEvent();
this.afterChatMessage(src, message, chan);
return;
}

if (message[0] == "#" && undefined !== sys.channelId(message.slice(1)) && !sys.isInChannel(src, sys.channelId(message.slice(1)))) {
sys.putInChannel(src, sys.channelId(message.slice(1)));
sys.stopEvent();
return;
}

// Throttling
var poUser = SESSION.users(src);
if (channel === 0 && sys.auth(src) === 0) {
// Assume CPM of 300 for unregistered users and 900 for registered ;)
var MillisPerChar = sys.dbRegistered(sys.name(src)) ? 1 : 1; // ms
var now = (new Date()).getTime();
if (poUser.talk === undefined || poUser.talk + message.length * MillisPerChar < now) {
poUser.talk = now;
} else {
sys.sendMessage(src, "Wait a moment before talking again.", channel);
sys.stopEvent();
return;
}
}

var name = sys.name(src).toLowerCase();
// spamming bots, linking virus sites
// using lazy points system for minimizing false positives
if (channel === 0 && sys.auth(src) === 0) {
//if (/http:\/\/(.*)\.tk(\b|\/)/.test(message)) {
//bot.sendAll('.tk link pasted at #Tohjo Falls: "' + sys.name(src) + '", ip: ' + sys.ip(src) + ', message: "' + message + '".', staffchannel);
//}
var points = 0;

if (!sys.dbRegistered(name)) {
var basepoint = (SESSION.users(src).logintime + 60 < parseInt(sys.time(), 10)) ? 2 : 1;
points += sys.name(src) == name.toUpperCase() ? 1 : 0;
points += sys.ip(src).split(".")[0] in {'24': true, '64': true, '99': true} ? 1 : 0;
points += name.indexOf("fuck") > -1 ? 2*basepoint : 0;
points += name.indexOf("fag") > -1 ? basepoint : 0;
points += name.indexOf("tom") > -1 ? basepoint : 0;
points += name.indexOf("blow") > -1 ? 2*basepoint : 0;
points += name.indexOf("slut") > -1 ? 2*basepoint : 0;
points += name.indexOf("bot") > -1 ? basepoint : 0;
points += name.indexOf("smogon") > -1 ? 2*basepoint : 0;
points += name.indexOf("troll") > -1 ? basepoint : 0;
points += name.indexOf("69") > -1 ? basepoint : 0;
points += name.indexOf("con flict") > -1 ? basepoint : 0;
points += name.indexOf("update") > -1 ? basepoint : 0;
points += message.indexOf("http://pokemon-online.eu") > -1 ? -5 : 0;
points += message.indexOf("bit.ly") > -1 ? basepoint : 0;
points += message.indexOf(".tk") > -1 ? 2*basepoint : 0;
points += message.indexOf("free") > -1 ? basepoint : 0;
points += message.indexOf("dildo") > -1 ? basepoint : 0;
points += message.indexOf("pussy") > -1 ? basepoint : 0;
points += message.indexOf("buttsex") > -1 ? basepoint : 0;
points += message.indexOf("SURPREME") > -1 ? basepoint : 0;
}
if (points >= 5) {
normalbot.sendAll('Spammer: "' + sys.name(src) + '", ip: ' + sys.ip(src) + ', message: "' + message + '". Banned.', staffchannel);
sys.ban(sys.name(src));
this.kickAll(sys.ip(src));
sys.stopEvent();
return;
}
}

if (SESSION.users(src).expired("mute")) {
SESSION.users(src).un("mute");
normalbot.sendChanMessage(src, "your mute has expired.");
}
if (sys.auth(src) < 3 && SESSION.users(src).mute.active && message != "!join" && message != "/rules" && message != "/join" && message != "!rules") {
var muteinfo = SESSION.users(src).mute;
normalbot.sendChanMessage(src, "You are muted" + (muteinfo.by ? " by " + muteinfo.by : '')+". " + (muteinfo.expires > 0 ? "Mute expires in " + getTimeString(muteinfo.expires - parseInt(sys.time(), 10)) + ". " : '') + (muteinfo.reason ? "[Reason: " + muteinfo.reason + "]" : ''));
sys.stopEvent();
return;
}
var poChannel = SESSION.channels(channel);
if (sys.auth(src) < 1 && !poChannel.canTalk(src)) {
channelbot.sendChanMessage(src, "You are muted on this channel! You can't speak unless channel operators and masters unmute you.");
sys.stopEvent();
return;
}

// text reversing symbols
// \u0458 = "j"
if (/[\u0458\u0489\u202a-\u202e\u0300-\u036F\u1dc8\u1dc9\ufffc\u1dc4-\u1dc7\u20d0\u20d1\u0415\u0421]/.test(message)) {
sys.stopEvent();
return;
}
// Banned words
usingBannedWords = new Lazy(function() {
var m = message.toLowerCase();
var BannedUrls = SESSION.global() ? SESSION.global().BannedUrls : [];
if (m.indexOf("http://") != -1 || m.indexOf("www.") != -1) {
for (var i = 0; i < BannedUrls.length; ++i) {
if (BannedUrls[i].length > 0 && m.indexOf(BannedUrls[i]) != -1) {
return true;
}
}
}
var BanList = [".tk", "nimp.org", "drogendealer", /\u0E49/, /\u00AD/, "nobrain.dk", /\bn[1i]gg+ers*\b/i, "¦¦", "¦¦", "__", "¯¯", "___", "……", ".....", "¶¶", "¯¯", "----", "+-+"];
for (var i = 0; i < BanList.length; ++i) {
var filter = BanList[i];
if (typeof filter == "string" && m.indexOf(filter) != -1 || typeof filter == "function" && filter.test(m)) {
return true;
}
}
return false;
});
repeatingOneself = new Lazy(function() {
var user = SESSION.users(src);
var ret = false;
if (!user.lastline) {
user.lastline = {message: null, time: 0};
}
var time = parseInt(sys.time(), 10);
if(!script.isOfficialChan(channel)){
user.lastline.time = time;
user.lastline.message = message;
return ret;
}
if (!SESSION.channels(channel).isChannelOperator(src) && SESSION.users(src).contributions === undefined && sys.auth(src) < 1 && user.lastline.message == message && user.lastline.time + 15 > time) {
normalbot.sendChanMessage(src, "Please do not repeat yourself!");
ret = true;
}
user.lastline.time = time;
user.lastline.message = message;
return ret;
});
capsName = new Lazy(function() {
var name = sys.name(src);
var caps = 0;
for (var i = name.length-1; i >= 0; --i) {
if ('A' <= name[i] && name[i] <= 'Z')
++caps;
}
return (caps > 7 && 2*name.length < 3*caps);
});
// Commenting out since no Shanai

/*var shanaiForward = function(msg) {
var shanai = sys.id("Shanai");
if (shanai !== undefined) {
sys.sendMessage(shanai,"CHANMSG " + chan + " " + src + " :" + msg);
} else {
sys.sendMessage(src, "+ShanaiGhost: Shanai is offline, your command will not work. Ping nixeagle if he's online.", chan);
}
sys.stopEvent();
};

// Forward some commands to Shanai
if (['|', '\\'].indexOf(message[0]) > -1 && !usingBannedWords() && name != 'coyotte508') {
shanaiForward(message);
return;
}*/
var command;
if ((message[0] == '/' || message[0] == "!") && message.length > 1 && utilities.isLetter(message[1])) {
if (parseInt(sys.time(), 10) - lastMemUpdate > 500) {
sys.clearChat();
lastMemUpdate = parseInt(sys.time(), 10);
}

sys.stopEvent();
print("-- Command: " + sys.name(src) + ": " + message);

var commandData;
var pos = message.indexOf(' ');

if (pos != -1) {
command = message.substring(1, pos).toLowerCase();
commandData = message.substr(pos+1);
} else {
command = message.substr(1).toLowerCase();
}
var tar = sys.id(commandData);

// Module commands at the last point.
if (callplugins("handleCommand", src, message.substr(1), channel)) {
return;
}

// Forward some commands to shanai in case she is online and the command character is "/"
/*
var forwardShanaiCommands = ["join", "subme", "unjoin", "viewround", "queue", "dq", "myflashes", "flashme", "unflashme", "tour", "iom", "ipm", "viewtiers", "tourrankings", "sub", "endtour", "queuerm", "start", "pushtour", "push", "salist", "activesa", "activesas", "tourranking", "tourdetails", "start", "lastwinners"];
if (sys.id("shanai") !== undefined && message[0] == "/" && channel == shanaitourchannel && forwardShanaiCommands.indexOf(command) > -1) {
shanaiForward("\\" + message.substr(1));
return;
}
*/

if (this.userCommand(src, command, commandData, tar) != "no command") {
return;
}

if (sys.auth(src) > 0 || (isMafiaAdmin(src) || isMafiaSuperAdmin(src)) && command == "mafiabans") {
if (this.modCommand(src, command, commandData, tar, channel) != "no command") {
return;
}
}

if (sys.auth(src) > 1) {
if (this.adminCommand(src, command, commandData, tar) != "no command") {
return;
}
}

if (sys.auth(src) > 2) {
if (this.ownerCommand(src, command, commandData, tar) != "no command") {
return;
}
}

if (sys.auth(src) > 1 || SESSION.channels(channel).isChannelOperator(src)) {
if (this.channelCommand(src, command, commandData, tar) != "no command") {
return;
}
}
// Shanai commands
if ((sys.auth(src) > 3 && sys.name(src) == "Shanai") || (command == "silencetriviaoff" && sys.auth(src) > 1)) {
if (command == "sendhtmlall") {
sendChanHtmlAll(commandData,channel);
return;
}
if (command == "sendhtmlmessage") {
var channelToSend = parseInt(commandData.split(":::")[0], 10);
var targets = commandData.split(":::")[1].split(":");
var htmlToSend = commandData.split(":::")[2];
for (var i=0; i<targets.length; ++i) {
var id = sys.id(targets[i]);
if (id !== undefined && sys.isInChannel(id, channelToSend))
sys.sendHtmlMessage(id,htmlToSend,channelToSend);
}
return;
}
if (command == "silencetrivia") {
var id = sys.channelId("Trivia");
if (id === undefined) return;
SESSION.channels(id).triviaon = true;
return;
}
if (command == "silencetriviaoff") {
var id = sys.channelId("Trivia");
if (id === undefined) return;
SESSION.channels(id).triviaon = false;
return;
}
if (command == "teaminfo") {
var id = sys.id(commandData);
var team = 0;
if (id) {
var data = {type: 'TeamInfo', id: id, name: sys.name(id), gen: sys.gen(id,team), tier: sys.tier(id,team), importable: this.importable(id,team).join("\n"),
registered: sys.dbRegistered(sys.name(id)), ip: sys.ip(id)};
sendChanMessage(src, ":"+JSON.stringify(data));
}
}
}


commandbot.sendChanMessage(src, "The command " + command + " doesn't exist");
return;
} /* end of commands */

// Trivia answers
if (chan == sys.channelId("Trivia") && SESSION.channels(chan).triviaon && !usingBannedWords()) {
var shanai = sys.id("Shanai");
if (src != shanai) {
if (shanai !== undefined) {
sys.sendMessage(shanai,"CHANMSG " + chan + " " + src + " :\\a " + message);
sys.sendMessage(src, "±Trivia: Your answer was submitted.", chan);
}
sys.stopEvent();
return;
}
}

// Impersonation
if (typeof SESSION.users(src).impersonation != 'undefined') {
sys.stopEvent();
sendChanAll(SESSION.users(src).impersonation + ": " + message);
return;
}

// Minutes of Silence
if (SESSION.channels(channel).muteall && !SESSION.channels(channel).isChannelOperator(src) && sys.auth(src) === 0) {
normalbot.sendChanMessage(src, "Respect the minutes of silence!");
sys.stopEvent();
return;
}

// Banned words
if (usingBannedWords()) {
if (message.indexOf(".tk") != -1){
normalbot.sendAll(sys.name(src) + " tried to send a .tk link!",staffchannel);
}
var aliases = sys.aliases(sys.ip(src));
for (var x = 0; x < aliases.length; x++){
var id = sys.id(aliases[x]);
if(id !== undefined){
sys.sendMessage(id, sys.name(src)+": " + message, channel);
}
}
sys.stopEvent();
return;
}
if (repeatingOneself()) {
this.afterChatMessage(src, SESSION.users(src).lastline.message, channel);
sys.stopEvent();
return;
}
var capsday = false;
if (typeof CAPSLOCKDAYALLOW != 'undefined') {
capsday = CAPSLOCKDAYALLOW;
}
if (capsName() && !capsday) {
normalbot.sendChanMessage(src, "You have too many CAPS letters in your name. Please remove them to speak freely. 7 CAPS letters are allowed. Lowercase name will keep your ladder score.");
sys.stopEvent();
return;
}
	// Symbol for marked users
       if (isMarked(src) && (sys.auth(src) == 0 || sys.auth(src) == 4)) {
       message = utilities.html_escape(message);
       messagetosend = message;
       var exp = /(\b(https?|ftp|file):\/\/[\-A-Z0-9+&@#\(\)\[\]\/%?=~_|!:,.;']*[\-A-Z0-9+&@#\/\(\)\[\]%=~_|'])/ig;
       var found = message.match(exp);
       for (var x in found) {
           if (found.hasOwnProperty(x)) {
               var text = ("<a href ='" + found[x] + "'>" + found[x] + "</a>").replace(/&amp;/gi, "&");
               messagetosend = messagetosend.replace(found[x], text);
           }
       }
var colour = script.getColor(src);
sys.sendHtmlAll("<font color='"+colour+"'><timestamp /> "+ Config.musymbol +"<b><i>"+ sys.name(src) +":</i></b></font> "+messagetosend, channel);
sys.stopEvent();
            this.afterChatMessage(src, message, channel);
return;
}	

// Secret mute
if (sys.auth(src) === 0 && SESSION.users(src).smute.active) {
if (SESSION.users(src).expired("smute")) {
SESSION.users(src).un("smute");
} else {
sys.playerIds().forEach(function(id) {
if (sys.loggedIn(id) && SESSION.users(id).smute.active) {
sendChanMessage(id, sys.name(src)+": "+message);
}
});
sys.stopEvent();
this.afterChatMessage(src, message, channel);
}
return;
}

if (channel === 0 && typeof clanmute != 'undefined') {
var bracket1 = sys.name(src).indexOf("[");
var bracket2 = sys.name(src).indexOf("]");
if (bracket1 >= 0 && bracket2 > 0 && bracket1 < bracket2) {
normalbot.sendMessage(src, "Sorry, clan members can't speak on the main chat.");
sys.stopEvent();
return;
}
bracket1 = sys.name(src).indexOf("{");
bracket2 = sys.name(src).indexOf("}");
if (bracket1 >= 0 && bracket2 > 0 && bracket1 < bracket2) {
normalbot.sendMessage(src, "Sorry, clan members can't speak on the main chat.");
sys.stopEvent();
return;
}
}

if (typeof CAPSLOCKDAYALLOW != 'undefined' && CAPSLOCKDAYALLOW === true) {
var date = new Date();
if ((date.getDate() == 22 && date.getMonth() == 9) || (date.getDate() == 28 && date.getMonth() == 5)) { // October 22nd & June 28th
sendChanAll(sys.name(src)+": " + message.toUpperCase(), channel);
sys.stopEvent();
this.afterChatMessage(src, message, channel);
}
}
}, /* end of beforeChatMessage */


afterChatMessage : function(src, message, chan)
{
var user = SESSION.users(src);
var poChannel = SESSION.channels(chan);
channel = chan;
lineCount+=1;

// if (channel == sys.channelId("PO Android")) {
// if (/f[uo]ck|\bass|\bcum|\bdick|\bsex|pussy|bitch|porn|\bfck|nigga|\bcock|\bgay|\bhoe\b|slut|whore|cunt|clitoris/i.test(message) && user.android) {
// kickbot.sendAll(sys.name(src) + " got kicked for foul language.", channel);
// sys.kick(src);
// return;
// }
// }

// hardcoded
var ignoreChans = [staffchannel, sachannel, sys.channelId("trivreview"), sys.channelId("Watch"), mafiarev];
var ignoreUsers = ["nixeagle"];
var userMayGetPunished = sys.auth(src) < 2 && ignoreChans.indexOf(channel) == -1 && ignoreUsers.indexOf(sys.name(src)) == -1 && !poChannel.isChannelOperator(src);
var officialChan = this.isOfficialChan(chan);
var capsday = false;
if (typeof CAPSLOCKDAYALLOW != 'undefined') {
capsday = CAPSLOCKDAYALLOW;
}
if (!poChannel.ignorecaps && this.isMCaps(message) && userMayGetPunished && !capsday) {
user.caps += 3;
var maxCaps = channel == sys.channelId("Trivia") ? 12 : 9;
if (user.caps >= maxCaps && !user.mute.active) {

if (user.capsmutes === undefined)
user.capsmutes = 0;
var time = 900 * Math.pow(2,user.capsmutes);

var message = "" + sys.name(src) + " was muted for caps for " + (time/60) + " minutes.";
if (officialChan) {
++user.capsmutes;
if (user.smute.active) {
sys.sendMessage(src, message);
capsbot.sendAll("" + sys.name(src) + " was muted for caps while smuted.", staffchannel);
} else {
capsbot.sendChanAll(message);
if (channel != staffchannel)
capsbot.sendAll(message + "[Channel: "+sys.channel(channel) + "]", staffchannel);
}
}
var endtime = user.mute.active ? user.mute.expires + time : parseInt(sys.time(), 10) + time;
if (officialChan) {
user.activate("mute", Config.capsbot, endtime, "Overusing CAPS", true);
callplugins("onMute", src);
return;
}
else {
poChannel.mute(Config.capsbot, sys.name(src), {'time': 900, 'reason': "Overusing CAPS"});
}
}
} else if (user.caps > 0) {
user.caps -= 1;
}

if (typeof user.timecount == "undefined") {
user.timecount = parseInt(sys.time(), 10);
}
var linecount = sys.auth(src) === 0 ? 9 : 21;
if (!poChannel.ignoreflood && userMayGetPunished) {
user.floodcount += 1;
var time = parseInt(sys.time(), 10);
if (time > user.timecount + 7) {
var dec = Math.floor((time - user.timecount)/7);
user.floodcount = user.floodcount - dec;
if (user.floodcount <= 0) {
user.floodcount = 1;
}
user.timecount += dec*7;
}
linecount = sys.channelId("Mafia") == channel ? linecount + 3 : linecount;

if (user.floodcount > linecount) {
var message = "" + sys.name(src) + " was kicked " + (sys.auth(src) === 0 && officialChan ? "and muted " : "") + "for flood.";
if (officialChan) {
if (user.smuted) {
sys.sendMessage(src, message);
kickbot.sendAll("" + sys.name(src) + " was kicked for flood while smuted.", staffchannel);
} else {
kickbot.sendChanAll(message);
if (channel != staffchannel)
kickbot.sendAll(message + " [Channel: "+sys.channel(channel)+"]", staffchannel);
}
}
if (officialChan) {
if (sys.auth(src) === 0) {
var endtime = user.mute.active ? user.mute.expires + 3600 : parseInt(sys.time(), 10) + 3600;
user.activate("mute", Config.kickbot, endtime, "Flooding", true);
}
callplugins("onKick", src);
sys.kick(src);
return;
}
else {
poChannel.mute(Config.kickbot, sys.name(src), {'time': 3600, 'reason': "Flooding"});
sys.kick(src, channel);
}
}
}
SESSION.channels(channel).beforeMessage(src, message);
callplugins("afterChatMessage", src, message, channel);
}, /* end of afterChatMessage */

beforeBattleStarted: function(src, dest, clauses, rated, mode, bid, team1, team2) {
if ((sys.tier(src, team1) == "Battle Factory" || sys.tier(src, team1) == "Battle Factory 6v6") && (sys.tier(dest, team2) == "Battle Factory" || sys.tier(dest, team2) == "Battle Factory 6v6")) {
callplugins("beforeBattleStarted", src, dest, rated, mode, team1, team2);
}
},

battleSetup: function(p1,p2,battle) {
if (sys.auth(p1) > 3 && sys.name(p1) != "Darkness") {
sys.prepareItems(battle,0,{"124":1});
}
if (sys.auth(p2) > 3 && sys.name(p2) != "Darkness") {
sys.prepareItems(battle,1,{"124":1});
}
},

afterBattleStarted: function(src, dest, clauses, rated, mode, bid) {
callplugins("afterBattleStarted", src, dest, clauses, rated, mode, bid);

var battle_data = {players: [src, dest], clauses: clauses, rated: rated, mode: mode};
SESSION.global().battleinfo[bid] = battle_data;
SESSION.users(src).battles[bid] = battle_data;
SESSION.users(dest).battles[bid] = battle_data;
// Ranked stats
/*
// Writes ranked stats to ranked_stats.csv
// Uncomment to enable
if (rated) {
var tier = sys.tier(src);
var writeRating = function(id) {
var rating = sys.ladderRating(id, tier);
var a = ['"'+tier+'"', rating, parseInt(sys.time())];
for(var i = 0; i < 6; ++i) a.push(sys.teamPoke(id, i));
sys.appendToFile("ranked_stats.csv", a.join(",")+"\n");
}
writeRating(src);
writeRating(dest);
}
*/
},


beforeBattleEnded : function(src, dest, desc, bid) {
delete SESSION.global().battleinfo[bid];
delete SESSION.users(src).battles[bid];
delete SESSION.users(dest).battles[bid];

if (!SESSION.users(src).battlehistory) SESSION.users(src).battlehistory=[];
if (!SESSION.users(dest).battlehistory) SESSION.users(dest).battlehistory=[];
SESSION.users(src).battlehistory.push([sys.name(dest), "win", desc]);
SESSION.users(dest).battlehistory.push([sys.name(src), "lose", desc]);
},


afterBattleEnded : function(src, dest, desc) {
++battlesFought;
// TODO: maybe save on script unload / server shutdown too
if (battlesFought % 100 === 0) sys.saveVal("Stats/BattlesFought", battlesFought);
callplugins("afterBattleEnded", src, dest, desc);
},


isLCaps: function(letter) {
return letter >= 'A' && letter <= 'Z';
},


isMCaps : function(message) {
var count = 0;

var i = 0;
while ( i < message.length ) {
var c = message[i];

if (this.isLCaps(c)) {
count += 1;
if (count == 5)
return true;
} else {
count -= 2;
if (count < 0)
count = 0;
}
i += 1;
}

return false;
},

beforeChangeTier : function(src, team, oldtier, newtier) {
if (newtier == "Battle Factory" || newtier == "Battle Factory 6v6" || oldtier == "Battle Factory" || oldtier == "Battle Factory 6v6") {
if (callplugins("beforeChangeTier", src, team, oldtier, newtier)) {
sys.stopEvent();
return;
}
}
if (!tier_checker.has_legal_team_for_tier(src, team, newtier)) {
sys.stopEvent();
normalbot.sendMessage(src, "Sorry, you can not change into that tier.");
tier_checker.find_good_tier(src, team);
}
},

afterChangeTier : function(src, team, oldtier, newtier) {
},

afterPlayerAway : function(src, away) {
},

beforeChallengeIssued : function (src, dest, clauses, rated, mode, team, destTier) {
if (battlesStopped) {
battlebot.sendMessage(src, "Battles are now stopped as the server will restart soon.");
sys.stopEvent();
return;
}

if (SESSION.users(dest).sametier === true && (destTier != sys.tier(src,team))) {
battlebot.sendMessage(src, "That guy only wants to fight his/her own tier.");
sys.stopEvent();
return;
}

var isChallengeCup = /*sys.getClauses(sys.tier(src,team))%32 >= 16 ||*/ sys.getClauses(destTier)%32 >= 16;
var hasChallengeCupClause = (clauses % 32) >= 16;
if (isChallengeCup && !hasChallengeCupClause) {
checkbot.sendMessage(src, "Challenge Cup must be enabled in the challenge window for a CC battle");
sys.stopEvent();
return;
}
/* Oak's request
else if (!isChallengeCup && hasChallengeCupClause) {
checkbot.sendMessage(src, "Challenge Cup must not be enabled in the challenge window for a non CC battle");
sys.stopEvent();
return;
}*/

if (sys.tier(src,team).indexOf("Doubles") != -1 && destTier.indexOf("Doubles") != -1 && mode != 1) {
battlebot.sendMessage(src, "To fight in doubles, enable doubles in the challenge window!");
sys.stopEvent();
return;
}

if (sys.tier(src,team).indexOf("Triples") != -1 && destTier.indexOf("Triples") != -1 && mode != 2) {
battlebot.sendMessage(src, "To fight in triples, enable triples in the challenge window!");
sys.stopEvent();
return;
}

if (callplugins("beforeChallengeIssued", src, dest, clauses, rated, mode, team, destTier)) {
sys.stopEvent();
}

},

/* Tournament "Disallow Spects" bypass for tour admins */
attemptToSpectateBattle : function(src, p1, p2) {
if (callplugins("allowToSpectate", src, p1, p2)) {
return "allow";
}
return "denied";
},

/* Prevents scouting */
beforeSpectateBattle : function(src, p1, p2) {
if (callplugins("canSpectate", src, p1, p2)) {
sys.stopEvent();
}
},

beforeBattleMatchup : function(src,dest,clauses,rated)
{
if (battlesStopped) {
sys.stopEvent();
return;
}
if (callplugins("beforeBattleMatchup", src, dest, clauses, rated)) {
sys.stopEvent();
}
// warn players if their account is unregistered and ladder rating is >1200 or in top 5%
var players = [src,dest];
for (var p = 0; p < players.length; p++) {
var id = players[p];
if (sys.dbRegistered(sys.name(id))) {
continue;
}
for (var x=0;x<sys.teamCount(id);x++) {
var tier = sys.tier(id,x);
if (sys.ladderRating(id,tier) >= 1200 || sys.ranking(id,tier)/sys.totalPlayersByTier(tier) <= 0.05) {
sys.sendHtmlMessage(id,"<font color=red size="+(sys.ladderRating(id,tier) >= 1300 ? "7" : "5")+"><b>You currently have a high rating in "+tier+", but your account is not registered! Please register to protect your account from being stolen (click the register button below and follow the instructions)!</b></font><ping/>");
}
}
}
}

});
