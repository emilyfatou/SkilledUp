package com.skilledup.skilledup.database;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;

/**
 * Created by User on 3/6/2017.
 */

public class DatabaseController {
    public static DatabaseController databaseController;
    public static DatabaseHelper databaseHelper;
    public static SQLiteDatabase db;


    public static synchronized void initialized(Context context){
        databaseController = new DatabaseController();
        databaseHelper = new DatabaseHelper(context);
    }

    public static synchronized DatabaseController getInistance(){
        if(databaseController == null) {
            throw new IllegalStateException("");
        }

        return databaseController;
    }

    public static synchronized DatabaseHelper getDatabaseHelper(){
        if(databaseHelper == null){
            throw new IllegalStateException("");
        }
        return databaseHelper;
    }

    public static synchronized SQLiteDatabase openDatabase(){
        if(db == null)
            db = databaseHelper.getWritableDatabase();

        return db;
    }

    public static synchronized void closeDatabase(){
        if(db != null)
            db.close();
    }
}
