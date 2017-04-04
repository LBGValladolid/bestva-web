# -*- coding: utf-8 -*-

# Este script actualiza la lista de BEST Valladolid somos (los miembros
# y sus fotos)

import sys
import os
import math

miembros = []

RUTA_HTML = "../index.html"
RUTA_CSV = "somos.csv"

html = []

def htmlSomos():
    csv = []
    g = open(RUTA_CSV, "r")
    for line in g:
        csv.append(line.replace("\n", "") .split(","))
    g.close()

    htmlSomos = []
    for i in range(len(csv)):
        if(i % 6 == 0):
            htmlSomos.append('            <div class="row">\n')
            cerrado = False
        htmlSomos.append('                <div class="col-2">\n')
        htmlSomos.append('                    <img src="media/somos/' + csv[i][1] + '" class="circular">\n')
        htmlSomos.append('                    <p class="center">' + csv[i][0] +'</p>\n')
        htmlSomos.append('                </div>\n')
        if(i % 6 == 5):
            htmlSomos.append('            </div>\n')
            cerrado = True
    # Si no hemos cerrado el div, lo cerramos
    if(not cerrado):
        htmlSomos.append('            </div>\n')
    return htmlSomos

f = open(RUTA_HTML, "r")
for line in f:
    html.append(line)
f.close()

for line in html:
    if("FLAG-INICIO" in line):
        indexInit = html.index(line)
    if("FLAG-FINAL" in line):
        indexFin = html.index(line)

htmlFinal = html[0:indexInit + 1] + htmlSomos() + html[indexFin:]

f = open(RUTA_HTML, "w")
for line in htmlFinal:
    f.write(line)
f.close()
