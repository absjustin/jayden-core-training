# 🏊 Jayden's Training Hub

A comprehensive swim training web application for young competitive swimmers, built with HTML, CSS, and JavaScript. Features a modern Apple-inspired "liquid glass" design and localStorage-based progress tracking.

**Athlete:** Jayden (10 & Under Boys, PNS Team)  
**Goal:** Western Zone Championship qualification (July 2026)  
**Specialty:** Breaststroke

---

## 📁 File Structure

```
jayden-training-hub/
├── index.html           # Main dashboard with stats overview
├── progress.js          # Shared progress tracking module (localStorage)
├── swim-training.html   # In-water workout plans (4 phases, 4 strokes)
├── dryland-plans.html   # Plan selection page (Core vs PT)
├── dryland-training.html # 9-week Core + BOSU/TRX program
├── pt-training.html     # Physical therapy exercises
└── parent-learning.html # 6-month coach education curriculum
```

---

## 🎯 Features

### Main Dashboard (`index.html`)
- Live stats from localStorage (workouts, streak, hours)
- 7-day activity visualization
- Quick access to all training modules
- Target: AAA times for championship meets

### In-Water Training (`swim-training.html`)
- **4 Training Phases:**
  - Phase 1: Foundation (Jan-Feb)
  - Phase 2: Build (Mar-Apr)
  - Phase 3: Race Prep (May-Jun)
  - Phase 4: Championship (July)
- **4 Stroke Focus Weeks:** Freestyle, Backstroke, Breaststroke, Butterfly
- 60-minute structured workouts with equipment lists
- Time standards reference (SCY & LCM)
- "Complete Workout" tracking with badge system

### Dryland Training

#### Plan Selection (`dryland-plans.html`)
Choose between two programs:
1. **Core + BOSU Training** - 9-week progressive program
2. **PT Training Plan** - Daily prescribed exercises

#### Core + BOSU Program (`dryland-training.html`)
- **Phase 1 (Weeks 1-3):** Foundation - basic holds and stability
- **Phase 2 (Weeks 4-6):** Swimming-Specific - TRX integration
- **Phase 3 (Weeks 7-9):** Advanced Power - explosive movements

**Exercise Types:**
- Plank variations (standard, streamline, side)
- Dead bug, Superman, Hollow body holds
- BOSU ball exercises (flutter kicks, dolphin kicks, balance)
- TRX exercises (plank, row, Y-raise, fallout)
- Glute bridges, Bird dogs

**Features:**
- Demo GIFs for each exercise
- 3-second countdown before timed holds
- Timer with pause/resume
- Sets and reps display
- Key coaching points

#### PT Training Plan (`pt-training.html`)
Prescribed exercises from physical therapist:

| Exercise | Sets × Reps | Hold |
|----------|-------------|------|
| Sidelying Hip Abduction at Wall | 2 × 15 | — |
| Single Leg Bridge | 2 × 15 each | — |
| Isometric Dead Bug | 2 × 5 | 30 sec |
| Prone W Scapular Retraction | 2 × 10 | 5 sec |
| Bird Dog | 2 × 10 each | 5 sec |
| Forward T | 1 × 10 | 5 sec |

**Features:**
- Rep counter for hold exercises
- Automatic rep progression
- Demo images/GIFs
- ~15 minute daily routine

### Coach Education (`parent-learning.html`)
6-month self-study curriculum:
- Month 1: Swimming Science Fundamentals
- Month 2: Stroke Mechanics Deep Dive
- Month 3: Training Principles
- Month 4: Age-Group Specifics
- Month 5: Mental Skills & Race Strategy
- Month 6: Program Design

Includes embedded YouTube videos and resource links.

---

## 📊 Progress Tracking System

### localStorage Key: `jaydenTrainingProgress`

All progress is stored locally in the browser and persists across sessions.

### Data Structure

```javascript
{
  version: 1,
  lastUpdated: "2026-01-06T...",
  
  swim: {
    completedWorkouts: [{ date, phase, week, stroke, duration }],
    totalMinutes: 0,
    lastWorkout: null
  },
  
  dryland: {
    completedWorkouts: [{ date, week, exerciseCount, duration }],
    currentWeek: 1,
    totalMinutes: 0,
    exercisesCompleted: 0
  },
  
  pt: {
    completedWorkouts: [{ date, exerciseCount, duration }],
    totalSessions: 0,
    totalMinutes: 0
  },
  
  stats: {
    totalWorkouts: 0,
    totalMinutes: 0,
    currentStreak: 0,
    longestStreak: 0
  },
  
  achievements: { ... }
}
```

### API Reference (`progress.js`)

```javascript
// Load/save data
TrainingProgress.load()              // Get all data
TrainingProgress.save(data)          // Save data
TrainingProgress.getSummary()        // Get formatted summary

// Record workouts
TrainingProgress.recordSwimWorkout(phase, week, stroke, duration)
TrainingProgress.recordDrylandWorkout(week, exerciseCount, duration)
TrainingProgress.recordPTWorkout(exerciseCount, duration)

// Utility
TrainingProgress.completedToday('swim')  // Check if done today
TrainingProgress.getToday()              // Get YYYY-MM-DD string
TrainingProgress.calculateStreak(data)   // Calculate current streak

// Data management
TrainingProgress.exportData()        // Export as JSON string
TrainingProgress.importData(json)    // Import from JSON string
TrainingProgress.reset()             // Clear all (with confirm)
```

### Achievements (22 Total)

| Category | Achievements |
|----------|-------------|
| **First Workouts** | 🌟 First Workout, 🏊 First Swim, 💪 First Dryland, 🩺 First PT |
| **Streaks** | 🔥 3-Day, ⚡ 7-Day, 💫 14-Day, 👑 30-Day |
| **Total Workouts** | 🎯 10, 🏅 25, 🏆 50, 💎 100 |
| **Training Hours** | ⏱️ 10h, 25h, 50h |
| **Dryland Progress** | First Week, Phase 1, Phase 2, 9-Week Complete |
| **Swim Phases** | Phase 1-4 Completion |

---

## 🎨 Design System

### Apple Liquid Glass Style
- Frosted glass backgrounds (`backdrop-filter: blur(20px)`)
- Subtle borders and shadows
- Smooth animations and transitions
- Gradient backgrounds per section

### Color Palette
```css
--glass-bg: rgba(255, 255, 255, 0.72)
--text-primary: #1d1d1f
--text-secondary: #86868b
--accent-green: #34c759
--accent-orange: #ff9500
--accent-blue: #007aff
--accent-purple: #af52de
```

### Phase Colors
- Phase 1 (Foundation): `#3b82f6` (Blue)
- Phase 2 (Build/Specific): `#8b5cf6` (Purple)
- Phase 3 (Race Prep/Power): `#f59e0b` (Orange) / `#10b981` (Green)
- Phase 4 (Championship): `#10b981` (Green)

---

## 🚀 Deployment

This is a static site with no build process required. Deploy to any static hosting:

### Option 1: Local
Simply open `index.html` in a browser.

### Option 2: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Select branch and root folder

### Option 3: Netlify / Vercel
1. Connect repository or drag-drop folder
2. No build command needed
3. Publish directory: `/` (root)

---

## 📱 Responsive Design

- **Desktop (>1024px):** Full two-column layouts
- **Tablet (768-1024px):** Adjusted grid, stacked where needed
- **Mobile (<768px):** Single column, stacked exercise views

---

## 🔧 Customization

### Adding New Exercises
Edit the `exercises` object in `dryland-training.html` or `pt-training.html`:

```javascript
{
  name: "Exercise Name",
  type: "time",        // "time" or "reps"
  value: 30,           // seconds or rep count
  reps: 2,             // number of sets
  holdTime: 5,         // for PT exercises with holds
  perSide: true,       // if alternating sides
  gif: "https://...",  // demo GIF URL
  hints: ["Point 1", "Point 2", "Point 3"]
}
```

### Modifying Time Standards
Edit the tables in `swim-training.html` within the Standards tab section.

### Adding Achievements
Edit `getDefaultData()` and `checkAchievements()` in `progress.js`.

---

## 📋 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

Requires:
- localStorage
- CSS backdrop-filter
- ES6+ JavaScript

---

## 📄 License

Personal use for Jayden's swim training. Created with assistance from Claude AI.

---

## 🏆 Training Timeline

```
Jan-Feb 2026  → Foundation Phase (technique focus)
Mar-Apr 2026  → Build Phase (tempo training, power)
May-Jun 2026  → Race Prep (race pace, speed work)
July 2026     → Championship Phase (taper, race simulation)
              → PNS Championship Meet
Aug 2026      → Western Zone Championship
```

---

## 💾 Backup Your Progress

To backup your training data:

1. Open browser console (F12)
2. Run: `copy(TrainingProgress.exportData())`
3. Paste into a text file and save

To restore:
1. Open browser console
2. Run: `TrainingProgress.importData('paste-json-here')`

---

*Last updated: January 2026*
