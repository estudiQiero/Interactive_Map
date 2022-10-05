# Interactive_Map

Interactive Map v.0.1
1.10.2022

Interactive Map is a proposal for a client who requests an interactive world map, not based on Google, where to locate all their offices. The map, according to him, must be modern, beautiful, visible at a glance, and be able to click on the venues to access the information on each of them.

Interactive Map es una propuesta para un cliente que solicita un mapa mundi interactivo, no basado en Google, donde ubicar todas sus oficinas. El mapa, según él, debe ser moderno, bonito, verse de un vistazo, y poder hacer clci sobre las sedes, para acceder a la información de cada una de ellas.

![Screenshot](/img/readme/map.jpg)

The map, at its base, is now ready to go. It only remains to locate it on the web, which will be done later.

JS interactions are very simple. When any item is clicked, they display a modal window with a dark green background that draws attention to the information for each location. Using the cross button closes the modal window.

El mapa, en su base, ya está listo para funcionar. Tan solo queda ubicarlo en la web, lo cual se realizará más adelante.

Las interacciones de JS son muy sencillas. Cuando se hace clic sobre cualquier elemento, muestran una ventana modal con un fondo verde oscuro que centra la atención sobre la información de cada sede. Mediante el botón del aspa se cierra la ventana modal.

![Screenshot](/img/readme/map-2.jpg)

The main idea was to write all the data in HTML, but I found it interesting to feed the information through a json file. There it is easier to modify any error and the construction of the main file is simplified. Any new changes to the tab are made only once.

La idea principal era escribir todos los datos en HTML, pero me pareció interesante alimentar la información mediante un archivo json. Allí resulta más fácil modificar cualquier error y se simlifica la construcción de la ficha principal. Cualquier cambio nuevo en la ficha se realiza una sola vez.

The next integrations will be:
- Hide that field that, in the database, does not contain any data, or shows as "undefined".
- Create a photo field where you can link the photo of the company in question.
- Close the modal window with a click on the background
- Test the background of the modal window using the ::before pseudo-class
- Slightly blur the world map, if possible, since it's all SVG. We will see...

Las próximas integraciones seran:
- Ocultar aquel campo que, en la base de datos, no contenga ningún dato, o muestre como "undefined".
- Crear un campo de foto donde enlazar la fotografía de la empresa en cuestión.
- Cerrar la ventana modal con un click sobre el fondo
- Probar el fondo de la ventana modal mediante la pseudoclase ::before
- Desenfocar levemente el mapamundi, si es posible, ya que todo es SVG. Veremos...