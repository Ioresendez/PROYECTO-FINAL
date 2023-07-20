let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo front-end de sitios web para el programa de Tecnolochicas PRO')
  .pauseFor(200)
  .deleteChars(10)
  .start();
