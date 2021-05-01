# digitalclock.js
Digital Clock
<TABLE BORDER=4 BGCOLOR=CYAN>
    <TR><TD>
 <FORM NAME="clock_form">
     <INPUT TYPE=TEXT NAME="clock" SIZE=25>
 </FORM>
 <SCRIPT LANGUAGE="JavaScript">
     function clockTick()
     {
  currentTime = new Date();
  document.clock_form.clock.value = " "+currentTime;
  document.clock_form.clock.blur();
  setTimeout("clockTick()", 1000);
     }
     clockTick();
 </SCRIPT>
    </TD></TR>
</TABLE>
