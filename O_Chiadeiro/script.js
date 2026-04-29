let container = document.querySelector(".postsContainer");
let subir = document.querySelector(".subir");
let textarea = document.querySelector(".escribir");
let miNombre = prompt("Dime tu nombre de usuario");
let textos = ["FIESTA EN MI CONTENEDOR DE BASURA A LAS 3!!!!", "A que hora empieza la revolucion contra los humanos?", "El del quinto me tiro agua... ok.. ok..", "lifehack: en los contenedores cerca del mcdonalds suele haber muchos nuggets sobre las 6.", "He perdido unas gafas rosas robadas!! Porfavor si alguien las ve avisen!", "Cuidado con robarle al de la casa enfrente del Contenedor de la Mary... Yo casi no lo cuento.", "Me ENCANTA ser un mapache.", "Mi primo esta casado con un gato?! UN GATO?!"];
let fotos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];
let usuarios=["whiskers123","GarbageLover05","itsMapachina","Mapachon","MapiLover","IloveYouMapachina","randomRaccoon27","Somebody32"]

function crearPosts(texto, esPropio) 
{
    //Crear post individual
    let post = document.createElement("div");
    post.classList.add("post");
    if (esPropio) post.classList.add("miPost");

    //Crear Perfil
    let perfil = document.createElement("div");
    post.appendChild(perfil);


    // Crea su nombre de usuario
    let user = document.createElement("div");
    user.classList.add("user");
    user.textContent = esPropio ? miNombre : usuarios[Math.floor(Math.random()*usuarios.length)];
    perfil.appendChild(user);
    //Crear su foto de perfil
    let pp = document.createElement("img");
    pp.classList.add("pp");
    pp.src = esPropio ? "11.jpg" : fotos[Math.floor(Math.random() * fotos.length)];
    perfil.appendChild(pp);
    //Crear su contenido
    let content = document.createElement("div");
    content.classList.add("content");
    content.textContent = texto || textos[Math.floor(Math.random() * textos.length)];
    post.appendChild(content);
    //Crear like button
    let like = document.createElement("button");
    like.classList.add("like");
    like.textContent = "❤︎";
    post.appendChild(like);
    //Crear contador de likes visible
    let numLikes = 0;
    let contador = document.createElement("div");
    contador.textContent = numLikes;
    post.appendChild(contador);
    //Cada 10 segundos se añaden X likes 
    setInterval(function GenerarLikes() {
        numLikes += Math.floor(Math.random() * 5) + 1;
        contador.textContent = numLikes;
    }, 10000);
   // Si el post fue "liked" se quitara el like sino se añadara 
    let liked = false;
    like.addEventListener("click", function () {
        if (liked) {
            numLikes--;
            like.style.color = "rgb(103, 176, 175)";
            liked = false;
        } else {
            numLikes++;
            like.style.color = "blue";
            liked = true;
        }
        contador.textContent = numLikes;
    });
// Añadimos el post entero con todos sus items dentro del contenedor de posts
    container.appendChild(post);
}
//Subir mis propios posts 
subir.addEventListener("click", function () 
{
    if (textarea.value === "") {
        alert("Escribe algo!");
    } else {
        crearPosts(textarea.value, true); //set esPropio como true!
        textarea.value = "";
    }
});
//Generar cada 4 segundos un post random
setInterval(crearPosts, 4000);