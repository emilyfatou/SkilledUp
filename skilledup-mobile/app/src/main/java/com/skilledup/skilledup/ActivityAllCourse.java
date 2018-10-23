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

/**
 * Created by User on 4/29/2017.
 */

public class ActivityAllCourse extends AppCompatActivity {

    CourseList courseList;
    public static ArrayList<CourseList> courseLists;
    CourseController controller = new CourseController(CourseList.COURSE_TABLE);
    private boolean apiResult;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_all_course);
        initToolbar();
        getMyCourseDatabase();
    }

    private void getMyCourseDatabase(){


        if(!CourseController.allCourseList.isEmpty()){

            final ListView allCourseList = (ListView) findViewById(R.id.all_course_list);
            MyCourseAdapter adapter = new MyCourseAdapter(this, CourseController.allCourseList, 0);
            allCourseList.setAdapter(adapter);

            allCourseList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                    CourseList oneCourse = (CourseList) allCourseList.getItemAtPosition(i);
                  //  Toast.makeText(ActivityAllCourse.this, oneCourse.getCourse_title() + "\n" +
                    //        oneCourse.getCourse_code() + "\n" + oneCourse.getCourse_desc() + "\n" + oneCourse.getCourse_status() + "\n" + oneCourse.getCourse_duration(), Toast.LENGTH_LONG).show();

                    if(oneCourse.course_status.equals("YES")){
                        Intent intent = new Intent(ActivityAllCourse.this, ActivityCourseOpen.class);
                        intent.putExtra("course", oneCourse);
                        startActivity(intent);
                    }
                    else {
                        Intent intent = new Intent(ActivityAllCourse.this, ActivityAddCourse.class);
                        intent.putExtra("course", oneCourse);
                        startActivity(intent);
                    }

                }
            });

        }else {
            Toast.makeText(this, "No courses have been added to the database" , Toast.LENGTH_LONG).show();
        }
    }

    private void getAllCourseApi(){
        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Getting all course data . . . . ");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected Boolean doInBackground(Void... voids) {
                return Api.getAllCourse();
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);
                progressDialog.dismiss();
            }

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                progressDialog.show();
            }
        };
    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.all_course_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_all_course = (ImageView) findViewById(R.id.ima_back_all_course);
        bak_image_all_course.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityAllCourse.this, ActivityDashboard.class);
                startActivity(i);
                finish();
            }
        });
    }

}
