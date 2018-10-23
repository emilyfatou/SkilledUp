package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.os.Handler;

import com.skilledup.skilledup.controller.ProfilerController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.model.Profile;
import com.skilledup.skilledup.model.User;
import com.skilledup.skilledup.utils.Prefs;


/**
 * Created by User on 3/4/2017.
 */

public class ActivitySplash extends AppCompatActivity {

    private static final int SPLASH_TIMEOUT = 3000;
    private boolean view_clicked = false;
    private boolean closed = false;

    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        findViewById(R.id.main_conntent).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                view_clicked = true;
                initNext();
            }
        });

        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                /*Close the Splash and open the Next Activity */
                if (view_clicked) return;
                if (closed) return;
                initNext();
            }
        }, SPLASH_TIMEOUT);
    }

    public void initNext(){
        UserController controller = new UserController(User.USER_TABLE);
        ProfilerController profilerController = new ProfilerController(Profile.PROFILE_TABLE);
        Prefs login = new Prefs(this);
        if(login.getBoolean(Prefs.LOGIN_PREF))
        {
            String whereClause = String.format("%s = '%s'", User.COL_EMAIL, login.getEmail("email"));
            String whereClause2 = String.format("%s = '%s'",Profile.COL_PROFILE_ID, login.getProfileID("profile_id"));
            UserController.user = controller.searchUser(whereClause);
            ProfilerController.profile = profilerController.searchUser(whereClause2);
            Intent i = new Intent(this, ActivityDashboard.class);
            startActivity(i);
            finish();
        }else{
            Intent i = new Intent(this, ActivityWelcome.class);
            startActivity(i);
            finish();
        }
    }
}
