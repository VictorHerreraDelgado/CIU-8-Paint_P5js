---
noteId: "a3d97d30783911ea8d06bf3115da15db"
tags: []

---


# CIU-8-Paint p5js

### Autor: Víctor Herrera Delgado
Estudiante de Ingeniería Informática en la Universidad de Las Palmas de Gran Canaria, en último curso de su grado.


## Introducción 
La práctica en cuestión consiste en dados los conocimientos explicados en clase de P5.js, crear una versión simple del conocido programa Paint en este entorno teniendo como mínimo el poder cambiar de tamaño y de color el "pincel" de dibujo. 



## Programa
El programa muestra una barra superior con distinta información y herramientas y debajo de este el lienzo a dibujar.
Desde la barra de herramientas, el usuario puede cambiar el color del pincel pulsando sobre él y seleccionándolo en la tabla de colores de así como su grosor usando el slider (o pulsando las teclas '+' y '-').  
Al igual que con el color del pincel, el usuario podrá cambiar el color del lienzo sin que esto afecte al dibujo realizado.  
Usando las teclas numéricas el usuario puede elegir entre las distintas herramientas creadas:  
- 1: Pincel: el elemento básico de la aplicación. Manteniendo el click izquierdo el usuario puede dibujar sobre el lienzo, apareciendo por donde pasa el ratón el tamaño y el color de lo que se pintaría.  
- 2:Goma: Haciendo click izquierdo el usuario puede borrar los dibujos realizados en el lienzo, apareciendo siempre en el cursor el tamaño y resultado de lo que borraría al hacer click.
- 3:Línea: Haciendo click izquierdo y manteniéndolo hasta soltarlo en otro lugar del lienzo, el usuario podrá dibujar una línea del grosor del pincel entre el punto de origen y el final, mostrando siempre una previsualización del resultado. 
Pulsando espacio mientras se mantiene el izquierdo se puede cancelar el dibujo.
- 4:Círculo: Al igual que con la línea, haciendo click en una zona y arrastrando hacia otra, el usuario podrá realizar una elipse de un tamaño u otro dependiendo de distancia entre el punto de origen y el de final.

Dependiendo de la opción elegida, se iluminará su color en verde en la barra superior.  

Por último, se encuentra un botón con el cual borrar todo el contenido del lienzo (también puede ser limpiado usando la tecla de retroceso).
## Código

Además del lienzo normal se han creado dos gráficos (uno de interfaz y otro de dibujo) que se ponen en pantalla con la función image() que denominaremos capas. Los cambios en el dibujo se plasmarán en una de las capas, de manera que el cambio de fondo no afecte al dibujo así como en la capa de interfaz se dibujaran los distintos elementos visuales (como las distintas formas del cursor o las previsualizaciones de las líneas y elipses) de manera que sean visibles pero no afecten al dibujo final.

## Instrucciones

- **Click izquierdo**: Dibujar o previsualizar formas.   
- **Click derecho**: Cancelar dibujo de línea o elipse.
- **'1'**: Modo dibujo.
- **'2'**: Modo goma de borrar.
- **'3'**: Modo línea.
- **'4'**: Modo elipse/círculo.
- **'+' y '-'**: Cambiar el tamaño del pincel.
- **Retroceso**: Limpiar el lienzo.



## Decisiones
A pesar de que paint no tiene posibilidad de cambio de fondo, el creador a considerado que era una opción a considerar.  
Si bien borrar en paint se le podría asignar al click derecho, debido a estar online y aparece las opciones, esto podía llevar a errores, por ello también se ha puesto espacio para cancelar líneas y círculos.



## Referencias

Editor utilizado:  






