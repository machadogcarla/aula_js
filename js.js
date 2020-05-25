function clicou(elemento)
{
    //alert("Obrigada por clicar");
    elemento.innerHTML = "<p>Obrigada por clicar</p>"; //inserir no html essa frase


}

function redirecionar(){
    //2 formas de redirecionamento
    window.open("https://www.w3schools.com/jsref/prop_html_innerhtml.asp");
   // window.location.href("https://www.w3schools.com/jsref/prop_html_innerhtml.asp");
}

function trocar(elemento)
{

   elemento.innerHTML = "Obrigada por passr o mouse";
   // alert("treocar texto");
}


function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";

}

function funcaochange(elemento)
{
    console.log(elemento.value);
}

