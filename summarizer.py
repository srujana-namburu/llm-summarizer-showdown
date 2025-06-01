from transformers import pipeline

# Cache summarizers
loaded_summarizers = {}

def summarize_with_model(model_name, text):
    if model_name not in loaded_summarizers:
        loaded_summarizers[model_name] = pipeline("summarization", model=model_name)
    
    summarizer = loaded_summarizers[model_name]

    # Some models crash with very long inputs, chunking helps
    max_len = 1024
    if len(text) > max_len:
        text = text[:max_len]

    summary = summarizer(text, max_length=180, min_length=50, do_sample=False)
    return summary[0]['summary_text']
