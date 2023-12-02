from app import app, MIMEMultipart, MIMEText, request
from app import flash, smtplib , render_template
from app import redirect, url_for, session
from app import EMAIL_ADDRESS, EMAIL_PASSWORD, passou_um_minuto


# Declaração de Rotas
@app.route('/')
def index():
    """
    Rota padrão que renderiza a página inicial (index.html).
    """
    return render_template('index.html')

@app.route('/send', methods=['POST'])
def enviar_mensagem():
    """
    Rota para processar o envio de mensagens do formulário.

    Método POST:
    - Verifica se passou pelo menos três minutos desde o último envio.
    - Coleta dados do formulário.
    - Configura a mensagem de e-mail.
    - Conecta ao servidor de e-mail e envia a mensagem.

    Retorna:
    - Redireciona para a página inicial.
    """
    if request.method == 'POST':
        # Verifica se passou pelo menos três minutos desde o último envio.
        if not passou_um_minuto():
            flash('Aguarde pelo menos Tres minuto antes de enviar outro email.', 'error')
            return redirect(url_for('index')) 
        
        # Coleta dados do formulário.
        nome = request.form['nome']
        email = request.form['email']
        mensagem = request.form['mensagem']

        # Configuração da mensagem de e-mail
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = 'danilo.silva.santos.1312@outlook.com'
        msg['Subject'] = f'{nome} te enviou uma mensagem no Portfólio'

        # Corpo do e-mail
        corpo_email = f'''
        {nome}: \n 
        com o e-mail: {email}\n 
        te enviou a seguinte 
        Mensagem:
        \n 
        {mensagem}
        '''
        
        msg.attach(MIMEText(corpo_email, 'plain'))

        # Conectar ao servidor de e-mail e enviar a mensagem
        with smtplib.SMTP('smtp.gmail.com', 587) as servidor:
            servidor.starttls()
            servidor.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            servidor.send_message(msg)
            
            flash('Mensagem enviada com sucesso!', 'success')
            
             # Verifica novamente se passou pelo menos três minutos antes de enviar outro e-mail.
            if not passou_um_minuto():
                flash('Aguarde pelo menos Tres minuto antes de enviar outro email.', 'error')
            return redirect(url_for('index')) 
        
     # Redireciona para a página inicial se o método HTTP não for POST.
    return redirect(url_for('index')) 