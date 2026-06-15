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

// ==================== ШКОЛА DEFI ====================
bot.on('callback_query', async (ctx) => {
    await ctx.answerCbQuery();
    const data = ctx.callbackQuery.data;

    if (data === 'school_defi') {
        await ctx.reply(`🎓 *Школа DEFI*

Добро пожаловать в нашу школу децентрализованных финансов!`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📚 Программа курса', callback_data: 'course_program' }],
                    [{ text: '💰 Узнать цены', callback_data: 'prices' }],
                    [{ text: '📝 Подать заявку', callback_data: 'apply_school' }],
                    [{ text: '✍️ Задать вопрос', callback_data: 'ask_school' }],
                    [{ text: '← Назад в меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    else if (data === 'course_program') {
        await ctx.reply(`📚 *Программа курса*`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📖 Модуль 1 — Основы DeFi', callback_data: 'module1' }],
                    [{ text: '🔗 Модуль 2 — DEX и торговля', callback_data: 'module2' }],
                    [{ text: '🛡️ Модуль 3 — Безопасность', callback_data: 'module3' }],
                    [{ text: '💼 Модуль 4 — Инвестиционные стратегии', callback_data: 'module4' }],
                    [{ text: '← Назад', callback_data: 'school_defi' }],
                    [{ text: '🏠 Главное меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 

    else if (data === 'prices') {
        await ctx.reply('💰 *Узнать цены*\n\nИнформация о стоимости курсов.');
    } 
    else if (data === 'apply_school') {
        await ctx.reply('📝 *Подать заявку на обучение*\n\nНапишите @yoromario');
    } 
    else if (data === 'ask_school') {
        await ctx.reply('✍️ *Задать вопрос по школе*', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '💬 Написать @yoromario', url: 'https://t.me/yoromario' }]
                ]
            }
        });
    } 

    // Остальные разделы
    else if (data === 'personal') {
        await ctx.reply(`📞 *Личное сопровождение*

Индивидуальная работа с наставником.

Помогаю инвесторам выстроить персональную стратегию, минимизировать риски и уверенно увеличивать капитал.`, {
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
                    [{ text: '📩 Оставить заявку', callback_data: 'personal_request' }],
                    [{ text: '← Назад в меню', callback_data: 'back_to_menu' }]
                ]
            }
        });
    } 
    else if (data === 'personal_request') {
        await ctx.reply(`✅ Заявка получена!\n\nДобрый день!\n\nСпасибо за интерес.\nСкоро с вами свяжутся.`);
    } 
    else if (data === 'back_to_menu') {
        showMainMenu(ctx);
    } 
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
});

bot.launch();
console.log('✅ Добавлена кнопка "Главное меню"');