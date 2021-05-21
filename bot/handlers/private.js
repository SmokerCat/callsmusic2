const { Composer, InlineKeyboard } = require("grammy");
const { escape } = require("html-escaper");

const composer = new Composer();

composer.command("start", async (ctx) => {
  await ctx.reply(
    `<b>👋🏻 Hi ${escape(ctx.from.first_name)}!</b>

I am Aami💕..A song🎶 Stream Bot by @DARK_TELEGRAMER .You can play Music in Your Group voice chat with me☺. I am under Maintance,so if you feel Any uncomfirt Please report it to Creator!.I am An open source project.

The commands📚 I currently support are:

/play▶️ - play the replied audio file or YouTube video
/pause⏸ - pause the audio stream
/resume▶️ - resume the audio stream
/skip⏭ - skip the current audio stream
/stop⏺ - clear the queue and remove the userbot from the call`,
    {
      reply_markup: new InlineKeyboard()
        .url("🔈 Channel", "https://t.me/aamimusicaloffi")
        .url("Group 💬", "https://t.me/aamimusichat"),
    }
  );
});

module.exports = composer;
