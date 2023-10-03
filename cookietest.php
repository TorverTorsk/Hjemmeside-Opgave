<!DOCTYPE html>
<?php
    $cookie_value = "";
?>
<html>
<head>
    <script>
        function SetValue(){
            let hej  = prompt("Enter Name:");
            return hej;
        }
    </script>
</head>
<body>
    
    <form action="">
        <label>Enter name:</label><br>
        <input type="text" id="name" name = "name" value = >
        <input type="submit" value="Submit">
    </form>
    
<?php
    $cookie_name = "user";
    $cookie_value = $_GET["name"];
    setcookie($cookie_name,$cookie_value,time()+60,"/");
    if(!isset($_COOKIE[$cookie_name]))
    {  
    echo "Cookie named '" . $cookie_name . "' is not set!";
    }
    else
    {
     echo "Cookie '" . $cookie_name . "' is set!<br>";
     echo "Value is: " . $_COOKIE[$cookie_name];
    }  
  
    ?> 
    <p><strong>Note:</strong> You might have to reload the page to see the value of the cookie.</p>
</body>

</html>
