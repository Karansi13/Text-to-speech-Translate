// import { useState } from 'react';

// export default function Home() {
//   // Simulate extracted text from a PDF
//   const [originalText, setOriginalText] = useState('This is some extracted text from a PDF.');
//   const [targetLang, setTargetLang] = useState('fr'); // default to French
//   const [translatedText, setTranslatedText] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleTranslate = async () => {
//     setLoading(true);
//     setTranslatedText('');

//     try {
//       const response = await fetch('/api/translate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text: originalText, sourceLang: 'en', targetLang })
//       });

//       const data = await response.json();
//       if (data.translatedText) {
//         setTranslatedText(data.translatedText);
//       } else {
//         console.error(data.error || 'Unknown error');
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ margin: '2rem' }}>
//       <h1>Translate Extracted Text</h1>
//       <div style={{ marginBottom: '1rem' }}>
//         <label>Original Text:</label><br/>
//         <textarea
//           value={originalText}
//           onChange={(e) => setOriginalText(e.target.value)}
//           rows={5}
//           style={{ width: '100%' }}
//         />
//       </div>

//       <div style={{ marginBottom: '1rem' }}>
//         <label>Target Language:</label><br/>
//         <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
//           <option value="fr">French</option>
//           <option value="es">Spanish</option>
//           <option value="de">German</option>
//           <option value="it">Italian</option>
//           <option value="ja">Japanese</option>
//           <option value="zh">Chinese</option>
//           <option value="hi">Hindi</option>
//           {/* Add more languages as needed */}
//         </select>
//       </div>

//       <button onClick={handleTranslate} disabled={loading}>
//         {loading ? 'Translating...' : 'Translate'}
//       </button>

//       {translatedText && (
//         <div style={{ marginTop: '2rem' }}>
//           <h2>Translated Text:</h2>
//           <div style={{ background: '#f0f0f0', padding: '1rem' }}>
//             {translatedText}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from 'react';

// export default function Home() {
//   // Initially set some text (assume from PDF extraction or translated text).
//   const [originalText, setOriginalText] = useState('This is some extracted text from a PDF.');
//   const [targetLang, setTargetLang] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [audioSrc, setAudioSrc] = useState(null);

//   const handleTranslate = async () => {
//     if (!targetLang) {
//       alert('Please enter a target language code (e.g., "fr" for French).');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch('/api/translate', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text: originalText, targetLang })
//       });
//       const data = await response.json();

//       if (data.translatedText) {
//         setOriginalText(data.translatedText);  // Replace the original text with translated
//       } else {
//         console.error(data.error || 'Unknown error');
//         alert('Failed to translate text.');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('An error occurred during translation.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTextToSpeech = async () => {
//     // Clear previous audio if any
//     setAudioSrc(null);

//     try {
//       const response = await fetch('/api/tts', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ text: originalText })
//       });

//       if (!response.ok) {
//         console.error('Failed to fetch audio from TTS API');
//         alert('Failed to convert text to speech.');
//         return;
//       }

//       // Get the audio as a blob
//       const blob = await response.blob();
//       const audioUrl = URL.createObjectURL(blob);
//       setAudioSrc(audioUrl);
//     } catch (err) {
//       console.error(err);
//       alert('An error occurred during TTS.');
//     }
//   };

//   return (
//     <div style={{ margin: '2rem' }}>
//       <h1>Auto-Detect and Translate with TTS</h1>

//       <div style={{ marginBottom: '1rem' }}>
//         <label>Text:</label><br/>
//         <textarea
//           value={originalText}
//           onChange={(e) => setOriginalText(e.target.value)}
//           rows={5}
//           style={{ width: '100%' }}
//         />
//       </div>

//       <div style={{ marginBottom: '1rem' }}>
//         <label>Enter Target Language Code (e.g., "fr" for French):</label><br/>
//         <input
//           type="text"
//           value={targetLang}
//           onChange={(e) => setTargetLang(e.target.value)}
//           placeholder="e.g., fr, es, de, ja, zh..."
//         />
//       </div>

//       <div style={{ marginBottom: '1rem' }}>
//         <button onClick={handleTranslate} disabled={loading}>
//           {loading ? 'Translating...' : 'Translate'}
//         </button>
//       </div>

//       <div style={{ marginBottom: '1rem' }}>
//         <button onClick={handleTextToSpeech}>Read Aloud</button>
//       </div>

//       {audioSrc && (
//         <div style={{ marginTop: '1rem' }}>
//           <audio controls>
//             <source src={audioSrc} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// }


// Old Code

// import { useState } from "react";

// export default function Home() {
//   const [originalText, setOriginalText] = useState(
//     "This is some extracted text from a PDF."
//   );
//   const [targetLang, setTargetLang] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [audioSrc, setAudioSrc] = useState(null);

//   const handleTranslate = async () => {
//     if (!targetLang) {
//       alert('Please enter a target language code (e.g., "fr" for French).');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch("/api/translate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text: originalText, targetLang }),
//       });
//       const data = await response.json();

//       if (data.translatedText) {
//         setOriginalText(data.translatedText);
//       } else {
//         console.error(data.error || "Unknown error");
//         alert("Failed to translate text.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred during translation.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // const handleTextToSpeech = async () => {
//   //   setAudioSrc(null);

//   //   try {
//   //     const response = await fetch('/api/tts', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify({ text: originalText })
//   //     });

//   //     console.log(response)

//   //     if (!response.ok) {
//   //       console.error('Failed to fetch audio from TTS API');
//   //       alert('Failed to convert text to speech.');
//   //       return;
//   //     }

//   //     // Get the audio as a blob
//   //     const blob = await response.blob();
//   //     const audioUrl = URL.createObjectURL(blob);
//   //     setAudioSrc(audioUrl);
//   //   } catch (err) {
//   //     console.error(err);
//   //     alert('An error occurred during TTS.');
//   //   }
//   // };
//   const handleTextToSpeech = async () => {
//     setAudioSrc(null);

//     try {
//       const response = await fetch("/api/tts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           text: originalText,
//           speaker: "meera",
//           pitch: 0,
//           pace: 1.65,
//           loudness: 1.5,
//           speech_sample_rate: 8000,
//           enable_preprocessing: true,
//           model: "bulbul:v1",
//         }),
//       });

//       if (!response.ok) {
//         console.error("Failed to fetch audio from TTS API");
//         alert("Failed to convert text to speech.");
//         return;
//       }

//       console.log("Content-Type:", response.headers.get("Content-Type"));

//       // Get the audio as a blob
//       const blob = await response.blob();
//       console.log("Blob size:", blob.size);

//       if (blob.size === 0) {
//         alert("The API returned empty audio data.");
//         return;
//       }

//       // Create a blob URL for the audio
//       const audioUrl = URL.createObjectURL(blob);
//       console.log("Audio URL:", audioUrl);

//       // Set the audio source to play it
//       setAudioSrc(audioUrl);

//       // Automatically play using <audio> element
//       const audioElement = document.createElement("audio");
//       audioElement.src = audioUrl;
//       audioElement.type = "audio/mpeg";
//       audioElement
//         .play()
//         .catch((err) => console.error("Audio play error:", err));
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred during TTS.");
//     }
//   };

//   return (
//     <div style={{ margin: "2rem" }}>
//       <h1>Auto-Detect and Translate with TTS</h1>

//       <div style={{ marginBottom: "1rem" }}>
//         <label>Text:</label>
//         <br />
//         <textarea
//           value={originalText}
//           onChange={(e) => setOriginalText(e.target.value)}
//           rows={5}
//           style={{ width: "100%" }}
//           className="text-black"
//         />
//       </div>

//       <div style={{ marginBottom: "1rem" }}>
//         <label>Enter Target Language Code (e.g., "fr" for French):</label>
//         <br />
//         <input
//           type="text"
//           value={targetLang}
//           onChange={(e) => setTargetLang(e.target.value)}
//           placeholder="e.g., fr, es, de, ja, zh..."
//         />
//       </div>

//       <div style={{ marginBottom: "1rem" }}>
//         <button onClick={handleTranslate} disabled={loading}>
//           {loading ? "Translating..." : "Translate"}
//         </button>
//       </div>

//       <div style={{ marginBottom: "1rem" }}>
//         <button onClick={handleTextToSpeech}>Read Aloud</button>
//       </div>

//       {audioSrc && (
//         <div style={{ marginTop: "1rem" }}>
//           <audio controls autoPlay>
//             <source src={audioSrc} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// }


// Updated index.js
// import { useState } from "react";

// export default function Home() {
//   const [originalText, setOriginalText] = useState(
//     "This is some extracted text from a PDF."
//   );
//   const [translatedText, setTranslatedText] = useState("");
//   const [targetLang, setTargetLang] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [audioSrc, setAudioSrc] = useState(null);

//   // const handleTranslate = async () => {
//   //   if (!targetLang) {
//   //     alert('Please enter a target language code (e.g., "fr" for French).');
//   //     return;
//   //   }

//   //   setLoading(true);

//   //   try {
//   //     const response = await fetch("/api/translate", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ text: originalText, targetLang }),
//   //     });
//   //     const data = await response.json();

//   //     if (data.translatedText) {
//   //       setTranslatedText(data.translatedText);
//   //     } else {
//   //       console.error(data.error || "Unknown error");
//   //       alert("Failed to translate text.");
//   //     }
//   //   } catch (err) {
//   //     console.error(err);
//   //     alert("An error occurred during translation.");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const handleTranslate = async () => {
//     if (!targetLang) {
//       alert('Please enter a target language code (e.g., "hi-IN" for Hindi).');
//       return;
//     }
  
//     setLoading(true);
  
//     try {
//       const response = await fetch("/api/translate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ 
//           input: originalText, 
//           target_language_code: `${targetLang}-IN` 
//         }),
//       });
//       const data = await response.json();
  
//       if (data.translated_text) {
//         setTranslatedText(data.translated_text);
//       } else {
//         console.error(data.error || "Unknown error");
//         alert("Failed to translate text.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred during translation.");
//     } finally {
//       setLoading(false);
//     }
//   };

  
//   const handleTextToSpeech = async () => {
//     if (!translatedText) {
//       alert("Please translate the text first.");
//       return;
//     }
  
//     setAudioSrc(null);
  
//     try {
//       const response = await fetch("/api/tts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           text: translatedText,
//           target_language_code: `${targetLang}-IN`,
//         }),
//       });
  
//       if (!response.ok) {
//         const errorResponse = await response.json();
//         console.error("TTS API Error:", errorResponse);
//         alert("Failed to convert text to speech.");
//         return;
//       }
  
//       const blob = await response.blob();

//       console.log(blob)
  
//       if (blob.size === 0) {
//         alert("The API returned empty audio data.");
//         return;
//       }
  
//       const audioUrl = URL.createObjectURL(blob);

//       console.log(audioUrl)
//       setAudioSrc(audioUrl);
//     } catch (err) {
//       console.error(err);
//       alert("An error occurred during TTS.");
//     }
//   };
  

//   return (
//     <div style={{ margin: "2rem" }}>
//       <h1>Translate and Listen</h1>

//       <div style={{ marginBottom: "1rem" }}>
//         <label>Original Text:</label>
//         <br />
//         <textarea
//           value={originalText}
//           onChange={(e) => setOriginalText(e.target.value)}
//           rows={5}
//           style={{ width: "100%" }}
//         />
//       </div>

//       <div style={{ marginBottom: "1rem" }}>
//         <label>Enter Target Language Code:</label>
//         <br />
//         <input
//           type="text"
//           value={targetLang}
//           onChange={(e) => setTargetLang(e.target.value)}
//           placeholder="e.g., en, fr, es, hi..."
//         />
//       </div>

//       <div style={{ marginBottom: "1rem" }}>
//         <button onClick={handleTranslate} disabled={loading}>
//           {loading ? "Translating..." : "Translate"}
//         </button>
//       </div>

//       {translatedText && (
//         <div style={{ marginBottom: "1rem" }}>
//           <h3>Translated Text:</h3>
//           <p>{translatedText}</p>
//         </div>
//       )}

//       <div style={{ marginBottom: "1rem" }}>
//         <button onClick={handleTextToSpeech}>Convert to Speech</button>
//       </div>

//       {audioSrc && (
//         <div style={{ marginTop: "1rem" }}>
//           <audio controls autoPlay>
//             <source src={audioSrc} type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//       )}
//     </div>
//   );
// }




// Updated index.js
import { useState } from "react";

export default function Home() {
  const [originalText, setOriginalText] = useState(
    "This is some extracted text from a PDF."
  );
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  const handleTranslate = async () => {
    if (!targetLang) {
      alert('Please enter a target language code (e.g., "hi-IN" for Hindi).');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          input: originalText, 
          source_language_code: "en-IN", 
          target_language_code: `${targetLang}-IN`, 
          speaker_gender: "Female", 
          mode: "formal", 
          model: "mayura:v1", 
          enable_preprocessing: true 
        }),
      });
      const data = await response.json();

      if (data.translated_text) {
        setTranslatedText(data.translated_text);
      } else {
        console.error(data.error || "Unknown error");
        alert("Failed to translate text.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred during translation.");
    } finally {
      setLoading(false);
    }
  };

  // const handleTextToSpeech = async () => {
  //   if (!translatedText) {
  //     alert("Please translate the text first.");
  //     return;
  //   }

  //   setAudioSrc(null);

  //   try {
  //     const response = await fetch("/api/tts", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         text: translatedText,
  //         target_language_code: `${targetLang}-IN`,
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
  //       alert("Failed to convert text to speech: " + (errorResponse.error?.message || "Unknown error"));
  //       return;
  //     }

  //     const data = await response.json();
  //     const base64Audio = data?.audios?.[0];

  //     if (!base64Audio) {
  //       alert("No audio data returned by the API.");
  //       return;
  //     }

  //     const audioBlob = new Blob([Uint8Array.from(atob(base64Audio), (c) => c.charCodeAt(0))], {
  //       type: "audio/wav",
  //     });
  //     const audioUrl = URL.createObjectURL(audioBlob);
  //     setAudioSrc(audioUrl);
  //   } catch (err) {
  //     console.error(err);
  //     alert("An error occurred during TTS.");
  //   }
  // };

  const handleTextToSpeech = async () => {
    if (!translatedText) {
      alert("Please translate the text first.");
      return;
    }
  
    setAudioSrc(null);
  
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: translatedText,
          target_language_code: `${targetLang}-IN`,
        }),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("TTS API Error Response:", errorResponse);
        alert("Failed to convert text to speech: " + (errorResponse.error?.message || "Unknown error"));
        return;
      }
  
      // Create a Blob URL for the audio
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      setAudioSrc(audioUrl);
    } catch (err) {
      console.error(err);
      alert("An error occurred during TTS.");
    }
  };
  
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Translate and Listen</h1>

      <div style={{ marginBottom: "1rem" }}>
        <label>Original Text:</label>
        <br />
        <textarea
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          rows={5}
          style={{ width: "100%" }}
          className="text-black"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label>Enter Target Language Code:</label>
        <br />
        <input
          type="text"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          placeholder="e.g., hi, bn, kn, ml..."
          className="text-black"
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleTranslate} disabled={loading}>
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>

      {translatedText && (
        <div style={{ marginBottom: "1rem" }}>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}

      <div style={{ marginBottom: "1rem" }}>
        <button onClick={handleTextToSpeech}>Convert to Speech</button>
      </div>

      {audioSrc && (
        <div style={{ marginTop: "1rem" }}>
          <audio controls autoPlay>
            <source src={audioSrc} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}