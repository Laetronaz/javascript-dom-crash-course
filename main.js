var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e) {
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById("item").value;
  //Create new li element
  var li = document.createElement("li");
  //add Class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //crate delete button element
  var deleteButton = document.createElement("button");
  // add classes to delete button
  deleteButton.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  deleteButton.appendChild(document.createTextNode("X"));
  //append button to li
  li.appendChild(deleteButton);
  //append li to list
  itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Event
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");
  //conver to an array
  Array.from(items).forEach(item => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
