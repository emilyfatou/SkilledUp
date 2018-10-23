package com.skilledup.skilledup.model;

/**
 * Created by User on 4/14/2017.
 */

public class Course {

    public String course_title;
    public String course_desc;
    public String time_added;
    public String chapter;
    public String course_icon;
    public String course_link;

    public Course(String course_title, String course_desc, String time_added, String chapter, String link) {
        this.course_title = course_title;
        this.course_desc = course_desc;
        this.time_added = time_added;
        this.chapter = chapter;
        this.course_link = link;

    }

    public String getCourse_title() {
        return course_title;
    }

    public String getCourse_desc() {
        return course_desc;
    }

    public String getTime_added() {
        return time_added;
    }

    public String getChapter() {
        return chapter;
    }

    public String getCourse_link() {
        return course_link;
    }
}
