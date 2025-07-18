CREATE TABLE agents (
    id SERIAL PRIMARY KEY,
    codename TEXT NOT NULL UNIQUE,
    real_name TEXT NOT NULL,
    clearance_level INTEGER NOT NULL
);
CREATE TABLE missions (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    status TEXT CHECK (status IN ('assigned', 'completed','failed', 'active')),
    location TEXT,
    agent_id INTEGER REFERENCES agents(id) on DELETE SET NULL,
    start_date DATE,
    end_date DATE
);

CREATE TABLE mission_files (
    id SERIAL PRIMARY KEY,
    mission_id INTEGER REFERENCES missions(id) ON DELETE SET NULL,
    filename TEXT,
    encrypted_data TEXT,
    uploaded_at TIMESTAMP DEFAULT NOW()
);
