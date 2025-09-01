import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// Script URL’leri
const SCRIPTS = {
    troll: 'https://raw.githubusercontent.com/lombard001/soft/refs/heads/main/msp2troll.user.js',
    mood: 'https://raw.githubusercontent.com/lombard001/soft/refs/heads/main/MSP2.mood.user.js',
    soft: 'https://raw.githubusercontent.com/lombard001/soft/refs/heads/main/msp2soft.user.js'
};

// Basit cache
let cache = {};

app.get('/:script', async (req, res) => {
    const name = req.params.script;
    if (!SCRIPTS[name]) return res.status(404).send('// Script bulunamadı');

    try {
        const now = Date.now();
        if (cache[name] && now - cache[name].timestamp < 60 * 1000) {
            res.setHeader('Content-Type', 'application/javascript');
            return res.send(cache[name].code);
        }

        const response = await fetch(SCRIPTS[name]);
        if (!response.ok) throw new Error('GitHub fetch hatası: ' + response.status);
        const code = await response.text();

        cache[name] = { code, timestamp: now };

        res.setHeader('Content-Type', 'application/javascript');
        res.send(code);
    } catch (err) {
        console.error(err);
        res.status(500).send('// Sunucu hatası: ' + err.message);
    }
});

app.get('/', (req, res) => {
    res.send(`
        <h2>MSP2 Script Sunucusu</h2>
        <p>Script endpointleri:</p>
        <ul>
            <li><a href="/troll">/troll → msp2troll.user.js</a></li>
            <li><a href="/mood">/mood → MSP2.mood.user.js</a></li>
            <li><a href="/soft">/soft → msp2soft.user.js</a></li>
        </ul>
    `);
});

app.listen(PORT, () => console.log(`Server çalışıyor: http://localhost:${PORT}`));
