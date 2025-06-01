from flask import Flask, render_template, request, jsonify
from summarizer import summarize_with_model

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    text = data['text']
    model1 = data['model1']
    model2 = data['model2']

    summary1 = summarize_with_model(model1, text)
    summary2 = summarize_with_model(model2, text)

    return jsonify({
        'summary1': summary1,
        'summary2': summary2
    })

if __name__ == '__main__':
    app.run(debug=True)
