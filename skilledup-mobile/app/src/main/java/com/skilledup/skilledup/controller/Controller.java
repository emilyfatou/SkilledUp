package com.skilledup.skilledup.controller;

import android.content.ContentValues;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.support.design.widget.TabLayout;
import android.util.Log;
import android.widget.Toast;

import com.skilledup.skilledup.database.DatabaseController;

import java.security.PublicKey;
import java.util.ArrayList;
import java.util.StringTokenizer;

/**
 * Created by User on 3/6/2017.
 */

public abstract class Controller<T> {

    public DatabaseController databaseController;
    public SQLiteDatabase db;
        /* Define a general select statement */
    public String SELECT_ALL;
        /* Will contain records we select from the table */
    public ArrayList<T>items;
        /* Define a general Table Name */
    public String TABLE;
        /* Contains the result of the database query */
    public Cursor cursor;


    public Controller(String table) {
        this.TABLE = table;
        SELECT_ALL = "SELECT * FROM " + TABLE;
        databaseController = DatabaseController.getInistance();
        db = databaseController.openDatabase();
    }

    public void load(){
        /* Select all the records from the database table */
        cursor = db.rawQuery(SELECT_ALL, null);
    }

    public abstract boolean save(T t);

    public boolean update(ContentValues content, String  col, String colValue){
        String whereClause = String.format("%s = '%s'",col,colValue);
        int num = db.update(TABLE, content, whereClause,null);
        return num > 0;
    }

    /**
     * Deletes the entire table
     * @return {true/false}
     */
    public boolean clearTable(){
        int num = db.delete(TABLE, null, null);
        return num >0;
    }
    /**
     * Deletes specific records from the table based on the whereClause
     * @param whereClause
     * @return {true/false}
     */
    public boolean delete(String whereClause){
        int num = db.delete(TABLE, whereClause, null);
        return num > 0;
    }

    /**
     * Checks whether a record exists in a Table
     * @param whereClause
     * @return {true/false}
     */
    public boolean exist(String whereClause){
        String sqlQuery = String.format("%s WHERE %s", SELECT_ALL , whereClause);
        Cursor c = db.rawQuery(sqlQuery, null);
       // Log.d("Trying to check  --- >",whereClause);
      //  while (c.moveToNext()){
//
     //   }
        if(c.moveToNext()){
            c.close();
          //  Log.d("Find Something ","We are here");
            return true;
        }else{
            c.close();
          //  Log.d("Find Nothing ","We are here");
            return false;
        }
    }

    /*public boolean check(String whereClause){
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        Cursor c = db.rawQuery(sql, null);
        if (c.moveToNext()) {
            /* The record exists
            c.close();
            return true;
        }else {
            /* The record was not found
            c.close();
            return false;
        }
    }*/

}
