from flask import Flask

app= Flask(__name__)

@app.route('/')
def index():
    """"Main Page"""

    return """
        <html>
            <body>
                <h1>Main Page</h1>
            <body>
        </html>
        """

@app.route('/welcome')
def welcome():
    """"Main Page"""

    return """
        <html>
            <body>
                <h1>Welcome</h1>
            <body>
        </html>
        """

@app.route('/welcome/home')
def home():
    """"Main Page"""

    return """
        <html>
            <body>
                <h1>Welcome home</h1>
            <body>
        </html>
        """

@app.route('/welcome/back')
def back():
    """"Main Page"""

    return """
        <html>
            <body>
                <h1>welcome back</h1>
            <body>
        </html>
        """