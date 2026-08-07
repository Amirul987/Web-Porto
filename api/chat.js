export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { messages } = req.body;
    
    // Gunakan API Key Gemini dari environment variables
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Server configuration error: Missing Gemini API Key' });
    }

    try {
        // 1. Pisahkan System Prompt dari riwayat pesan
        const systemMessage = messages.find(m => m.role === 'system')?.content || '';
        
        // 2. Ubah format pesan agar sesuai dengan format Gemini
        // Gemini menggunakan role "user" dan "model" (bukan "assistant")
        const chatHistory = messages
            .filter(m => m.role !== 'system')
            .map(m => ({
                role: m.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: m.content }]
            }));

        // 3. Susun body request untuk model gemini-1.5-flash
        const requestBody = {
            contents: chatHistory,
            systemInstruction: {
                role: "system",
                parts: [{ text: systemMessage }]
            }
        };

        // Fetch ke endpoint Google Gemini
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'Failed to fetch from Gemini');
        }

        // Ambil hasil teks dari respons Gemini
        const replyText = data.candidates[0].content.parts[0].text;

        // 4. Kembalikan data dengan struktur OpenAI/Groq 
        // Ini memastikan file Play.tsx Anda tetap berfungsi tanpa diubah!
        return res.status(200).json({
            choices: [
                {
                    message: {
                        content: replyText
                    }
                }
            ]
        });
    } catch (error) {
        console.error('Gemini API Error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
}
