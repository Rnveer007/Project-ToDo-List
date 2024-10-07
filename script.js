let main_value = document.querySelector("#value_input");
let btn_add = document.querySelector("#add");
let added_value = document.querySelector("#storage_box");
let backgroundColors = [
  { backgroundColor: "#ad7474", color: "#fff" },
  { backgroundColor: "red", color: "#fff" },
  { backgroundColor: "#93933d", color: "#000" },
  { backgroundColor: "green", color: "#000" },
  { backgroundColor: "brown", color: "#fff" },
  { backgroundColor: "#647e7e", color: "#000" },
  { backgroundColor: "blue", color: "#fff" },

]

btn_add.addEventListener("click", ToDoWork);

function ToDoWork() {
  if (main_value.value === "") {
    alert("Invailid Input")
  }
  else {
    let items = document.createElement("div");
    let btn_storage = document.createElement("div");
    btn_storage.classList = "btn_storage";
    items.classList = "added_items";
    let para = document.createElement("p");
    let dlt_btn = document.createElement("span");
    dlt_btn.classList = "dlt_btn";
    let dlt_icon  = document.createElement("i")
    dlt_icon.classList = "fa-solid fa-trash"
    let edit_btn = document.createElement("span");
    edit_btn.classList = "edit_btn";
      let edit_icon  = document.createElement("i")
    edit_icon.classList = "fa-solid fa-pen"
    para.innerHTML = main_value.value;
    // dlt_btn.innerHTML = "Delete";
    dlt_btn.style.marginRight = "10px";
    // edit_btn.innerHTML = "Edit"


    let rendomColor = backgroundColors[BackgroundColors()]
    items.style.backgroundColor = rendomColor.backgroundColor
    items.style.color = rendomColor.color


    items.append(para);
    btn_storage.append(dlt_btn);
    dlt_btn.append(dlt_icon);
    btn_storage.append(edit_btn);
    edit_btn.append(edit_icon);
    items.append(btn_storage);
    added_value.append(items);
    main_value.value = ""

    dlt_btn.addEventListener('click', function () {
      Remove_item(items);
    })

    edit_btn.addEventListener('click', function () {
      Edit_item(para, items);
    })

    function BackgroundColors() {
      return Math.floor(Math.random() * backgroundColors.length);
    }

  }
}



function Remove_item(items) {
  items.remove();
}

function Edit_item(para, items) {
  main_value.value = para.innerHTML;


  btn_add.addEventListener("click", function () {
    para.innerHTML = items.replaceWith(main_value.value);
  })
}