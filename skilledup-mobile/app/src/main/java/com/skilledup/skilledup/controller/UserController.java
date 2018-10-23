package com.skilledup.skilledup.controller;

import android.content.ContentValues;
import android.database.Cursor;

import com.skilledup.skilledup.model.User;

/**
 * Created by User on 3/6/2017.
 */

public class UserController extends Controller<User> {

    public static User user;

    public UserController(String table) {

        super(table);
    }

    @Override
    public void load() {
        super.load();
        while (cursor.moveToNext()){
            user = getUser(cursor);
        }
    }

    @Override
    public boolean save(User user) {

        ContentValues contentValues = new ContentValues();

        contentValues.put(User.COL_USER_ID , user.getUser_id());
        contentValues.put(User.COL_TOKEN, user.getToken());
        contentValues.put(User.COL_EMAIL, user.getEmail());

        // contentValues.put(User.COL_FIRST_NAME, user.getFirst_name());
        //contentValues.put(User.COL_LAST_NAME, user.getLast_name());
        //contentValues.put(User.COL_COUNTRY, user.getCountry());


        String whereClause = String.format("%s = '%s'", User.COL_USER_ID , user.getUser_id());
        if(!exist(whereClause)){
            long num = db.insert(User.USER_TABLE, null, contentValues);
            return num != -1;
        }else {
            return update(contentValues, User.COL_USER_ID, user.getUser_id());
        }

    }
    private User getUser(Cursor cursor){
        User u = new User();
        u.user_id = cursor.getString(cursor.getColumnIndex(User.COL_USER_ID));
        u.token = cursor.getString(cursor.getColumnIndex(User.COL_TOKEN));
        u.email = cursor.getString(cursor.getColumnIndex(User.COL_EMAIL));

        // u.first_name = cursor.getString(cursor.getColumnIndex(User.COL_FIRST_NAME));
       // u.last_name = cursor.getString(cursor.getColumnIndex(User.COL_LAST_NAME));
       // u.country = cursor.getString(cursor.getColumnIndex(User.COL_COUNTRY));
        return u;
    }
    public User searchUser(String whereClause){
        String sql = String.format("%s WHERE %s", SELECT_ALL, whereClause);
        Cursor c = db.rawQuery(sql, null);

        if(c.moveToNext()){
            return getUser(c);
        }else {
            c.close();
            return null;
        }
    }


}
