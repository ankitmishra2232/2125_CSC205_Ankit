<html>
    <head>
	<link rel="stylesheet" href="./style.css">
    </head>
    <body>
	<div class="split left">
        <h2>REGISTRATION FORM</h2>
        <form name ="Myform" method ="post" action="./form.jsp" onsubmit="return validation()">
            
            <label for="fname" >Name: <span>*</span>&emsp;</label>
            <select name="title" id="forname" class="title">
                <option value="mr">Mr.</option>
                <option value="miss">Miss</option>
                <option value="mrs">Mrs</option>
                <option value="sri">Sri</option>
                <option value="smt">Smt</option>
            </select>
            <input type="text"name="fname" class="fname" id="name" placeholder="first name" required>
            <input type="text"name="mname" class="mname" id="mname" placeholder="middle name">
            <input type="text" name="lname" class="lname" id="lname" placeholder="Last name" required><br/><br/>
            <label for="fname" >Roll no: <span>*</span>&emsp;</label>
            <input type="number" name="roll_no" id="roll"><br/> <br/>
            <label for="fat" >Father's Name:<span>*</span></label>
            <select name="title" id="fforname" class="title">
                <option value="mr">Mr.</option>
                <option value="miss">Miss</option>
                <option value="mrs">Mrs</option>
                <option value="sri">Sri</option>
                <option value="smt">Smt</option>
            </select>
            <input type="text" name="fat" class="fname" id="fname" placeholder="Father's name" required>
            <input type="text"name="mname" class="mname" id="fmname" placeholder="middle name">
            <input type="text" name="lname" class="lname" id="flname" placeholder="Last name" required><br/><br/>
            <label for="mother" >Mother's Name:<span>*</span></label>
            <select name="title" id="mforname" class="title">
                <option value="mrs">Mrs</option>
                <option value="smt">Smt</option>
            </select>
            <input type="text" name="mother" id="mmname" class="fname" placeholder="Mother's name" required>
            <input type="text"name="mname" id="mmmname" class="mname" placeholder="middle name">
            <input type="text" name="lname" id="mmlname" class="lname" placeholder="Last name" required><br/><br>
            <label for="mobile">Phone Number:<span>*</span></label>
            <input type="tel" name="mobile" placeholder="0000000000" id="mobile"pattern="[0-9]{10}" required>
            <label id="mail" for="email">Email ID:<span>*</span></label>
            <input type="email" name="email" id="email" placeholder="abdcef@gmail.com" required><br/><br/>
            <label for="gender">Gender:<span>*</span></label>
            <input type="radio" class="gender" name="gender" id="male" value="Male">Male
            <input type="radio" class="gender" name="gender" id="female" value="Female">Female
            <input type="radio" class="gender" name="gender" id="other" value="Others" required>Others  <br/> <br/>
            <label for="dob">Date Of Birth:<span>*</span></label>
            <input type="date" id="dob" name="dob" required><br/><br/>
            <label for="add">Address:<span>*</span></label>
            <input type="text" name="city" id="city" placeholder="city" required>
            <input type="text" name="state" id="state" placeholder="State" required>
            <input type="text" name="country" id="country" placeholder="country" required><br/><br/>
            <input id="submit" type="submit" value="SubMit">
            <input id="reset" type="reset" value="ResEt">
        </form>
        <p><span>*</span>Indicates that it should be filled to proceed </p>
    </div>
    
    <!-- <div class = "vertical"></div> -->
    <div class="split right">
        <h2>REGISTRATION LIST</h2>
				
        <table>
            <tr>
                <th>Roll no</th>
                <th>Name</th>
                <th>Father's Name</th>
                <th>Mother's Name</th>
                <th>Phone</th>
                <th>Email ID</th>
                <th>Gender</th>
                <th>D.O.B.</th>
                <th>Address</th>
            </tr>
            <tbody></tbody>
			
            <!-- <tr>
                <td class="s_no">1</td>
                <td>Mr. Ankit Kumar Mishra</td>
                <td>Pawan Kumar Mishra</td>
                <td>Alka Mishra</td>
                <td>7004052008</td>
                <td><a href="mailto:mca.2125@unigoa.ac.in">mca.2125@unigoa.ac.in</a></td>
                <td>Male</td>
                <td>26/01/1999</td>
                <td>Patna, Bihar, India</td>
            </tr>
            <tr>
                <td class="s_no" >2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="s_no">3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> -->
        </table>
		<%
			
			out.println(request.getParameter("fname"));
		%>
    </div>

    </body>
</html>