<%@ page import = " java.util.* " %>
<% 
String username = request.getParameter("u_name"); 
if(username.equals("admin")){
    response.sendRedirect("home.jsp");  
}else{
    out.print("Invalid Username");  
}
%>