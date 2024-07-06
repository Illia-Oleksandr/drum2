const questions = [
    "What is your favorite thing in your home?",
    "How do you choose new hobbies or interests?",
    "What do you love most about your friends?",
    "How do you deal with failures and mistakes?",
    "What do you consider your greatest talent?",
    "How do you maintain a healthy lifestyle?",
    "What do you love most about your personality?",
    "How do you deal with negative emotions?",
    "What do you consider your greatest achievement in life?",
    "How do you stay motivated to achieve your goals?",
];

let currentIndex = 0;

document.getElementById('wheel').addEventListener('click', function () {
    this.style.transform = 'rotate(' + (Math.random() * 3600) + 'deg)';
    setTimeout(() => {
        document.getElementById('question').innerText = (currentIndex + 1) + ". " + questions[currentIndex];
        currentIndex = (currentIndex + 1) % questions.length;
    }, 2000);
});
