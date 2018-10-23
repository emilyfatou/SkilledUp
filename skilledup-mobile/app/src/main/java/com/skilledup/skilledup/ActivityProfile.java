package com.skilledup.skilledup;

import android.app.Fragment;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.FloatingActionButton;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.Toast;

import com.skilledup.skilledup.Fragment.NewsFragment;
import com.skilledup.skilledup.Fragment.SearchCourseFragment;
import com.skilledup.skilledup.backend.Api;
import com.skilledup.skilledup.controller.ProfilerController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.database.DatabaseController;
import com.skilledup.skilledup.database.DatabaseHelper;
import com.skilledup.skilledup.model.User;
import com.skilledup.skilledup.utils.Prefs;

/**
 * Created by User on 3/13/2017.
 */

public class ActivityProfile extends AppCompatActivity {

    NewsFragment newsFragment = new NewsFragment();
    SearchCourseFragment searchCourseFragment = new SearchCourseFragment();
    private EditText f_name;
    private EditText l_name;
    private EditText email;
    private EditText password;
    private Spinner country;
    private Spinner city;
    private Spinner education;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_profile);

        initToolbar();
        getProfileApi();
        f_name = (EditText) findViewById(R.id.profile_f_name);
        f_name.setText(ProfilerController.profile.getFirst_name());
        f_name.setEnabled(false);
        l_name = (EditText) findViewById(R.id.profile_l_name);
        l_name.setText(ProfilerController.profile.getLast_name());
        l_name.setEnabled(false);
        email = (EditText) findViewById(R.id.profile_email);
        email.setText(UserController.user.getEmail());
        email.setEnabled(false);
        password = (EditText) findViewById(R.id.profile_pass);
        //password.setText(UserController.user.getPassword());
        password.setEnabled(false);
        country = (Spinner) findViewById(R.id.profile_country);
        country.setEnabled(false);
        city = (Spinner) findViewById(R.id.profile_city);
        city.setEnabled(false);
        education = (Spinner) findViewById(R.id.profile_education);
        education.setEnabled(false);

        FloatingActionButton editor = (FloatingActionButton) findViewById(R.id.floating_edit);
        editor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                editProfile();
            }
        });

    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.profile_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_profile = (ImageView) findViewById(R.id.ima_back_profile);
        bak_image_profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityProfile.this, ActivityDashboard.class);
                startActivity(i);
                finish();
            }
        });
    }

    public void getUserDatabase(String emailAddress){
        UserController controller = new UserController(User.USER_TABLE);
        DatabaseHelper databaseHelper = DatabaseController.getDatabaseHelper();
        databaseHelper.createTable(controller.db);
        String whereClause = String.format("%s = '%s'", User.COL_EMAIL, emailAddress);
        //if()
    }

    public void editProfile(){
        Intent profileIntent = new Intent(ActivityProfile.this, ActivityProfileEdit.class);
        startActivity(profileIntent);
    }

    public void getProfileApi(){

        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Getting Profile data . . . .");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>(){

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                progressDialog.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return  Api.getProfile(ProfilerController.profile.getProfile_id());
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);
                progressDialog.dismiss();
                if(aBoolean){

                }
                else {
                    Toast.makeText(ActivityProfile.this, "Failed to get profile data !!", Toast.LENGTH_LONG).show();
                }
            }
        };
        asyncTask.execute();
    }
}
