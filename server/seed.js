import Database from "better-sqlite3";
const db = new Database("database.db"); // either creates a db, or gets the existing one

// create games table
db.exec(`
    CREATE TABLE IF NOT EXISTS comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT NOT NULL UNIQUE,
        comment TEXT
    )
`);

// populate the games table
const insertComment = db.prepare(`
    INSERT INTO comments (user, comment) VALUES (?, ?, ?)
`);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);

insertComment.run(
"",
""
);