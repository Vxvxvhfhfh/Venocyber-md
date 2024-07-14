//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://eozaatlas:8LKCwIhBLWoVRwO4@cluster0.bsajhct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "22663685468";
global.owner = process.env.OWNER_NUMBER || "22668685468";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "22663685468";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1MYnBRUFRTUDl1RjJGRDcrbVFHdHZjQktWRXNxc2psR1hqWWtOemtuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlJvblQrTHVCcndZd1JMaU1CaFp6c0NMRnJNVTlrRjVWVE5hWTB6M0pCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTUQ2SVRjQmVDV1lSZ3lGN2JtNEdBY2lLUVkwZEh5QWxtSWgzNFNtWldzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFWVltcXBud1BjU1BIZ3RaQnhDdDM5MzI1SjI4OVlqcTVmTWxSWGFUd1dNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGTFNad1JGaWxEMUpEMW1Gek84TTNEOFZrWDh6TzlFUmw1NTRBamFDazQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZRYTIxVTlBcXgxbXdUWHNHU1FoSHdpdVVmYXBDYmNab2dmaFJxV2ZjSFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk4xdEdtRGxsRjkrdmsrdlZ4eXZPUzVWa1crRWpJdmtQdUxSd3ByczIyWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGpoZTVhVkhnRjNJeFNLTEN3VjVPM3BqRWdYQzdCY3ZBYjRhQVdqZUhqND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5MeStPK1VncUxuQWpBSFVJek1UK05VaHgwK2o3akNPV1g0YjNXZXBRRzRwV21kWWNBdmtKbHZsemdwRlJsc3l1TVN2NjJKREh2YzhiMjMwQzZEM2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6Ii9UM1R1aFFLTXdvYWxYcUdjajhvVjFoSW1oUGNsdE1MMXhMRlRLeXgwa289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImY1c3k5Z2RQU1BDQUpoUTBYYkJkckEiLCJwaG9uZUlkIjoiMjk0YThjODMtZWRmYS00YjU4LTllYmYtODNkMzJlOTk1ZmIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhQNVI4WEd0M0V5UHh3TUJkdTY4Q1hwRXp1Yz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5NU2FmelhMU1FBYnppSlV1WWxZWFVtOEl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSU80eW9rSEVLZnV6clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNFRwRkZtSUZMZFE3VzFiSUx3NW5tVUdIaUFKUTlhcEt0MXg2NGpOUEkxZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaFlUeVZDTlhwSnZvRmhqM3p3dlVlUUI3eXZ3NUJEVjZzenNXWENGczZ1dmpGZUp1UWVEWFlYYzJWZVBDYWpFdDc5NElIMkw4emVVTCswVkFIbE1pREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlFycTdETXBSNXB6ajZXSVd6VDkwWkdIaGhTZDQrbVFwV0VVY2UrU0dUZ2RTYlpGTjFEeGJtRnVCM2dIQ1ovM0h4MVkvRWNtek81MXpXVDdvOXk5T2h3PT0ifSwibWUiOnsiaWQiOiIyMjY2MzY4NTQ2ODoxMkBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjY2MzY4NTQ2ODoxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlRTZSUlppQlMzVU8xdFd5QzhPWjVsQmg0Z0NVUFdxU3JkY2V1SXpUeU5ZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTU2NzE0fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "€",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🌀 MRPV 🌟BOT ☄️",
  author: process.env.PACK_AUTHER || "EozaAtlas",
  packname: process.env.PACK_NAME || "🌀MRPV🌀",
  botname: process.env.BOT_NAME || "Maestria rpverse",
  ownername: process.env.OWNER_NAME || "MRPV",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
