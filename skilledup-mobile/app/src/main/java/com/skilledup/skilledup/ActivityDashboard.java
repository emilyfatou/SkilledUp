package com.skilledup.skilledup;

import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.adapter.HomeAdapter;
import com.skilledup.skilledup.backend.Api;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.controller.ProfilerController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.model.CourseList;
import com.skilledup.skilledup.utils.Prefs;

import java.util.ArrayList;

/**
 * Created by User on 3/6/2017.
 */

public class ActivityDashboard extends AppCompatActivity {

    private CourseController controller = new CourseController(CourseList.COURSE_TABLE);
    ImageView backDashboard;

    DrawerLayout drawerLayout;
    ListView news;
    //ListView newCourse;
    ListView comingSoonCourse;
    TextView newsOne, newsTwo,newsThree;

    TextView menuItemPrpfile;
    TextView menuItemAllCourse;
    TextView menuItemMyCourse;
    TextView menuItemSearchCourse;
    TextView menuItemLogOut;
    TextView menuItemAbout;
    TextView menuItemForum;
    TextView menuItemfeedback;
    TextView userName;
    private boolean isOpened = false;
    String new_user_name;
    private boolean flag = false;
    EditText searchDas;

    private boolean drawerFlag = false;

    @Override
    protected void onCreate( Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        newsOne = (TextView) findViewById(R.id.news_one);
        newsTwo = (TextView) findViewById(R.id.news_two);
        newsThree= (TextView) findViewById(R.id.news_three);
        newsOne.setText("Skilled up 1.2.3 update available download now");
        newsTwo.setText("Download skilled up");
        newsThree.setText("Welcome to skille up learn more . . .");
        newsOne.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openNews("http://www.skilledup.com");
            }
        });

        newsTwo.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openNews("https://play.google.com/skilledup");
            }
        });

        newsThree.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                openNews("https://play.google.com/welcome");
            }
        });

        Prefs prefs = new Prefs(this);
        if(prefs.getBoolean(Prefs.ADD)){

        }else {
            new Prefs(ActivityDashboard.this).setBoolean(Prefs.ADD, true);
            arrayofcourse();
        }
        userName = (TextView) findViewById(R.id.user_name);
        userName.setText(ProfilerController.profile.getFirst_name() + " " +  ProfilerController.profile.getLast_name());
        userName.setAllCaps(true);
        drawerLayout = (DrawerLayout) findViewById(R.id.drawer_menu);

        getNewCourse();

        menuItemPrpfile = (TextView) findViewById(R.id.menu_item_profile);
        menuItemAllCourse = (TextView) findViewById(R.id.menu_item_all_course);
        menuItemMyCourse = (TextView) findViewById(R.id.menu_my_course);
        menuItemSearchCourse = (TextView) findViewById(R.id.menu_item_search_course);
        menuItemLogOut = (TextView) findViewById(R.id.menu_item_log_out);
        menuItemAbout = (TextView) findViewById(R.id.menu_item_about);
        menuItemForum = (TextView) findViewById(R.id.menu_item_forum);
        menuItemfeedback = (TextView) findViewById(R.id.menu_item_feedback);

        //searchDas = (EditText) findViewById(R.id.dashboard_search);
       // String searchQ = searchDas.getText().toString();
        //if(!searchQ.isEmpty())
       //     onSearch(searchQ);
       // else
            //Toast.makeText(this,"Please enter keyword", Toast.LENGTH_LONG).show();


        menuItemPrpfile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onProfile(view);
            }
        });

        menuItemAllCourse.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onAllCourse();
            }
        });

        menuItemMyCourse.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onMyCourse(view);
            }
        });

        menuItemSearchCourse.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onSearchCourse(view);
            }
        });

        menuItemForum.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onForum(view);
            }
        });

        menuItemLogOut.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onLogOut(view);
            }
        });

        menuItemAbout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onAbout(view);
            }
        });

        menuItemfeedback.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onFeedback(view);
            }
        });
        toolBarDashboard();
        backDashboard = (ImageView) findViewById(R.id.ima_back_dashboard);
        backDashboard.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(!drawerFlag)
                {
                    //Toast.makeText(ActivityDashboard.this,"Inside Drawer Flag : " + drawerFlag,Toast.LENGTH_LONG).show();
                    drawerLayout.openDrawer(GravityCompat.START);
                    drawerFlag = true;
                }

            }
        });

    }

    public void toolBarDashboard(){
        Toolbar dashboardToolbar = (Toolbar) findViewById(R.id.dashboard_toolbar);
        setSupportActionBar(dashboardToolbar);
        getSupportActionBar().setDisplayShowTitleEnabled(false);

    }
    public void onProfile(View view){
        Intent profile = new Intent(ActivityDashboard.this,ActivityProfile.class);
        startActivity(profile);
    }
    public void onAllCourse(){
        Intent message = new Intent(ActivityDashboard.this,ActivityAllCourse.class);
        startActivity(message);
    }
    public void onMyCourse(View view){
        Intent myCourse = new Intent(ActivityDashboard.this,ActivityMyCourse.class);
        startActivity(myCourse);
    }
    public void onSearchCourse(View view){
        Intent courseSearch = new Intent(ActivityDashboard.this,ActivityCourseSearch.class);
        startActivity(courseSearch);
    }
    public void onLogOut(View view){
        AlertDialog.Builder logoutDialog = new AlertDialog.Builder(this);

        logoutDialog.setMessage("Are you sure you want to log out ?");
        logoutDialog.setPositiveButton("Yes", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialogInterface, int i) {
                doApiLogOut();
            }
        })
                .setNegativeButton("No", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                    }
                });
        logoutDialog.create();
        logoutDialog.show();
    }
    public void onAbout(View view){
        Intent about = new Intent(ActivityDashboard.this,AboutActivity.class);
        startActivity(about);
    }
    public void onFeedback(View view){
        Intent about = new Intent(ActivityDashboard.this,ActivityFeddBack.class);
        startActivity(about);
    }
    public void onForum(View view){

        Intent about = new Intent(ActivityDashboard.this,ActivityForum.class);
        startActivity(about);
    }
    private void getNewCourse(){

        /*Get all course in the Course table*/
        if(CourseController.allCourseList.isEmpty())
        controller.load();
        if(!CourseController.allCourseList.isEmpty()){
            final ListView newCourse = (ListView) findViewById(R.id.list_new_course);
            //Toast.makeText(this,"Got something . . . ",Toast.LENGTH_LONG).show();
            HomeAdapter adapter = new HomeAdapter(this, CourseController.allCourseList);
            newCourse.setAdapter(adapter);
            adapter.notifyDataSetChanged();
            newCourse.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                    CourseList oneCourse = (CourseList) newCourse.getItemAtPosition(i);
                    //Toast.makeText(ActivityDashboard.this,"You have selected CODE : " + oneCourse.getCourse_code(),Toast.LENGTH_LONG).show();


                    if(oneCourse.course_status.equals("YES")){
                        Intent intent = new Intent(ActivityDashboard.this, ActivityMyCourse.class);
                        intent.putExtra("course", oneCourse);
                        startActivity(intent);
                    }
                    else {
                        Intent intent = new Intent(ActivityDashboard.this, ActivityAddCourse.class);
                        intent.putExtra("course", oneCourse);
                        startActivity(intent);
                    }

                }
            });

        }else {
            Toast.makeText(this,"There is no course in Course DB",Toast.LENGTH_LONG).show();
        }

    }
    private void openNews(String url){

        Intent webIntent = new Intent(Intent.ACTION_VIEW);
        webIntent.setData(Uri.parse(url));
        startActivity(webIntent);

    }
    private void addCourse(ArrayList<CourseList>cc) {

        for(int i = 0; i < cc.size(); i++){

            CourseList myCourse = new CourseList();
            CourseList arrayCourse = cc.get(i);

            myCourse.course_code = arrayCourse.getCourse_code();
            myCourse.course_title = arrayCourse.getCourse_title();
            myCourse.course_desc = arrayCourse.getCourse_desc();
            myCourse.course_duration = arrayCourse.getCourse_duration();
            myCourse.course_status = arrayCourse.getCourse_status();
            myCourse.course_syllebus = arrayCourse.getCourse_syllebus();
            myCourse.course_link = arrayCourse.getCourse_link();
            myCourse.course_material = arrayCourse.getCourse_material();


            boolean saved = controller.save(myCourse);
           // if(saved)
                //Toast.makeText(this, "courses added successfull ", Toast.LENGTH_LONG).show();
            //else
             //   Toast.makeText(this, "failled !! ", Toast.LENGTH_LONG).show();
        }

    }
    private void arrayofcourse(){
        if(!flag){
            ArrayList<CourseList> myCourse = new ArrayList<>();
            myCourse.add(new CourseList("CODE AA", "Intro to Android", "Android is the name of the mobile operating system owned by American company, Google. It most commonly comes installed on a variety of smartphones and tablets from a host of manufacturers offering users access to Google’s own services like Search, YouTube, Maps, Gmail and more.","20 Hours","NO","U9EqUj_2Rwg","Syellebus","Video"));
            myCourse.add(new CourseList("CODE BB","Intro to Node", "Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36.","12 Hours","NO","VH-0HR5XfeE","Syellebus","Pdf"));
            myCourse.add(new CourseList("CODE CC","Intro to Linux", "Linux is an operating system or a kernel which germinated as an idea in the mind of young and bright Linus Torvalds when he was a computer science student.","10 Hours","NO","HZfbMI4x0H4","Syellebus","Video"));
            myCourse.add(new CourseList("CODE DD","Intro UI Designe","User interface design (UI) or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.","16 Hours","NO","oqhNe2WxKI8","Syellebus","Pdf"));
            flag = true;
            addCourse(myCourse);
        }
    }
    private void onSearch(String searchQ){

    }

    public void doApiLogOut(){

        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Logging out . . . .");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>(){

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                progressDialog.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return  Api.logout(UserController.user.getUser_id());
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);
                progressDialog.dismiss();
                if(aBoolean){
                    /* Update the LOGIN field in our shared preferences file */
                    new Prefs(ActivityDashboard.this).setBoolean(Prefs.LOGIN_PREF, false);
                    new Prefs(ActivityDashboard.this).setEmail(Prefs.EMAIL, "");
                    UserController.user = null;
                    ProfilerController.profile = null;
                    //CourseController.allCourseList.clear();
                    //CourseController.myCourse.clear();

                /* Delete all the database tables*/
                /*UserController controller = new UserController(User.USER_TABLE);
                controller.clearTable();
                CourseController controller1 = new CourseController(CourseList.COURSE_TABLE);
                controller1.clearTable();*/
                    //DatabaseController.closeDatabase();

                 /* Redirect to log in screen */
                    Intent logOut = new Intent(ActivityDashboard.this,ActivitySignIn.class);
                    startActivity(logOut);
                    finish();
                }
                else {
                    Toast.makeText(ActivityDashboard.this, "Failed to Logout!!", Toast.LENGTH_LONG).show();
                }
            }
        };
        asyncTask.execute();
    }
}
