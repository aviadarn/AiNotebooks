# Psychology Voice Assistant 🧠🎙️

A voice-activated AI assistant designed to provide psychological support during major life transitions. This project features **Dr. Julian**, an empathetic positive psychologist specializing in "Transition Resilience".

## 🌟 Features

*   **Voice Interaction**: Speak directly to the assistant using your browser's microphone.
*   **Speech-to-Text**: Converts your voice input into text using Google Speech Recognition.
*   **Empathetic AI**: Powered by **Ollama** (using models like `gpt-oss:20b` or others), providing context-aware, psychological guidance.
*   **Text-to-Speech**: The assistant replies with voice audio using `gTTS`.
*   **Interactive UI**: Built with **Streamlit** for an easy-to-use chat interface directly in the notebook.

## 🛠️ Technology Stack

*   **Python 3**
*   **Streamlit**: For the web interface.
*   **LangChain**: For managing the AI conversation flow and prompt templating.
*   **Ollama**: For running the local LLM.
*   **SpeechRecognition**: For processing audio input.
*   **gTTS (Google Text-to-Speech)**: For generating audio responses.
*   **Javascript**: For capturing audio in a browser/notebook environment.

## 📋 Prerequisites

The notebook automatically installs the required system packages and Python libraries. Major dependencies include:
*   `ffmpeg`
*   `portaudio19-dev`
*   `espeak`
*   `ollama`

## 🚀 Usage

1.  **Open the Notebook**: Open `voice-assistant.ipynb` in Google Colab or a Jupyter environment.
2.  **Run All Cells**: Execute the cells in order.
    *   The first few cells will install dependencies and start the Ollama server.
    *   Wait for the "Ollama server started" and model pulling confirmation.
3.  **Interact**:
    *   Scroll down to the Recording section.
    *   Follow the on-screen prompt to record your voice.
    *   Receive a text and audio response from Dr. Julian.

## 🤖 Persona: Dr. Julian

The assistant adopts the persona of **Dr. Julian**, focusing on:
*   **Validating** your feelings (homesickness, anxiety).
*   **Reframing** challenges as opportunities for growth.
*   **Encouraging** connection and exploration in your new environment.

## 📝 Notes

*   **Browser Audio**: Because the backend (Colab/Remote Kernel) cannot access your local microphone directly, this project uses a Javascript bridge to record audio from your client browser and send it to the Python kernel.
*   **Ollama Models**: The default model is set to `gpt-oss:20b`, but this can be changed in the Configuration section of the notebook.

---
*Created by Aviad*
