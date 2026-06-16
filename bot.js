const { Telegraf } = require('telegraf');

const bot = new Telegraf('8160774464:AAEzu8xSICy9_c9PfI-tMIqZNKWWvN-EpWk');

bot.start((ctx) => {
    ctx.reply(`👋 *Чувство FOMO | Bot*

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
                [{ text: '👥 ЧУВСТВО FOMO', url: 'https://t.me/chuvstvofomo' }],
                [{ text: '📝 Анкета', callback_data: 'anketa' }],
                [{ text: '🎓 Школа DEFI', callback_data: 'school_defi' }],
                [{ text: '⭐ FOMO VIP TEAM', url: 'https://t.me/chuvstvofomo_vip' }],
                [{ text: '📞 Личное сопровождение', callback_data: 'personal' }],
                [{ text: '✍️ Задать вопрос', url: 'https://t.me/yoromario' }],
                [{ text: '🌐 Социальные сети', callback_data: 'social' }]
            ]
        }
    });
}

// ==================== ОБРАБОТКА ВСЕХ РАЗДЕЛОВ ====================
bot.on('callback_query', async (ctx) => {
    await ctx.answerCbQuery();
    const data = ctx.callbackQuery.data;

    // Анкета
    if (data === 'anketa') {
        await ctx.reply(`📝 *Анкета участника*

👋 Добро пожаловать в школу DeFi «Чувство FOMO».

Ответьте на несколько вопросов, чтобы мы могли подобрать для вас наиболее подходящий формат.

1. Ваш уровень знаний о криптовалюте:
   • 🟢 Новичок
   • 🔵 Базовый
   • 🔴 Продвинутый

2. Что сейчас актуально для вас?
   • 📉 Сбережения теряют ценность
   • 📈 Хочу увеличить капитал
   • 💰 Ищу пассивный доход
   • 🎯 Планирую финансовое будущее

3. Ваша главная цель?
   • 💵 Дополнительный доход
   • 🆓 Пассивный доход
   • 🛡️ Рост капитала

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

    // Школа DEFI
    else if (data === 'school_defi') {
        await ctx.reply(`🎓 *Школа DEFI*

Добро пожаловать в нашу школу децентрализованных финансов!`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📚 Программа курса', callback_data: 'course_program' }],
                    [{ text: '💰 Узнать цены', callback_data: 'prices' }],
                    [{ text: '📝 Оставить заявку', url: 'https://t.me/yoromario' }],
                    [{ text: '← Назад в меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    // Программа курса
    else if (data === 'course_program') {
        await ctx.reply(`📚 *Программа курса*

1. 📘 Модуль 1 — Основы DeFi
2. 🔄 Модуль 2 — DEX и торговля
3. 🛡️ Модуль 3 — Безопасность и защита активов
4. 💼 Модуль 4 — Инвестиционные стратегии`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📝 Оставить заявку на курс', url: 'https://t.me/yoromario' }],
                    [{ text: '← Назад в Школу DEFI', callback_data: 'school_defi' }],
                    [{ text: '🏠 Главное меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    // Цены
    else if (data === 'prices') {
        await ctx.reply(`💰 *Узнать цены*

*Вход в DeFi* — 19 990 ₽  
*DeFi Trader* — 39 990 ₽  
*DeFi Investor System* — 59 990 ₽`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📝 Оставить заявку', url: 'https://t.me/yoromario' }],
                    [{ text: '← Назад в Школу DEFI', callback_data: 'school_defi' }],
                    [{ text: '🏠 Главное меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    // FOMO VIP TEAM
    else if (data === 'fomo_vip') {
        await ctx.reply('⭐ *FOMO VIP TEAM*', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '👑 Перейти в VIP канал', url: 'https://t.me/chuvstvofomo_vip' }],
                    [{ text: '← Назад в меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    // Личное сопровождение
    else if (data === 'personal') {
        await ctx.reply(`📞 *Личное сопровождение*

Индивидуальная работа с наставником.

Помогаю инвесторам выстроить персональную стратегию, минимизировать риски и уверенно увеличивать капитал.`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📩 Оставить заявку', url: 'https://t.me/yoromario' }],
                    [{ text: '← Назад в меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    // Задать вопрос
    else if (data === 'ask_question') {
        await ctx.reply('✍️ *Задать вопрос*', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '💬 Написать @yoromario', url: 'https://t.me/yoromario' }],
                    [{ text: '← Назад в меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    // Социальные сети
    else if (data === 'social') {
        await ctx.reply('🌐 *Социальные сети*', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Telegram', url: 'https://t.me/chuvstvofomo' }],
                    [{ text: 'Instagram', url: 'https://www.instagram.com/yo.romario' }],
                    [{ text: 'TikTok', url: 'https://www.tiktok.com/@yo.romario' }],
                    [{ text: 'YouTube', url: 'https://www.youtube.com/@chuvstvofomo' }],
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
console.log('✅ FOMO Bot — Личное сопровождение и Социальные сети восстановлены');