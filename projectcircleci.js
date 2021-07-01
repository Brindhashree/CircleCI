<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<title>Create a Session</title>
<script type="text/javascript">
var randomStrings = [
    "hello ","Hi","Welcome ","Good to see you","How are you" // Note: No comma after last entry
];
function RndMsg() 
  var msg = randomStrings[Math.floor(Math.random()*randomStrings.length)];
  document.getElementById('randomDiv').innerHTML = msg;

</script>
</head>
<body>
<form action="" method="post" onsubmit="return false">
<input type="button" value="Click Me" name="sessionid" onclick="RndMsg()"/>
<div id="randomDiv">Random text</div>
</form>
</body>
</html>