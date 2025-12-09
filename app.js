// Application State
let currentView = 'plans';
let currentPlan = null;
let currentWorkout = null;
let currentExerciseIndex = 0;
let currentSectionIndex = 0;
let timerInterval = null;
let timeRemaining = 0;
let isTimerRunning = false;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderCalendar();
    updateProgress();
});

// View Management
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    
    // Show selected view
    document.getElementById(viewName + 'View').classList.add('active');
    event.target.classList.add('active');
    
    currentView = viewName;
    
    // Refresh view-specific content
    if (viewName === 'calendar') {
        renderCalendar();
    } else if (viewName === 'progress') {
        updateProgress();
    }
}

// Plan Selection
function selectPlan(planId) {
    currentPlan = TRAINING_PLANS[planId];
    
    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Find today's workout or closest upcoming workout
    const todayStr = formatDate(today);
    let workout = currentPlan.workouts.find(w => w.date === todayStr);
    
    if (!workout) {
        // Find next upcoming workout
        workout = currentPlan.workouts.find(w => new Date(w.date) >= today);
        if (!workout) {
            // If no upcoming, show first workout
            workout = currentPlan.workouts[0];
        }
    }
    
    startWorkout(workout);
}

// Start Workout
function startWorkout(workout) {
    currentWorkout = workout;
    currentSectionIndex = 0;
    currentExerciseIndex = 0;
    
    // Update header
    document.getElementById('workoutPhase').textContent = workout.phase;
    document.getElementById('workoutTitle').textContent = workout.title;
    
    // Render first exercise
    renderExercise();
    
    // Show workout view
    document.getElementById('workoutView').classList.add('active');
    document.getElementById('plansView').classList.remove('active');
}

// Render Exercise
function renderExercise() {
    const section = currentWorkout.sections[currentSectionIndex];
    const exercise = section.exercises[currentExerciseIndex];
    
    const container = document.getElementById('exerciseContainer');
    
    // Left column: Demo and timer/reps
    let leftColumn = `
        <div class="exercise-demo-column">
            <div class="section-name">${section.name}</div>
            <h2 class="exercise-name">${exercise.name}</h2>
            
            <div class="exercise-demo">
                <div class="demo-placeholder">
                    🎬 Exercise demonstration<br>video will appear here
                </div>
            </div>
    `;
    
    // Add timer or reps display
    if (exercise.type === 'time') {
        leftColumn += `
            <div class="timer-display">
                <div class="timer-circle">
                    <div class="timer-number" id="timerDisplay">${exercise.duration}</div>
                </div>
                <div class="timer-label">SECONDS</div>
            </div>
        `;
        timeRemaining = exercise.duration;
    } else if (exercise.type === 'sets') {
        leftColumn += `
            <div class="timer-display">
                <div class="timer-circle">
                    <div class="timer-number" id="timerDisplay">${exercise.duration}</div>
                </div>
                <div class="timer-label">${exercise.sets} SETS × SECONDS</div>
            </div>
        `;
        timeRemaining = exercise.duration;
    } else if (exercise.type === 'reps') {
        leftColumn += `
            <div class="reps-display">
                <div class="reps-number">${exercise.reps}</div>
                <div class="reps-label">REPETITIONS</div>
            </div>
        `;
    }
    
    leftColumn += `</div>`; // Close left column
    
    // Right column: Instructions and key points
    const rightColumn = `
        <div class="exercise-content-column">
            <div class="exercise-instructions">
                <h4>How to do it:</h4>
                <ul>
                    ${exercise.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ul>
            </div>
            
            <div class="exercise-instructions" style="background: rgba(255, 107, 53, 0.1); border-color: var(--accent);">
                <h4>Key Points:</h4>
                <ul>
                    ${exercise.keyPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    container.innerHTML = leftColumn + rightColumn;
    
    // Reset timer state
    stopTimer();
    isTimerRunning = false;
    document.getElementById('startStopBtn').textContent = 'Start';
}

// Timer Functions
function toggleTimer() {
    if (isTimerRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isTimerRunning = true;
    document.getElementById('startStopBtn').textContent = 'Pause';
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById('timerDisplay').textContent = timeRemaining;
        
        if (timeRemaining <= 0) {
            stopTimer();
            celebrate();
            // Auto-advance to next exercise after 2 seconds
            setTimeout(() => {
                nextExercise();
            }, 2000);
        }
    }, 1000);
}

function stopTimer() {
    isTimerRunning = false;
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    const btn = document.getElementById('startStopBtn');
    if (btn) {
        btn.textContent = 'Start';
    }
}

// Navigation
function nextExercise() {
    stopTimer();
    
    const section = currentWorkout.sections[currentSectionIndex];
    
    if (currentExerciseIndex < section.exercises.length - 1) {
        currentExerciseIndex++;
    } else if (currentSectionIndex < currentWorkout.sections.length - 1) {
        currentSectionIndex++;
        currentExerciseIndex = 0;
    } else {
        // Workout complete
        alert('Section complete! Great job!');
        return;
    }
    
    renderExercise();
}

function previousExercise() {
    stopTimer();
    
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
    } else if (currentSectionIndex > 0) {
        currentSectionIndex--;
        const section = currentWorkout.sections[currentSectionIndex];
        currentExerciseIndex = section.exercises.length - 1;
    } else {
        // At the beginning
        return;
    }
    
    renderExercise();
}

// Complete Workout
function completeWorkout() {
    if (confirm('Mark this workout as complete?')) {
        const workoutKey = `${currentWorkout.date}_completed`;
        localStorage.setItem(workoutKey, 'true');
        
        celebrate('🎉');
        
        setTimeout(() => {
            showView('progress');
            updateProgress();
        }, 1500);
    }
}

// Calendar State
let currentCalendarMonth = 11; // December (0-indexed)
let currentCalendarYear = 2025;

// Calendar Rendering
function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const monthYear = document.getElementById('calendarMonthYear');
    
    // Update month/year display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    monthYear.textContent = `${monthNames[currentCalendarMonth]} ${currentCalendarYear}`;
    
    let html = '';
    
    // Calendar headers
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        html += `<div class="calendar-header">${day}</div>`;
    });
    
    // Get first and last day of current month
    const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1);
    const lastDay = new Date(currentCalendarYear, currentCalendarMonth + 1, 0);
    const startDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    // Get today for highlighting
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startDayOfWeek; i++) {
        html += '<div class="calendar-day empty"></div>';
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(currentCalendarYear, currentCalendarMonth, day);
        const dateStr = formatDate(currentDate);
        const workout = currentPlan ? currentPlan.workouts.find(w => w.date === dateStr) : null;
        const isCompleted = localStorage.getItem(`${dateStr}_completed`) === 'true';
        
        const isToday = currentDate.getTime() === today.getTime();
        
        let classes = 'calendar-day';
        if (workout) classes += ' has-workout';
        if (isCompleted) classes += ' completed';
        if (isToday) classes += ' today';
        
        html += `
            <div class="${classes}" ${workout ? `onclick="loadWorkoutByDate('${dateStr}')"` : ''}>
                <div class="day-number">${day}</div>
                ${workout ? `<div class="day-workout">${workout.title}</div>` : ''}
            </div>
        `;
    }
    
    grid.innerHTML = html;
}

function previousMonth() {
    currentCalendarMonth--;
    if (currentCalendarMonth < 0) {
        currentCalendarMonth = 11;
        currentCalendarYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentCalendarMonth++;
    if (currentCalendarMonth > 11) {
        currentCalendarMonth = 0;
        currentCalendarYear++;
    }
    renderCalendar();
}

function loadWorkoutByDate(dateStr) {
    if (!currentPlan) {
        currentPlan = TRAINING_PLANS['core-bosu-9week'];
    }
    
    const workout = currentPlan.workouts.find(w => w.date === dateStr);
    if (workout) {
        startWorkout(workout);
    }
}

// Progress Tracking
function updateProgress() {
    if (!currentPlan) {
        currentPlan = TRAINING_PLANS['core-bosu-9week'];
    }
    
    const totalWorkouts = currentPlan.workouts.length;
    let completedCount = 0;
    
    currentPlan.workouts.forEach(workout => {
        const workoutKey = `${workout.date}_completed`;
        if (localStorage.getItem(workoutKey) === 'true') {
            completedCount++;
        }
    });
    
    const percentage = Math.round((completedCount / totalWorkouts) * 100);
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = 
        `${completedCount} of ${totalWorkouts} workouts completed (${percentage}%)`;
    
    // Render achievements
    renderAchievements(completedCount);
}

function renderAchievements(completedCount) {
    const container = document.getElementById('achievements');
    
    const achievements = [
        { count: 1, title: '🌟 First Workout!', desc: 'You started your journey' },
        { count: 3, title: '🔥 On Fire!', desc: 'Three days strong' },
        { count: 9, title: '💪 Foundation Complete', desc: 'Finished Phase 1' },
        { count: 18, title: '🏊 Swimming Strong', desc: 'Finished Phase 2' },
        { count: 27, title: '🏆 CHAMPION!', desc: 'Completed entire program!' }
    ];
    
    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">';
    
    achievements.forEach(achievement => {
        const earned = completedCount >= achievement.count;
        html += `
            <div style="
                background: ${earned ? 'rgba(6, 214, 160, 0.2)' : 'rgba(255, 255, 255, 0.05)'};
                border: 2px solid ${earned ? 'var(--success)' : 'rgba(255, 255, 255, 0.2)'};
                border-radius: 15px;
                padding: 20px;
                text-align: center;
                transition: all 0.3s ease;
                ${earned ? 'transform: scale(1.05);' : 'opacity: 0.5;'}
            ">
                <div style="font-size: 3rem; margin-bottom: 10px;">${achievement.title.split(' ')[0]}</div>
                <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 5px;">
                    ${achievement.title.substring(achievement.title.indexOf(' ') + 1)}
                </div>
                <div style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.7);">
                    ${achievement.desc}
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Celebration Effect
function celebrate(emoji = '✨') {
    const celebration = document.createElement('div');
    celebration.className = 'celebration';
    celebration.textContent = emoji;
    document.body.appendChild(celebration);
    
    setTimeout(() => {
        celebration.remove();
    }, 1000);
}

// Helper Functions
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function loadProgress() {
    // Initialize progress tracking if needed
    if (!localStorage.getItem('trainingStarted')) {
        localStorage.setItem('trainingStarted', new Date().toISOString());
    }
}

// Make functions available globally
window.showView = showView;
window.selectPlan = selectPlan;
window.startWorkout = startWorkout;
window.toggleTimer = toggleTimer;
window.nextExercise = nextExercise;
window.previousExercise = previousExercise;
window.completeWorkout = completeWorkout;
window.loadWorkoutByDate = loadWorkoutByDate;
window.previousMonth = previousMonth;
window.nextMonth = nextMonth;