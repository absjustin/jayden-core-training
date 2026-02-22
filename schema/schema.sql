-- Math Tutor D1 Database Schema
-- For tracking syllabus, learning progress, quizzes, and spaced repetition

-- Users table (for multi-child support)
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Syllabus topics organized by grade level and chapter
CREATE TABLE topics (
  id TEXT PRIMARY KEY,
  grade_level INTEGER NOT NULL, -- 4 for 4th grade
  chapter INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  parent_topic_id TEXT, -- for sub-topics
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_topic_id) REFERENCES topics(id)
);

-- Learning materials for each topic
CREATE TABLE learning_materials (
  id TEXT PRIMARY KEY,
  topic_id TEXT NOT NULL,
  type TEXT NOT NULL, -- 'text', 'image', 'video', 'interactive'
  content TEXT NOT NULL, -- markdown content or image URL
  order_index INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (topic_id) REFERENCES topics(id)
);

-- Quiz questions for each topic
CREATE TABLE quiz_questions (
  id TEXT PRIMARY KEY,
  topic_id TEXT NOT NULL,
  question TEXT NOT NULL,
  question_type TEXT NOT NULL, -- 'multiple_choice', 'fill_blank', 'math_input'
  options TEXT, -- JSON array for multiple choice
  correct_answer TEXT NOT NULL,
  explanation TEXT,
  difficulty INTEGER DEFAULT 1, -- 1-5
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (topic_id) REFERENCES topics(id)
);

-- User progress tracking
CREATE TABLE user_progress (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  topic_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
  started_at DATETIME,
  completed_at DATETIME,
  last_accessed_at DATETIME,
  time_spent_seconds INTEGER DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (topic_id) REFERENCES topics(id),
  UNIQUE(user_id, topic_id)
);

-- Quiz attempts and results
CREATE TABLE quiz_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  topic_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  user_answer TEXT NOT NULL,
  is_correct INTEGER NOT NULL, -- 1 = correct, 0 = incorrect
  attempted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (topic_id) REFERENCES topics(id),
  FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
);

-- Spaced repetition: when to review items (Forgetting Curve)
CREATE TABLE review_schedule (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  topic_id TEXT NOT NULL,
  next_review_at DATETIME NOT NULL,
  interval_days INTEGER NOT NULL, -- current interval
  ease_factor REAL DEFAULT 2.5, -- SM-2 algorithm ease factor
  repetition_count INTEGER DEFAULT 0,
  last_reviewed_at DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (topic_id) REFERENCES topics(id),
  UNIQUE(user_id, topic_id)
);

-- AI tutor session logs (for tracking conversation history)
CREATE TABLE tutor_sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  topic_id TEXT, -- can be NULL for general questions
  messages TEXT NOT NULL, -- JSON array of message history
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (topic_id) REFERENCES topics(id)
);

-- Indexes for performance
CREATE INDEX idx_topics_grade_chapter ON topics(grade_level, chapter);
CREATE INDEX idx_user_progress_user ON user_progress(user_id);
CREATE INDEX idx_quiz_attempts_user ON quiz_attempts(user_id, topic_id);
CREATE INDEX idx_review_schedule_next ON review_schedule(user_id, next_review_at);