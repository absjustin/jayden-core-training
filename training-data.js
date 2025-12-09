// Training Plans Database
const TRAINING_PLANS = {
    'core-bosu-9week': {
        name: '9-Week Core + BOSU Training',
        description: 'Complete swimming-specific core strength program',
        startDate: '2025-12-15',
        phases: [
            {
                name: 'Foundation Phase',
                weeks: [1, 2, 3],
                color: '#00a8e8'
            },
            {
                name: 'Swimming-Specific Phase',
                weeks: [4, 5, 6],
                color: '#ff6b35'
            },
            {
                name: 'Advanced Power Phase',
                weeks: [7, 8, 9],
                color: '#06d6a0'
            }
        ],
        workouts: [
            // Week 1
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
                                name: 'Arm Circles Forward/Backward',
                                type: 'reps',
                                reps: '10 each',
                                instructions: ['Stand with arms extended', 'Make large circles forward, then backward', 'Keep arms straight and core engaged'],
                                keyPoints: ['Warm up shoulders', 'Full range of motion']
                            },
                            {
                                name: 'Torso Twists',
                                type: 'reps',
                                reps: '20 total',
                                instructions: ['Stand with feet hip-width apart', 'Twist torso side to side', 'Keep hips stable'],
                                keyPoints: ['Warm up core rotation', 'Controlled movement']
                            },
                            {
                                name: 'High Knees',
                                type: 'time',
                                duration: 30,
                                instructions: ['Run in place lifting knees high', 'Pump arms naturally', 'Land softly on balls of feet'],
                                keyPoints: ['Elevate heart rate', 'Quick tempo']
                            }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            {
                                name: 'Front Plank',
                                type: 'time',
                                duration: 20,
                                instructions: ['Forearms on ground, body in straight line', 'Squeeze glutes and core', 'Look down at floor', 'Breathe normally'],
                                keyPoints: ['Belly button to spine', 'No sagging hips', 'Like a board']
                            },
                            {
                                name: 'Superman Hold',
                                type: 'time',
                                duration: 10,
                                instructions: ['Lie face down', 'Lift arms and legs off ground', 'Hold position like flying', 'Keep neck neutral'],
                                keyPoints: ['Mimics underwater position', 'Squeeze back muscles']
                            },
                            {
                                name: 'Bicycle Crunches',
                                type: 'reps',
                                reps: '10 each side',
                                instructions: ['Lie on back, hands behind head', 'Bring opposite elbow to opposite knee', 'Extend other leg straight', 'Alternate sides smoothly'],
                                keyPoints: ['Rotation for freestyle/backstroke', 'Controlled tempo']
                            },
                            {
                                name: 'Glute Bridges',
                                type: 'reps',
                                reps: '12 reps',
                                instructions: ['Lie on back, knees bent, feet flat', 'Lift hips up toward ceiling', 'Squeeze glutes at top', 'Lower back down'],
                                keyPoints: ['Power for kick drive', 'Push through heels']
                            },
                            {
                                name: 'Rest',
                                type: 'time',
                                duration: 30,
                                instructions: ['Walk around or stand', 'Shake out muscles', 'Breathe deeply', 'Prepare for next round'],
                                keyPoints: ['Recovery between rounds']
                            }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            {
                                name: 'Flutter Kicks on Back',
                                type: 'time',
                                duration: 20,
                                instructions: ['Lie on back, arms overhead in streamline', 'Small, quick kicks from hips', 'Keep legs straight', 'Point toes'],
                                keyPoints: ['Backstroke position', 'Core stays tight']
                            },
                            {
                                name: 'Stretching',
                                type: 'time',
                                duration: 120,
                                instructions: ['Child\'s pose: 30 sec', 'Cobra stretch: 30 sec', 'Hip flexor stretch: 30 sec each side', 'Breathe deeply into each stretch'],
                                keyPoints: ['Cool down muscles', 'Prevent soreness']
                            }
                        ]
                    }
                ]
            },
            {
                week: 1,
                day: 3,
                date: '2025-12-17',
                phase: 'Foundation Phase',
                title: 'Week 1 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            {
                                name: 'Arm Circles Forward/Backward',
                                type: 'reps',
                                reps: '10 each',
                                instructions: ['Stand with arms extended', 'Make large circles forward, then backward', 'Keep arms straight and core engaged'],
                                keyPoints: ['Warm up shoulders', 'Full range of motion']
                            },
                            {
                                name: 'Torso Twists',
                                type: 'reps',
                                reps: '20 total',
                                instructions: ['Stand with feet hip-width apart', 'Twist torso side to side', 'Keep hips stable'],
                                keyPoints: ['Warm up core rotation', 'Controlled movement']
                            },
                            {
                                name: 'High Knees',
                                type: 'time',
                                duration: 30,
                                instructions: ['Run in place lifting knees high', 'Pump arms naturally', 'Land softly on balls of feet'],
                                keyPoints: ['Elevate heart rate', 'Quick tempo']
                            }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            {
                                name: 'Front Plank',
                                type: 'time',
                                duration: 20,
                                instructions: ['Forearms on ground, body in straight line', 'Squeeze glutes and core', 'Look down at floor', 'Breathe normally'],
                                keyPoints: ['Belly button to spine!', 'No sagging hips']
                            },
                            {
                                name: 'Superman Hold',
                                type: 'time',
                                duration: 10,
                                instructions: ['Lie face down', 'Lift arms and legs off ground', 'Hold position like flying'],
                                keyPoints: ['Underwater dolphin kick position']
                            },
                            {
                                name: 'Bicycle Crunches',
                                type: 'reps',
                                reps: '10 each side',
                                instructions: ['Lie on back, hands behind head', 'Bring opposite elbow to opposite knee', 'Alternate sides smoothly'],
                                keyPoints: ['Builds rotation']
                            },
                            {
                                name: 'Glute Bridges',
                                type: 'reps',
                                reps: '12 reps',
                                instructions: ['Lie on back, knees bent', 'Lift hips up', 'Squeeze glutes at top'],
                                keyPoints: ['Kick power']
                            },
                            {
                                name: 'Rest',
                                type: 'time',
                                duration: 30,
                                instructions: ['Active recovery', 'Breathe deeply'],
                                keyPoints: ['Prepare for next round']
                            }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            {
                                name: 'Flutter Kicks on Back',
                                type: 'time',
                                duration: 20,
                                instructions: ['Lie on back, streamline position', 'Small, quick kicks', 'Point toes'],
                                keyPoints: ['Keep core tight']
                            },
                            {
                                name: 'Stretching',
                                type: 'time',
                                duration: 120,
                                instructions: ['Full body stretches', 'Hold each 30 seconds'],
                                keyPoints: ['Cool down']
                            }
                        ]
                    }
                ]
            },
            {
                week: 1,
                day: 5,
                date: '2025-12-19',
                phase: 'Foundation Phase',
                title: 'Week 1 - Day 3 + BOSU Intro',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            {
                                name: 'Arm Circles Forward/Backward',
                                type: 'reps',
                                reps: '10 each',
                                instructions: ['Stand with arms extended', 'Make large circles', 'Full range of motion'],
                                keyPoints: ['Warm up shoulders']
                            },
                            {
                                name: 'Torso Twists',
                                type: 'reps',
                                reps: '20 total',
                                instructions: ['Twist side to side', 'Keep hips stable'],
                                keyPoints: ['Warm up core']
                            },
                            {
                                name: 'High Knees',
                                type: 'time',
                                duration: 30,
                                instructions: ['Run in place', 'Lift knees high'],
                                keyPoints: ['Get heart pumping']
                            }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            {
                                name: 'Front Plank',
                                type: 'time',
                                duration: 20,
                                instructions: ['Hold strong plank position', 'Body like a board'],
                                keyPoints: ['Try to beat Monday!']
                            },
                            {
                                name: 'Superman Hold',
                                type: 'time',
                                duration: 10,
                                instructions: ['Fly like Superman!', 'Arms and legs up'],
                                keyPoints: ['Strong back']
                            },
                            {
                                name: 'Bicycle Crunches',
                                type: 'reps',
                                reps: '10 each side',
                                instructions: ['Controlled rotation', 'Elbow to knee'],
                                keyPoints: ['Swimming rotation']
                            },
                            {
                                name: 'Glute Bridges',
                                type: 'reps',
                                reps: '12 reps',
                                instructions: ['Lift hips high', 'Squeeze at top'],
                                keyPoints: ['Powerful kicks']
                            },
                            {
                                name: 'Rest',
                                type: 'time',
                                duration: 30,
                                instructions: ['Recover', 'Deep breaths'],
                                keyPoints: ['Get ready']
                            }
                        ]
                    },
                    {
                        name: 'BOSU Introduction (ball side up)',
                        exercises: [
                            {
                                name: 'BOSU Balance Test',
                                type: 'time',
                                duration: 10,
                                instructions: ['Step onto BOSU ball (dome up)', 'Find your balance', 'Arms out for stability', 'Just get used to it!'],
                                keyPoints: ['First time - keep it light!', 'Focus on balance']
                            },
                            {
                                name: 'BOSU Flutter Kicks',
                                type: 'sets',
                                sets: 2,
                                duration: 15,
                                instructions: ['Lie on back with center of back on BOSU', 'Arms in streamline overhead', 'Small, quick flutter kicks', 'Keep core engaged'],
                                keyPoints: ['NEW! This is like swimming!', 'Unstable = work harder']
                            }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            {
                                name: 'Regular Flutter Kicks',
                                type: 'time',
                                duration: 20,
                                instructions: ['Back to floor', 'Streamline position', 'Flutter kick'],
                                keyPoints: ['Notice the difference?']
                            },
                            {
                                name: 'Stretching',
                                type: 'time',
                                duration: 120,
                                instructions: ['Full stretching routine'],
                                keyPoints: ['Great first week!']
                            }
                        ]
                    }
                ]
            }
        ]
    }
};

// Store in localStorage for persistence
if (typeof window !== 'undefined') {
    localStorage.setItem('trainingPlans', JSON.stringify(TRAINING_PLANS));
}