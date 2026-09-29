const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const modeSelectScreen = document.getElementById('mode-select-screen');
const modeSelectBack = document.getElementById('mode-select-back');
const modeOptions = document.querySelectorAll('.mode-option');
const mainContainer = document.querySelector('.container');
const resultsContainer = document.getElementById('results-container');
const resultText = document.getElementById('result-text');
const restartBtn = document.getElementById('restart-btn');
const timerContainer = document.getElementById('timer-container');
const timerElement = document.getElementById('timer');
const exitButton = document.getElementById('exit-button');
const dimOverlay = document.getElementById('dim-overlay');
const replayButton = document.getElementById('replay-button');
const nextBtn = document.getElementById('next-button');
const overlayAnswer = document.getElementById('overlay-answer');
const overlayText = document.getElementById('overlay-text');
const chibiAssistant = document.getElementById('chibi-assistant');
const chibiClips = {
    'Ask.mp4': document.getElementById('chibi-ask'),
    'Wait.mp4': document.getElementById('chibi-wait'),
    'True.mp4': document.getElementById('chibi-true'),
    'Sad.mp4': document.getElementById('chibi-sad'),
    'Wait2.mp4': document.getElementById('chibi-wait2')
};
let activeChibiClip = null;
let chibiTransitionTimeout = null;
const overlayExplanation = document.getElementById('overlay-explanation');
const questionCardContainer = document.getElementById('question-card-container');
const answersContainer = document.getElementById('answers-container');
const scoreBoard = document.getElementById('score-board');
const correctCountElement = document.getElementById('correct-count');
const incorrectCountElement = document.getElementById('incorrect-count');
const menuButton = document.getElementById('menu-button');
const menuTray = document.getElementById('menu-tray');
const muteButton = document.getElementById('mute-button');
const muteIcon = document.getElementById('mute-icon');
const infoButton = document.getElementById('info-button');
const aboutMeOverlay = document.getElementById('about-me-overlay');
const endScreenOverlay = document.getElementById('end-screen-overlay');
const endScreenContainer = document.getElementById('end-screen-container');
const evaluationText = document.getElementById('evaluation-text');
const starRating = document.getElementById('star-rating');
const finalStatsText = document.getElementById('final-stats-text');
const avgTimeText = document.getElementById('avg-time-text');
const endReplayBtn = document.getElementById('end-replay-btn');
const endExitBtn = document.getElementById('end-exit-btn');

const themeMusic = new Audio('Theme.mp3');
const clickSound = new Audio('click.mp3');
const rightSound = new Audio('Right.mp3');
const falseSound = new Audio('False.mp3');
const tenSecondsSound = new Audio('10s.mp3');
const latGiaySound = new Audio('Latgiay.mp3');

themeMusic.loop = true;
themeMusic.volume = 0.3;
rightSound.volume = 0.3;
falseSound.volume = 0.2;
tenSecondsSound.volume = 0.3;
latGiaySound.volume = 0.5;
clickSound.volume = 0.3;

window.addEventListener('unhandledrejection', function (event) {
    if (event.reason && (event.reason.name === 'NotSupportedError' || event.reason.name === 'NotAllowedError')) {
        event.preventDefault();
    }
});

function safePlaySound(audio, rewind = true) {
    if (!audio) return;
    try {
        if (rewind) audio.currentTime = 0;
        const promise = audio.play();
        if (promise !== undefined) {
            promise.catch(err => {
                console.warn("Sound play prevented or file not supported:", err);
            });
        }
    } catch (e) {
        console.warn("Sound play error:", e);
    }
}

const GAME_CONFIG = Object.freeze({
    totalQuestions: 20,
    questionTime: 60,
    answerRevealDelay: 1500,
    nextQuestionDelay: 1000,
    answerAnimationDelay: 200,
    questionTypingSpeed: 25,
    answerTypingSpeed: 40,
    explanationTypingSpeed: 20
});

const totalQuestions = GAME_CONFIG.totalQuestions;
let score = 0;
let currentQuestionIndex = 0;
let timerInterval = null;
let shuffledQuestions = [];
let correctAnswers = 0;
let incorrectAnswers = 0;
let totalTimeSpent = 0;
let timeStartPerQuestion = 0;
let timerDeadline = 0;
let timerWarningPlayed = false;
let typeWriterToken = 0;
let activeTypewriterTimeout = null;
let selectedMode = 'dan';

function getQuestionsForMode(mode) {
    if (!Array.isArray(questions) || questions.length === 0) return [];

    if (mode === 'dan' || mode === 'normal') {
        const danQuestions = questions.filter(q => {
            if (q.modes && Array.isArray(q.modes)) return q.modes.includes('dan');
            if (q.mode) return q.mode === 'dan' || q.mode === 'all';
            return false;
        });
        if (danQuestions.length >= 10) return danQuestions;
        // Bộ câu hỏi tuyên truyền, phổ biến pháp luật lâm nghiệp cho Nhân dân (từ câu 46 đến 79)
        return questions.length > 45 ? questions.slice(45) : questions;
    } else if (mode === 'kiemlam' || mode === 'expert') {
        const klQuestions = questions.filter(q => {
            if (q.modes && Array.isArray(q.modes)) return q.modes.includes('kiemlam');
            if (q.mode) return q.mode === 'kiemlam' || q.mode === 'all';
            return false;
        });
        if (klQuestions.length >= 10) return klQuestions;
        // Kiểm tra kiến thức chuyên ngành Kiểm lâm: toàn bộ câu hỏi chuyên môn và pháp luật
        return questions;
    }
    return questions;
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startQuiz(mode = selectedMode) {
    selectedMode = mode;
    stopTimer();
    cancelTypeWriterEffects();
    endScreenOverlay.classList.remove('active');
    endScreenOverlay.style.display = 'none';

    score = 0;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    totalTimeSpent = 0;

    resultsContainer.style.display = 'none';
    timerContainer.style.display = 'block';
    exitButton.style.display = 'block';
    replayButton.style.display = 'block';
    chibiAssistant.style.display = 'block';
    nextBtn.style.display = 'none';
    overlayAnswer.style.display = 'none';
    overlayText.style.opacity = '0';
    overlayExplanation.style.opacity = '0';
    scoreBoard.classList.add('active');
    updateScoreBoard();

    const pool = getQuestionsForMode(selectedMode);
    shuffledQuestions = shuffle([...pool]).slice(0, Math.min(totalQuestions, pool.length));
    showNextQuestion();
}

function showNextQuestion() {
    stopTimer();
    cancelTypeWriterEffects();

    if (currentQuestionIndex < shuffledQuestions.length) {
        const q = shuffledQuestions[currentQuestionIndex];

        questionCardContainer.innerHTML = '';
        answersContainer.innerHTML = '';

        const questionElement = document.createElement('div');
        questionElement.classList.add('question-card');

        // Phân loại độ dài câu hỏi để tự động tối ưu cỡ chữ trên điện thoại
        const qLen = (q.question || '').length;
        if (qLen > 180) {
            questionElement.classList.add('q-extra-long');
        } else if (qLen > 100) {
            questionElement.classList.add('q-long');
        } else if (qLen > 55) {
            questionElement.classList.add('q-medium');
        } else {
            questionElement.classList.add('q-short');
        }

        const questionTextElement = document.createElement('div');
        questionTextElement.classList.add('question-text');
        questionElement.appendChild(questionTextElement);
        questionCardContainer.appendChild(questionElement);

        const answersElement = document.createElement('div');
        answersElement.classList.add('answers');
        answersContainer.appendChild(answersElement);

        playChibiVideo('Ask.mp4');

        typeWriterEffect(questionTextElement, `Câu ${currentQuestionIndex + 1}: ${q.question}`, () => {
            createAndShowAnswers(answersElement, q.options, q.correct);
        }, GAME_CONFIG.questionTypingSpeed);

    } else {
        showResults();
    }
}

function createAndShowAnswers(answersElement, options, correctAnswerText) {
    const answerLabels = ['A', 'B', 'C', 'D'];
    const indexedOptions = options.map((text, originalIndex) => ({
        id: String(originalIndex),
        text
    }));
    const shuffledOptions = shuffle(indexedOptions);
    const correctOption = indexedOptions.find(option => option.text === correctAnswerText);

    answersElement.dataset.correctAnswerId = correctOption ? correctOption.id : '';
    answersElement.innerHTML = shuffledOptions.map((option, index) => `
        <button class="answer-btn" data-answer-id="${option.id}">${answerLabels[index]}. ${option.text}</button>
    `).join('');

    answersElement.classList.add('visible');
    const answerButtons = Array.from(answersElement.children);
    let delay = 0;
    answerButtons.forEach((btn, index) => {
        setTimeout(() => {
            if (!btn.isConnected) return;
            btn.classList.add('show');
            if (index === answerButtons.length - 1 && answersElement.isConnected) {
                answerButtons.forEach(b => b.addEventListener('click', handleAnswer, { once: true }));
                startTimer();
            }
        }, delay);
        delay += GAME_CONFIG.answerAnimationDelay;
    });
}

function cancelTypeWriterEffects() {
    typeWriterToken++;
    if (activeTypewriterTimeout !== null) {
        clearTimeout(activeTypewriterTimeout);
        activeTypewriterTimeout = null;
    }
}

function typeWriterEffect(element, text, callback, speed = GAME_CONFIG.questionTypingSpeed) {
    cancelTypeWriterEffects();
    const token = typeWriterToken;
    let i = 0;
    element.textContent = '';

    function type() {
        if (token !== typeWriterToken || !element.isConnected) return;
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            activeTypewriterTimeout = setTimeout(type, speed);
        } else if (callback && token === typeWriterToken) {
            callback();
        }
    }
    type();
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    timerDeadline = 0;
    timerWarningPlayed = false;
}

function startTimer() {
    stopTimer();
    const questionTime = GAME_CONFIG.questionTime;
    timeStartPerQuestion = Date.now();
    timerDeadline = timeStartPerQuestion + questionTime * 1000;
    timerWarningPlayed = false;
    timerElement.textContent = questionTime;
    timerElement.style.color = '#ffc107';

    timerInterval = setInterval(() => {
        const remainingMs = Math.max(0, timerDeadline - Date.now());
        const timeLeft = Math.ceil(remainingMs / 1000);
        timerElement.textContent = timeLeft;

        if (timeLeft <= 10) {
            if (timeLeft === 10 && !timerWarningPlayed) {
                timerWarningPlayed = true;
                safePlaySound(tenSecondsSound, false);
            }
            timerElement.style.color = 'var(--incorrect-color)';
        }

        if (remainingMs <= 0) {
            stopTimer();
            totalTimeSpent += questionTime;
            handleAnswerTimeout();
        }
    }, 200);
}

function updateScoreBoard() {
    correctCountElement.textContent = `Đ ${correctAnswers}/${totalQuestions}`;
    incorrectCountElement.textContent = `S ${incorrectAnswers}/${totalQuestions}`;
}

function handleAnswer(event) {
    stopTimer();
    const timeEndPerQuestion = Date.now();
    const timeSpent = Math.min(GAME_CONFIG.questionTime, (timeEndPerQuestion - timeStartPerQuestion) / 1000);
    totalTimeSpent += timeSpent;
    const selectedBtn = event.currentTarget;
    const parentAnswers = selectedBtn.closest('.answers');
    const correctAnswerId = parentAnswers.dataset.correctAnswerId;

    Array.from(parentAnswers.children).forEach(btn => {
        btn.classList.add('disabled');
    });

    const selectedAnswerId = selectedBtn.dataset.answerId;
    if (selectedAnswerId === correctAnswerId) {
        selectedBtn.classList.add('correct');
        correctAnswers++;
        safePlaySound(rightSound);
        playChibiVideo('True.mp4');
        nextBtn.style.display = 'block';
    } else {
        selectedBtn.classList.add('incorrect');
        incorrectAnswers++;
        safePlaySound(falseSound);
        playChibiVideo('Sad.mp4');

        Array.from(parentAnswers.children).forEach(btn => {
            if (btn.dataset.answerId === correctAnswerId) {
                btn.classList.add('correct');
            }
        });

        setTimeout(() => {
            showCorrectAnswerOverlay(shuffledQuestions[currentQuestionIndex].correct);
        }, GAME_CONFIG.answerRevealDelay);
    }
    updateScoreBoard();
}

function handleAnswerTimeout() {
    stopTimer();
    const currentAnswers = answersContainer.querySelector('.answers');
    if (!currentAnswers) return;

    incorrectAnswers++;
    updateScoreBoard();

    const correctAnswerId = currentAnswers.dataset.correctAnswerId;
    const correctAnswerText = shuffledQuestions[currentQuestionIndex].correct;

    Array.from(currentAnswers.children).forEach(btn => {
        btn.classList.add('disabled');
        if (btn.dataset.answerId === correctAnswerId) {
            btn.classList.add('correct');
        }
    });
    playChibiVideo('Sad.mp4');
    showCorrectAnswerOverlay(correctAnswerText);
}

function showCorrectAnswerOverlay(correctAnswerText) {
    cancelTypeWriterEffects();
    dimOverlay.classList.add('active');
    safePlaySound(latGiaySound);

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const explanationText = currentQuestion.explanation;

    // Phân loại độ dài để tự động co giãn kích thước cuộn giấy và cỡ chữ trên mobile
    const ansLen = (correctAnswerText || '').length;
    const expLen = (explanationText || '').length;
    const totalLen = ansLen + expLen;

    overlayAnswer.classList.remove('ans-short', 'ans-medium', 'ans-long', 'ans-extra-long');
    if (totalLen > 220 || ansLen > 90) {
        overlayAnswer.classList.add('ans-extra-long');
    } else if (totalLen > 120 || ansLen > 50) {
        overlayAnswer.classList.add('ans-long');
    } else if (totalLen > 60 || ansLen > 30) {
        overlayAnswer.classList.add('ans-medium');
    } else {
        overlayAnswer.classList.add('ans-short');
    }

    overlayAnswer.classList.remove('active');
    overlayText.style.opacity = '0';
    overlayText.textContent = '';
    overlayExplanation.style.opacity = '0';
    overlayExplanation.textContent = '';
    overlayAnswer.style.display = 'flex';

    // Force reflow để kích hoạt lại animation unrollHorizontal mở từ giữa sang hai bên
    void overlayAnswer.offsetWidth;
    overlayAnswer.classList.add('active');

    const handleUnrollEnd = () => {
        overlayAnswer.removeEventListener('animationend', handleUnrollEnd);
        overlayText.style.opacity = '1';
        typeWriterEffect(overlayText, `Đáp án đúng là:\n${correctAnswerText}`, () => {
            if (explanationText) {
                overlayExplanation.style.opacity = '1';
                typeWriterEffect(overlayExplanation, explanationText, () => {
                    nextBtn.style.display = 'block';
                }, GAME_CONFIG.explanationTypingSpeed);
            } else {
                nextBtn.style.display = 'block';
            }
        }, GAME_CONFIG.answerTypingSpeed);
    };

    overlayAnswer.addEventListener('animationend', handleUnrollEnd);
}

function showResults() {
    pauseChibiVideos();
    questionCardContainer.innerHTML = '';
    answersContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    timerContainer.style.display = 'none';
    exitButton.style.display = 'none';
    replayButton.style.display = 'none';
    chibiAssistant.style.display = 'none';
    overlayAnswer.style.display = 'none';
    nextBtn.style.display = 'none';
    scoreBoard.classList.remove('active');

    endScreenOverlay.style.display = 'flex';
    setTimeout(() => endScreenOverlay.classList.add('active'), 50);

    displayEvaluation();
    displayStars();
    displayFinalStats();
    displayAvgTime();
}

function displayEvaluation() {
    let evaluation = '';
    if (correctAnswers <= 3) {
        evaluation = 'HỌC LẠI NGAY';
    } else if (correctAnswers >= 4 && correctAnswers <= 7) {
        evaluation = 'PHẢI HỌC THÊM';
    } else if (correctAnswers >= 8 && correctAnswers <= 11) {
        evaluation = 'TẠM ỔN ĐẤY';
    } else if (correctAnswers >= 12 && correctAnswers <= 15) {
        evaluation = 'GẦN BẰNG KIỂM LÂM';
    } else if (correctAnswers >= 16 && correctAnswers <= 19) {
        evaluation = 'CHUYÊN GIA LUẬT RỪNG';
    } else if (correctAnswers === 20) {
        evaluation = 'XUẤT SẮC';
    }
    evaluationText.textContent = evaluation;
}

function displayStars() {
    let starCount = 0;
    if (correctAnswers >= 4) starCount = 1;
    if (correctAnswers >= 8) starCount = 2;
    if (correctAnswers >= 12) starCount = 3;
    if (correctAnswers >= 16) starCount = 4;
    if (correctAnswers >= 20) starCount = 5;

    starRating.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const starImg = document.createElement('img');
        starImg.classList.add('star');
        starImg.src = i < starCount ? '1.webp' : '0.webp';
        starImg.alt = i < starCount ? 'Filled Star' : 'Empty Star';
        starRating.appendChild(starImg);
    }
}

function displayFinalStats() {
    finalStatsText.textContent = `Đúng: ${correctAnswers}/${totalQuestions}\nSai: ${incorrectAnswers}/${totalQuestions}`;
}

function displayAvgTime() {
    const avgTime = (totalTimeSpent / totalQuestions).toFixed(1);
    avgTimeText.textContent = `Thời gian trung bình:\n${avgTime}s/câu`;
}

function resetGame() {
    pauseChibiVideos();
    stopTimer();
    cancelTypeWriterEffects();
    modeSelectScreen.classList.remove('active');
    modeSelectScreen.style.display = 'none';
    mainContainer.style.display = 'none';
    startScreen.classList.remove('hidden');
    scoreBoard.classList.remove('active');
    replayButton.style.display = 'none';
    themeMusic.pause();
    themeMusic.currentTime = 0;
}

function pauseChibiVideos() {
    if (chibiTransitionTimeout) {
        clearTimeout(chibiTransitionTimeout);
        chibiTransitionTimeout = null;
    }
    Object.values(chibiClips).forEach(clip => {
        if (clip) {
            clip.classList.remove('active');
            try { clip.pause(); } catch (_) {}
        }
    });
    activeChibiClip = null;
}

function playChibiVideo(videoSrc) {
    try {
        const nextClip = chibiClips[videoSrc];
        if (!nextClip) return;

        // Nếu clip đang phát chính là clip này và đang chạy thì không ngắt
        if (activeChibiClip === nextClip && !nextClip.paused) {
            return;
        }

        const prevClip = activeChibiClip;
        activeChibiClip = nextClip;

        // Thiết lập trạng thái và vòng lặp
        nextClip.playbackRate = 1.0;
        nextClip.onended = null;

        if (videoSrc === 'Ask.mp4') {
            nextClip.loop = false;
            nextClip.onended = () => { playChibiVideo('Wait.mp4'); };
        } else if (videoSrc === 'Wait.mp4') {
            nextClip.loop = true;
            nextClip.playbackRate = 0.6;
        } else if (videoSrc === 'True.mp4' || videoSrc === 'Sad.mp4') {
            nextClip.loop = false;
            nextClip.onended = () => { playChibiVideo('Wait2.mp4'); };
        } else if (videoSrc === 'Wait2.mp4') {
            nextClip.loop = true;
        }

        try {
            nextClip.currentTime = 0;
        } catch (_) {}

        const playPromise = nextClip.play();
        if (playPromise !== undefined) {
            playPromise.catch(e => console.warn("Chibi clip play error:", videoSrc, e));
        }

        // Hiện clip mới
        nextClip.classList.add('active');

        // Giữ clip cũ thêm 70ms để clip mới vẽ khung hình đầu tiên, loại bỏ hoàn toàn gián đoạn/chớp đen
        if (prevClip && prevClip !== nextClip) {
            if (chibiTransitionTimeout) clearTimeout(chibiTransitionTimeout);
            chibiTransitionTimeout = setTimeout(() => {
                prevClip.classList.remove('active');
                try { prevClip.pause(); } catch (_) {}
            }, 70);
        }
    } catch (e) {
        console.warn("Video play exception:", e);
    }
}

Object.values(chibiClips).forEach(clip => {
    if (clip) {
        clip.addEventListener('error', (e) => {
            console.warn("Chibi video resource error caught safely:", e);
        });
    }
});

function setRealVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setRealVh();
window.addEventListener('resize', setRealVh);
window.addEventListener('orientationchange', setRealVh);

startButton.addEventListener('click', () => {
    safePlaySound(clickSound);
    startScreen.classList.add('hidden');
    modeSelectScreen.style.display = 'flex';
    requestAnimationFrame(() => modeSelectScreen.classList.add('active'));

    if (themeMusic.paused) {
        safePlaySound(themeMusic, false);
    }
});

modeOptions.forEach(option => {
    const pressOn = () => option.classList.add('pressed');
    const pressOff = () => option.classList.remove('pressed');

    option.addEventListener('pointerdown', pressOn);
    option.addEventListener('pointerup', pressOff);
    option.addEventListener('pointercancel', pressOff);
    option.addEventListener('pointerleave', pressOff);

    option.addEventListener('click', () => {
        safePlaySound(clickSound);
        option.classList.add('pressed');

        const mode = option.dataset.mode || 'dan';
        selectedMode = mode;

        setTimeout(() => {
            option.classList.remove('pressed');
            modeSelectScreen.classList.remove('active');
            setTimeout(() => {
                modeSelectScreen.style.display = 'none';
                mainContainer.style.display = 'flex';
                startQuiz(mode);
            }, 280);
        }, 100);
    });
});

modeSelectBack.addEventListener('click', () => {
    safePlaySound(clickSound);
    modeSelectScreen.classList.remove('active');
    setTimeout(() => {
        modeSelectScreen.style.display = 'none';
        startScreen.classList.remove('hidden');
    }, 280);
});

exitButton.addEventListener('click', () => { safePlaySound(clickSound); resetGame(); });
replayButton.addEventListener('click', () => { safePlaySound(clickSound); startQuiz(); });
restartBtn.addEventListener('click', () => { safePlaySound(clickSound); startQuiz(); });

nextBtn.addEventListener('click', () => {
    safePlaySound(clickSound);
    nextBtn.style.display = 'none';
    dimOverlay.classList.remove('active');

    overlayAnswer.classList.remove('active');
    overlayText.style.opacity = '0';
    overlayText.textContent = '';
    overlayExplanation.style.opacity = '0';
    overlayExplanation.textContent = '';

    const quizWrapper = document.querySelector('.quiz-wrapper');
    quizWrapper.classList.add('fade-out');

    setTimeout(() => {
        quizWrapper.classList.remove('fade-out');
        quizWrapper.style.opacity = '1';
        currentQuestionIndex++;
        showNextQuestion();
    }, 1000);
});

endReplayBtn.addEventListener('click', () => {
    safePlaySound(clickSound);
    endScreenOverlay.classList.remove('active');
    setTimeout(() => {
        endScreenOverlay.style.display = 'none';
        startQuiz();
    }, 1000);
});

endExitBtn.addEventListener('click', () => {
    safePlaySound(clickSound);
    endScreenOverlay.classList.remove('active');
    setTimeout(() => {
        endScreenOverlay.style.display = 'none';
        resetGame();
    }, 1000);
});

menuButton.addEventListener('click', () => {
    safePlaySound(clickSound);
    menuTray.classList.toggle('active');
    if (!menuTray.classList.contains('active')) {
        if (aboutMeOverlay.classList.contains('active')) {
            aboutMeOverlay.classList.remove('active');
            aboutMeOverlay.style.animation = 'none';
            cancelTypeWriterEffects();
            const contentContainer = aboutMeOverlay.querySelector('#about-me-content');
            if (contentContainer) contentContainer.style.opacity = '0';
        }
    }
});

muteButton.addEventListener('click', () => {
    const isMuting = !themeMusic.muted;
    themeMusic.muted = isMuting;
    rightSound.muted = isMuting;
    falseSound.muted = isMuting;
    tenSecondsSound.muted = isMuting;
    latGiaySound.muted = isMuting;
    clickSound.muted = isMuting;
    muteIcon.src = isMuting ? 'Mute.webp' : 'Volume.webp';
    if (!isMuting) safePlaySound(clickSound);
});

infoButton.addEventListener('click', () => {
    const isAlreadyActive = aboutMeOverlay.classList.contains('active');
    const contentContainer = aboutMeOverlay.querySelector('#about-me-content');
    const titleElement = aboutMeOverlay.querySelector('.letter-title');
    const bodyParagraphs = contentContainer.querySelectorAll('.letter-body p');

    cancelTypeWriterEffects();

    if (isAlreadyActive) {
        aboutMeOverlay.classList.remove('active');
        aboutMeOverlay.style.animation = 'none';
        contentContainer.style.opacity = '0';
        titleElement.textContent = '';
        bodyParagraphs.forEach(p => { p.textContent = ''; });
        safePlaySound(latGiaySound);
    } else {
        titleElement.textContent = '';
        bodyParagraphs.forEach(p => { p.textContent = ''; });

        const originalTitle = "Thông điệp từ người phát triển";
        const originalBodies = [
            "Chào các đồng nghiệp Kiểm lâm và những người yêu rừng!",
            "Dự án này không chỉ là một công cụ giải trí mà còn là tâm huyết của tôi, một Kiểm lâm viên, với mong muốn tạo ra một phương tiện học tập mới mẻ và thú vị.",
            "Qua mỗi câu hỏi, tôi hy vọng chúng ta có thể củng cố và trau dồi kiến thức về pháp luật về Lâm nghiệp, một hành trang không thể thiếu trong công tác bảo vệ và phát triển rừng.",
            "Chúc các bạn có những giây phút thư giãn và học hỏi thật hiệu quả./.",
            "Trân trọng,\nPhạm Tường Văn"
        ];

        aboutMeOverlay.style.animation = 'none';
        void aboutMeOverlay.offsetWidth;
        aboutMeOverlay.style.animation = '';
        aboutMeOverlay.classList.add('active');
        safePlaySound(latGiaySound);

        const onAnimationEnd = (e) => {
            if (e.target !== aboutMeOverlay) return;
            aboutMeOverlay.removeEventListener('animationend', onAnimationEnd);
            contentContainer.style.opacity = '1';

            let pIndex = 0;
            const typeNextParagraph = () => {
                if (pIndex < originalBodies.length) {
                    typeWriterEffect(bodyParagraphs[pIndex], originalBodies[pIndex], typeNextParagraph, 16);
                    pIndex++;
                }
            };
            typeWriterEffect(titleElement, originalTitle, typeNextParagraph, 35);
        };

        aboutMeOverlay.addEventListener('animationend', onAnimationEnd);
    }
});
