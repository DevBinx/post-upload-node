const express = require('express');
const app = express();

// 요청 크기 제한 제거
app.use(express.json({ limit: 'Infinity' })); // JSON 요청 크기 제한 제거
app.use(express.urlencoded({ limit: 'Infinity', extended: true })); // URL-encoded 요청 크기 제한 제거

// POST 요청 처리
app.post('/upload', (req, res) => {
    try {
        const data = req.body; // 클라이언트로부터 전송된 데이터
        console.log('Received data:', data);

        // 데이터 처리 로직 (예: 데이터 저장)
        res.status(200).send({ message: 'Data received successfully!' });
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).send({ error: 'Failed to process the request.' });
    }
});

// 서버 시작
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

