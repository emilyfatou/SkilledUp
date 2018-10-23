package com.skilledup.skilledup.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.skilledup.skilledup.model.CourseList;
import com.skilledup.skilledup.model.Profile;
import com.skilledup.skilledup.model.User;

/**
 * Created by User on 3/6/2017.
 */

public class DatabaseHelper extends SQLiteOpenHelper {

    public static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "skilledup.db";
    private Context context;
    String [][] TABLES ={
            {User.USER_TABLE, User.CREATE_TABLE, User.DROP_TABLE_SQL},
            {Profile.PROFILE_TABLE, Profile.CREATE_TABLE_PROFILE, Profile.DROP_PROFILE_TABLE_SQL},
            {CourseList.COURSE_TABLE, CourseList.CREATE_TABLE_SQL, CourseList.DROP_TABLE_SQL}
    };
   // String [][] COURSE_TABLES = {
   //         {CourseList.COURSE_TABLE, CourseList.CREATE_TABLE_SQL, CourseList.DROP_TABLE_SQL}
   // };

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        createTable(db);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        deleteTable(db);
        createTable(db);
    }

    public void createTable(SQLiteDatabase db){
      // for(String[] s: TABLES)
      //     db.execSQL(s[1]);

        for (String[] s: TABLES) {
            db.execSQL(s[1]);
        }
        //db.execSQL(User.CREATE_TABLE);

    }

    public void deleteTable(SQLiteDatabase db){
        for(String[] s: TABLES)
            db.execSQL(s[2]);
    }
}
