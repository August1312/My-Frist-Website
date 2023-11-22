### Import extenção do app ###
from app import *



### Declaração de Rotas ###
@app.route('/')
def index():
    return render_template('index.html')