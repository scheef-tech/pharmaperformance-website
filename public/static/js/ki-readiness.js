// Questionnaire data
const questions = [
    {
        "frage": "KI-Tools sind für mich ...",
        "antworten": [
            { "text": "mein tägliches Handwerkszeug", "punkte": 4 },
            { "text": "spannende Möglichkeiten zum Testen", "punkte": 3 },
            { "text": "noch ziemlich unbekanntes Terrain", "punkte": 1 },
            { "text": "für meine Arbeit nicht wichtig", "punkte": 0 }
        ]
    },
    {
        "frage": "ChatGPT, Copilot + Co. nutze ich ...",
        "antworten": [
            { "text": "täglich für verschiedene Aufgaben", "punkte": 4 },
            { "text": "ab und zu für bestimmte Projekte", "punkte": 3 },
            { "text": "bisher kaum", "punkte": 1 },
            { "text": "eigentlich gar nicht", "punkte": 0 }
        ]
    },
    {
        "frage": "Mein Wissen über KI ist ...",
        "antworten": [
            { "text": "top aktuell und umfassend", "punkte": 4 },
            { "text": "in bestimmten Bereichen recht gut", "punkte": 3 },
            { "text": "ausbaufähig", "punkte": 1 },
            { "text": "noch sehr begrenzt", "punkte": 0 }
        ]
    },
    {
        "frage": "Mit digitalen Prozessen komme ich ...",
        "antworten": [
            { "text": "bestens zurecht", "punkte": 4 },
            { "text": "gut klar", "punkte": 3 },
            { "text": "mit den Basics zurecht", "punkte": 1 },
            { "text": "eher weniger gut klar", "punkte": 0 }
        ]
    },
    {
        "frage": "Konkrete KI-Use Cases habe ich ...",
        "antworten": [
            { "text": "bereits gefunden und nutze sie", "punkte": 4 },
            { "text": "entdeckt und plane sie einzusetzen", "punkte": 3 },
            { "text": "noch nicht richtig definiert", "punkte": 1 },
            { "text": "noch nicht auf dem Schirm", "punkte": 0 }
        ]
    },
    {
        "frage": "Meine Einstellung zu KI ist ...",
        "antworten": [
            { "text": "total begeistert", "punkte": 4 },
            { "text": "neugierig und offen", "punkte": 3 },
            { "text": "eher abwartend", "punkte": 1 },
            { "text": "skeptisch", "punkte": 0 }
        ]
    },
    {
        "frage": "KI-Weiterbildungen habe ich ...",
        "antworten": [
            { "text": "schon mehrfach gemacht", "punkte": 4 },
            { "text": "hier und da mitgenommen", "punkte": 3 },
            { "text": "mir vorgenommen, aber noch nicht umgesetzt", "punkte": 1 },
            { "text": "bisher nicht auf der Agenda", "punkte": 0 }
        ]
    },
    {
        "frage": "Für Lernen von KI-Tools nehme ich mir ...",
        "antworten": [
            { "text": "regelmäßig gezielt Zeit", "punkte": 4 },
            { "text": "Zeit, wenn es passt", "punkte": 3 },
            { "text": "selten Zeit", "punkte": 1 },
            { "text": "keine Zeit", "punkte": 0 }
        ]
    },
    {
        "frage": "Ich kenne den EU AI Act ...",
        "antworten": [
            { "text": "sehr fundiert", "punkte": 4 },
            { "text": "grundlegend", "punkte": 3 },
            { "text": "oberflächlich", "punkte": 1 },
            { "text": "gar nicht", "punkte": 0 }
        ]
    },
    {
        "frage": "Ich will meine KI-Skills ...",
        "antworten": [
            { "text": "deutlich ausbauen", "punkte": 4 },
            { "text": "Schritt für Schritt verbessern", "punkte": 3 },
            { "text": "vielleicht etwas verbessern", "punkte": 1 },
            { "text": "erstmal so lassen", "punkte": 0 }
        ]
    }
];

const recommendations = [
    {
        "punktebereich": "0-15",
        "level": "KI-Beginner",
        "anteil_berufstaetige": "31%",
        "beschreibung": "Du stehst noch am Anfang deiner KI-Reise.",
        "empfehlungen": [
            "Such dir jemanden, der dich beim Einstieg unterstützen kann.",
            "Schnapp dir ein paar Videos zu KI-Grundlagen und Promptbeispielen.",
            "Probier ChatGPT für einfache Aufgaben aus."
        ],
        "quelle": "LinkedIn Skills Report 2024"
    },
    {
        "punktebereich": "16-24",
        "level": "KI-Entdecker",
        "anteil_berufstaetige": "46%",
        "beschreibung": "Du bist mittendrin und liegst im Durchschnittsbereich.",
        "empfehlungen": [
            "Tausch dich mit Kollegen über Erfahrungen aus.",
            "Vertief dein Wissen in den Bereichen, die für dich relevant sind.",
            "Abonniere und lese ein, zwei gute Newsletter."
        ],
        "quelle": "Salesforce Future of Work Report 2024"
    },
    {
        "punktebereich": "25-34",
        "level": "KI-Kenner",
        "anteil_berufstaetige": "19%",
        "beschreibung": "Du gehörst zu den KI-fitten Mitarbeitenden und übertriffst damit 77% deiner Kollegen.",
        "empfehlungen": [
            "Bleib auf dem Laufenden, auch über regulatorische Entwicklungen.",
            "Entwickle clevere KI-Workflows für komplexere Aufgaben.",
            "Teil dein Wissen und werde Teil einer KI-Community."
        ],
        "quelle": "Adobe Digital Trends Report 2024"
    },
    {
        "punktebereich": "35-40",
        "level": "KI-Pionier",
        "anteil_berufstaetige": "4%",
        "beschreibung": "Glückwunsch! Du gehörst zur Spitzengruppe.",
        "empfehlungen": [
            "Veranstalte KI-Webinare oder ein Promptathon, um bei anderen den KI-Funken zu zünden.",
            "Check innovative KI-Cases und starte mit Automation und AI-Agents.",
            "Positionier dich als KI-Experte in deinem Unternehmen."
        ],
        "quelle": "Gartner Digital Workplace Survey 2024"
    }
];

let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);
let totalPoints = 0;

// DOM Elements
const questionContainer = document.getElementById('question-container');
const navigationContainer = document.getElementById('navigation-container');
const progressBar = document.getElementById('progress-bar');
const resultContainer = document.getElementById('result-container');

function displayQuestion(index) {
    const question = questions[index];
    questionContainer.innerHTML = `
        <h2 class="text-2xl font-bold mb-6">Frage ${index + 1} von ${questions.length}</h2>
        <p class="text-xl mb-8">${question.frage}</p>
        <div class="space-y-4">
            ${question.antworten.map((answer, i) => `
                <button 
                    class="answer-button w-full rounded-lg border-2 transition-colors
                    ${answers[index] === i ? 'border-secondary-color bg-secondary-color/20' : 'border-gray-600 hover:border-secondary-color'}"
                    onclick="selectAnswer(${i})">
                    ${answer.text}
                </button>
            `).join('')}
        </div>
    `;

    updateNavigation();
    updateProgressBar();
}

function selectAnswer(answerIndex) {
    answers[currentQuestion] = answerIndex;
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function updateNavigation() {
    navigationContainer.innerHTML = `
        <div class="flex justify-start mt-8">
            <button 
                class="px-6 py-2 rounded-lg border-2 border-secondary-color
                ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary-color/20'}"
                onclick="previousQuestion()"
                ${currentQuestion === 0 ? 'disabled' : ''}>
                Zurück
            </button>
        </div>
    `;
}

function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion(currentQuestion);
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion(currentQuestion);
    }
}

function calculateTotalPoints() {
    return answers.reduce((total, answerIndex, questionIndex) => {
        return total + questions[questionIndex].antworten[answerIndex].punkte;
    }, 0);
}

function getRecommendation(points) {
    if (points <= 15) return recommendations[0];
    if (points <= 24) return recommendations[1];
    if (points <= 34) return recommendations[2];
    return recommendations[3];
}

function showResults() {
    const totalPoints = calculateTotalPoints();
    const recommendation = getRecommendation(totalPoints);

    questionContainer.style.display = 'none';
    navigationContainer.style.display = 'none';
    progressBar.style.display = 'none';

    resultContainer.innerHTML = `
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Dein KI-Readiness Ergebnis</h2>
            <div class="bg-secondary-color/20 p-8 rounded-lg mb-8">
                <h3 class="text-2xl font-bold mb-4">${recommendation.level}</h3>
                <p class="text-xl mb-4">${recommendation.beschreibung}</p>
                <p class="text-lg mb-6">Du gehörst zu den ${recommendation.anteil_berufstaetige} der Berufstätigen.</p>
            </div>
            
            <div class="text-left mb-8">
                <h4 class="text-xl font-bold mb-4">Empfehlungen für dich:</h4>
                <ul class="space-y-2">
                    ${recommendation.empfehlungen.map(rec => `
                        <li class="flex items-start">
                            <span class="text-secondary-color mr-2">•</span>
                            ${rec}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="text-sm text-gray-400">
                <p>Quelle: ${recommendation.quelle}</p>
            </div>
            
            <button 
                class="mt-8 px-6 py-2 rounded-lg bg-secondary-color hover:bg-secondary-color/80"
                onclick="restartQuestionnaire()">
                Fragebogen neu starten
            </button>
        </div>
    `;

    resultContainer.style.display = 'block';
}

function restartQuestionnaire() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    totalPoints = 0;

    questionContainer.style.display = 'block';
    navigationContainer.style.display = 'block';
    progressBar.style.display = 'block';
    resultContainer.style.display = 'none';

    displayQuestion(currentQuestion);
}

// Initialize the questionnaire
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(currentQuestion);
});