const { Telegraf } = require('telegraf');

const bot = new Telegraf('8160774464:AAEzu8xSICy9_c9PfI-tMIqZNKWWvN-EpWk');

bot.start((ctx) => {
    ctx.reply(`👋 *Это ваш FOMO Bot*

Поможет вам разобраться в сфере инвестиций в секторе DeFi.`, {
        parse_mode: 'Markdown'
    });

    setTimeout(() => showMainMenu(ctx), 500);
});

bot.command('menu', (ctx) => showMainMenu(ctx));

function showMainMenu(ctx) {
    return ctx.reply('🎯 Выбери нужный раздел:', {
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

// ==================== ОБРАБОТКА ====================
bot.on('callback_query', async (ctx) => {
    await ctx.answerCbQuery();
    const data = ctx.callbackQuery.data;

    if (data === 'anketa') {
        await ctx.reply(`📝 *Анкета участника*

👋 Добро пожаловать в школу DeFi «Чувство FOMO».

ТЕСТ ОБНОВЛЕНИЯ — ЕСЛИ ТЫ ВИДИШЬ ЭТУ СТРОКУ, ЗНАЧИТ НОВАЯ ВЕРСИЯ РАБОТАЕТ!

Пришлите свои ответы! Мы подготовим для вас стратегию обучения и развития в DeFi.`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '💬 Написать @yoromario', url: 'https://t.me/yoromario' }],
                    [{ text: '← Назад в меню', callback_data: 'back_to_menu' }]
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
console.log('✅ FOMO Bot — ТЕСТОВАЯ ВЕРСИЯ 13:20');