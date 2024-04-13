import { sql } from "./db.js";

// sql`DROP TABLE IF EXISTS videos;`.then(()=> {
//   console.log('tabela apagada')
// })

// sql`
//   CREATE TABLE videos (
//     id  TEXT PRIMARY KEY,
//     title TEXT,
//     description TEXT,
//     duration INTEGER
//   )
// `.then(()=> {
//   console.log('tabela criada!')
// })

sql`
CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER,
    event_type TEXT, -- Pode ser "online", "presencial" ou "ambos"
    date_time TEXT, -- Data e hora para eventos, para ambos online e presencial
    video_link TEXT -- Link para o vídeo
);

`.then(() => {
  console.log("tabela criada");
});
