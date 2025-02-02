package com.exchange;

import java.io.*;
import java.net.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.InputStream;
import java.net.*;
import com.google.gson.*;

class Recv
{
private String lhs;
private String rhs;
private String error;
private String icc;
public Recv(
{
}
public String getLhs()
{
return lhs;
}
public String getRhs()
{
return rhs;
}
}
public class Convert extends HttpServlet {

	
    protected void processRequest(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String query = "";
        String amount = "";
        String curTo = "";
        String curFrom = "";
        String submit = "";
        String res = "";
        HttpSession session;
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        amount = req.getParameter("amount");
        curTo = req.getParameter("to");
        curFrom = req.getParameter("from");

        try {
            query = "http://www.google.com/ig/calculator?hl=en&q=" + amount + curFrom + "=?" + curTo;
            URL url = new URL(query);
            InputStreamReader stream = new InputStreamReader(url.openStream());
            BufferedReader in = new BufferedReader(stream);
            String str = "";
            String temp = "";
            while ((temp = in.readLine()) != null) {
                str = str + temp;
            }

            Gson gson = new Gson();
            Recv st = gson.fromJson(str, Recv.class);
            String rhs = st.getRhs();
            rhs = rhs.replaceAll("ï¿½", "");
            StringTokenizer strto = new StringTokenizer(rhs);
            String nextToken;

            out.write(strto.nextToken());
            nextToken = strto.nextToken();

            if( nextToken.equals("million") || nextToken.equals("billion") || nextToken.equals("trillion"))
            {
                out.println(" "+nextToken);
            }
        } catch (NumberFormatException e) {
            out.println("The given amount is not a valid number");
        }
    }
 
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
   
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    
    @Override
    public String getServletInfo() {
        return "Short description";
    }
}
