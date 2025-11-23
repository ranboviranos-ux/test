// ======================================
// BURADA KİŞİLERİ VE PUANLARI DEĞİŞTİREBİLİRSİN
// ======================================

const personScores = {
    ahmet: 0,
    ayse: 0,
    mehmet: 0,
    zeynep: 0
};

const personNames = {
    omer: "ÖmerHoca", 
    inci: "İnciHoca",
    ali: "AliHoca",
    burak: "BurakHoca",
    halil: "HalilHoca",
    osman: "OsmanHoca",
    erdogan: "ErdoganHoca",
    mursit: "MürşitHoca",
    busra: "BüşraHoca",
    samil: "Şamil"

};

const personDescriptions = {
    omer: "yyyy",
    inci: "yyyy",
    ali: "yyyy",
    burak: "yyyy",
    halil: "yyyy",
    osman: "yyyy",
    erdogan: "yyyy",
    mursit: "yyyy",
    busra: "yyyy",
    samil: "yyyy"
};

const questions = [
    {
        question: "Boş vakitlerinde çalışmayı mı makara yapmayı mı seçersin?",
        options: [
            { text: "Arkadaşlarla dışarıda vakit geçiririm", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Evde kitap okur veya film izlerim", scores: { ahmet: 0, ayse: 3, mehmet: 2, zeynep: 1 } },
            { text: "Spor yapar veya doğada gezerim", scores: { ahmet: 2, ayse: 1, mehmet: 3, zeynep: 0 } },
            { text: "Yeni hobiler denerim", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "En çok hangi rengi seversin?",
        options: [
            { text: "Siyah - Simsiyah", scores: { ahmet: 2, ayse: 3, mehmet: 1, zeynep: 0 } },
            { text: "Kırmızı - Enerji ve tutku", scores: { ahmet: 3, ayse: 0, mehmet: 2, zeynep: 1 } },
            { text: "Yeşil - Doğa ve denge", scores: { ahmet: 1, ayse: 2, mehmet: 3, zeynep: 0 } },
            { text: "Sarı - Neşe ve yaratıcılık", scores: { ahmet: 0, ayse: 1, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Eğlenceli biri misin?",
        options: [
            { text: "Hemen çözüm aramaya başlarım", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Önce düşünür, sonra hareket ederim", scores: { ahmet: 1, ayse: 3, mehmet: 0, zeynep: 2 } },
            { text: "Başkalarından yardım isterim", scores: { ahmet: 0, ayse: 2, mehmet: 1, zeynep: 3 } },
            { text: "Alternatif yollar denerim", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } }
        ]
    },
    {
        question: "Zekana ne kadar güveniyorsun?",
        options: [
            { text: "Pop ve Dans müziği", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Klasik veya Caz", scores: { ahmet: 0, ayse: 3, mehmet: 2, zeynep: 1 } },
            { text: "Rock veya Metal", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Her türlü müzik dinlerim", scores: { ahmet: 1, ayse: 2, mehmet: 1, zeynep: 3 } }
        ]
    },
    {
        question: "Ciddi biri misindir?",
        options: [
            { text: "Şehir turu ve eğlence", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Sakin bir sahil kasabası", scores: { ahmet: 0, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Doğa ve macera", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Kültürel keşif ve sanat", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Lider ruhlu biri misin yoksa uyum mu sağlarsın?",
        options: [
            { text: "Fast food ve pratik yiyecekler", scores: { ahmet: 3, ayse: 0, mehmet: 2, zeynep: 1 } },
            { text: "Ev yemekleri", scores: { ahmet: 1, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Et ve protein ağırlıklı", scores: { ahmet: 2, ayse: 1, mehmet: 3, zeynep: 0 } },
            { text: "Deneysel ve farklı mutfaklar", scores: { ahmet: 0, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Sosyal medyayı nasıl kullanırsın?",
        options: [
            { text: "Aktif olarak paylaşım yaparım", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Sadece takip ederim", scores: { ahmet: 0, ayse: 3, mehmet: 2, zeynep: 1 } },
            { text: "Çok az kullanırım", scores: { ahmet: 1, ayse: 2, mehmet: 3, zeynep: 0 } },
            { text: "İlham almak için kullanırım", scores: { ahmet: 2, ayse: 0, mehmet: 1, zeynep: 3 } }
        ]
    },
    {
        question: "Giyim tarzın nasıldır?",
        options: [
            { text: "Partiler ve toplantılar", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Müze ve sergi gezileri", scores: { ahmet: 0, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Ekstrem sporlar", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Yaratıcı atölyeler", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Sayısal zekana mı sosyal zekana mı güveniyorsun",
        options: [
            { text: "İçgüdülerime", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Mantığa ve analize", scores: { ahmet: 1, ayse: 3, mehmet: 0, zeynep: 2 } },
            { text: "Deneyimlerime", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Başkalarının fikirlerine", scores: { ahmet: 0, ayse: 2, mehmet: 1, zeynep: 3 } }
        ]
    },
    {
        question: "Mizah seviyen nasıldır?",
        options: [
            { text: "Yaz - Deniz ve güneş", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Sonbahar - Huzur ve kitaplar", scores: { ahmet: 0, ayse: 3, mehmet: 2, zeynep: 1 } },
            { text: "Kış - Kar ve spor", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "İlkbahar - Yenilenme", scores: { ahmet: 1, ayse: 2, mehmet: 1, zeynep: 3 } }
        ]
    },
    {
        question: "Hangi hayvanı kendine daha yakın bulursun?",
        options: [
            { text: "Aslan - Lider ve cesur", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Baykuş - Bilge ve sakin", scores: { ahmet: 0, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Kurt - Güçlü ve bağımsız", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Kelebek - Özgür ve renkli", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Derste uyuyan kişilerin hocaya saygısızlık yaptığını düşünür müsün?",
        options: [
            { text: "Arkadaşlarla konuşurum", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Meditasyon ve nefes egzersizleri", scores: { ahmet: 0, ayse: 3, mehmet: 2, zeynep: 1 } },
            { text: "Spor yaparım", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Sanatsal aktivitelerle", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "kaldır",
        options: [
            { text: "Aksiyon ve macera", scores: { ahmet: 3, ayse: 0, mehmet: 2, zeynep: 1 } },
            { text: "Drama ve biyografi", scores: { ahmet: 1, ayse: 3, mehmet: 0, zeynep: 2 } },
            { text: "Bilim kurgu ve gerilim", scores: { ahmet: 2, ayse: 1, mehmet: 3, zeynep: 0 } },
            { text: "Komedi ve animasyon", scores: { ahmet: 0, ayse: 2, mehmet: 1, zeynep: 3 } }
        ]
    },
    {
        question: "Ne tür müzikler dinlersin",
        options: [
            { text: "Lider ve organizatör", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Araştırmacı ve planlayıcı", scores: { ahmet: 1, ayse: 3, mehmet: 0, zeynep: 2 } },
            { text: "Uygulayıcı ve yapıcı", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Yaratıcı ve tasarımcı", scores: { ahmet: 0, ayse: 2, mehmet: 1, zeynep: 3 } }
        ]
    },
    {
        question: "Sessiz sakin mi aktif biri misin",
        options: [
            { text: "Dinamik ve hareketli", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Sakin ve düzenli", scores: { ahmet: 0, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Zorlu ve rekabetçi", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Yaratıcı ve esnek", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "kaldır",
        options: [
            { text: "Kahve - Enerji", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Çay - Huzur", scores: { ahmet: 0, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Enerji içeceği - Performans", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Meyve suyu - Sağlık", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Sinirli biri misin",
        options: [
            { text: "Hızlı karar veririm", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Araştırıp karşılaştırırım", scores: { ahmet: 0, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "En kalitelisini alırım", scores: { ahmet: 2, ayse: 1, mehmet: 3, zeynep: 0 } },
            { text: "Özgün ve farklı şeyler ararım", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Futbol ve bunun gibi sporlar ilgini çeker mi?",
        options: [
            { text: "Hemen zinde ve hazırım", scores: { ahmet: 3, ayse: 0, mehmet: 2, zeynep: 1 } },
            { text: "Yavaş yavaş ısınırım", scores: { ahmet: 1, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Kahvaltı sonrası aktif olurum", scores: { ahmet: 2, ayse: 1, mehmet: 3, zeynep: 0 } },
            { text: "Güne pozitif başlarım", scores: { ahmet: 0, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    },
    {
        question: "Kendini disiplinli biri olarak tanımlayabilir misin?",
        options: [
            { text: "İletişim ve liderlik", scores: { ahmet: 3, ayse: 1, mehmet: 2, zeynep: 0 } },
            { text: "Analitik düşünce", scores: { ahmet: 1, ayse: 3, mehmet: 0, zeynep: 2 } },
            { text: "Fiziksel dayanıklılık", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Sanatsal yetenekler", scores: { ahmet: 0, ayse: 2, mehmet: 1, zeynep: 3 } }
        ]
    },
    {
        question: "Sessiz sakin birimisindir?",
        options: [
            { text: "Geniş sosyal alanlar", scores: { ahmet: 3, ayse: 1, mehmet: 0, zeynep: 2 } },
            { text: "Kütüphane ve çalışma odası", scores: { ahmet: 0, ayse: 3, mehmet: 1, zeynep: 2 } },
            { text: "Spor salonu veya atölye", scores: { ahmet: 2, ayse: 0, mehmet: 3, zeynep: 1 } },
            { text: "Sanat stüdyosu veya müzik odası", scores: { ahmet: 1, ayse: 2, mehmet: 0, zeynep: 3 } }
        ]
    }
];

// ======================================
// BURADAN SONRASI ÇALIŞMA KODU
// ======================================

let currentQuestionIndex = 0;
let selectedAnswers = {};

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    
    // Skorları sıfırla
    Object.keys(personScores).forEach(person => {
        personScores[person] = 0;
    });
    
    currentQuestionIndex = 0;
    selectedAnswers = {};
    
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;
    
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progressPercent + '%';
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(index);
        
        if (selectedAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.innerHTML = `
            <div class="option-label">${String.fromCharCode(65 + index)}</div>
            <div class="option-text">${option.text}</div>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    updateNavigation();
}

function selectOption(optionIndex) {
    selectedAnswers[currentQuestionIndex] = optionIndex;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    
    updateNavigation();
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = selectedAnswers[currentQuestionIndex] === undefined;
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.textContent = 'Sonuçları Gör';
    } else {
        nextBtn.textContent = 'Sonraki';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function nextQuestion() {
    if (selectedAnswers[currentQuestionIndex] !== undefined) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            calculateResults();
        }
    }
}

function calculateResults() {
    // Skorları hesapla
    Object.keys(selectedAnswers).forEach(questionIndex => {
        const selectedOptionIndex = selectedAnswers[questionIndex];
        const selectedOption = questions[questionIndex].options[selectedOptionIndex];
        
        Object.keys(selectedOption.scores).forEach(person => {
            personScores[person] += selectedOption.scores[person];
        });
    });
    
    // Sıralı kişiler
    const sortedPersons = Object.keys(personScores).sort((a, b) => personScores[b] - personScores[a]);
    
    const winningPerson = sortedPersons[0];
    const secondPerson = sortedPersons[1];
    
    showResults(winningPerson, secondPerson);
}

function showResults(winningPerson, secondPerson) {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';
    
    document.getElementById('winningPerson').textContent = personNames[winningPerson];
    document.getElementById('winningScore').textContent = personScores[winningPerson];
    document.getElementById('descriptionText').textContent = personDescriptions[winningPerson];
    document.getElementById('secondPerson').textContent = personNames[secondPerson];
}

function restartQuiz() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';

}
