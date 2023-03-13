function addUser(){
  player1_name = document.getElementById("player1_input_name").value;
  player2_name = document.getElementById("player2_input_name").value;
  
  localStorage.setItem("player1_name", player1_name);
  localStorage.setItem("player2_name", player2_name);
  
  
  window.location.replace("index.html");
}

function send(){
  number1 = document.getElementById("player_1").value;
  number2 = document.getElementById("player_2").value;
  actual_answer = parseInt(number1)* parseInt(number2);
}

question_number = "<h4>" + number1 + "X" + number2 +"</h4>";
input_button = "<br>Answer : <input_type ='text' id='input_check_box'>";
check_button = "<br><br><button clas='btn btn-info' onclick='check()>'>check</button>";
row = question_number + input_button + check_button;