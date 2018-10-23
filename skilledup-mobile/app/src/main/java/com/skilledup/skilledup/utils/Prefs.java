package com.skilledup.skilledup.utils;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by User on 4/5/2017.
 */

public class Prefs {

    private SharedPreferences prefs;
    private SharedPreferences.Editor editor;

    public static final String PREF_NAME = "skilledup_prefs";
    public static final String LOGIN_PREF = "login";
    public static final String ADD ="add_course";
    public static final String EMAIL="email";
    public static final String PROFILE_ID = "profile_id";


    public Prefs(Context context) {
        prefs = context.getSharedPreferences(PREF_NAME, context.MODE_PRIVATE);
    }

    public void setBoolean(String key, boolean value) {
        if(editor == null)
            editor = prefs.edit();
        editor.putBoolean(key, value);
        editor.apply();
    }
    public void setEmail(String key, String val){
        if(editor == null)
            editor = prefs.edit();
        editor.putString(key, val);
        editor.apply();
    }

    public void setProfileId(String key, String val){
        if(editor == null)
            editor = prefs.edit();
        editor.putString(key, val);
        editor.apply();
    }

    public String getEmail(String key){
        return prefs.getString(key, null);
    }

    public String getProfileID(String key){
        return prefs.getString(key, null);
    }

    public boolean getBoolean(String key){
        return prefs.getBoolean(key, false);
    }
}
