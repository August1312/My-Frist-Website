# Importa a instância do aplicativo Flask da extensão 'app'
from app import app

# Inicialização do Aplicativo
if __name__ == '__main__':
    # Executa o aplicativo no modo de depuração se este script for executado diretamente
    app.run(debug=True)