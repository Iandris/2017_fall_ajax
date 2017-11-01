function init() {
  var btn1 = document.getElementById("btnAdd");
  if (window.addEventListener) {
      btn1.addEventListener("click", btn_addClick, false);
  } else {
      btn1.attachEvent("onclick", btn_addClick);
  };

  refreshTasks();
}

function btn_addClick() {
  var xhr = new XMLHttpRequest();
  var params = "?description=" + document.getElementById("txt_description").value;
	xhr.open("GET", "addTask.php" + params);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200){
      var task = eval('(' + xhr.responseText + ')');
      addToTaskList(task.id, task.description);
      document.getElementById('txt_description').value = "";
		}
	};

	xhr.send(null);
}

function btn_deleteClick() {
  var xhr = new XMLHttpRequest();
  var id = this.id;
  var params = "?id=" + id;
	xhr.open("GET", "deleteTask.php" + params);

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200){
      if (xhr.responseText == "1") {
      var tasksDiv = document.getElementById("currentTasks");
      var taskDiv = document.getElementById(id);
      tasksDiv.removeChild(taskDiv.parentNode.parentNode);
      } else {
        alert("failed to delete task");
      }
		}
	};

	xhr.send(null)
}

function addToTaskList(id, description) {
  var tasksDiv = document.getElementById("currentTasks");
  var newInlineDiv = document.createElement("div");
  newInlineDiv.className = "form-group input-group";
  tasksDiv.appendChild(newInlineDiv);
  var taskSpan = document.createElement("span");
  taskSpan.className = "input-group-addon";
  newInlineDiv.appendChild(taskSpan);
  var icon = document.createElement("i");
  icon.className = "fa fa-trash";
  icon.id = id;
  if (window.addEventListener) {
      icon.addEventListener("click", btn_deleteClick, false);
  } else {
      icon.attachEvent("onclick", btn_deleteClick);
  };

  taskSpan.appendChild(icon);
  var taskLabel = document.createElement("label");
  taskSpan.appendChild(taskLabel);
  taskLabel.appendChild(document.createTextNode("     " + description));
}

function refreshTasks(){
  var tasksDiv = document.getElementById("currentTasks");
  if (tasksDiv != null) {
      document.body.removeChild(tasksDiv);
  }

  var newTaskDiv = document.createElement("div");
  newTaskDiv.id = "currentTasks";
  document.body.appendChild(newTaskDiv);

  //request all tasks as xml
  var xhr = new XMLHttpRequest();
	xhr.open("GET", "allTasks.php");

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200){
			var tasks = xhr.responseXML.getElementsByTagName("task");

      for (var i = 0; i < tasks.length; i++) {
          addToTaskList(tasks[i].childNodes[0].childNodes[0].nodeValue,
             tasks[i].childNodes[1].childNodes[0].nodeValue);
      }
		}
	};

	xhr.send(null);
}
