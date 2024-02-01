from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/load_tooltip/<path_id>')
def load_tooltip(path_id):
    return render_template(f"{path_id}_tooltip.html")


@app.route('/load_content/<path:name>')
def load_content(name):
    return render_template(f"{name}.html")


if __name__ == '__main__':
    app.run(debug=True)
