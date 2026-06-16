const { Telegraf } = require('telegraf');

const bot = new Telegraf('8160774464:AAEzu8xSICy9_c9PfI-tMIqZNKWWvN-EpWk');

bot.start((ctx) => {
    ctx.replyWithPhoto(
        { url: 'https://files.grok.x.ai/grok/attachments/Neon%20Green%20Dark%20Modern%20Fitness%20YouTube%20Banner.jpeg' },
        {
            caption: `👋 *ЧУВСТВО FOMO*

Создай устойчивую систему управления капиталом, в которой прибыль становится закономерным результатом.

Что умеет этот бот?
Помогает выстроить систему управления капиталом, где доходность становится стабильным и прогнозируемым результатом.

Жми кнопку ниже, чтобы начать 👇`,
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🚀 Начать', callback_data: 'start_menu' }]
                ]
            }
        }
    );
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

// ==================== ОБРАБОТКА ВСЕХ РАЗДЕЛОВ ====================
bot.on('callback_query', async (ctx) => {
    await ctx.answerCbQuery();
    const data = ctx.callbackQuery.data;

    if (data === 'start_menu') {
        showMainMenu(ctx);
    } 

    // Анкета
    else if (data === 'anketa') {
        await ctx.reply(`📝 *Анкета участника*

👋 Добро пожаловать в школу DeFi «Чувство FOMO».

Ответьте на несколько вопросов, чтобы мы могли подобрать для вас наиболее подходящий формат.

1. Ваш уровень знаний о криптовалюте:
   • Новичок
   • Базовый
   • Продвинутый

2. Что сейчас актуально для вас?
   • Сбережения теряют ценность
   • Хочу увеличить капитал
   • Ищу пассивный доход
   • Планирую финансовое будущее

3. Ваша главная цель?
   • Дополнительный доход
   • Пассивный доход
   • Рост капитала

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
console.log('✅ FOMO Bot запущен (полная версия)');