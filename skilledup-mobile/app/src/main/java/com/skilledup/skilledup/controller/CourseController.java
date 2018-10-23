package com.skilledup.skilledup.controller;

import android.content.ContentValues;
import android.database.Cursor;
import android.util.Log;

import com.skilledup.skilledup.model.Course;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;

/**
 * Created by User on 3/6/2017.
 */

public class CourseController extends Controller<CourseList> {

    public static ArrayList<CourseList> allCourseList = new ArrayList<>();
    public static ArrayList<CourseList> myCourse = new ArrayList<>();

    public CourseController(String table) {
        super(CourseList.COURSE_TABLE);
    }

    @Override
    public void load() {
        super.load();
        while (cursor.moveToNext()){
            allCourseList.add(getCourse(cursor));
        }
    }

    @Override
    public boolean save(CourseList courseList) {


Log.d("On Save", "Saving data .  .  .  .");
        ContentValues contentValues = new ContentValues();
        contentValues.put(CourseList.COL_COURSE_CODE , courseList.getCourse_code());
        contentValues.put(CourseList.COL_COURSE_TITLE , courseList.getCourse_title());
        contentValues.put(CourseList.COL_COURSE_DESC , courseList.getCourse_desc());
        contentValues.put(CourseList.COL_COURSE_DURATION , courseList.getCourse_duration());
        contentValues.put(CourseList.COL_COURSE_STATUS, courseList.getCourse_status());
        contentValues.put(CourseList.COL_COURSE_SYLLBUS , courseList.getCourse_syllebus());
        contentValues.put(CourseList.COL_COURSE_LINK , courseList.getCourse_link());
        contentValues.put(CourseList.COL_COURSE_MATERIAL , courseList.getCourse_material());

        String whereClause = String.format("%s = '%s'", CourseList.COL_COURSE_CODE , courseList.course_code);
        if(!exist(whereClause)){
            long num = db.insert(CourseList.COURSE_TABLE, null, contentValues);
            //Log.d("Course Material",courseList.getCourse_material());
           //Log.d("db save", "Error" + courseList.getCourse_code());
            return num != -1;
        }else {
            //Log.d("Course Material",courseList.getCourse_material());
            //Log.d("db update", "Error" + courseList.getCourse_code());
            return update(contentValues, CourseList.COL_COURSE_CODE, courseList.course_code);
        }
    }

    private CourseList getCourse(Cursor cursor){

        CourseList  course = new CourseList();
        course.course_title = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_TITLE));
        course.course_desc = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_DESC));
        course.course_duration = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_DURATION));
        course.course_code = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_CODE));
        course.course_link = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_LINK));
        course.course_syllebus = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_SYLLBUS));
        course.course_status = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_STATUS));
        course.course_material = cursor.getString(cursor.getColumnIndex(CourseList.COL_COURSE_MATERIAL));

        return course;
    }
    public CourseList searchCourse(String whereClause){
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        Cursor c = db.rawQuery(sql, null);
//Log.d("We are in searching", whereClause);
        if(c.moveToNext()){
            return getCourse(c);
        }else {
            c.close();
            return null;
        }
    }

    public ArrayList<CourseList> findCourse(String whereClause){
        ArrayList<CourseList> courseLists = new ArrayList<>();
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        Cursor cursor = db.rawQuery(sql, null);
        while(cursor.moveToNext()){
            courseLists.add(getCourse(cursor));
        }
        return courseLists;
    }
    /*public boolean updateSingle(String wherClause){

        ContentValues contentValues = new ContentValues();
        return update(contentValues, CourseList.COL_COURSE_CODE, allCourseList.course_code);
    }*/
}
