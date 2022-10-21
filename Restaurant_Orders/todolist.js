var txtEntry = document.getElementById("txtEntry");
var txtMainCourse = document.getElementById("txtMainCourse");
var txtDessert = document.getElementById("txtDessert");
var ulOrdersList = document.getElementById("orderList");
var orderArray = [];

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", add);

var btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clearList);


window.onload = function readLocalstorage()
{
    ulOrdersList.innerHTML = "";

    var history = JSON.parse(localStorage.getItem("orderArray"));
    console.log(history);
    
    for (var h of history)
    {
       addJSONObjectsToList(h);
       orderArray.push(h);
    }
};

function read()
{
    ulOrdersList.innerHTML = "";
    var menuList = JSON.parse(localStorage.getItem("orderArray"));
    for (var m of menuList)
    {
       addJSONObjectsToList(m, menuList.indexOf(m))
    }
   
}

function add()
{

    var actualDate = new Date();
    var key = "menu_" + actualDate.getTime();

    var sEntry = txtEntry.value;
    var sMainCourse = txtMainCourse.value;
    var sDessert = txtDessert.value;

    if (sEntry == "" || sMainCourse == "" || sDessert == "")
    {
        return; 
    }

    var menu = new Menu(key, sEntry, sMainCourse, sDessert)

    orderArray.push(menu.getMenuSeparated());

    localStorage.setItem("orderArray", JSON.stringify(orderArray));

    read();
};

function addJSONObjectsToList(item, itemIndex)
{
    var listItems = document.createElement("li");
    var menuItems = item.split(";");
   
    listItems.addEventListener(
        "click", 
        function () 
        {
            listItems.remove();  
            orderArray.splice(itemIndex,1);
            localStorage.setItem("orderArray", JSON.stringify(orderArray));
        }
    );

    listItems.innerHTML = "<b>Entry:</b> " + menuItems[1] + " <b>Main Course:</b> " + menuItems[2] + " <b>Dessert:</b>" + menuItems[3];
    ulOrdersList.appendChild(listItems);
};

function clearList()
{
    window.localStorage.clear();
    orderArray = [];
    ulOrdersList.innerHTML = "";
    
}


