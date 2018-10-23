package com.skilledup.skilledup.model;

import java.io.Serializable;

/**
 * Created by User on 3/6/2017.
 */

public class CourseList implements Serializable {

    public String course_code;
    public String course_title;
    public String course_desc;
    public String course_duration;
    //public String user_email;
    public String course_syllebus;
    public String course_link;
    public String course_status;
    public String course_material;

    public static String COURSE_TABLE = "course";

    public static String COL_COURSE_CODE = "course_code";
    public static String COL_COURSE_TITLE = "course_title";
    public static String COL_COURSE_DESC = "course_desc";
    public static String COL_COURSE_DURATION = "course_duration";
    public static String COL_COURSE_STATUS = "course_status";
    public static String COL_COURSE_SYLLBUS = "course_syllebus";
    public static String COL_COURSE_LINK ="course_link";
    public static String COL_COURSE_MATERIAL = "course_material";



    public CourseList (){

    }
    public CourseList(String cCode, String cTitle, String cDesc, String cDuration, String cStatus, String cLink, String cSylebus, String cMaterial) {

        this.course_code = cCode;
        this.course_title = cTitle;
        this.course_desc = cDesc;
        this.course_duration = cDuration;
        this.course_status = cStatus;
        this.course_link = cLink;
        this.course_syllebus = cSylebus;
        this.course_material = cMaterial;
    }
    public String getCourse_code() {
        return course_code;
    }
    public String getCourse_title() {
        return course_title;
    }
    public String getCourse_desc() {
        return course_desc;
    }
    public String getCourse_duration() {
        return course_duration;
    }
    public String getCourse_status() {
        return course_status;
    }
    public String getCourse_link() {
        return course_link;
    }
    public String getCourse_syllebus() {
        return course_syllebus;
    }
    public String getCourse_material() {
        return course_material;
    }




    public static String CREATE_TABLE_SQL = String.format("CREATE TABLE IF NOT EXISTS %s (" +
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT,"+
            "%s TEXT" +
            ")",
            COURSE_TABLE,
            COL_COURSE_CODE,
            COL_COURSE_TITLE,
            COL_COURSE_DESC,
            COL_COURSE_DURATION,
            COL_COURSE_STATUS,
            COL_COURSE_SYLLBUS,
            COL_COURSE_LINK,
            COL_COURSE_MATERIAL

    );

    public static String DROP_TABLE_SQL = String.format("DELETE TABLE %s", COURSE_TABLE);
}
