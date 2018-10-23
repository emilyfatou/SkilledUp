package com.skilledup.skilledup.controller;

import android.content.ContentValues;
import android.database.Cursor;

import com.skilledup.skilledup.model.Profile;
import com.skilledup.skilledup.model.User;

/**
 * Created by User on 5/7/2017.
 */

public class ProfilerController extends Controller<Profile>  {

    public static Profile profile;

    public ProfilerController(String table) {
        super(table);
    }

    @Override
    public void load() {
        super.load();
        while (cursor.moveToNext()){
            profile = getUser(cursor);
        }
    }

    @Override
    public boolean save(Profile user) {

        ContentValues contentValues = new ContentValues();

        contentValues.put(Profile.COL_PROFILE_ID , user.getProfile_id());
        contentValues.put(Profile.COL_COUNTRY, user.getCountry());
        contentValues.put(Profile.COL_FIRST_NAME, user.getFirst_name());
        contentValues.put(Profile.COL_LAST_NAME, user.getLast_name());
        //contentValues.put(Profile.COL_EDUCATION, user.getEducation());
        //contentValues.put(User.COL_COUNTRY, user.getCountry());


        String whereClause = String.format("%s = '%s'", Profile.COL_PROFILE_ID , user.getProfile_id());
        if(!exist(whereClause)){
            long num = db.insert(Profile.PROFILE_TABLE, null, contentValues);
            return num != -1;
        }else {
            return update(contentValues, Profile.COL_PROFILE_ID, user.getProfile_id());
        }

    }
    private Profile getUser(Cursor cursor){
        Profile u = new Profile();
        u.profile_id = cursor.getString(cursor.getColumnIndex(Profile.COL_PROFILE_ID));
        u.country = cursor.getString(cursor.getColumnIndex(Profile.COL_COUNTRY));
        u.first_name = cursor.getString(cursor.getColumnIndex(Profile.COL_FIRST_NAME));
        u.last_name = cursor.getString(cursor.getColumnIndex(Profile.COL_LAST_NAME));
        u.education = cursor.getString(cursor.getColumnIndex(Profile.COL_EDUCATION));
        // u.country = cursor.getString(cursor.getColumnIndex(User.COL_COUNTRY));
        return u;
    }
    public Profile searchUser(String whereClause){
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
