import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// GitHub raw URLs
const scripts = {
    troll: 'https://raw.githubusercontent.com/lombard001/soft/main/msp2troll.user.js',
    mood: 'https://raw.githubusercontent.com/lombard001/soft/main/MSP2.mood.user.js',
    soft: 'https://raw.githubusercontent.com/lombard001/soft/main/msp2soft.user.js'
};

// Basit cache (opsiyonel)
let cache = {};

// Cache süresi (ms)
const CACHE_DURATION = 60 * 1000; // 1 dk

app.get('/:scriptName', async (req, res) => {
    const scriptName = req.params.scriptName;

    if (!scripts[scriptName]) {
        return res.status(404).send('// Script bulunamadı');
    }

    try {
        const now = Date.now();
        if (cache[scriptName] && (now - cache[scriptName].timestamp < CACHE_DURATION)) {
            console.log(`Cache kullanılıyor: ${scriptName}`);
            res.setHeader('Content-Type', 'application/javascript');
            return res.send(cache[scriptName].code);
        }

        console.log(`GitHub’dan çekiliyor: ${scriptName}`);
        const response = await fetch(scripts[scriptName]);
        if (!response.ok) throw new Error('GitHub fetch hatası: ' + response.status);
        const code = await response.text();

        cache[scriptName] = { code, timestamp: now };

        res.setHeader('Content-Type', 'application/javascript');
        res.send(code);

    } catch (err) {
        console.error(err);
        res.status(500).send('// Sunucu hatası: ' + err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}/[troll|mood|soft]`);
});
