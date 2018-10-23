package com.skilledup.skilledup.model;

/**
 * Created by User on 5/7/2017.
 */

public class Profile {

    public String profile_id;
    public String first_name;
    public String last_name;
    public String country;
    public String education;


    public static String PROFILE_TABLE = "profile";

    public static String COL_PROFILE_ID = "PROFILE_id";
    public static String COL_FIRST_NAME = "first_name";
    public static String COL_LAST_NAME = "last_name";
    public static String COL_COUNTRY = "country";
    public static String COL_EDUCATION = "education";

    // public static String TABLE = "user";

    public static String CREATE_TABLE_PROFILE = String.format("CREATE TABLE IF NOT EXISTS %s ("+
                    "%s TEXT," +
                    "%s TEXT,"+
                    "%s TEXT,"+
                    "%s TEXT,"+
                    "%s TEXT"+
                    ")",
            PROFILE_TABLE,
            COL_PROFILE_ID,
            COL_FIRST_NAME,
            COL_LAST_NAME,
            COL_COUNTRY,
            COL_EDUCATION);

    public static String DROP_PROFILE_TABLE_SQL = String.format("DROP TABLE %s", PROFILE_TABLE);

    public void setProfile_id(String profile_id) {
        this.profile_id = profile_id;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getProfile_id() {
        return profile_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getCountry() {
        return country;
    }

    public String getEducation() {
        return education;
    }
}
