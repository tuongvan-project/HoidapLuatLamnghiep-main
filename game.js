const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const modeSelectScreen = document.getElementById('mode-select-screen');
const modeSelectBack = document.getElementById('mode-select-back');
const modeOptions = document.querySelectorAll('.mode-option');
const danTopicScreen = document.getElementById('dan-topic-screen');
const danTopicBack = document.getElementById('dan-topic-back');
const danTopicCards = document.querySelectorAll('.dan-topic-card');
const activeModeBadge = document.getElementById('active-mode-badge');
const modeChibiGuide = document.getElementById('mode-chibi-guide');
const chibiCharacter = document.getElementById('chibi-character');
const chibiSpeechBubble = document.getElementById('chibi-speech-bubble');
const speechText = document.getElementById('speech-text');
const chibiBubbleClose = document.getElementById('chibi-bubble-close');
const mainContainer = document.querySelector('.container');
const resultsContainer = document.getElementById('results-container');
const resultText = document.getElementById('result-text');
const restartBtn = document.getElementById('restart-btn');
const timerContainer = document.getElementById('timer-container');
const timerElement = document.getElementById('timer');
const exitButton = document.getElementById('exit-button');
const confirmModalOverlay = document.getElementById('confirm-modal-overlay');
const confirmModalMessage = document.getElementById('confirm-modal-message');
const confirmNoBtn = document.getElementById('confirm-no-btn');
const confirmYesBtn = document.getElementById('confirm-yes-btn');
let pendingConfirmAction = null;
let pausedTimerRemainingMs = 0;
let wasTimerRunning = false;
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

const GAME_BACKGROUNDS = ['Background.webp', 'Backgroundv.png'];
const gameBgContainer = document.getElementById('game-bg-container');
const gameBgLayer1 = document.getElementById('game-bg-layer-1');
const gameBgLayer2 = document.getElementById('game-bg-layer-2');
let activeBgLayer = 1;
let currentBgIndex = 0;

function switchGameBackground(bgIndex, smooth = true) {
    if (!gameBgLayer1 || !gameBgLayer2) return;
    const targetIdx = ((bgIndex % GAME_BACKGROUNDS.length) + GAME_BACKGROUNDS.length) % GAME_BACKGROUNDS.length;
    const nextImage = GAME_BACKGROUNDS[targetIdx];
    currentBgIndex = targetIdx;

    const currentLayer = activeBgLayer === 1 ? gameBgLayer1 : gameBgLayer2;
    const nextLayer = activeBgLayer === 1 ? gameBgLayer2 : gameBgLayer1;

    if (!smooth) {
        currentLayer.style.backgroundImage = `url('${nextImage}')`;
        currentLayer.classList.add('visible');
        nextLayer.classList.remove('visible');
        return;
    }

    nextLayer.style.backgroundImage = `url('${nextImage}')`;
    requestAnimationFrame(() => {
        nextLayer.classList.add('visible');
        currentLayer.classList.remove('visible');
        activeBgLayer = activeBgLayer === 1 ? 2 : 1;
    });
}

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
let selectedMode = 'dan_tonghop';

const MODE_NAMES = {
    'kiemlam': 'Chế độ: Kiểm lâm',
    'expert': 'Chế độ: Kiểm lâm',
    'dan_tonghop': 'Nhân dân: Tổng hợp',
    'dan': 'Nhân dân: Tổng hợp',
    'normal': 'Nhân dân: Tổng hợp',
    'dan_churung': 'Nhân dân: Chủ rừng',
    'dan_cbls': 'Nhân dân: Kinh doanh, CBLS',
    'dan_dvr': 'Nhân dân: Cơ sở nuôi ĐVR'
};

function getQuestionsForMode(mode) {
    const klPool = window.questions_KL || (typeof questions_KL !== 'undefined' ? questions_KL : []);
    const chuRungPool = window.question_ChuRung || (typeof question_ChuRung !== 'undefined' ? question_ChuRung : []);
    const cblsPool = window.question_CBLS || (typeof question_CBLS !== 'undefined' ? question_CBLS : []);
    const dvrPool = window.question_DVR || (typeof question_DVR !== 'undefined' ? question_DVR : []);

    switch (mode) {
        case 'kiemlam':
        case 'expert':
            // 1. Chế độ Kiểm lâm: questions_KL + question_ChuRung + question_DVR + question_CBLS
            return [...klPool, ...chuRungPool, ...dvrPool, ...cblsPool];

        case 'dan_tonghop':
        case 'dan':
        case 'normal':
            // 2. Chế độ Nhân dân - Tổng hợp: cả 3 bộ câu hỏi: question_ChuRung, question_DVR, question_CBLS
            return [...chuRungPool, ...dvrPool, ...cblsPool];

        case 'dan_churung':
            // Chế độ Nhân dân - Chủ rừng: question_ChuRung
            return [...chuRungPool];

        case 'dan_cbls':
            // Chế độ Nhân dân - Truy xuất nguồn gốc lâm sản: question_CBLS
            return [...cblsPool];

        case 'dan_dvr':
            // Chế độ Nhân dân - Nuôi động vật rừng: question_DVR
            return [...dvrPool];

        default:
            return [...chuRungPool, ...dvrPool, ...cblsPool];
    }
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function openConfirmModal(actionType) {
    pendingConfirmAction = actionType;
    if (confirmModalMessage) {
        if (actionType === 'home') {
            confirmModalMessage.textContent = 'Bạn có chắc chắn muốn quay về Màn hình chính?';
        } else if (actionType === 'replay') {
            confirmModalMessage.textContent = 'Bạn có chắc chắn muốn Chơi lại?';
        }
    }

    if (timerInterval !== null) {
        wasTimerRunning = true;
        pausedTimerRemainingMs = Math.max(0, timerDeadline - Date.now());
        clearInterval(timerInterval);
        timerInterval = null;
        if (tenSecondsSound && !tenSecondsSound.paused) {
            try { tenSecondsSound.pause(); } catch (_) {}
        }
    } else {
        wasTimerRunning = false;
        pausedTimerRemainingMs = 0;
    }

    if (confirmModalOverlay) {
        confirmModalOverlay.style.display = 'flex';
        requestAnimationFrame(() => {
            confirmModalOverlay.classList.add('active');
        });
    }
}

function closeConfirmModal() {
    if (confirmModalOverlay) {
        confirmModalOverlay.classList.remove('active');
        setTimeout(() => {
            if (!confirmModalOverlay.classList.contains('active')) {
                confirmModalOverlay.style.display = 'none';
            }
        }, 250);
    }
}

function startQuiz(mode = selectedMode) {
    selectedMode = mode;
    stopTimer();
    cancelTypeWriterEffects();
    endScreenOverlay.classList.remove('active');
    endScreenOverlay.style.display = 'none';

    if (activeModeBadge) {
        activeModeBadge.textContent = MODE_NAMES[selectedMode] || 'Hỏi đáp pháp luật';
    }

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

    if (gameBgContainer) {
        gameBgContainer.classList.add('active');
        switchGameBackground(0, false);
    }

    const pool = getQuestionsForMode(selectedMode);
    shuffledQuestions = shuffle([...pool]).slice(0, Math.min(totalQuestions, pool.length));
    showNextQuestion();
}

function showNextQuestion() {
    stopTimer();
    cancelTypeWriterEffects();

    // Chuyển background êm ái sau mỗi 5 câu (câu 1-5, câu 6-10, câu 11-15, câu 16-20)
    const targetBgIndex = Math.floor(currentQuestionIndex / 5) % GAME_BACKGROUNDS.length;
    if (targetBgIndex !== currentBgIndex) {
        switchGameBackground(targetBgIndex, true);
    }

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
    stopChibiBlinkLoop();
    hideChibiSpeechBubble(true);
    modeSelectScreen.classList.remove('active');
    modeSelectScreen.style.display = 'none';
    if (danTopicScreen) {
        danTopicScreen.classList.remove('active');
        danTopicScreen.style.display = 'none';
    }
    mainContainer.style.display = 'none';
    if (gameBgContainer) {
        gameBgContainer.classList.remove('active');
    }
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
    requestAnimationFrame(() => {
        modeSelectScreen.classList.add('active');
        setTimeout(() => {
            playModeSelectionDialogueTour();
        }, 120);
    });

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
        stopChibiBlinkLoop();
        stopChibiIdleActionLoop();
        hideChibiSpeechBubble(true);

        const mode = option.dataset.mode || 'dan';

        if (mode === 'dan') {
            // Chuyển sang màn hình chọn 4 nhóm đối tượng Nhân dân
            setTimeout(() => {
                option.classList.remove('pressed');
                modeSelectScreen.classList.remove('active');
                setTimeout(() => {
                    modeSelectScreen.style.display = 'none';
                    if (danTopicScreen) {
                        danTopicScreen.style.display = 'flex';
                        requestAnimationFrame(() => {
                            danTopicScreen.classList.add('active');
                            setTimeout(() => {
                                playDanTopicDialogueTour();
                            }, 120);
                        });
                    }
                }, 280);
            }, 100);
            return;
        }

        // Chế độ Kiểm lâm: chuyển trực tiếp vào câu hỏi Kiểm lâm tổng hợp
        selectedMode = 'kiemlam';
        setTimeout(() => {
            option.classList.remove('pressed');
            modeSelectScreen.classList.remove('active');
            setTimeout(() => {
                modeSelectScreen.style.display = 'none';
                mainContainer.style.display = 'flex';
                startQuiz('kiemlam');
            }, 280);
        }, 100);
    });
});

if (danTopicCards) {
    danTopicCards.forEach(card => {
        const pressOn = () => card.classList.add('pressed');
        const pressOff = () => card.classList.remove('pressed');

        card.addEventListener('pointerdown', pressOn);
        card.addEventListener('pointerup', pressOff);
        card.addEventListener('pointercancel', pressOff);
        card.addEventListener('pointerleave', pressOff);

        card.addEventListener('click', () => {
            safePlaySound(clickSound);
            card.classList.add('pressed');
            stopChibiBlinkLoop();
            stopChibiIdleActionLoop();
            hideChibiSpeechBubble(true);

            const submode = card.dataset.submode || 'dan_tonghop';
            selectedMode = submode;

            setTimeout(() => {
                card.classList.remove('pressed');
                if (danTopicScreen) danTopicScreen.classList.remove('active');
                setTimeout(() => {
                    if (danTopicScreen) danTopicScreen.style.display = 'none';
                    mainContainer.style.display = 'flex';
                    startQuiz(submode);
                }, 280);
            }, 100);
        });
    });
}

if (danTopicBack) {
    danTopicBack.addEventListener('click', () => {
        safePlaySound(clickSound);
        stopChibiBlinkLoop();
        stopChibiIdleActionLoop();
        hideChibiSpeechBubble(true);

        if (danTopicScreen) danTopicScreen.classList.remove('active');
        setTimeout(() => {
            if (danTopicScreen) danTopicScreen.style.display = 'none';
            modeSelectScreen.style.display = 'flex';
            requestAnimationFrame(() => {
                modeSelectScreen.classList.add('active');
                setTimeout(() => playModeSelectionDialogueTour(), 120);
            });
        }, 280);
    });
}

modeSelectBack.addEventListener('click', () => {
    safePlaySound(clickSound);
    stopChibiBlinkLoop();
    stopChibiIdleActionLoop();
    hideChibiSpeechBubble(true);
    modeSelectScreen.classList.remove('active');
    setTimeout(() => {
        modeSelectScreen.style.display = 'none';
        startScreen.classList.remove('hidden');
    }, 280);
});

// ==========================================================================
// HỆ THỐNG TRỢ LÝ NỮ KIỂM LÂM & BONG BÓNG CHAT BUBBLECHAT.WEBP
// ==========================================================================

let chibiBlinkTimeout = null;
let chibiIdleActionTimeout = null;
let chibiDialogueToken = 0;
let chibiTypewriterTimeout = null;
let chibiStepDelayTimeout = null;
let isChibiSpeaking = false;
let isChibiTyping = false;
let currentDialogueQueue = [];
let currentDialogueIndex = 0;
let currentHighlightedCard = null;
let activeChibiScreen = 'mode'; // 'mode' hoặc 'dan_topic'

// Nội dung hội thoại chuẩn theo yêu cầu:
// Màn hình chọn chế độ chơi:
const MODE_SELECTION_DIALOGUES = [
    {
        id: 'mode_greeting',
        text: "👋 Chào bạn! Mình là nữ Kiểm lâm viên AI, thuộc Chi cục Kiểm lâm Tuyên Quang.\n\nRất vui được đón bạn đến với thế giới rừng xanh và cùng trải nghiệm những câu hỏi thú vị trong lĩnh vực lâm nghiệp.\n\nTrò chơi có trải nghiệm tốt nhất khi chơi trên máy tính, Laptop và nhớ bật âm thanh lên để thư giãn nhé! 😊",
        pauseAfter: 2800
    },
    {
        id: 'mode_intro',
        text: "Đầu tiên, mời bạn chọn chế độ chơi phù hợp:\n\nChế độ NHÂN DÂN: Nơi mọi người dân với những vai trò khác nhau trong xã hội tìm hiểu các quy định của pháp luật về lĩnh vực lâm nghiệp.\n\nChế độ KIỂM LÂM: Thử thách và kiểm tra kiến thức chuyên môn, nghiệp vụ của cán bộ Kiểm lâm và nhân viên bảo vệ rừng chuyên trách.",
        pauseAfter: 0
    }
];

// Màn hình chọn nhóm đối tượng Nhân dân:
const DAN_TOPIC_DIALOGUES = [
    {
        id: 'dan_churung',
        submode: 'dan_churung',
        text: "CHỦ RỪNG: Dành cho các tổ chức, hộ gia đình, cá nhân và cộng đồng dân cư có liên quan đến hoạt động quản lý, bảo vệ và sử dụng rừng. Cùng tìm hiểu các quyền, nghĩa vụ và quy định pháp luật về quản lý, bảo vệ, phát triển và sử dụng rừng.",
        pauseAfter: 2400
    },
    {
        id: 'dan_cbls',
        submode: 'dan_cbls',
        text: "KINH DOANH, CHẾ BIẾN LÂM SẢN: Dành cho các tổ chức, cá nhân hoạt động trong lĩnh vực kinh doanh, mua bán, vận chuyển và chế biến lâm sản. Cùng tìm hiểu các quy định pháp luật liên quan đến nguồn gốc lâm sản, hồ sơ lâm sản và trách nhiệm trong hoạt động kinh doanh, chế biến lâm sản.",
        pauseAfter: 2400
    },
    {
        id: 'dan_dvr',
        submode: 'dan_dvr',
        text: "CƠ SỞ NUÔI ĐỘNG VẬT RỪNG: Dành cho các tổ chức, cá nhân có hoạt động nuôi động vật rừng. Cùng tìm hiểu các quy định về quản lý loài, nguồn gốc động vật, hồ sơ, điều kiện nuôi và trách nhiệm của cơ sở trong quá trình nuôi, chăm sóc và quản lý động vật rừng theo quy định pháp luật.",
        pauseAfter: 2400
    },
    {
        id: 'dan_tonghop',
        submode: 'dan_tonghop',
        text: "TỔNG HỢP: Bạn muốn thử sức với nhiều nội dung khác nhau? Hãy chọn phần này để trả lời các câu hỏi tổng hợp về lĩnh vực lâm nghiệp, bao gồm các nội dung dành cho chủ rừng, kinh doanh và chế biến lâm sản, cơ sở nuôi động vật rừng cùng những kiến thức pháp luật lâm nghiệp chung.",
        pauseAfter: 0
    }
];

function setChibiMouthState(state) {
    if (!chibiCharacter) return;
    chibiCharacter.classList.remove('mouth-original', 'mouth-smile', 'mouth-talking');
    if (state === 'original') {
        chibiCharacter.classList.add('mouth-original');
    } else if (state === 'talking') {
        chibiCharacter.classList.add('mouth-talking');
    } else {
        chibiCharacter.classList.add('mouth-smile');
    }
}

function startChibiBlinkLoop() {
    stopChibiBlinkLoop();
    if (!chibiCharacter) return;

    function scheduleBlink() {
        const delay = Math.random() * 2400 + 2600;
        chibiBlinkTimeout = setTimeout(() => {
            const isScreenActive = (modeSelectScreen && modeSelectScreen.classList.contains('active')) ||
                                  (danTopicScreen && danTopicScreen.classList.contains('active'));
            if (!isScreenActive) return;
            triggerChibiBlink(() => {
                if (Math.random() < 0.25) {
                    setTimeout(() => triggerChibiBlink(scheduleBlink), 140);
                } else {
                    scheduleBlink();
                }
            });
        }, delay);
    }
    scheduleBlink();
}

function stopChibiBlinkLoop() {
    if (chibiBlinkTimeout) {
        clearTimeout(chibiBlinkTimeout);
        chibiBlinkTimeout = null;
    }
}

function triggerChibiBlink(callback) {
    if (!chibiCharacter) return;
    chibiCharacter.classList.add('blinking');
    setTimeout(() => {
        chibiCharacter.classList.remove('blinking');
        if (callback) callback();
    }, 150);
}

function startChibiIdleActionLoop() {
    stopChibiIdleActionLoop();

    function scheduleIdleAction() {
        const delay = Math.random() * 3000 + 5500;
        chibiIdleActionTimeout = setTimeout(() => {
            const isScreenActive = (modeSelectScreen && modeSelectScreen.classList.contains('active')) ||
                                  (danTopicScreen && danTopicScreen.classList.contains('active'));
            if (!isScreenActive) return;
            if (isChibiSpeaking || isChibiTyping) {
                scheduleIdleAction();
                return;
            }

            if (Math.random() < 0.5) {
                chibiCharacter.classList.add('turning-head');
                triggerChibiBlink();
                setTimeout(() => {
                    chibiCharacter.classList.remove('turning-head');
                    scheduleIdleAction();
                }, 1600);
            } else {
                chibiCharacter.classList.add('touching-hair');
                setChibiMouthState('smile');
                triggerChibiBlink();
                setTimeout(() => {
                    chibiCharacter.classList.remove('touching-hair');
                    scheduleIdleAction();
                }, 2600);
            }
        }, delay);
    }
    scheduleIdleAction();
}

function stopChibiIdleActionLoop() {
    if (chibiIdleActionTimeout) {
        clearTimeout(chibiIdleActionTimeout);
        chibiIdleActionTimeout = null;
    }
    if (chibiCharacter) {
        chibiCharacter.classList.remove('turning-head', 'touching-hair');
    }
}

function attachAssistantToScreen(screenType) {
    if (!modeChibiGuide) return;
    const targetParent = screenType === 'dan_topic' ? danTopicScreen : modeSelectScreen;
    if (targetParent && modeChibiGuide.parentElement !== targetParent) {
        targetParent.appendChild(modeChibiGuide);
    }
}

function updateBubbleSize(text) {
    if (!chibiSpeechBubble) return;
    const len = text ? text.length : 0;
    const vw = window.innerWidth;

    let targetW, targetH, targetFontSize, targetLineHeight;

    if (vw <= 580) {
        // Mobile portrait
        targetW = Math.min(Math.round(vw * 0.94), 350);
        if (len <= 190) {
            targetH = 230;
            targetFontSize = '0.78rem';
            targetLineHeight = '1.28';
        } else if (len <= 260) {
            targetH = 265;
            targetFontSize = '0.74rem';
            targetLineHeight = '1.25';
        } else {
            targetH = 310;
            targetFontSize = '0.71rem';
            targetLineHeight = '1.23';
        }
    } else if (vw <= 850) {
        // Tablet
        targetW = Math.min(Math.round(vw * 0.54), 430);
        if (len <= 190) {
            targetH = 255;
            targetFontSize = '0.82rem';
            targetLineHeight = '1.30';
        } else if (len <= 260) {
            targetH = 295;
            targetFontSize = '0.78rem';
            targetLineHeight = '1.27';
        } else {
            targetH = 350;
            targetFontSize = '0.75rem';
            targetLineHeight = '1.25';
        }
    } else {
        // Desktop (> 850px)
        if (len <= 190) {
            targetW = 440;
            targetH = 275;
            targetFontSize = '0.85rem';
            targetLineHeight = '1.32';
        } else if (len <= 260) {
            targetW = 480;
            targetH = 320;
            targetFontSize = '0.81rem';
            targetLineHeight = '1.28';
        } else {
            targetW = 510;
            targetH = 370;
            targetFontSize = '0.78rem';
            targetLineHeight = '1.26';
        }
    }

    chibiSpeechBubble.style.setProperty('--bubble-w', targetW + 'px');
    chibiSpeechBubble.style.setProperty('--bubble-h', targetH + 'px');
    chibiSpeechBubble.style.setProperty('--bubble-font-size', targetFontSize);
    chibiSpeechBubble.style.setProperty('--bubble-line-height', targetLineHeight);
}

function ensureBubbleFitsText() {
    if (!chibiSpeechBubble || !speechText) return;
    if (speechText.scrollHeight > speechText.clientHeight + 2) {
        const overflowDiff = speechText.scrollHeight - speechText.clientHeight;
        const currentH = parseInt(chibiSpeechBubble.style.getPropertyValue('--bubble-h')) || 280;
        const neededExpansion = Math.round(overflowDiff * 1.7) + 12;
        const newH = Math.min(currentH + neededExpansion, Math.round(window.innerHeight * 0.74));
        chibiSpeechBubble.style.setProperty('--bubble-h', newH + 'px');
    }
}

function stopChibiDialogue() {
    chibiDialogueToken++;
    if (chibiTypewriterTimeout) {
        clearTimeout(chibiTypewriterTimeout);
        chibiTypewriterTimeout = null;
    }
    if (chibiStepDelayTimeout) {
        clearTimeout(chibiStepDelayTimeout);
        chibiStepDelayTimeout = null;
    }
    isChibiTyping = false;
    isChibiSpeaking = false;
    if (currentHighlightedCard) {
        currentHighlightedCard.classList.remove('highlighted');
        currentHighlightedCard = null;
    }
    setChibiMouthState('smile');
}

function hideChibiSpeechBubble(immediate = false) {
    stopChibiDialogue();
    if (!chibiSpeechBubble) return;
    if (modeChibiGuide) {
        modeChibiGuide.classList.add('bubble-hidden');
    }

    if (immediate) {
        chibiSpeechBubble.classList.remove('active', 'closing');
        return;
    }

    chibiSpeechBubble.classList.add('closing');
    setTimeout(() => {
        chibiSpeechBubble.classList.remove('active', 'closing');
    }, 320);
}

function typeChibiDialogue(text, onComplete) {
    if (!speechText) return;

    chibiDialogueToken++;
    const token = chibiDialogueToken;

    if (chibiTypewriterTimeout) {
        clearTimeout(chibiTypewriterTimeout);
        chibiTypewriterTimeout = null;
    }

    isChibiTyping = true;
    isChibiSpeaking = true;
    setChibiMouthState('talking');

    speechText.textContent = '';
    updateBubbleSize(text);

    let charIdx = 0;
    const speed = 20; // 20ms mỗi ký tự chạy mượt mà

    function typeNextChar() {
        if (token !== chibiDialogueToken) return;

        if (charIdx < text.length) {
            speechText.textContent += text.charAt(charIdx);
            charIdx++;
            chibiTypewriterTimeout = setTimeout(typeNextChar, speed);
        } else {
            isChibiTyping = false;
            isChibiSpeaking = false;
            setChibiMouthState('smile');
            ensureBubbleFitsText();
            triggerChibiBlink();
            if (onComplete && token === chibiDialogueToken) {
                onComplete();
            }
        }
    }

    typeNextChar();
}

function advanceDialogueStep(nextIndex) {
    if (chibiStepDelayTimeout) {
        clearTimeout(chibiStepDelayTimeout);
        chibiStepDelayTimeout = null;
    }

    // Xóa toàn bộ nội dung cũ trước khi chạy chữ mới, không để lại chữ hay chồng chữ
    if (speechText) {
        speechText.textContent = '';
    }

    if (currentHighlightedCard) {
        currentHighlightedCard.classList.remove('highlighted');
        currentHighlightedCard = null;
    }

    if (nextIndex >= currentDialogueQueue.length) {
        return;
    }

    currentDialogueIndex = nextIndex;
    const item = currentDialogueQueue[nextIndex];

    // Gắn nổi bật vào nút lựa chọn tương ứng
    if (item.submode) {
        const card = document.querySelector(`.dan-topic-card[data-submode="${item.submode}"]`);
        if (card) {
            card.classList.add('highlighted');
            currentHighlightedCard = card;
        }
    }

    typeChibiDialogue(item.text, () => {
        if (item.pauseAfter > 0 && currentDialogueIndex + 1 < currentDialogueQueue.length) {
            chibiStepDelayTimeout = setTimeout(() => {
                advanceDialogueStep(currentDialogueIndex + 1);
            }, item.pauseAfter);
        }
    });
}

function startDialogueQueue(queue, screenType = 'mode') {
    activeChibiScreen = screenType;
    currentDialogueQueue = queue;
    currentDialogueIndex = 0;

    stopChibiDialogue();
    attachAssistantToScreen(screenType);

    if (modeChibiGuide) {
        modeChibiGuide.classList.remove('bubble-hidden');
    }
    if (chibiSpeechBubble) {
        chibiSpeechBubble.classList.remove('closing');
        chibiSpeechBubble.classList.add('active');
        safePlaySound(latGiaySound);
    }

    startChibiBlinkLoop();
    startChibiIdleActionLoop();

    advanceDialogueStep(0);
}

function skipOrCompleteDialogue() {
    if (!currentDialogueQueue || currentDialogueQueue.length === 0) return;
    const currentItem = currentDialogueQueue[currentDialogueIndex];
    if (!currentItem) return;

    if (isChibiTyping) {
        // Đang chạy chữ: bấm vào hiển thị ngay toàn bộ nội dung của lượt này
        chibiDialogueToken++;
        if (chibiTypewriterTimeout) {
            clearTimeout(chibiTypewriterTimeout);
            chibiTypewriterTimeout = null;
        }
        speechText.textContent = currentItem.text;
        isChibiTyping = false;
        isChibiSpeaking = false;
        setChibiMouthState('smile');
        ensureBubbleFitsText();
        triggerChibiBlink();

        if (chibiStepDelayTimeout) {
            clearTimeout(chibiStepDelayTimeout);
            chibiStepDelayTimeout = null;
        }
        if (currentItem.pauseAfter > 0 && currentDialogueIndex + 1 < currentDialogueQueue.length) {
            chibiStepDelayTimeout = setTimeout(() => {
                advanceDialogueStep(currentDialogueIndex + 1);
            }, currentItem.pauseAfter);
        }
    } else {
        // Đã hiển thị đủ: bấm tiếp chuyển ngay sang đoạn tiếp theo
        if (chibiStepDelayTimeout) {
            clearTimeout(chibiStepDelayTimeout);
            chibiStepDelayTimeout = null;
        }
        if (currentDialogueIndex + 1 < currentDialogueQueue.length) {
            advanceDialogueStep(currentDialogueIndex + 1);
        } else {
            hideChibiSpeechBubble(false);
        }
    }
}

function playModeSelectionDialogueTour() {
    if (!chibiCharacter || !chibiSpeechBubble || !speechText) return;
    hideChibiSpeechBubble(true);
    attachAssistantToScreen('mode');

    chibiCharacter.classList.remove('ready', 'turning-head', 'touching-hair');
    setChibiMouthState('smile');

    setTimeout(() => {
        if (!modeSelectScreen.classList.contains('active')) return;
        chibiCharacter.classList.add('ready');
        triggerChibiBlink();
    }, 450);

    setTimeout(() => {
        if (!modeSelectScreen.classList.contains('active')) return;
        startDialogueQueue(MODE_SELECTION_DIALOGUES, 'mode');
    }, 350);
}

function playDanTopicDialogueTour() {
    if (!chibiCharacter || !chibiSpeechBubble || !speechText) return;
    hideChibiSpeechBubble(true);
    attachAssistantToScreen('dan_topic');

    chibiCharacter.classList.remove('ready', 'turning-head', 'touching-hair');
    setChibiMouthState('smile');

    setTimeout(() => {
        if (!danTopicScreen.classList.contains('active')) return;
        chibiCharacter.classList.add('ready');
        triggerChibiBlink();
    }, 450);

    setTimeout(() => {
        if (!danTopicScreen.classList.contains('active')) return;
        startDialogueQueue(DAN_TOPIC_DIALOGUES, 'dan_topic');
    }, 350);
}

// Giữ lại hàm tương thích ngược nếu có chỗ gọi
function playChibiGuideGreeting() {
    playModeSelectionDialogueTour();
}

// Bấm vào khung bong bóng chat: hoàn thành chữ ngay hoặc chuyển sang đoạn tiếp theo
if (chibiSpeechBubble) {
    chibiSpeechBubble.addEventListener('click', (e) => {
        e.stopPropagation();
        safePlaySound(clickSound);
        skipOrCompleteDialogue();
    });
}

// Nút đóng khung thoại
if (chibiBubbleClose) {
    chibiBubbleClose.addEventListener('click', (e) => {
        e.stopPropagation();
        safePlaySound(clickSound);
        hideChibiSpeechBubble(false);
    });
}

// Chạm vào nhân vật Chibi để nghe hướng dẫn lại theo đúng màn hình hiện tại
if (chibiCharacter) {
    chibiCharacter.addEventListener('click', (e) => {
        e.stopPropagation();
        safePlaySound(clickSound);
        if (danTopicScreen && danTopicScreen.classList.contains('active')) {
            playDanTopicDialogueTour();
        } else {
            playModeSelectionDialogueTour();
        }
    });
}


exitButton.addEventListener('click', () => {
    safePlaySound(clickSound);
    openConfirmModal('home');
});

replayButton.addEventListener('click', () => {
    safePlaySound(clickSound);
    openConfirmModal('replay');
});

if (confirmNoBtn) {
    confirmNoBtn.addEventListener('click', () => {
        safePlaySound(clickSound);
        closeConfirmModal();

        if (wasTimerRunning && pausedTimerRemainingMs > 0) {
            timerDeadline = Date.now() + pausedTimerRemainingMs;
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
                    totalTimeSpent += GAME_CONFIG.questionTime;
                    handleAnswerTimeout();
                }
            }, 200);
        }
        wasTimerRunning = false;
        pausedTimerRemainingMs = 0;
        pendingConfirmAction = null;
    });
}

if (confirmYesBtn) {
    confirmYesBtn.addEventListener('click', () => {
        safePlaySound(clickSound);
        closeConfirmModal();
        wasTimerRunning = false;
        pausedTimerRemainingMs = 0;

        const action = pendingConfirmAction;
        pendingConfirmAction = null;

        if (action === 'home') {
            resetGame();
        } else if (action === 'replay') {
            startQuiz();
        }
    });
}
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
