const questions = [
    "What is your favorite movie?",
    "What book have you read recently?",
    "What inspires you?",
    "What place do you dream of visiting?",
    "What is your favorite dish?",
    "What is your favorite color?",
    "What hobby would you like to try?",
    "What makes you happy?",
    "What is your favorite music?",
    "What does true friendship mean to you?",
    "What superpower would you like to have?",
    "What do you value most in people?",
    "What is your favorite childhood memory?",
    "What is your biggest dream?",
    "What do you do to relax?",
    "What is your favorite season?",
    "What movies or TV shows are you watching right now?",
    "What do you love to cook?",
    "What is your favorite sport?",
    "What is the most important thing in life for you?",
    "If you could live in any country, which one would you choose?",
    "What is your favorite holiday?",
    "What do you like to do in your free time?",
    "What is your favorite flower?",
    "What is your favorite city?",
    "What do you value in yourself?",
    "What advice would you give to your younger self?",
    "What does success mean to you?",
    "What is your favorite animal?",
    "What is your biggest dream for the future?"
];

let currentIndex = 0;

document.getElementById('wheel').addEventListener('click', function () {
    this.style.transform = 'rotate(' + (Math.random() * 3600) + 'deg)';
    setTimeout(() => {
        document.getElementById('question').innerText = (currentIndex + 1) + ". " + questions[currentIndex];
        currentIndex = (currentIndex + 1) % questions.length;
    }, 2000);
});
