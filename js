  function checkSalary{
         var salary = document.getElementById("salary").value
            var pattern = /^\d+$/;
            if (salary.match(pattern)) {
                if (parseInt(salary) <= 100000) {
                    return true;
                } else {
                    alert("Salary should be within 1 Lakh")
                }
                return true;
            } else {
                alert("Only numbers are allowed")
            }
            
            function myFunction() {
            
            var butt = document.createElement("BUTTON");
            butt.setAttribute("type","reset")
            var node = document.createTextNode("Reset");
            butt.appendChild(node);
            var ele = document.getElementById('reset')
            ele.appendChild(butt);
        } 
