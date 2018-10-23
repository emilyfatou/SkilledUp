package com.skilledup.skilledup.model;

import java.io.Serializable;

/**
 * Created by User on 3/6/2017.
 */

public class User implements Serializable {

    public String user_id;
    public String token;
    public String email;

    /*public String first_name;
    public String last_name;
    public String password;
    public String country;
    public String city;
    public String education;*/


    public static String USER_TABLE = "user";
    public static String COL_TOKEN = "token";
    public static String COL_USER_ID = "user_id";
    public static String COL_EMAIL = "email";

    //public static String COL_FIRST_NAME = "first_name";
    //public static String COL_LAST_NAME = "last_name";
   // public static String COL_PASS = "password";
   // public static String COL_COUNTRY = "country";
   // public static String COL_CITY = "city";
   // public static String COL_EDUCATION = "education";

   // public static String TABLE = "user";

    public static String CREATE_TABLE = String.format("CREATE TABLE IF NOT EXISTS %s ("+
            /*"%s TEXT," +
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT"+
            "%s TEXT"+*/
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT"+
            ")",
            USER_TABLE,
            COL_USER_ID,
            COL_TOKEN,
            COL_EMAIL);
            /*COL_FIRST_NAME,
            COL_LAST_NAME,
            COL_PASS,
            COL_COUNTRY,
            COL_CITY,
            COL_EDUCATION*/

    public static String DROP_TABLE_SQL = String.format("DROP TABLE %s", USER_TABLE);

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }
    public void setToken(String token) {
        this.token = token;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getUser_id() {
        return user_id;
    }
    public String getToken() {
        return token;
    }
    public String getEmail() {
        return email;
    }


    /*
    publi   public void setPassword(String password) {
        this.password = password;
    }
c void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }


    public void setCountry(String country) {
        this.country = country;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setEducation(String education) {
        this.education = education;
    }
*/



    /*
    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }



    public String getPassword() {
        return password;
    }

    public String getCountry() {
        return country;
    }

    public String getCity() {
        return city;
    }

    public String getEducation() {
        return education;
    }*/
}
