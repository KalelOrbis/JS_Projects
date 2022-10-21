

var txtVorspeise = document.getElementById("txtVorspeise");
var txtHauptspeise = document.getElementById("txtHauptspeise");
var txtNachspeise = document.getElementById("txtNachspeise");
var ulSpeisen = document.getElementById("liste");
var menuArray = [];

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", add);

var btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clearList);


window.onload = function readLocalstorage()
{
    ulSpeisen.innerHTML = "";

    var history = JSON.parse(localStorage.getItem("menuArray"));
    console.log(history);
    
    for (var h of history)
    {
       addJSONObjectsToList(h);
       menuArray.push(h);
    }
};

function read()
{
    ulSpeisen.innerHTML = "";
    var menuListe = JSON.parse(localStorage.getItem("menuArray"));
    for (var m of menuListe)
    {
       addJSONObjectsToList(m)
    }
   
}

function add()
{

    var actualDate = new Date();
    var key = "menu_" + actualDate.getTime();

    var sVorspeise = txtVorspeise.value;
    var sHauptspeise = txtHauptspeise.value;
    var sNachspeise = txtNachspeise.value;

    if (sVorspeise == "" || sHauptspeise == "" || sNachspeise == "")
    {
        return; 
    }

    var menu = new Menu(key, sVorspeise, sHauptspeise, sNachspeise)

    menuArray.push(menu.getMenuSeparated());

    localStorage.setItem("menuArray", JSON.stringify(menuArray));

    read();
};

function addJSONObjectsToList(item)
{
    var listItems = document.createElement("li");
    listItems.addEventListener("click", function () { listItems.remove() });
    var menuItems = item.split(";");
    listItems.innerHTML = "<b>Vorspeise:</b> " + menuItems[1] + " <b>Hauptspeise:</b> " + menuItems[2] + " <b>Nachspeise:</b>" + menuItems[3];
    ulSpeisen.appendChild(listItems);
};

function clearList()
{
    window.localStorage.clear();
    menuArray = [];
    ulSpeisen.innerHTML = "";
    
}


