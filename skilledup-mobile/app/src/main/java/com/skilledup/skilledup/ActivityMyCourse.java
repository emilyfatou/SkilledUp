package com.skilledup.skilledup;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import com.skilledup.skilledup.adapter.MyCourseAdapter;
import com.skilledup.skilledup.backend.Api;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;

import static com.skilledup.skilledup.controller.UserController.user;

/**
 * Created by User on 4/22/2017.
 */

public class ActivityMyCourse extends AppCompatActivity {

    CourseList courseList;
    public static ArrayList<CourseList>courseLists;
    private boolean apiResult;
    CourseController courseController = new CourseController(CourseList.COURSE_TABLE);
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_course_list);

        initToolbar();
       //initList();
        //addCourse();
        getMyCourseDatabase();

        getMyCourseApi();
        if(apiResult)
            initList(CourseController.myCourse);
        else
            Toast.makeText(this, "You have not add any courses " , Toast.LENGTH_LONG).show();

    }
    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.my_course_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_my_course = (ImageView) findViewById(R.id.ima_back_my_course);
        bak_image_my_course.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityMyCourse.this, ActivityDashboard.class);
                startActivity(i);

                finish();
            }
        });
    }
    private void getMyCourseDatabase(){


      /*  if(!CourseController.myCourse.isEmpty()){
            initList(CourseController.myCourse);
        }
        else {
            Toast.makeText(this, "You have not add any courses " , Toast.LENGTH_LONG).show();
        }
*/

        String whereClause = String.format("%s = 'YES'", CourseList.COL_COURSE_STATUS);//, UserController.user.getEmail());
        //courseLists = courseController.findCourse(whereClause);
        CourseController.myCourse = courseController.findCourse(whereClause);
          //if(courseController.exist(whereClause)){
           // courseLists = courseController.findCourse(whereClause);
            if(CourseController.myCourse.isEmpty()){
                Toast.makeText(this, "You have not add any courses " , Toast.LENGTH_LONG).show();
            }
            else{
                //Toast.makeText(this, "Your courses amount" +  CourseController.myCourse.size(), Toast.LENGTH_LONG).show();
                initList(CourseController.myCourse);
            }
        //}else {
          // Toast.makeText(this, "I'm confused here what do u want me to do  " + UserController.user.getEmail(), Toast.LENGTH_LONG).show();
       /* }*/

    }

    private void getMyCourseApi(){
        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Getting course data . . . . ");
        Toast.makeText(getApplicationContext(), "Inside Api Call . . .", Toast.LENGTH_LONG).show();


        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected Boolean doInBackground(Void... voids) {

                return Api.getMyCourse();
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);
                //Toast.makeText(getApplicationContext(), "Inside onPostExecute  . . .", Toast.LENGTH_LONG).show();
                progressDialog.dismiss();
                if(aBoolean){

                }
                else {

                }
            }

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                //Toast.makeText(getApplicationContext(), "Inside onPreExecute  . . .", Toast.LENGTH_LONG).show();
                progressDialog.show();
            }
        };
        asyncTask.execute();
    }
    private void initList(ArrayList<CourseList>myCourse) {

      //  Toast.makeText(this, "You are here mafucker ", Toast.LENGTH_LONG).show();
        CourseList test = myCourse.get(0);
        //Toast.makeText(this, "Your Course  " + test.getCourse_title(), Toast.LENGTH_LONG).show();

        MyCourseAdapter adapter = new MyCourseAdapter(this, myCourse, 1);
        final ListView listView = (ListView) findViewById(R.id.my_course_list);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                CourseList course = (CourseList) listView.getItemAtPosition(i);
                Intent openIntent = new Intent(ActivityMyCourse.this, ActivityCourseOpen.class );
                startActivity(openIntent);
            }
        });
    }
    private void addCourse(){

        CourseList myCourse = new CourseList();
        myCourse.course_code = "CODE AA";
        myCourse.course_title = "Gebeya";
        myCourse.course_desc = "Application development for Gebeya Academy";
        myCourse.course_duration = "2 Weeks";
        myCourse.course_status = user.getEmail();
        myCourse.course_syllebus = "This is test syllebus";
        myCourse.course_link = "V=FSS343dfsdf";

        boolean saved = courseController.save(myCourse);
        if(saved)
            Toast.makeText(this, "courses added successfull ", Toast.LENGTH_LONG).show();
        else
            Toast.makeText(this, "failled !! ", Toast.LENGTH_LONG).show();

    }

}
