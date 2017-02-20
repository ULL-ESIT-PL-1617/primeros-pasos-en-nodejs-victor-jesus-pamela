#GH-Pages

Gh-pages es un servicio ofrecido por github que te permite hostear una página web personal directamente de un repositorio, el cual puedes modificar para ver los cambios al instante.
Además de esto te permite crear páginas web para cada repositorio.

###Cómo utilizar gh-pages de usuario

Para empezar a utilizar gh-pages lo único que necesitas es crear un repositorio cuyo nombre siga la plantilla de 'nombre-usuario.github.io' y subir allí tus html, css, assets, etc...
Una vez hayas hecho esto lo único que tendrás que hacer para acceder a tu nueva web será ir a la dirección 'http://nombre-usuario.github.io' y listo.

Ahora cuando quieras modificar la página web tendrás que clonar el repositorio a tu máquina:

`~ $ git clone https://github.com/usuario/usuario.github.io` Si estás en Linux.

O simplemente accediendo al apartado de clonar repositorio en GitHub Desktop si estás usando esta opción.

Cuando lo tengas clonado, modifica, añade o elimina todo lo que necesites y haz un push para aplicar los cambios:

`~ $ git push -u origin master` Si estás en Linux.

O sincronizando el repositorio si estás usando GitHub Desktop.

###Cómo utilizar gh-pages de repositorios

Si lo que quieres es hacer una página personalizada para tu repositorio tendrás que crear una rama huérfana en el repositorio y meter los archivos de la página a través de esa rama.
Para acceder a la página web del repositorio tendrás que entrar en la dirección 'https://usuario.github.io/repositorio'.

Para crear una rama huérfana puedes utilizar el comando:
 `~ $ git checkout --orphan 'nombre_rama'`
