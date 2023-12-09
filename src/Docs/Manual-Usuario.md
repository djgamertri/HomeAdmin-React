{% block %}
## HomeAdmin


## Versión 1.0 

### 08/12/2023 

{% /block %}

{% block %}
## Contenido
{% /block %}

{% callout %}
- [Objetivo](#Objetivo)
- [Andrés Fernando Malagón Espitia](#andrés-fernando-malagón-espitia)
- [Juan Sebastián Peña Pinto](#juan-sebastián-peña-pinto)
- [Laura Valentina Aguilar Talero](#laura-valentina-aguilar-talero)
- [Erick Rodríguez Quiceno](#erick-rodríguez-quiceno)
{% /callout %}


{% block %}

## Objetivo

El presente documento pretende mostrar al usuario el funcionamiento del sistema de información HomeAdmin  
{% /block %}

{% table %}
* Participantes
* Telefono
* Rol
---
* Erick Rodriguez Quiceno
* 3107826897
* Desarrollador
---
* Juan Esteban Murcia Ramírez
* 3213513327
* Desarrollador
---
* Andrés Fernando Malagón Espitia
* 3212946031
* Desarrollador
---
* Juan Esteban Murcia Ramírez
* 3213513327
* Desarrollador
---
* Juan Sebastián Peña Pinto
* 3143292234
* Desarrollador
---
* Laura Valentina Aguilar
* 3132935851
* Desarrollador

{% /table %}

{% block %}
## Proposito

El motivo por el cual se desarrolla este manual es para brindar un apoyo para los usuarios del sistema que tienen dificultades con el sistema HomeAdmin, aquí usted podrá encontrar instrucciones y posibles soluciones a los inconvenientes o problemas que está presentando 
{% /block %}

{% block %}
## Manual de Usuario 

El motivo por el cual se desarrolla este manual es para brindar un apoyo para los usuarios del sistema que tienen dificultades con el sistema HomeAdmin, aquí usted podrá encontrar instrucciones y posibles soluciones a los inconvenientes o problemas que está presentando 

{% block %}
## Página de inicio

#### 1. La pantalla de inicio da la bienvenida 
Al usuario al sistema HomeAdmin, se podrá evidenciar que la interfaz se encuentra dividida en 4 partes:  

- Bienvenida al sistema, que es el contenido principal del sistema HomeAdmin 

- Sobre nosotros que explica la temática y características principales del conjunto residencial del sistema HomeAdmin 

- Beneficios que abarca los servicios que ofrece en conjunto residencial dentro del sistema HomeAdmin 

- Ubicación para tener una referencia del lugar en caso de necesitarlo 

Dentro de la bienvenida al sistema podrá observar una barra de navegación vertical el cual le permitirá navegar por las secciones previamente mencionadas 

---- Imagen 1 ----

#### 2.Login (ingreso al sistema) 

Para ingresar al sistema el usuario debe seleccionar el botón de ingresar que se encuentra en el centro de la pantalla  

---- Imagen 2 ----

Una vez seleccionada la opción de ingresar se mostrará una vista con un formulario de logeo de usuarios donde se pedirán como credenciales el correo electrónico y la contraseña 

---- Imagen 3 ----

En el campo Correo electrónico debe de poner su correo electrónico registrado en el sistema, de no contar con el formato de un correo aparecerá en letra roja Formato invalido 

---- Imagen 4 ----

En el campo de contraseña debe de poner su contraseña de mínimo 8 caracteres de lo contrario aparecerá en letra roja La contraseña requiere de mínimo 8 caracteres

---- Imagen 4 ----

En caso de no poner ningún tipo de carácter en alguno de los 2 campos aparecerá en letra roja Correo electrónico/Contraseña requerida

---- Imagen 5 ----

En caso de haber algún error, en la esquina inferior derecha de su pantalla verá reflejada una pequeña alerta que le informará el error cometido 

---- Imagen 6 ----

Si el logeo fue exitoso podrá observar la siguiente vista, acompañada de una alarma verde ubicada en la esquina inferior derecha de color verde 

---- Imagen 7 ----

#### 3. Dashboard (panel de control de administrador)

Una vez se haya accedido de manera exitosa a la plataforma se desplegará un panel lateral con múltiples opciones que representan los módulos o funcionalidades del sistema

---- Imagen 8 ----

Para mayor comodidad visual y de experiencia para el usuario al dar clic en el icono de “HAMBURGUESA” (señalado en la imagen) el menú o panel lateral se pliega y despliega mostrando el icono de cada funcionalidad y su respectivo nombre 

---- Imagen 8 ----
---- Imagen 9 ----

#### 3.1 Dashboard (panel de control de administrador)

Una vez se haya accedido de manera exitosa a la plataforma se desplegará un panel lateral con múltiples opciones que representan los módulos o funcionalidades del sistema

---- Imagen 10 ----

Por defecto esta es la vista que se desplegara por defecto al acceder a la plataforma esta vista no da un vistazo rápido de la cantidad de algunos registros en la base de datos como: 

Residentes 

-Cuotas
-Vehículos
-Casas
-Registros de usuarios

---- Imagen 11 ----

#### 3.2 Parqueadero (panel de control de administrador)

---- Imagen 12 ----

Al acceder a esta vista se podrá visualizar un panel compuesto por 4 botones en la parte superior derecha: 

-Sortear 
-Limpiar 
-Guardar 
-Exportar reporte en pdf (marcado con el icono de exportar) 

---- Imagen 13 ----

En la parte inferior se podrá observar también una lista o tabla de 32 celdas que representan cada uno de los 32 parqueaderos o espacios dentro del conjunto y contemplados por el sistema 

---- Imagen 14 ----

Dentro de cada celda (cuando haya registros de asignaciones existentes) se visualizará dentro de cada celda 3 datos fundamentales: 

-Número del parqueadero
-Placa del vehículo asignado
-Nombre del responsable o residente a cargo del vehículo

---- Imagen 15 ----

Funcionalidades:

---- Imagen 16 ----

# Sortear: 
Al dar clic en este botón de manera automática se van a sortear los parqueaderos que estén libres de manera ALEATORIA entre los residentes QUE ESTEN AL DIA con el pago de la administración y QUE NO TENGAN un parqueadero asignado, estos sorteos se mostraran en el panel de los parqueaderos diferenciándose por el color naranja 

---- Imagen 17 ----
---- Imagen 18 ----

Dado el caso no haya registros de un residente sin parqueadero asignado se mostrará esta advertencia:

---- Imagen 19 ----

# Limpiar:
Al dar clic en este botón se van a descartar el sorteo de los parqueaderos SIEMPRE Y CUANDO no se hayan guardado los cambios 

---- Imagen 20 ----
---- Imagen 21 ----
---- Imagen 22 ----

# Guardar: 

Al dar clic en este botón se mostrará una ventana pop-up que pedirá una confirmación para así registrar en el sistema el sorteo de los parqueaderos

---- Imagen 23 ----
---- Imagen 24 ----

Al confirmar el registro de los parqueaderos en la parte superior derecha se mostrará una pequeña confirmación que indicara que la asignación se ha hecho de manera exitosa y dicha asignación se podrá ver reflejada en el panel 

---- Imagen 25 ----

Tenga en cuenta que previamente debio hacer el sorteo de los parqueaderos ya que de lo contrario se le mostrara este pop-up advirtiendole que no hay ningun parqueadero sorteado

---- Imagen 26 ----

Dado el caso existiese un error al momento de guardar la informacion este se mostrara en un pop-up que indicara el error el cual debe informar al equipo de mantenimiento del sistema para su respectiva solucion

# Exportar: 

Al dar clic en este botón se generará y descargará de forma automática en formato pdf un reporte que incluye la información de las asignaciones de parqueadero registradas:

---- Imagen 27 ----

El reporte pdf tiene un formato similar a este: 

{% /block %}



{% /block %}
