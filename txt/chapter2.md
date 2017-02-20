# Instalación de Git, Hub y GitBook, Github Desktop

### Git

Git es un software de control de versiones pensado para la eficiencia y la confiabilidad del mantenimiento de versiones para aplicaciones que tengan un gran número de archivos de código fuente.

Para instalar esta aplicación desde linux sólo tendremos que utilizar el comando:  
`~ $ yum install git-core` o `~ $ apt-get install git`

Si estás en Windows sólo tienes que ir a su [página web](https://git-scm.com/downloads) descargar el instalador, ejecutarlo y seguir las instrucciones.

### Hub

Hub es una herramienta de línea de comandos que extiende la funcionalidad de git y hace más facil trabajar con Github. Más información, junto con pasos de instalación  para GNU/Linux, Windows y Mac OS se puede conseguir en su repositorio: [https://github.com/github/hub](https://github.com/github/hub).

### GitBook

Gitbook es una herramienta y una librería de node.js que utiliza Github y el lenguaje Markdown para crear libros de cualquier tipo: Documentación, FAQs o incluso, si se quisiera, literatura. Se puede trabajar con él con la herramienta git, permitiendo el control de versiones y el trabajo colaborativo. 

Para instalar:

`npm install gitbook-cli -g`

![](/assets/npmgitbook.jpg)

Para crear un nuevo Gitbook:

`gitbook init [./directorio]`

![](/assets/gitbookinit.jpg)

`gitbook build`

![](/assets/gitbookbuild.jpg)

 `gitbook serve`

En el fichero SUMMARY.md pondremos los capítulos de nuestro libro junto con la ruta al correspondiente fichero .md:

![](/assets/summary.jpg)

### Github Desktop

Github Desktop es una aplicación, como su nombre indica, de escritorio que te permite acceder a todas las funcionalidades de github a través de una bonita interfaz gráfica.

Para instalarla sólo tienes que ir a su [página web](https://desktop.github.com/) descargar el instalador, ejecutarlo y seguir las instrucciones.

Una vez lo hayas instalado podrás clonar tus repositorios, crear nuevos, sincronizar repositorios con los commits locales y básicamente cualquier cosa que podías hacer desde la linea de comandos.

