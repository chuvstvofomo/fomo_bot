const { Telegraf } = require('telegraf');

const bot = new Telegraf('8160774464:AAEzu8xSICy9_c9PfI-tMIqZNKWWvN-EpWk');

bot.start((ctx) => {
    ctx.reply(`👋 *Это ваш FOMO Bot*

Поможет вам разобраться в сфере инвестиций в секторе DeFi.`, {
        parse_mode: 'Markdown'
    });

    setTimeout(() => showMainMenu(ctx), 600);
});

bot.command('menu', (ctx) => showMainMenu(ctx));

function showMainMenu(ctx) {
    return ctx.reply('🎯 Главное меню', {
        parse_mode: 'Markdown',
        reply_markup: {
            inline_keyboard: [
                [{ text: '📝 Анкета', callback_data: 'anketa' }],
                [{ text: '🎓 Школа DEFI', callback_data: 'school_defi' }],
                [{ text: '⭐ FOMO VIP TEAM', callback_data: 'fomo_vip' }],
                [{ text: '📞 Личное сопровождение', callback_data: 'personal' }],
                [{ text: '✍️ Задать вопрос', callback_data: 'ask_question' }],
                [{ text: '🌐 Социальные сети', callback_data: 'social' }]
            ]
        }
    });
}

// ==================== ОСНОВНАЯ ЛОГИКА ====================
bot.on('callback_query', async (ctx) => {
    await ctx.answerCbQuery();
    const data = ctx.callbackQuery.data;

    if (data === 'school_defi') {
        await ctx.reply(`🎓 *Школа DEFI*

Добро пожаловать!`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📚 Программа курса', callback_data: 'course_program' }],
                    [{ text: '← Назад', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 
    else if (data === 'fomo_vip') {
        await ctx.reply('⭐ *FOMO VIP TEAM*', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '👑 Перейти в VIP канал', url: 'https://t.me/chuvstvofomo_vip' }],
                    [{ text: '← Назад', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 
    else if (data === 'personal') {
        await ctx.reply(`📞 *Личное сопровождение*

Индивидуальная работа с наставником.`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📩 Оставить заявку', callback_data: 'personal_request' }],
                    [{ text: '← Назад', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 
    else if (data === 'ask_question') {
        await ctx.reply('✍️ *Задать вопрос*', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '💬 Написать @yoromario', url: 'https://t.me/yoromario' }],
                    [{ text: '← Назад', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 
    else if (data === 'social') {
        await ctx.reply('🌐 *Социальные сети*', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Telegram', url: 'https://t.me/chuvstvofomo' }],
                    [{ text: 'Instagram', url: 'https://www.instagram.com/yo.romario' }],
                    [{ text: 'TikTok', url: 'https://www.tiktok.com/@yo.romario' }],
                    [{ text: 'YouTube', url: 'https://www.youtube.com/@chuvstvofomo' }],
                    [{ text: '← Назад', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 
    else if (data === 'back_to_menu') {
        showMainMenu(ctx);
    } 
    else {
        await ctx.reply('Раздел в разработке...');
    }
});

bot.launch();
console.log('✅ FOMO Bot запущен (чистая версия)');