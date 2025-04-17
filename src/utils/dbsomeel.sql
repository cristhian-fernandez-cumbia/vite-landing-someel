DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS time_slots;
DROP TABLE IF EXISTS availability;
DROP TABLE IF EXISTS readers;
DROP TABLE IF EXISTS mentors;

CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  avatar_url VARCHAR(255),
  bio TEXT,
  experience TEXT,
  themes JSON
);

CREATE TABLE availability (
  id SERIAL PRIMARY KEY,
  mentor_id INT,
  day VARCHAR(2),
  FOREIGN KEY (mentor_id) REFERENCES mentors(id)
);

CREATE TABLE time_slots (
  id SERIAL PRIMARY KEY,
  availability_id INT,
  time VARCHAR(8),
  max_students INT,
  current_students INT DEFAULT 0,
  is_full BOOLEAN DEFAULT false,
  FOREIGN KEY (availability_id) REFERENCES availability(id)
);

CREATE TABLE readers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  avatar_url VARCHAR(255),
  reading_level VARCHAR(50),
  interests JSON
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  mentor_id INT,
  reader_id INT,
  day VARCHAR(2),
  time VARCHAR(8),
  theme VARCHAR(255),
  booking_date TIMESTAMP,
  FOREIGN KEY (mentor_id) REFERENCES mentors(id),
  FOREIGN KEY (reader_id) REFERENCES readers(id)
);