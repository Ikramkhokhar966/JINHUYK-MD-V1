//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/242065155487";
global.sudo = process.env.SUDO || "242067274660";
global.owner = process.env.OWNER_NUMBER || "242067274660";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU0xbUVQQWprUGpzVmpqOHdNVXIyZitIWmk4YzFTR3B3WnVKNDY0WTluWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BkNVdCZWVUWE02QTB3WHVvWnMvL296cEZDaW9sbFhOY0hkc0NQaE15dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTjNhQXhOcmJPRmpIWWxkcjN1b29HYnlPT0I0K0tyZ3ZUQm56M3pWK2tzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwUWtwekZUaWdrVkhEdHZ0RFBXUG03RXF4M01lNG9QSTFGMzlCNHJ0REcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHaGkyWVN6V09aYllIUXlWb1lyelJ2NVhxMFZFSG44NVZObVVRUkZmR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEemFEWDhGOExrcVJUM1d1ZUhKbVlKYkhOS251aldQdDQxaTR0R3pkakU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURYV1YrOHRZWS85R0pyTnJOeUhyT0lRYU15ZnI2cVYwY1NZNHQwOXNHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmdNV3dEdVI0MjRPdGtYa1gxWWd1MTlQWjJTb2lDcGNKdHhURWRMdlAwRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhQck1TS0FtWFlvUEpZY2U2VWZHdkd2T0dYMTg2OU5xeEdGWEdNNFpmSm1pNEUrMzliRUtSR09Dd2dOcmJiSC9CY29Jejc0OFY4MW0xK0ZxY2dRbUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM5LCJhZHZTZWNyZXRLZXkiOiJSL2JydHF5MitXZFNEc1pJRFNpTkxxK0tIZm9kenYyUWowdUVNMnBudCt3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXaE01WVFBcVNSNkFwTzczNXJmMk9nIiwicGhvbmVJZCI6ImUxM2U4MzJlLTliYjMtNDlmNC05OGUwLTFiM2VhOGUyY2JkYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOb05UWk1UQzJDOWxIVlNDb2VqUXMvckpZY289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0lWbU5FdHBlMjAxYWxDb2srU2xSL1huK0dnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZTSFdGWVhFIiwibWUiOnsiaWQiOiI5MjM0MjA0NTkwMjk6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSjMycnQ0RkVQdlp5TDBHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidFgyOEZkeCtFdGdsYTVpMFBvMkJkQWVNTzJVQ0VXOVBwZ0JGc0FmR0V5QT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiV1M3c1dzN0V5d2R2cldDZHlkVzhhRjN4eUM1cnlzYUJhWTFYOWs4MGVGTWNPUmFRRElXOUxWamp2Sm9oTHAwYktMejNxcW8ydnJQTFBzRktnTTNGQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjhIbnQxZDdDSWVzVjJRZE5nU05NaW1SQS9ybDJHYUYxYWpsTHJaK1hvclhIa280eXhESkplRjNseUt6andpYitSaW9WLzFBb1FWMU9OQW5ZYTEzVERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzNDIwNDU5MDI5OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYlY5dkJYY2ZoTFlKV3VZdEQ2TmdYUUhqRHRsQWhGdlQ2WUFSYkFIeGhNZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTczMDE4NX0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🍂𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍂",
  packname: process.env.PACK_NAME || "🍂𝐉𝐈𝐍𝐇𝐔𝐘𝐊-𝐌𝐃🍂",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🍁𝐊𝐀𝐍𝐆 𝐉𝐈𝐍𝐇𝐘𝐔𝐊🍁",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
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
