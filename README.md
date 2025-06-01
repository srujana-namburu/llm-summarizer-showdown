# 🧠 Battle of the LLMs: Summarizer Showdown

Compare the summarization power of open-source Large Language Models (LLMs) side by side!

This is a simple Flask-based web app that lets users input a long article, choose two summarization models, and compare their outputs for **Clarity**, **Accuracy**, and **Conciseness**.

---

## 🚀 Features

- 🔽 **Model Selection Dropdowns**  
  Choose two models from the following:
  - `facebook/bart-large-cnn` (HuggingFace)
  - `google/pegasus-xsum` (HuggingFace)
  - `sshleifer/distilbart-cnn-12-6` (Optional lightweight model)
  - More can be added!

- 📝 **Text Input Area**  
  Paste or upload long-form text (500–1000 words).

- ⚖️ **Side-by-Side Summaries**  
  View outputs from both models.

- ✅ **Rating System**  
  Rate both summaries on:
  - Clarity
  - Accuracy
  - Conciseness

- 📊 **Report Card**  
  Visualize which model performed better via a bar chart.

---

## 🧰 Models Used

All models are open-source and run via the `transformers` library from Hugging Face (no API keys needed):

| Model Name                  | Description                         |
|----------------------------|-------------------------------------|
| `facebook/bart-large-cnn`  | Powerful summarizer fine-tuned on CNN/DailyMail |
| `google/pegasus-xsum`      | State-of-the-art abstractive summarization |
| `sshleifer/distilbart-cnn-12-6` | Lightweight distilled version of BART |

---

## 🛠️ Setup Instructions

### 🔧 1. Clone the Repo

```bash
git clone https://github.com/srujana-namburu/llm-summarizer-showdown.git
cd llm-summarizer-showdown
pip install -r requirements.txt
pip install flask transformers matplotlib
pip freeze > requirements.txt
python app.py
```

## Example

### 🧾 Sample Input (excerpt)
"In a historic development, the United Nations has reached a new global climate accord, aiming to reduce greenhouse gas emissions by 45% by 2030. The agreement, which was signed by over 190 countries, sets ambitious targets for clean energy transition, methane reduction, and forest preservation. This marks a major step forward in the fight against climate change, as nations come together to commit to concrete climate action plans with periodic reviews and funding for developing countries."

### 🔄 Summarizer Showdown Output
facebook/bart-large-cnn	google/pegasus-xsum
Summary	The United Nations has signed a global climate accord with 190+ countries to cut emissions by 45% by 2030, focusing on clean energy, methane, and forests.	A global climate deal has been signed to reduce emissions by 45% by 2030 with 190+ countries aiming at clean energy and forest preservation.
Clarity (1–5)	⭐⭐⭐⭐☆ (4)	⭐⭐⭐⭐☆ (4)

Accuracy (1–5)	⭐⭐⭐⭐⭐ (5)	⭐⭐⭐⭐☆ (4)

Conciseness (1–5)	⭐⭐⭐⭐☆ (4)	⭐⭐⭐⭐⭐ (5)

User Preference	✅ BART selected as preferred output	❌

### 📊 Report Card (Visualization)
Metric	BART (facebook/bart-large-cnn)	PEGASUS (google/pegasus-xsum)

Clarity	4	4

Accuracy	5	4

Conciseness	4	5

Winner: 🥇 facebook/bart-large-cnn (based on majority votes)
