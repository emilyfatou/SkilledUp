package com.skilledup.skilledup;

import android.app.Application;

import com.skilledup.skilledup.database.DatabaseController;

/**
 * Created by User on 4/8/2017.
 */

public class App extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        //Initialize the db courseController here
        DatabaseController.initialized(this);
    }
}
