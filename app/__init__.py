from flask import Flask, render_template, request, flash, session
from flask import redirect, url_for
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
from datetime import datetime, timedelta, timezone
import os

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

app = Flask(__name__)
app.secret_key = 'Goodbye, Universe'

# Configurações do servidor de e-mail
EMAIL_ADDRESS = os.getenv('EMAIL_ADDRESS')
EMAIL_PASSWORD = os.getenv('EMAIL_PASSWORD')

# Função para verificar se já se passou um minuto desde o último envio
def passou_um_minuto():
    agora = datetime.now(timezone.utc)
    ultimo_envio = session.get('ultimo_envio', datetime.min.replace(tzinfo=timezone.utc))
    
    if (agora - ultimo_envio) > timedelta(minutes=3):
        session['ultimo_envio'] = agora
        return True
    
    return False


from app import routes