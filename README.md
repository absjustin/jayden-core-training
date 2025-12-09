# 🏊 Swimming Core Training Web App

A complete web-based training application for Jayden's 9-week core strength program with BOSU ball integration.

## 🚀 Quick Start

### Option 1: Local Setup (Easiest)
1. Save all three files to the same folder:
   - `swimming-trainer.html`
   - `training-data.js`
   - `app.js`

2. Double-click `swimming-trainer.html` to open in your browser

3. That's it! The app runs entirely in your browser with no server needed.

### Option 2: Simple Web Server (Recommended for development)
If you want to test on multiple devices:

```bash
# Using Python 3
python -m http.server 8000

# Then open http://localhost:8000/swimming-trainer.html
```

### Option 3: Deploy Online (Free)
Upload to any of these free hosting services:
- **GitHub Pages**: Free, easy, perfect for static sites
- **Netlify**: Drag and drop your folder
- **Vercel**: One-click deployment
- **Cloudflare Pages**: Fast and free

## 📱 Features

✅ **Auto-loading workouts** based on current date
✅ **Interactive timer** with countdown for timed exercises
✅ **Calendar view** showing all scheduled workouts
✅ **Progress tracking** with achievements
✅ **Exercise demonstrations** (placeholder for videos/images)
✅ **Completion tracking** persisted in browser
✅ **Mobile-responsive** design
✅ **Kid-friendly** interface with clear instructions

## 🎨 User Experience

### 1. Home Screen
- Select from available training plans
- Currently shows: 9-Week Core + BOSU Training

### 2. Workout Screen
- Automatically loads today's workout
- Shows current phase and day
- Step-by-step exercise guide with:
  - Exercise name and demo area
  - Detailed instructions
  - Key coaching points
  - Timer or rep counter
- Navigation: Previous/Next buttons
- Complete button to mark workout done

### 3. Calendar View
- Full calendar showing all workouts
- Color-coded:
  - Blue = Scheduled workout
  - Green = Completed workout
- Click any workout day to start it

### 4. Progress View
- Progress bar showing completion percentage
- Achievement badges for milestones
- Motivation to keep going!

## 📝 Adding New Training Plans

Edit `training-data.js` to add new plans. Here's the structure:

```javascript
const TRAINING_PLANS = {
    'plan-id': {
        name: 'Plan Name',
        description: 'Brief description',
        startDate: '2025-12-15',
        phases: [
            {
                name: 'Phase Name',
                weeks: [1, 2, 3],
                color: '#00a8e8'
            }
        ],
        workouts: [
            {
                week: 1,
                day: 1,
                date: '2025-12-15',
                phase: 'Foundation Phase',
                title: 'Week 1 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            {
                                name: 'Exercise Name',
                                type: 'time',  // or 'reps' or 'sets'
                                duration: 30,   // seconds (for time/sets)
                                reps: '10 each', // for reps type
                                sets: 2,        // for sets type
                                instructions: [
                                    'Step 1',
                                    'Step 2'
                                ],
                                keyPoints: [
                                    'Important tip 1',
                                    'Important tip 2'
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
```

### Exercise Types

**Time-based** (`type: 'time'`):
- Shows countdown timer
- Use for: planks, holds, running in place
- Required: `duration` (in seconds)

**Rep-based** (`type: 'reps'`):
- Shows rep count (no timer)
- Use for: counted exercises like crunches, bridges
- Required: `reps` (string like "10 each" or "12 reps")

**Set-based** (`type: 'sets'`):
- Timer that repeats for multiple sets
- Use for: BOSU kicks, flutter kicks
- Required: `duration` (seconds per set), `sets` (number of sets)

## 🎬 Adding Exercise Demonstrations

To add videos or images for exercises:

1. **Option A: Direct in HTML**
   Replace this in `app.js` line ~115:
   ```javascript
   <div class="exercise-demo">
       <div class="demo-placeholder">
           🎬 Exercise demonstration video will appear here
       </div>
   </div>
   ```
   
   With:
   ```javascript
   <div class="exercise-demo">
       <img src="images/${exercise.name.replace(/\s+/g, '-').toLowerCase()}.jpg" 
            alt="${exercise.name}"
            style="width: 100%; border-radius: 10px;">
   </div>
   ```

2. **Option B: Video embeds**
   ```javascript
   <div class="exercise-demo">
       <video controls style="width: 100%; border-radius: 10px;">
           <source src="videos/${exercise.name}.mp4" type="video/mp4">
       </video>
   </div>
   ```

3. **Option C: YouTube embeds**
   Add a `videoUrl` field to each exercise in `training-data.js`:
   ```javascript
   {
       name: 'Front Plank',
       videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
       // ... rest of exercise
   }
   ```
   
   Then update the demo section to use iframes.

## 🎨 Customization

### Colors
Edit CSS variables in `swimming-trainer.html` (lines 17-25):
```css
:root {
    --primary: #00a8e8;      /* Main blue */
    --secondary: #0077b6;    /* Dark blue */
    --accent: #ff6b35;       /* Orange accent */
    --success: #06d6a0;      /* Green for completed */
    --bg-dark: #001a23;      /* Background dark */
}
```

### Fonts
Currently using:
- **Bebas Neue**: Bold display font for titles
- **Exo 2**: Modern body font

To change fonts, edit line 10 in HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap">
```

### Layout
All styling is in the `<style>` section of `swimming-trainer.html`. 
Key sections:
- Lines 30-50: Overall layout
- Lines 200-250: Exercise cards
- Lines 300-350: Timer display
- Lines 400-450: Calendar

## 💾 Data Storage

The app uses browser `localStorage` to save:
- Completed workouts: `YYYY-MM-DD_completed`
- Training start date: `trainingStarted`

To clear all progress:
```javascript
// Open browser console and run:
localStorage.clear();
```

## 📱 Mobile Optimization

The app is fully responsive and works great on:
- 📱 Phones (iOS/Android)
- 📱 Tablets (iPad, etc.)
- 💻 Laptops
- 🖥️ Desktop computers

Tested on:
- Chrome, Firefox, Safari, Edge
- iOS Safari, Android Chrome

## 🔧 Troubleshooting

**Q: Workouts not showing?**
- Check that dates in `training-data.js` match your current date
- The app auto-selects today's workout or next upcoming

**Q: Timer not working?**
- Make sure exercise `type: 'time'` is set correctly
- Check browser console for errors (F12)

**Q: Progress not saving?**
- Clear browser cache
- Make sure cookies/localStorage enabled
- Try in different browser

**Q: Want to reset everything?**
- Open browser console (F12)
- Type: `localStorage.clear()`
- Refresh page

## 🎯 Future Enhancements

Ideas for v2.0:
- [ ] Add exercise video library
- [ ] Voice countdown timer
- [ ] Export workout log
- [ ] Share progress with coach
- [ ] Multiple user profiles
- [ ] Custom workout builder
- [ ] Rest day tracking
- [ ] Performance metrics
- [ ] Mobile app version
- [ ] Integration with fitness trackers

## 📄 File Structure

```
swimming-trainer/
├── swimming-trainer.html   # Main app (HTML + CSS)
├── training-data.js        # All workout data
├── app.js                  # App logic and timer
└── README.md              # This file
```

## 🤝 Adding More Plans

To add a second training plan:

1. Copy the workout structure in `training-data.js`
2. Give it a new ID: `'new-plan-id': { ... }`
3. Add a new plan card in HTML or modify `renderPlans()` function
4. All plans show up automatically in the calendar

## 🏊‍♂️ For Coaches

This system makes it easy to:
- Create multiple training programs
- Track athlete progress
- Modify workouts on the fly
- Add exercise demonstrations
- Export to share with other coaches

## 📞 Support

For questions or issues:
- Check browser console (F12) for errors
- Make sure all 3 files are in same folder
- Try in different browser
- Clear cache and reload

## 🎉 Credits

Built for Jayden's swimming journey!
Designed for ages 9-11, adaptable for other athletes.

---

**Ready to train? Open `swimming-trainer.html` and let's go! 🏊💪**