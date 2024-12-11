// export default async function handler(req, res) {
//     const { text } = req.body || {};

//     if (!text) {
//       return res.status(400).json({ error: 'Missing text field' });
//     }

//     try {
//       // Hypothetical Sarvam TTS API endpoint & request
//       // Adjust the URL and any required headers or auth as per the actual API docs.
//       const response = await fetch('https://api.sarvam.ai/text-to-speech', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add any required headers like API keys if needed
//           'api-subscription-key': 'd0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f'
//         },
//         body: JSON.stringify({ text })
//       });

//       if (!response.ok) {
//         return res.status(500).json({ error: 'Failed to get audio from TTS API' });
//       }

//       // The API should return audio binary data. We’ll read it as a buffer.
//       const audioArrayBuffer = await response.arrayBuffer();

//       // We'll send it back to the client as binary data.
//       // Set appropriate headers so the client knows it's audio data.
//       res.setHeader('Content-Type', 'audio/mpeg');
//       res.status(200).send(Buffer.from(audioArrayBuffer));
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Server error occurred' });
//     }
//   }

// export default async function handler(req, res) {
//     const { text } = req.body || {};

//     console.log(text)

//     if (!text) {
//       return res.status(400).json({ error: 'Missing text field' });
//     }

//     try {
//       const response = await fetch('https://api.sarvam.ai/text-to-speech', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'api-subscription-key': 'd0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f'
//         },
//         body: JSON.stringify({ text })
//       });

//       console.log(response);

//       if (!response.ok) {
//         return res.status(500).json({ error: 'Failed to get audio from TTS API' });
//       }

//       // The API should return audio binary data. We’ll read it as a buffer.
//       const audioArrayBuffer = await response.arrayBuffer();

//       // We'll send it back to the client as binary data.
//       // Set appropriate headers so the client knows it's audio data.
//       res.setHeader('Content-Type', 'audio/mpeg');
//       res.status(200).send(Buffer.from(audioArrayBuffer));
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Server error occurred' });
//     }
//   }

// export default async function handler(req, res) {
//     const { text } = req.body || {};

//     if (!text || text.trim() === '') {
//       return res.status(400).json({ error: 'Missing or empty text field' });
//     }

//     try {
//       console.log('Sending request to Sarvam AI with text:', text);

//       const response = await fetch('https://api.sarvam.ai/text-to-speech', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'api-subscription-key': 'd0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f'
//         },
//         body: JSON.stringify({
//           target_language_code: 'en-In',
//           inputs: [text]
//         })
//       });

//       if (!response.ok) {
//         const errorResponse = await response.json();
//         console.error('Sarvam API Error:', errorResponse);
//         return res.status(response.status).json({ error: errorResponse.message || 'Failed to get audio from TTS API' });
//       }

//       const audioArrayBuffer = await response.arrayBuffer();
//       res.setHeader('Content-Type', 'audio/mpeg');
//       res.status(200).send(Buffer.from(audioArrayBuffer));
//     } catch (err) {
//       console.error('Server error:', err);
//       res.status(500).json({ error: 'Server error occurred' });
//     }
//   }

// export default async function handler(req, res) {
//   const { text, targetLanguageCode } = req.body || {};

//   if (!text || text.trim() === "") {
//     return res.status(400).json({ error: "Missing or empty text field" });
//   }

//   // Validate targetLanguageCode
//   const validLanguages = [
//     "hi-IN",
//     "bn-IN",
//     "kn-IN",
//     "ml-IN",
//     "mr-IN",
//     "od-IN",
//     "pa-IN",
//     "ta-IN",
//     "te-IN",
//     "en-IN",
//     "gu-IN",
//   ];
//   const languageCode = targetLanguageCode || "en-IN"; // Default to English (India)

//   if (!validLanguages.includes(languageCode)) {
//     return res
//       .status(400)
//       .json({
//         error: `Invalid target_language_code. Must be one of ${validLanguages.join(
//           ", "
//         )}`,
//       });
//   }

//   try {
//     console.log("Sending request to Sarvam AI with text:", text);

//     const response = await fetch("https://api.sarvam.ai/text-to-speech", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-subscription-key": "d0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f",
//       },
//       body: JSON.stringify({
//         target_language_code: languageCode,
//         inputs: [text],
//         speaker: "meera",
//         pitch: 0,
//         pace: 1.65,
//         loudness: 1.5,
//         speech_sample_rate: 8000,
//         enable_preprocessing: true,
//         model: "bulbul:v1",
//       }),
//     });

//     if (!response.ok) {
//       const errorResponse = await response.json();
//       console.error("Sarvam API Error:", errorResponse);
//       return res
//         .status(response.status)
//         .json({
//           error: errorResponse.message || "Failed to get audio from TTS API",
//         });
//     }

//     const audioArrayBuffer = await response.arrayBuffer();
//     res.setHeader("Content-Type", "audio/mpeg");
//     res.status(200).send(Buffer.from(audioArrayBuffer));
//   } catch (err) {
//     console.error("Server error:", err);
//     res.status(500).json({ error: "Server error occurred" });
//   }
// }


// export default async function handler(req, res) {
//   const { text, target_language_code } = req.body || {};

//   // Validate required fields
//   if (!text || !target_language_code) {
//     return res.status(400).json({ error: "Missing required fields: 'text' or 'target_language_code'." });
//   }

//   try {
//     console.log("TTS API Request Body:", { text, target_language_code });

//     const response = await fetch("https://api.sarvam.ai/text-to-speech", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-subscription-key": "d0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f",
//       },
//       body: JSON.stringify({
//         target_language_code,
//         inputs: [text], // Ensure text is sent as an array
//         speaker: "meera", // Optional, defaulting to "meera"
//         pitch: 0, // Default pitch
//         pace: 1.0, // Default pace
//         loudness: 1.0, // Default loudness
//         speech_sample_rate: 8000, // Default sample rate
//         enable_preprocessing: true, // Enable preprocessing
//       }),
//     });

//     if (!response.ok) {
//       const errorResponse = await response.json();
//       console.error("TTS API Error Response:", errorResponse);
//       return res.status(response.status).json({
//         error: errorResponse.message || "Failed to fetch audio from TTS API.",
//       });
//     }

//     const audioArrayBuffer = await response.arrayBuffer();
//     res.setHeader("Content-Type", "audio/mpeg");
//     res.status(200).send(Buffer.from(audioArrayBuffer));
//   } catch (err) {
//     console.error("TTS API Error:", err);
//     res.status(500).json({ error: "Server error occurred." });
//   }
// }


// Updated tts.js
// export default async function handler(req, res) {
//   const { text, target_language_code } = req.body || {};

//   if (!text || !target_language_code) {
//     return res.status(400).json({ error: "Missing required fields." });
//   }

//   try {
//     console.log("TTS API Request Body:", { text, target_language_code });

//     const response = await fetch("https://api.sarvam.ai/text-to-speech", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "api-subscription-key": "d0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f",
//       },
//       body: JSON.stringify({
//         target_language_code,
//         inputs: [text],
//         speaker: "meera",
//         pitch: 0,
//         pace: 1.0,
//         loudness: 1.0,
//         speech_sample_rate: 8000,
//         enable_preprocessing: true
//       }),
//     });

//     if (!response.ok) {
//       const errorResponse = await response.json();
//       console.error("TTS API Error Response:", errorResponse);
//       return res.status(response.status).json({
//         error: errorResponse.message || "Failed to fetch audio from TTS API",
//       });
//     }

//     const data = await response.json();
//     const base64Audio = data?.audios?.[0];

//     if (!base64Audio) {
//       return res.status(500).json({ error: "No audio data returned by the API." });
//     }

//     const audioBuffer = Buffer.from(base64Audio, "base64");
//     res.setHeader("Content-Type", "audio/wav");
//     res.status(200).send(audioBuffer);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Server error occurred." });
//   }
// }


export default async function handler(req, res) {
  const { text, target_language_code } = req.body || {};

  if (!text || !target_language_code) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    console.log("TTS API Request Body:", { text, target_language_code });

    const response = await fetch("https://api.sarvam.ai/text-to-speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": "d0031a9e-b14c-4083-a2d6-f0f3c7ca7b0f",
      },
      body: JSON.stringify({
        target_language_code,
        inputs: [text],
        speaker: "meera",
        pitch: 0,
        pace: 1.0,
        loudness: 1.0,
        speech_sample_rate: 8000,
        enable_preprocessing: true,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("TTS API Error Response:", errorResponse);
      return res.status(response.status).json({
        error: errorResponse.message || "Failed to fetch audio from TTS API",
      });
    }

    const data = await response.json();
    const base64Audio = data?.audios?.[0];

    if (!base64Audio) {
      return res.status(500).json({ error: "No audio data returned by the API." });
    }

    // Decode base64 to binary
    const audioBuffer = Buffer.from(base64Audio, "base64");

    // Set response headers and send the binary audio data
    res.setHeader("Content-Type", "audio/wav");
    res.setHeader("Content-Length", audioBuffer.length);
    res.status(200).send(audioBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error occurred." });
  }
}
