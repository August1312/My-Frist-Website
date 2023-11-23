### Import extenção do app ###
from app import app, render_template



### Declaração de Rotas ###
@app.route('/')
def index():
    return render_template('index.html')