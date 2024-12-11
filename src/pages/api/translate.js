// // pages/api/translate.js
// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ error: 'Method not allowed' });
//     }
  
//     try {
//       const { text, targetLang } = req.body;
  
//       if (!text || !targetLang) {
//         return res.status(400).json({ error: 'Missing text or targetLang' });
//       }
  
//       const response = await fetch('https://libretranslate.de/translate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           q: text,
//           source: 'auto',  // Attempt to auto-detect the source language
//           target: targetLang,
//           format: 'text'
//         })
//       });
  
//       if (!response.ok) {
//         const errorData = await response.text();
//         return res.status(500).json({ error: 'Translation failed', details: errorData });
//       }
  
//       const data = await response.json();
//       return res.status(200).json({ translatedText: data.translatedText });
//     } catch (error) {
//       console.error('Translation error:', error);
//       return res.status(500).json({ error: 'Server error' });
//     }
//   }
  


// export default async function handler(req, res) {
//     const { text, sourceLang = 'en', targetLang = 'fr' } = req.body || {};
  
//     if (!text || !targetLang) {
//       return res.status(400).json({ error: 'Missing required fields: text or targetLang' });
//     }
  
//     // Construct the API URL for MyMemory
//     // Example: https://api.mymemory.translated.net/get?q=Hello%20World!&langpair=en|it
//     const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${encodeURIComponent(sourceLang)}|${encodeURIComponent(targetLang)}`;
  
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
  
//       // Extract the translated text
//       const translatedText = data?.responseData?.translatedText;
//       if (!translatedText) {
//         return res.status(500).json({ error: 'Failed to translate' });
//       }
  
//       return res.status(200).json({ translatedText });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Server error occurred' });
//     }
//   }
  


// Updated translate.js
// export default async function handler(req, res) {
//   const { input, source_language_code, target_language_code, speaker_gender, mode, model, enable_preprocessing } = req.body || {};

//   if (!input || !source_language_code || !target_language_code) {
//     return res.status(400).json({ error: "Missing required fields." });
//   }

//   try {
//     const response = await fetch("https://api.sarvam.ai/translate-text", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-subscription-key": "d0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f",
//       },
//       body: JSON.stringify({ 
//         input,
//         source_language_code, 
//         target_language_code,
//         speaker_gender: speaker_gender || "Female",
//         mode: mode || "formal",
//         model: model || "mayura:v1",
//         enable_preprocessing: enable_preprocessing || false
//       }),
//     });

//     const data = await response.json();
//     const translatedText = data?.translated_text;

//     if (!translatedText) {
//       return res.status(500).json({ error: "Failed to translate text." });
//     }

//     res.status(200).json({ translated_text: translatedText });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error occurred." });
//   }
// }

export default async function handler(req, res) {
  const { input, target_language_code } = req.body || {};

  // Validate required fields
  if (!input || !target_language_code) {
    return res.status(400).json({ error: "Missing required fields: 'input' or 'target_language_code'." });
  }

  try {
    const response = await fetch("https://api.sarvam.ai/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": "d0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f",
      },
      body: JSON.stringify({
        input,
        source_language_code: "en-IN", // Defaulting to English (India)
        target_language_code, // Defaulting to English (
        speaker_gender: "Female",
        mode: "formal",
        model: "mayura:v1",
        enable_preprocessing: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      return res.status(response.status).json({
        error: errorResponse.message || "Failed to translate text.",
      });
    }

    const data = await response.json();
    const translatedText = data?.translated_text;

    if (!translatedText) {
      return res.status(500).json({ error: "Translation response is missing the 'translated_text' field." });
    }

    res.status(200).json({ translated_text: translatedText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error occurred." });
  }
}
