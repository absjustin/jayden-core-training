/**
 * Jayden's Training Hub - Progress Tracking Module
 * Stores all training progress in localStorage
 */

const TrainingProgress = {
    STORAGE_KEY: 'jaydenTrainingProgress',

    // Default data structure
    getDefaultData() {
        return {
            version: 1,
            lastUpdated: null,
            
            // In-Water Training
            swim: {
                completedWorkouts: [], // [{date, phase, week, stroke, duration}]
                totalMinutes: 0,
                lastWorkout: null
            },
            
            // Dryland Core + BOSU Training
            dryland: {
                completedWorkouts: [], // [{date, week, exerciseCount, duration}]
                currentWeek: 1,
                totalMinutes: 0,
                lastWorkout: null,
                exercisesCompleted: 0
            },
            
            // PT Training
            pt: {
                completedWorkouts: [], // [{date, exerciseCount, duration}]
                totalMinutes: 0,
                totalSessions: 0,
                lastWorkout: null
            },
            
            // Overall stats
            stats: {
                totalWorkouts: 0,
                totalMinutes: 0,
                currentStreak: 0,
                longestStreak: 0,
                lastActivityDate: null
            },
            
            // Achievements
            achievements: {
                firstWorkout: { unlocked: false, date: null },
                firstSwim: { unlocked: false, date: null },
                firstDryland: { unlocked: false, date: null },
                firstPT: { unlocked: false, date: null },
                streak3: { unlocked: false, date: null },
                streak7: { unlocked: false, date: null },
                streak14: { unlocked: false, date: null },
                streak30: { unlocked: false, date: null },
                workouts10: { unlocked: false, date: null },
                workouts25: { unlocked: false, date: null },
                workouts50: { unlocked: false, date: null },
                workouts100: { unlocked: false, date: null },
                drylandWeek: { unlocked: false, date: null },
                drylandPhase1: { unlocked: false, date: null },
                drylandPhase2: { unlocked: false, date: null },
                drylandComplete: { unlocked: false, date: null },
                swimPhase1: { unlocked: false, date: null },
                swimPhase2: { unlocked: false, date: null },
                swimPhase3: { unlocked: false, date: null },
                swimPhase4: { unlocked: false, date: null },
                hours10: { unlocked: false, date: null },
                hours25: { unlocked: false, date: null },
                hours50: { unlocked: false, date: null }
            }
        };
    },

    // Load data from localStorage
    load() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                const data = JSON.parse(stored);
                // Merge with defaults in case new fields were added
                return this.mergeWithDefaults(data);
            }
        } catch (e) {
            console.error('Error loading progress:', e);
        }
        return this.getDefaultData();
    },

    // Merge stored data with defaults (for upgrades)
    mergeWithDefaults(stored) {
        const defaults = this.getDefaultData();
        return {
            ...defaults,
            ...stored,
            swim: { ...defaults.swim, ...stored.swim },
            dryland: { ...defaults.dryland, ...stored.dryland },
            pt: { ...defaults.pt, ...stored.pt },
            stats: { ...defaults.stats, ...stored.stats },
            achievements: { ...defaults.achievements, ...stored.achievements }
        };
    },

    // Save data to localStorage
    save(data) {
        try {
            data.lastUpdated = new Date().toISOString();
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (e) {
            console.error('Error saving progress:', e);
            return false;
        }
    },

    // Get today's date string (YYYY-MM-DD)
    getToday() {
        return new Date().toISOString().split('T')[0];
    },

    // Calculate streak
    calculateStreak(data) {
        const allDates = [
            ...data.swim.completedWorkouts.map(w => w.date),
            ...data.dryland.completedWorkouts.map(w => w.date),
            ...data.pt.completedWorkouts.map(w => w.date)
        ].sort().reverse();

        if (allDates.length === 0) return 0;

        const uniqueDates = [...new Set(allDates)];
        const today = this.getToday();
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

        // Check if most recent workout was today or yesterday
        if (uniqueDates[0] !== today && uniqueDates[0] !== yesterday) {
            return 0;
        }

        let streak = 1;
        for (let i = 0; i < uniqueDates.length - 1; i++) {
            const current = new Date(uniqueDates[i]);
            const next = new Date(uniqueDates[i + 1]);
            const diffDays = (current - next) / (1000 * 60 * 60 * 24);
            
            if (diffDays === 1) {
                streak++;
            } else {
                break;
            }
        }
        return streak;
    },

    // Check and unlock achievements
    checkAchievements(data) {
        const today = this.getToday();
        const totalWorkouts = data.stats.totalWorkouts;
        const totalHours = data.stats.totalMinutes / 60;
        const streak = data.stats.currentStreak;
        let newAchievements = [];

        // First workout achievements
        if (totalWorkouts >= 1 && !data.achievements.firstWorkout.unlocked) {
            data.achievements.firstWorkout = { unlocked: true, date: today };
            newAchievements.push('🌟 First Workout!');
        }
        if (data.swim.completedWorkouts.length >= 1 && !data.achievements.firstSwim.unlocked) {
            data.achievements.firstSwim = { unlocked: true, date: today };
            newAchievements.push('🏊 First Swim Workout!');
        }
        if (data.dryland.completedWorkouts.length >= 1 && !data.achievements.firstDryland.unlocked) {
            data.achievements.firstDryland = { unlocked: true, date: today };
            newAchievements.push('💪 First Dryland Workout!');
        }
        if (data.pt.completedWorkouts.length >= 1 && !data.achievements.firstPT.unlocked) {
            data.achievements.firstPT = { unlocked: true, date: today };
            newAchievements.push('🩺 First PT Session!');
        }

        // Streak achievements
        if (streak >= 3 && !data.achievements.streak3.unlocked) {
            data.achievements.streak3 = { unlocked: true, date: today };
            newAchievements.push('🔥 3-Day Streak!');
        }
        if (streak >= 7 && !data.achievements.streak7.unlocked) {
            data.achievements.streak7 = { unlocked: true, date: today };
            newAchievements.push('⚡ 7-Day Streak!');
        }
        if (streak >= 14 && !data.achievements.streak14.unlocked) {
            data.achievements.streak14 = { unlocked: true, date: today };
            newAchievements.push('💫 14-Day Streak!');
        }
        if (streak >= 30 && !data.achievements.streak30.unlocked) {
            data.achievements.streak30 = { unlocked: true, date: today };
            newAchievements.push('👑 30-Day Streak!');
        }

        // Total workout achievements
        if (totalWorkouts >= 10 && !data.achievements.workouts10.unlocked) {
            data.achievements.workouts10 = { unlocked: true, date: today };
            newAchievements.push('🎯 10 Workouts Complete!');
        }
        if (totalWorkouts >= 25 && !data.achievements.workouts25.unlocked) {
            data.achievements.workouts25 = { unlocked: true, date: today };
            newAchievements.push('🏅 25 Workouts Complete!');
        }
        if (totalWorkouts >= 50 && !data.achievements.workouts50.unlocked) {
            data.achievements.workouts50 = { unlocked: true, date: today };
            newAchievements.push('🏆 50 Workouts Complete!');
        }
        if (totalWorkouts >= 100 && !data.achievements.workouts100.unlocked) {
            data.achievements.workouts100 = { unlocked: true, date: today };
            newAchievements.push('💎 100 Workouts Complete!');
        }

        // Hours achievements
        if (totalHours >= 10 && !data.achievements.hours10.unlocked) {
            data.achievements.hours10 = { unlocked: true, date: today };
            newAchievements.push('⏱️ 10 Hours Trained!');
        }
        if (totalHours >= 25 && !data.achievements.hours25.unlocked) {
            data.achievements.hours25 = { unlocked: true, date: today };
            newAchievements.push('⏱️ 25 Hours Trained!');
        }
        if (totalHours >= 50 && !data.achievements.hours50.unlocked) {
            data.achievements.hours50 = { unlocked: true, date: today };
            newAchievements.push('⏱️ 50 Hours Trained!');
        }

        // Dryland phase achievements
        const drylandWeeks = [...new Set(data.dryland.completedWorkouts.map(w => w.week))];
        if (drylandWeeks.length >= 1 && !data.achievements.drylandWeek.unlocked) {
            data.achievements.drylandWeek = { unlocked: true, date: today };
            newAchievements.push('💪 First Dryland Week!');
        }
        if (drylandWeeks.filter(w => w <= 3).length >= 3 && !data.achievements.drylandPhase1.unlocked) {
            data.achievements.drylandPhase1 = { unlocked: true, date: today };
            newAchievements.push('🥉 Dryland Phase 1 Complete!');
        }
        if (drylandWeeks.filter(w => w <= 6).length >= 6 && !data.achievements.drylandPhase2.unlocked) {
            data.achievements.drylandPhase2 = { unlocked: true, date: today };
            newAchievements.push('🥈 Dryland Phase 2 Complete!');
        }
        if (drylandWeeks.length >= 9 && !data.achievements.drylandComplete.unlocked) {
            data.achievements.drylandComplete = { unlocked: true, date: today };
            newAchievements.push('🥇 9-Week Dryland Complete!');
        }

        return newAchievements;
    },

    // Record a swim workout
    recordSwimWorkout(phase, week, stroke, duration = 60) {
        const data = this.load();
        const today = this.getToday();
        
        data.swim.completedWorkouts.push({
            date: today,
            phase,
            week,
            stroke,
            duration
        });
        data.swim.totalMinutes += duration;
        data.swim.lastWorkout = today;
        
        data.stats.totalWorkouts++;
        data.stats.totalMinutes += duration;
        data.stats.lastActivityDate = today;
        data.stats.currentStreak = this.calculateStreak(data);
        if (data.stats.currentStreak > data.stats.longestStreak) {
            data.stats.longestStreak = data.stats.currentStreak;
        }
        
        const newAchievements = this.checkAchievements(data);
        this.save(data);
        
        return { success: true, newAchievements, data };
    },

    // Record a dryland workout
    recordDrylandWorkout(week, exerciseCount = 6, duration = 20) {
        const data = this.load();
        const today = this.getToday();
        
        data.dryland.completedWorkouts.push({
            date: today,
            week,
            exerciseCount,
            duration
        });
        data.dryland.totalMinutes += duration;
        data.dryland.lastWorkout = today;
        data.dryland.currentWeek = Math.max(data.dryland.currentWeek, week);
        data.dryland.exercisesCompleted += exerciseCount;
        
        data.stats.totalWorkouts++;
        data.stats.totalMinutes += duration;
        data.stats.lastActivityDate = today;
        data.stats.currentStreak = this.calculateStreak(data);
        if (data.stats.currentStreak > data.stats.longestStreak) {
            data.stats.longestStreak = data.stats.currentStreak;
        }
        
        const newAchievements = this.checkAchievements(data);
        this.save(data);
        
        return { success: true, newAchievements, data };
    },

    // Record a PT workout
    recordPTWorkout(exerciseCount = 6, duration = 15) {
        const data = this.load();
        const today = this.getToday();
        
        data.pt.completedWorkouts.push({
            date: today,
            exerciseCount,
            duration
        });
        data.pt.totalMinutes += duration;
        data.pt.totalSessions++;
        data.pt.lastWorkout = today;
        
        data.stats.totalWorkouts++;
        data.stats.totalMinutes += duration;
        data.stats.lastActivityDate = today;
        data.stats.currentStreak = this.calculateStreak(data);
        if (data.stats.currentStreak > data.stats.longestStreak) {
            data.stats.longestStreak = data.stats.currentStreak;
        }
        
        const newAchievements = this.checkAchievements(data);
        this.save(data);
        
        return { success: true, newAchievements, data };
    },

    // Get summary stats for dashboard
    getSummary() {
        const data = this.load();
        // Recalculate streak in case days passed
        data.stats.currentStreak = this.calculateStreak(data);
        this.save(data);
        
        return {
            totalWorkouts: data.stats.totalWorkouts,
            totalMinutes: data.stats.totalMinutes,
            totalHours: Math.round(data.stats.totalMinutes / 60 * 10) / 10,
            currentStreak: data.stats.currentStreak,
            longestStreak: data.stats.longestStreak,
            
            swim: {
                workouts: data.swim.completedWorkouts.length,
                minutes: data.swim.totalMinutes,
                lastWorkout: data.swim.lastWorkout
            },
            dryland: {
                workouts: data.dryland.completedWorkouts.length,
                minutes: data.dryland.totalMinutes,
                currentWeek: data.dryland.currentWeek,
                lastWorkout: data.dryland.lastWorkout
            },
            pt: {
                sessions: data.pt.totalSessions,
                minutes: data.pt.totalMinutes,
                lastWorkout: data.pt.lastWorkout
            },
            
            achievements: data.achievements,
            
            // Recent activity (last 7 days)
            recentDates: this.getRecentActivityDates(data, 7)
        };
    },

    // Get dates with activity in last N days
    getRecentActivityDates(data, days) {
        const allDates = [
            ...data.swim.completedWorkouts.map(w => w.date),
            ...data.dryland.completedWorkouts.map(w => w.date),
            ...data.pt.completedWorkouts.map(w => w.date)
        ];
        
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - days);
        const cutoffStr = cutoff.toISOString().split('T')[0];
        
        return [...new Set(allDates.filter(d => d >= cutoffStr))].sort();
    },

    // Check if workout completed today for a specific type
    completedToday(type) {
        const data = this.load();
        const today = this.getToday();
        
        switch(type) {
            case 'swim':
                return data.swim.completedWorkouts.some(w => w.date === today);
            case 'dryland':
                return data.dryland.completedWorkouts.some(w => w.date === today);
            case 'pt':
                return data.pt.completedWorkouts.some(w => w.date === today);
            default:
                return false;
        }
    },

    // Export data as JSON
    exportData() {
        const data = this.load();
        return JSON.stringify(data, null, 2);
    },

    // Import data from JSON
    importData(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (data.version) {
                this.save(data);
                return { success: true };
            }
            return { success: false, error: 'Invalid data format' };
        } catch (e) {
            return { success: false, error: e.message };
        }
    },

    // Reset all data
    reset() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
            localStorage.removeItem(this.STORAGE_KEY);
            return true;
        }
        return false;
    }
};

// Make available globally
window.TrainingProgress = TrainingProgress;
