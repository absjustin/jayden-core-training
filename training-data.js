// Training Plans Database
const TRAINING_PLANS = {
    'core-bosu-9week': {
        name: '9-Week Core + BOSU Training',
        description: 'Complete swimming-specific core strength program',
        startDate: '2025-12-22',
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
                date: '2025-12-22',
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
                date: '2025-12-24',
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
                date: '2025-12-26',
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
            },
            // Week 2 - Foundation continues
            {
                week: 2,
                day: 1,
                date: '2025-12-29',
                phase: 'Foundation Phase',
                title: 'Week 2 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Forward and backward circles', 'Full extension'], keyPoints: ['Shoulder mobility'] },
                            { name: 'Torso Twists', type: 'reps', reps: '20 total', instructions: ['Controlled rotation'], keyPoints: ['Core activation'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick tempo'], keyPoints: ['Get warm'] }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            { name: 'Front Plank', type: 'time', duration: 25, instructions: ['Hold strong', 'Squeeze everything'], keyPoints: ['5 seconds more than Week 1!'] },
                            { name: 'Superman Hold', type: 'time', duration: 12, instructions: ['Arms and legs up'], keyPoints: ['2 seconds longer'] },
                            { name: 'Bicycle Crunches', type: 'reps', reps: '12 each side', instructions: ['Controlled rotation'], keyPoints: ['2 more reps!'] },
                            { name: 'BOSU Glute Bridges', type: 'reps', reps: '12 reps', instructions: ['Feet on BOSU ball', 'Lift hips high', 'Harder with BOSU!'], keyPoints: ['First BOSU exercise!', 'More unstable = more work'] },
                            { name: 'Rest', type: 'time', duration: 30, instructions: ['Recover'], keyPoints: ['Breathe'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'BOSU Flutter Kicks', type: 'sets', sets: 2, duration: 20, instructions: ['Back on BOSU', 'Streamline arms', 'Quick kicks'], keyPoints: ['Longer than last time'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Full body stretch'], keyPoints: ['Cool down'] }
                        ]
                    }
                ]
            },
            {
                week: 2,
                day: 3,
                date: '2025-12-31',
                phase: 'Foundation Phase',
                title: 'Week 2 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Full range'], keyPoints: ['Loosen shoulders'] },
                            { name: 'Torso Twists', type: 'reps', reps: '20 total', instructions: ['Side to side'], keyPoints: ['Warm core'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick feet'], keyPoints: ['Elevate HR'] }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            { name: 'BOSU Plank (ball up)', type: 'time', duration: 15, instructions: ['Hands on BOSU', 'Hold steady', 'Way harder than regular plank!'], keyPoints: ['New challenge!', 'Stay stable'] },
                            { name: 'Superman Hold', type: 'time', duration: 12, instructions: ['Fly high'], keyPoints: ['Strong back'] },
                            { name: 'Bicycle Crunches', type: 'reps', reps: '12 each side', instructions: ['Smooth rotation'], keyPoints: ['Control it'] },
                            { name: 'BOSU Glute Bridges', type: 'reps', reps: '15 reps', instructions: ['Feet on BOSU', 'Squeeze glutes'], keyPoints: ['3 more than Monday!'] },
                            { name: 'Rest', type: 'time', duration: 30, instructions: ['Walk it off'], keyPoints: ['Ready for round 2'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'BOSU Flutter Kicks', type: 'sets', sets: 2, duration: 20, instructions: ['Back on BOSU', 'Perfect streamline'], keyPoints: ['Consistent kicks'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch it out'], keyPoints: ['Merry Christmas Eve!'] }
                        ]
                    }
                ]
            },
            {
                week: 2,
                day: 5,
                date: '2026-01-02',
                phase: 'Foundation Phase',
                title: 'Week 2 - Day 3',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Big circles'], keyPoints: ['Get ready'] },
                            { name: 'Torso Twists', type: 'reps', reps: '20 total', instructions: ['Rotate fully'], keyPoints: ['Loosen up'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Run in place'], keyPoints: ['Wake up!'] }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            { name: 'BOSU Plank (ball up)', type: 'time', duration: 18, instructions: ['Hands on BOSU', 'Hold strong'], keyPoints: ['3 seconds longer!'] },
                            { name: 'BOSU Bird Dogs', type: 'reps', reps: '8 each side', instructions: ['Knees on BOSU', 'Opposite arm/leg extend', 'Balance is hard!'], keyPoints: ['NEW exercise!', 'Swimming balance'] },
                            { name: 'Bicycle Crunches', type: 'reps', reps: '12 each side', instructions: ['Keep going'], keyPoints: ['You got this'] },
                            { name: 'BOSU Glute Bridges', type: 'reps', reps: '15 reps', instructions: ['Strong squeeze'], keyPoints: ['Powerful hips'] },
                            { name: 'Rest', type: 'time', duration: 30, instructions: ['Breathe deep'], keyPoints: ['One more round'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'BOSU Flutter Kicks', type: 'sets', sets: 2, duration: 25, instructions: ['Longer hold!', '25 seconds now'], keyPoints: ['Building endurance'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Full stretch'], keyPoints: ['Week 2 done!'] }
                        ]
                    }
                ]
            },
            // Week 3 - Foundation completion
            {
                week: 3,
                day: 1,
                date: '2026-01-05',
                phase: 'Foundation Phase',
                title: 'Week 3 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Forward/backward'], keyPoints: ['Warm shoulders'] },
                            { name: 'Torso Twists', type: 'reps', reps: '20 total', instructions: ['Side to side'], keyPoints: ['Activate core'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick tempo'], keyPoints: ['Get ready'] }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            { name: 'BOSU Plank (ball up)', type: 'time', duration: 20, instructions: ['Hands on BOSU', 'Stay stable'], keyPoints: ['Almost at 20 seconds!'] },
                            { name: 'BOSU Bird Dogs', type: 'reps', reps: '10 each side', instructions: ['Knees on BOSU', 'Extend opposite limbs', 'Balance'], keyPoints: ['2 more each side'] },
                            { name: 'Bicycle Crunches', type: 'reps', reps: '15 each side', instructions: ['Controlled movement'], keyPoints: ['3 more reps!'] },
                            { name: 'BOSU Glute Bridges', type: 'reps', reps: '18 reps', instructions: ['Feet on BOSU', 'Squeeze hard'], keyPoints: ['Getting stronger!'] },
                            { name: 'Rest', type: 'time', duration: 30, instructions: ['Active recovery'], keyPoints: ['Shake it out'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'BOSU Flutter Kicks', type: 'sets', sets: 2, duration: 25, instructions: ['Strong core', 'Quick kicks'], keyPoints: ['You know this now'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Deep stretches'], keyPoints: ['Cool down'] }
                        ]
                    }
                ]
            },
            {
                week: 3,
                day: 3,
                date: '2026-01-07',
                phase: 'Foundation Phase',
                title: 'Week 3 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Big circles'], keyPoints: ['Last workout of 2025!'] },
                            { name: 'Torso Twists', type: 'reps', reps: '20 total', instructions: ['Full rotation'], keyPoints: ['Get ready'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['High energy'], keyPoints: ['Let\'s go!'] }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            { name: 'BOSU Plank (ball up)', type: 'time', duration: 22, instructions: ['Hold steady', 'Almost there!'], keyPoints: ['New record incoming'] },
                            { name: 'BOSU Bird Dogs', type: 'reps', reps: '10 each side', instructions: ['Perfect balance'], keyPoints: ['Smooth and controlled'] },
                            { name: 'Bicycle Crunches', type: 'reps', reps: '15 each side', instructions: ['Strong rotation'], keyPoints: ['Keep it up'] },
                            { name: 'BOSU Glute Bridges', type: 'reps', reps: '18 reps', instructions: ['Maximum squeeze'], keyPoints: ['Feel the power'] },
                            { name: 'Rest', type: 'time', duration: 30, instructions: ['Breathe'], keyPoints: ['One more round'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'BOSU Flutter Kicks', type: 'sets', sets: 2, duration: 30, instructions: ['Full 30 seconds!', 'You can do it'], keyPoints: ['New Year\'s Eve push!'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Celebrate with stretches'], keyPoints: ['Happy New Year!'] }
                        ]
                    }
                ]
            },
            {
                week: 3,
                day: 5,
                date: '2026-01-09',
                phase: 'Foundation Phase',
                title: 'Week 3 - Day 3',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Fresh start!'], keyPoints: ['2026 begins!'] },
                            { name: 'Torso Twists', type: 'reps', reps: '20 total', instructions: ['Twist it'], keyPoints: ['Get loose'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick feet'], keyPoints: ['Warm up'] }
                        ]
                    },
                    {
                        name: 'Core Circuit (2 rounds)',
                        exercises: [
                            { name: 'BOSU Plank (ball up)', type: 'time', duration: 25, instructions: ['Final foundation plank', 'Make it count!'], keyPoints: ['Week 3 goal reached!'] },
                            { name: 'BOSU Bird Dogs', type: 'reps', reps: '12 each side', instructions: ['Perfect form'], keyPoints: ['Getting easy now?'] },
                            { name: 'Bicycle Crunches', type: 'reps', reps: '15 each side', instructions: ['Smooth movement'], keyPoints: ['Strong core'] },
                            { name: 'BOSU Glute Bridges', type: 'reps', reps: '20 reps', instructions: ['20 reps!', 'Squeeze hard'], keyPoints: ['Foundation complete next!'] },
                            { name: 'Rest', type: 'time', duration: 30, instructions: ['Almost there'], keyPoints: ['Last round'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'BOSU Flutter Kicks', type: 'sets', sets: 2, duration: 30, instructions: ['Strong finish'], keyPoints: ['Phase 1 almost done!'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Great work!'], keyPoints: ['Foundation phase complete!'] }
                        ]
                    }
                ]
            },
            // Week 4 - Swimming-Specific Phase begins
            {
                week: 4,
                day: 1,
                date: '2026-01-12',
                phase: 'Swimming-Specific Phase',
                title: 'Week 4 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Shoulder warmup'], keyPoints: ['New phase!'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '10 reps', instructions: ['Arms overhead', 'Stretch tall', 'Like diving off blocks'], keyPoints: ['Swimming position!'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Get ready'], keyPoints: ['Phase 2 begins'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (2 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 25, instructions: ['Plank position', 'Arms extended forward (not on ground)', 'Like gliding underwater'], keyPoints: ['NEW! Swimming-specific', 'Perfect streamline'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 15, instructions: ['One forearm down', 'Body in straight line', 'Top arm reaches to ceiling'], keyPoints: ['Rotation strength', '15 sec each side'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 15, instructions: ['Lie on back', 'Lift shoulders and legs', 'Arms overhead', 'Like underwater streamline'], keyPoints: ['Tight core', 'Swimming position'] },
                            { name: 'BOSU Flutter Kicks', type: 'time', duration: 30, instructions: ['Back on BOSU', 'Streamline arms', 'Quick kicks'], keyPoints: ['You know this!'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Longer rest', 'New exercises are harder'], keyPoints: ['Catch your breath'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 30, instructions: ['Plank position', 'Drive knees to chest', 'Quick tempo'], keyPoints: ['Cardio + core'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Full stretch'], keyPoints: ['Welcome to Phase 2!'] }
                        ]
                    }
                ]
            },
            {
                week: 4,
                day: 3,
                date: '2026-01-14',
                phase: 'Swimming-Specific Phase',
                title: 'Week 4 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Loose shoulders'], keyPoints: ['Ready to go'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '10 reps', instructions: ['Tall and tight'], keyPoints: ['Perfect form'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick tempo'], keyPoints: ['Warm up'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 25, instructions: ['Arms forward', 'Strong position'], keyPoints: ['Hold it'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 15, instructions: ['Both sides'], keyPoints: ['Balanced strength'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 20, instructions: ['5 seconds longer!'], keyPoints: ['Streamline strong'] },
                            { name: 'BOSU Bird Dogs', type: 'reps', reps: '10 each side', instructions: ['Balance challenge'], keyPoints: ['Stable core'] },
                            { name: 'BOSU Flutter Kicks', type: 'time', duration: 30, instructions: ['Consistent kicks'], keyPoints: ['Keep going'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Recover'], keyPoints: ['3 rounds today!'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 30, instructions: ['Fast feet'], keyPoints: ['Finish strong'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch well'], keyPoints: ['Good work'] }
                        ]
                    }
                ]
            },
            {
                week: 4,
                day: 5,
                date: '2026-01-16',
                phase: 'Swimming-Specific Phase',
                title: 'Week 4 - Day 3',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Full circles'], keyPoints: ['Get ready'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '10 reps', instructions: ['Reach tall'], keyPoints: ['Perfect streamlines'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Energetic'], keyPoints: ['Let\'s go'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 30, instructions: ['30 seconds now!'], keyPoints: ['Longer hold'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 18, instructions: ['18 sec each side'], keyPoints: ['Getting stronger'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 20, instructions: ['Strong core'], keyPoints: ['Don\'t let belly sag'] },
                            { name: 'V-Sits', type: 'reps', reps: '10 reps', instructions: ['Sit with legs and torso up', 'Arms forward', 'Hold V shape', 'Balance!'], keyPoints: ['NEW! Core strength'] },
                            { name: 'BOSU Flutter Kicks', type: 'time', duration: 30, instructions: ['Quick kicks'], keyPoints: ['Consistent tempo'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Breathe deep'], keyPoints: ['Keep it up'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 40, instructions: ['10 seconds longer!'], keyPoints: ['Cardio burn'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Cool down'], keyPoints: ['Week 4 done!'] }
                        ]
                    }
                ]
            },
            // Week 5 - Swimming-Specific continues
            {
                week: 5,
                day: 1,
                date: '2026-01-19',
                phase: 'Swimming-Specific Phase',
                title: 'Week 5 - Day 1 + Flat BOSU',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Warm shoulders'], keyPoints: ['Week 5!'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '12 reps', instructions: ['Extra reps'], keyPoints: ['Stretch tall'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick feet'], keyPoints: ['Ready'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 30, instructions: ['Hold strong'], keyPoints: ['Perfect form'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 20, instructions: ['20 seconds each!'], keyPoints: ['Balanced'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 25, instructions: ['5 seconds more'], keyPoints: ['Strong streamline'] },
                            { name: 'V-Sits', type: 'reps', reps: '12 reps', instructions: ['Balance in V'], keyPoints: ['2 more reps'] },
                            { name: 'BOSU Dolphin Kicks', type: 'time', duration: 20, instructions: ['Back on BOSU', 'Both legs together', 'Big dolphin kicks', 'Like butterfly!'], keyPoints: ['NEW! Dolphin kick'] },
                            { name: 'BOSU Standing Balance (flat side down)', type: 'time', duration: 20, instructions: ['Flip BOSU over (flat side down)', 'Stand on platform', 'Balance!', 'Way harder!'], keyPoints: ['NEW CHALLENGE!', 'First time on flat side'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['That was hard!'], keyPoints: ['Catch breath'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 40, instructions: ['Fast tempo'], keyPoints: ['Finish strong'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Full stretch'], keyPoints: ['Flat BOSU is tough!'] }
                        ]
                    }
                ]
            },
            {
                week: 5,
                day: 3,
                date: '2026-01-21',
                phase: 'Swimming-Specific Phase',
                title: 'Week 5 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Big circles'], keyPoints: ['Loosen up'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '12 reps', instructions: ['Perfect position'], keyPoints: ['Tight core'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Get moving'], keyPoints: ['Warm up'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 35, instructions: ['35 seconds!'], keyPoints: ['Longer holds'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 20, instructions: ['Strong sides'], keyPoints: ['Both sides equal'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 25, instructions: ['Tight core'], keyPoints: ['Streamline'] },
                            { name: 'V-Sits', type: 'reps', reps: '12 reps', instructions: ['Balance'], keyPoints: ['Core strength'] },
                            { name: 'BOSU Dolphin Kicks', type: 'time', duration: 25, instructions: ['Legs together', 'Big kicks'], keyPoints: ['5 seconds more'] },
                            { name: 'BOSU Standing Balance (flat side down)', type: 'time', duration: 25, instructions: ['Balance better today'], keyPoints: ['Getting easier?'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Recover'], keyPoints: ['Almost there'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 40, instructions: ['Keep going'], keyPoints: ['Strong finish'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch'], keyPoints: ['Good work'] }
                        ]
                    }
                ]
            },
            {
                week: 5,
                day: 5,
                date: '2026-01-23',
                phase: 'Swimming-Specific Phase',
                title: 'Week 5 - Day 3',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Warm up'], keyPoints: ['Get ready'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '12 reps', instructions: ['Tall and tight'], keyPoints: ['Perfect form'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick tempo'], keyPoints: ['Let\'s go'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 35, instructions: ['Hold it'], keyPoints: ['Strong core'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 22, instructions: ['22 seconds each'], keyPoints: ['Almost 25!'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 30, instructions: ['30 seconds!'], keyPoints: ['You got this'] },
                            { name: 'V-Sits', type: 'reps', reps: '15 reps', instructions: ['15 reps now'], keyPoints: ['3 more!'] },
                            { name: 'BOSU Dolphin Kicks', type: 'time', duration: 25, instructions: ['Powerful kicks'], keyPoints: ['Like butterfly'] },
                            { name: 'BOSU Standing Balance (flat side down)', type: 'time', duration: 30, instructions: ['30 seconds balance'], keyPoints: ['Mastering it'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Breathe'], keyPoints: ['Keep it up'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 45, instructions: ['45 seconds!'], keyPoints: ['Almost done'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Cool down'], keyPoints: ['Week 5 complete!'] }
                        ]
                    }
                ]
            },
            // Week 6 - Swimming-Specific completion
            {
                week: 6,
                day: 1,
                date: '2026-01-26',
                phase: 'Swimming-Specific Phase',
                title: 'Week 6 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Big warmup'], keyPoints: ['Final week phase 2'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['15 reps!'], keyPoints: ['Stretch tall'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Energetic'], keyPoints: ['Ready'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 40, instructions: ['40 seconds!'], keyPoints: ['Getting long'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 25, instructions: ['25 seconds each'], keyPoints: ['Strong sides'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 30, instructions: ['Perfect streamline'], keyPoints: ['Tight'] },
                            { name: 'V-Sits', type: 'reps', reps: '15 reps', instructions: ['Balance strong'], keyPoints: ['Core power'] },
                            { name: 'BOSU Dolphin Kicks', type: 'time', duration: 30, instructions: ['30 seconds'], keyPoints: ['Powerful'] },
                            { name: 'BOSU Standing Balance (flat side down)', type: 'time', duration: 30, instructions: ['Solid balance'], keyPoints: ['Almost mastered'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Recover'], keyPoints: ['Keep going'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 45, instructions: ['Fast feet'], keyPoints: ['Strong finish'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch well'], keyPoints: ['Great work'] }
                        ]
                    }
                ]
            },
            {
                week: 6,
                day: 3,
                date: '2026-01-28',
                phase: 'Swimming-Specific Phase',
                title: 'Week 6 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Warm shoulders'], keyPoints: ['Get ready'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Perfect form'], keyPoints: ['Stretch tall'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Quick tempo'], keyPoints: ['Warm up'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 40, instructions: ['Hold strong'], keyPoints: ['Consistent'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 25, instructions: ['Both sides'], keyPoints: ['Balanced'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 35, instructions: ['35 seconds!'], keyPoints: ['5 seconds more'] },
                            { name: 'V-Sits', type: 'reps', reps: '18 reps', instructions: ['18 reps'], keyPoints: ['3 more'] },
                            { name: 'BOSU Dolphin Kicks', type: 'time', duration: 30, instructions: ['Powerful kicks'], keyPoints: ['Butterfly strong'] },
                            { name: 'BOSU Standing Balance (flat side down)', type: 'time', duration: 35, instructions: ['35 seconds'], keyPoints: ['Getting good'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Breathe'], keyPoints: ['Almost done'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 45, instructions: ['Keep it up'], keyPoints: ['Finish strong'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Cool down'], keyPoints: ['Good work'] }
                        ]
                    }
                ]
            },
            {
                week: 6,
                day: 5,
                date: '2026-01-30',
                phase: 'Swimming-Specific Phase',
                title: 'Week 6 - Day 3',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Final phase 2 workout!'], keyPoints: ['Let\'s finish strong'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Perfect streamlines'], keyPoints: ['You know this'] },
                            { name: 'High Knees', type: 'time', duration: 30, instructions: ['Get pumped'], keyPoints: ['Ready'] }
                        ]
                    },
                    {
                        name: 'Swimming-Specific Circuit (3 rounds)',
                        exercises: [
                            { name: 'Streamline Plank', type: 'time', duration: 45, instructions: ['45 seconds!'], keyPoints: ['Final phase 2 goal'] },
                            { name: 'Side Plank (each side)', type: 'time', duration: 25, instructions: ['Strong finish'], keyPoints: ['Both sides equal'] },
                            { name: 'Hollow Body Hold', type: 'time', duration: 35, instructions: ['Tight core'], keyPoints: ['Perfect streamline'] },
                            { name: 'V-Sits', type: 'reps', reps: '18 reps', instructions: ['Strong balance'], keyPoints: ['Core control'] },
                            { name: 'BOSU Dolphin Kicks', type: 'time', duration: 35, instructions: ['35 seconds!'], keyPoints: ['Maximum effort'] },
                            { name: 'BOSU Standing Balance (flat side down)', type: 'time', duration: 35, instructions: ['Perfect balance'], keyPoints: ['You got this'] },
                            { name: 'Rest', type: 'time', duration: 45, instructions: ['Last rest'], keyPoints: ['One more round'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Mountain Climbers', type: 'time', duration: 50, instructions: ['50 seconds!'], keyPoints: ['Final push'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Celebrate!'], keyPoints: ['Phase 2 DONE!'] }
                        ]
                    }
                ]
            },
            // Week 7 - Advanced Power Phase begins
            {
                week: 7,
                day: 1,
                date: '2026-02-02',
                phase: 'Advanced Power Phase',
                title: 'Week 7 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Warm up'], keyPoints: ['FINAL PHASE!'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Explosive reaches'], keyPoints: ['Power time'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Jump and spread', 'Arms overhead'], keyPoints: ['Full body warmup'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '20 total', instructions: ['Plank position', 'Tap opposite shoulder', 'Alternate sides', 'Don\'t rotate hips'], keyPoints: ['NEW! Stability + power'] },
                            { name: 'Russian Twists', type: 'reps', reps: '20 total', instructions: ['Sit with legs up', 'Twist side to side', 'Touch ground each side'], keyPoints: ['NEW! Rotation power'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '10 each leg', instructions: ['One leg up', 'Bridge on other leg', 'Maximum squeeze'], keyPoints: ['NEW! Single leg power'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '12 reps', instructions: ['Start in plank', 'Push hips up to pike', 'Back to plank', 'Like dolphin dive'], keyPoints: ['NEW! Butterfly power'] },
                            { name: 'BOSU Flutter Kicks', type: 'time', duration: 40, instructions: ['40 seconds!'], keyPoints: ['Longer than ever'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Longer rest', 'Power phase is hard'], keyPoints: ['Catch breath'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '10 reps', instructions: ['Squat down', 'Explode up', 'Land softly'], keyPoints: ['NEW! Explosive power'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Full stretch'], keyPoints: ['Welcome to Power Phase!'] }
                        ]
                    }
                ]
            },
            {
                week: 7,
                day: 3,
                date: '2026-02-04',
                phase: 'Advanced Power Phase',
                title: 'Week 7 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Big circles'], keyPoints: ['Warm up'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Explosive'], keyPoints: ['Power'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Full body'], keyPoints: ['Get ready'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '24 total', instructions: ['Stable plank', 'Tap shoulders'], keyPoints: ['4 more taps'] },
                            { name: 'Russian Twists', type: 'reps', reps: '24 total', instructions: ['Fast twists'], keyPoints: ['Rotation power'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '12 each leg', instructions: ['One leg power'], keyPoints: ['2 more each side'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '15 reps', instructions: ['Dive motion'], keyPoints: ['3 more reps'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '15 reps', instructions: ['Back on BOSU', 'HUGE kicks', 'Explosive power', 'Count reps not time'], keyPoints: ['NEW! Power kicks'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Recover'], keyPoints: ['Breathe'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '12 reps', instructions: ['Explosive jumps'], keyPoints: ['2 more!'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Cool down'], keyPoints: ['Good work'] }
                        ]
                    }
                ]
            },
            {
                week: 7,
                day: 5,
                date: '2026-02-06',
                phase: 'Advanced Power Phase',
                title: 'Week 7 - Day 3',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Warm up'], keyPoints: ['Get ready'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Powerful'], keyPoints: ['Explosive'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Full body'], keyPoints: ['Warm'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '24 total', instructions: ['Stable core'], keyPoints: ['No rotation'] },
                            { name: 'Russian Twists', type: 'reps', reps: '24 total', instructions: ['Quick twists'], keyPoints: ['Power rotation'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '12 each leg', instructions: ['Maximum squeeze'], keyPoints: ['Single leg power'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '15 reps', instructions: ['Smooth motion'], keyPoints: ['Dive power'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '18 reps', instructions: ['Huge kicks'], keyPoints: ['3 more kicks'] },
                            { name: 'BOSU Single Leg Balance (flat side down)', type: 'time', duration: 20, instructions: ['One leg on flat BOSU', '20 sec each leg', 'Super hard!'], keyPoints: ['NEW! Ultimate balance'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Recover'], keyPoints: ['Breathe deep'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '12 reps', instructions: ['Explosive'], keyPoints: ['Power'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch'], keyPoints: ['Week 7 done!'] }
                        ]
                    }
                ]
            },
            // Week 8 - Advanced Power continues
            {
                week: 8,
                day: 1,
                date: '2026-02-09',
                phase: 'Advanced Power Phase',
                title: 'Week 8 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Warm up'], keyPoints: ['Week 8!'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Explosive'], keyPoints: ['Power'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Full body'], keyPoints: ['Ready'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '28 total', instructions: ['Strong taps'], keyPoints: ['4 more'] },
                            { name: 'Russian Twists', type: 'reps', reps: '28 total', instructions: ['Fast rotation'], keyPoints: ['Power twists'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '15 each leg', instructions: ['Single leg strength'], keyPoints: ['3 more each'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '18 reps', instructions: ['Dive motion'], keyPoints: ['3 more'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '20 reps', instructions: ['Maximum power'], keyPoints: ['2 more kicks'] },
                            { name: 'BOSU Single Leg Balance (flat side down)', type: 'time', duration: 25, instructions: ['25 sec each leg'], keyPoints: ['Better balance'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Recover'], keyPoints: ['Keep going'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '15 reps', instructions: ['Explosive power'], keyPoints: ['3 more'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Cool down'], keyPoints: ['Good work'] }
                        ]
                    }
                ]
            },
            {
                week: 8,
                day: 3,
                date: '2026-02-11',
                phase: 'Advanced Power Phase',
                title: 'Week 8 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Warm up'], keyPoints: ['Get ready'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Explosive reaches'], keyPoints: ['Power'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Full body'], keyPoints: ['Warm'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '28 total', instructions: ['Stable plank'], keyPoints: ['No rotation'] },
                            { name: 'Russian Twists', type: 'reps', reps: '28 total', instructions: ['Quick twists'], keyPoints: ['Rotation power'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '15 each leg', instructions: ['Squeeze hard'], keyPoints: ['Single leg power'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '18 reps', instructions: ['Dive power'], keyPoints: ['Butterfly motion'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '20 reps', instructions: ['Huge kicks'], keyPoints: ['Maximum effort'] },
                            { name: 'BOSU Single Leg Balance (flat side down)', type: 'time', duration: 25, instructions: ['Solid balance'], keyPoints: ['Each leg'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Recover'], keyPoints: ['Breathe'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '15 reps', instructions: ['Explosive'], keyPoints: ['Power jumps'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch'], keyPoints: ['Good work'] }
                        ]
                    }
                ]
            },
            {
                week: 8,
                day: 5,
                date: '2026-02-13',
                phase: 'Advanced Power Phase',
                title: 'Week 8 - Day 3',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Final warmup style'], keyPoints: ['Almost done!'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Powerful reaches'], keyPoints: ['Explosive'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Full body'], keyPoints: ['Get ready'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '30 total', instructions: ['30 taps!'], keyPoints: ['2 more'] },
                            { name: 'Russian Twists', type: 'reps', reps: '30 total', instructions: ['30 twists!'], keyPoints: ['Fast rotation'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '18 each leg', instructions: ['18 each!'], keyPoints: ['3 more'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '20 reps', instructions: ['20 dives!'], keyPoints: ['2 more'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '22 reps', instructions: ['Maximum power'], keyPoints: ['2 more kicks'] },
                            { name: 'BOSU Single Leg Balance (flat side down)', type: 'time', duration: 30, instructions: ['30 sec each leg'], keyPoints: ['Almost mastered'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Last rest'], keyPoints: ['One week left!'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '18 reps', instructions: ['Explosive power'], keyPoints: ['3 more jumps'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch well'], keyPoints: ['Week 8 complete!'] }
                        ]
                    }
                ]
            },
            // Week 9 - Final Week
            {
                week: 9,
                day: 1,
                date: '2026-02-16',
                phase: 'Advanced Power Phase',
                title: 'Week 9 - Day 1',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Final week!'], keyPoints: ['WEEK 9!'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Strong reaches'], keyPoints: ['Almost done'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Full body'], keyPoints: ['Let\'s finish strong'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '30 total', instructions: ['Strong and stable'], keyPoints: ['You know this'] },
                            { name: 'Russian Twists', type: 'reps', reps: '30 total', instructions: ['Fast twists'], keyPoints: ['Rotation power'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '18 each leg', instructions: ['Maximum power'], keyPoints: ['Single leg strength'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '20 reps', instructions: ['Dive motion'], keyPoints: ['Butterfly power'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '25 reps', instructions: ['25 kicks!'], keyPoints: ['3 more!'] },
                            { name: 'BOSU Single Leg Balance (flat side down)', type: 'time', duration: 30, instructions: ['Perfect balance'], keyPoints: ['Mastered'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Recover'], keyPoints: ['Keep going'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '20 reps', instructions: ['20 jumps!'], keyPoints: ['2 more'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Cool down'], keyPoints: ['Great work'] }
                        ]
                    }
                ]
            },
            {
                week: 9,
                day: 3,
                date: '2026-02-18',
                phase: 'Advanced Power Phase',
                title: 'Week 9 - Day 2',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['Second to last!'], keyPoints: ['Almost there'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['Explosive'], keyPoints: ['Power'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Full body'], keyPoints: ['Warm up'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds)',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '32 total', instructions: ['32 taps!'], keyPoints: ['2 more'] },
                            { name: 'Russian Twists', type: 'reps', reps: '32 total', instructions: ['Quick rotation'], keyPoints: ['Power twists'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '20 each leg', instructions: ['20 each leg!'], keyPoints: ['2 more'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '22 reps', instructions: ['Dive power'], keyPoints: ['2 more dives'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '25 reps', instructions: ['Huge kicks'], keyPoints: ['Maximum effort'] },
                            { name: 'BOSU Single Leg Balance (flat side down)', type: 'time', duration: 35, instructions: ['35 seconds each'], keyPoints: ['5 more seconds'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Recover'], keyPoints: ['One workout left!'] }
                        ]
                    },
                    {
                        name: 'Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '20 reps', instructions: ['Explosive jumps'], keyPoints: ['Strong finish'] },
                            { name: 'Stretching', type: 'time', duration: 120, instructions: ['Stretch well'], keyPoints: ['One more to go!'] }
                        ]
                    }
                ]
            },
            {
                week: 9,
                day: 5,
                date: '2026-02-20',
                phase: 'Advanced Power Phase',
                title: 'Week 9 - Day 3 - FINAL WORKOUT!',
                sections: [
                    {
                        name: 'Warm-up',
                        exercises: [
                            { name: 'Arm Circles', type: 'reps', reps: '10 each', instructions: ['FINAL WORKOUT!'], keyPoints: ['This is it!'] },
                            { name: 'Streamline Reaches', type: 'reps', reps: '15 reps', instructions: ['One last time'], keyPoints: ['Perfect form'] },
                            { name: 'Jumping Jacks', type: 'time', duration: 30, instructions: ['Get pumped!'], keyPoints: ['Let\'s finish strong!'] }
                        ]
                    },
                    {
                        name: 'Power Circuit (3 rounds) - FINAL TEST',
                        exercises: [
                            { name: 'Plank with Shoulder Taps', type: 'reps', reps: '32 total', instructions: ['Perfect form', 'You mastered this'], keyPoints: ['Show what you learned'] },
                            { name: 'Russian Twists', type: 'reps', reps: '32 total', instructions: ['Powerful rotation'], keyPoints: ['Swimming rotation'] },
                            { name: 'Single-Leg Glute Bridges', type: 'reps', reps: '20 each leg', instructions: ['Maximum squeeze'], keyPoints: ['Kick power'] },
                            { name: 'Plank to Dolphin', type: 'reps', reps: '22 reps', instructions: ['Smooth dives'], keyPoints: ['Butterfly motion'] },
                            { name: 'BOSU Explosive Dolphin Kicks', type: 'reps', reps: '30 reps', instructions: ['30 KICKS!', 'FINAL CHALLENGE!'], keyPoints: ['Give it everything!'] },
                            { name: 'BOSU Single Leg Balance (flat side down)', type: 'time', duration: 40, instructions: ['40 SECONDS EACH!', 'Final balance test'], keyPoints: ['You can do this!'] },
                            { name: 'Rest', type: 'time', duration: 60, instructions: ['Celebrate each round!'], keyPoints: ['You\'re crushing it!'] }
                        ]
                    },
                    {
                        name: 'Champion Finish',
                        exercises: [
                            { name: 'Squat Jumps', type: 'reps', reps: '25 reps', instructions: ['25 FINAL JUMPS!', 'Explode!'], keyPoints: ['FINISH STRONG!'] },
                            { name: 'Victory Stretching', type: 'time', duration: 180, instructions: ['Take your time', 'You earned this', 'Think about how far you\'ve come'], keyPoints: ['9 WEEKS COMPLETE!', 'YOU DID IT!', 'CHAMPION!'] }
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