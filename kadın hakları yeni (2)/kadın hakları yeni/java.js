function searchSection() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var sections = document.querySelectorAll('section');
    var found = false;
    
    sections.forEach(function(section) {
        section.classList.remove('highlight');
        if (section.id.includes(input)) {
            found = true;
            section.scrollIntoView({ behavior: 'smooth' });
            section.classList.add('highlight');
            setTimeout(function() {
                section.classList.remove('highlight');
            }, 5000);
        }
    });
    
    var searchResult = document.getElementById('searchResult');
    if (found) {
        searchResult.classList.add('hidden');
    } else {
        searchResult.classList.remove('hidden');
    }
}
// değişiklik yapıldı
const quizQuestions = [
    {
        question: "Kadınların seçme ve seçilme hakkını ilk kez tanıyan ülke hangisidir?",
        options: ["Türkiye", "Fransa", "Yeni Zelanda", "ABD"],
        answer: "Yeni Zelanda"
    },
    {
        question: "Türkiye'de kadınlara seçme ve seçilme hakkı ne zaman verilmiştir?",
        options: ["1923", "1930", "1934", "1945"],
        answer: "1934"
    },
    {
        question: "Kadın hakları savunucusu Malala Yousafzai hangi ülkedendir?",
        options: ["Pakistan", "Hindistan", "Afganistan", "İran"],
        answer: "Pakistan"
    },
    {
        question: "Kadınların eşit işe eşit ücret almasını savunan uluslararası gün hangisidir?",
        options: ["8 Mart", "25 Kasım", "10 Aralık", "1 Mayıs"],
        answer: "8 Mart"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function openQuizModal() {
    document.getElementById('quizModal').style.display = 'block';
    loadQuestion();
}

function closeQuizModal() {
    document.getElementById('quizModal').style.display = 'none';
    resetQuiz();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');

    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';

        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsElement.appendChild(button);
        });

        resultElement.textContent = '';
        nextButton.style.display = 'none';
    } else {
        questionElement.textContent = `Oyun bitti! Puanınız: ${score}/${quizQuestions.length}`;
        optionsElement.innerHTML = '';
        nextButton.style.display = 'none';
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');

    if (selectedOption === currentQuestion.answer) {
        resultElement.textContent = "Doğru!";
        score++;
    } else {
        resultElement.textContent = `Yanlış! Doğru cevap: ${currentQuestion.answer}`;
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
}
// değişiklik soni

// değişiklik yapıldı
function submitForm(event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        console.log("Ad:", name);
        console.log("E-posta:", email);
        console.log("Konu:", subject);
        console.log("Mesaj:", message);

        document.getElementById('formResult').textContent = "Mesajınız başarıyla gönderildi!";
        document.getElementById('formResult').style.color = "green";

        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResult').textContent = "Lütfen tüm alanları doldurun!";
        document.getElementById('formResult').style.color = "red";
    }
}
// değişiklik soni