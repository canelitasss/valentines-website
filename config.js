// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Kimberly",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Para mi cachetona 💗",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💗', '💖', '💕', '💞', '💘', '💝'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Kimberly, ¿sabes cuánto te quiero, mi cachetona? 💗",                                    // First interaction
            yesBtn: "Sí, lo sé 💕",                                             // Text for "Yes" button
            noBtn: "No estoy segura 🙈",                                               // Text for "No" button
            secretAnswer: "¡No solo te quiero, te llevo en una parte muy bonita de mi corazón! ❤️"           // Secret hover message
        },
        second: {
            text: "¿Cuánto amor cabe en este corazón para ti? 💖",                          // For the love meter
            startText: "¡Todo este amor es para ti!",                                   // Text before the percentage
            nextBtn: "Descubrir más 💗"                                         // Text for the next button
        },
        third: {
            text: "Mi cachetona, ¿quieres descubrir tu sorpresa? 🎁", // The big question!
            yesBtn: "¡Sí, quiero! 💝",                                             // Text for "Yes" button
            noBtn: "¡Dame una pista! 🥺"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "¡Mi amor por ti no tiene límites, mi cachetona! 💗🥹",  // Shows when they go past 5000%
        high: "¡Hasta la luna y mucho más allá, Kimberly! 🌙💕",              // Shows when they go past 1000%
        normal: "¡Y todavía me queda muchísimo amor para darte! ❤️"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "¡Eres alguien muy especial para mí, Kimberly! 💖",
        message: "Mi cachetona, preparé esto para recordarte lo mucho que significas para mí. Ojalá pudiera darte un abrazo enorme ahora mismo. 💌",
        emojis: "💗💖🧸💝💕🌷❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#FCE4EC",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#F8BBD0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#EC6A9B",     // Button color (should stand out against the background)
        buttonHover: "#F48FB1",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#AD376B"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: false,                     // Music feature is enabled
        autoplay: false,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "", // Music streaming URL
        startText: "🎵 Escuchar nuestra canción",        // Button text to start music
        stopText: "🔇 Pausar la canción",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
