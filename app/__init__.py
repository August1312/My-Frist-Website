### Inicio do aplicativo com import flask ###
from flask import Flask, render_template, redirect

app = Flask(__name__)



### import das routes em flask ####
from app import routes