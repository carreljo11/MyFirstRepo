from flask import Flask, request

app= Flask(__name__)

@app.route('/add')
def add(a, b):
    """Add a and b."""
    
    return a + b

@app.route('/sub')
def sub(a,b):
    """Sub a and b"""
    return a - b

@app.route('/mult')
def mult(a,b):
    """ Multiply a by b"""
    return a * b

@app.route('/div')
def div(a,b):
    """Divide a by b"""
    return a / b