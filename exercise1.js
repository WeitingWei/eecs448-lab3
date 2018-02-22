<script type="text/javascript">

  function checkForm(form){

    if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
      if(form.pwd1.value.length < 8) {
        alert("Password must be atleast 8 chharacters long");
        form.pwd1.focus();
        return false;
      }
   
    } 
    else {
      alert("Passwords are not invalid");
      form.pwd1.focus();
      return false;
    }

    alert("You entered a valid password!");
    return true;
  }

</script>

<form method="POST" action="..." onsubmit="return checkForm(this);">
<h1>Password validator</h1>
<p>Password: <input type="password" name="pwd1"></p>
<p>Confirm Password: <input type="password" name="pwd2"></p>
<p><input type="submit"></p>
<p>the passwords should be at least 8 characters long</p>
</form>