import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    user: 'jeremy.gandase',
    host: 'ep-little-haze-767001.ap-southeast-1.aws.neon.tech',
    database: 'notesapp',
    password: 'FT1a6wmPUIDp',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default pool;
