# Interactive_Map

Interactive Map v.0.1
1.10.2022

Interactive Map es una propuesta para un cliente que solicita un mapa mundi interactivo, no basado en Google, donde ubicar todas sus oficinas. El mapa, según él, debe ser moderno, bonito, verse de un vistazo, y poder hacer clci sobre las sedes, para acceder a la información de cada una de ellas.

![Screenshot](/img/readme/map.jpg)

El mapa, en su base, ya está listo para funcionar. Tan solo queda ubicarlo en la web, lo cual se realizará más adelante.

Las interacciones de JS son muy sencillas. Cuando se hace clic sobre cualquier elemento, muestran una ventana modal con un fondo verde oscuro que centra la atención sobre la información de cada sede. Mediante el botón del aspa se cierra la ventana modal.

![Screenshot](/img/readme/map-2.jpg)

La idea principal era escribir todos los datos en HTML, pero me pareció interesante alimentar la información mediante un archivo json. Allí resulta más fácil modificar cualquier error y se simlifica la construcción de la ficha principal. Cualquier cambio nuevo en la ficha se realiza una sola vez.


Las próximas integraciones seran:
- Ocultar aquel campo que, en la base de datos, no contenga ningún dato, o muestre como "undefined".
- Crear un campo de foto donde enlazar la fotografía de la empresa en cuestión.
- Cerrar la ventana modal con un click sobre el fondo
- Probar el fondo de la ventana modal mediante la pseudoclase ::before
- Desenfocar levemente el mapamundi, si es posible, ya que todo es SVG. Veremos...