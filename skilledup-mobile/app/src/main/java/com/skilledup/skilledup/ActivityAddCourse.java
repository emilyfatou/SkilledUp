package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.model.CourseList;

/**
 * Created by User on 3/29/2017.
 */

public class ActivityAddCourse extends AppCompatActivity{

    TextView openTitle;
    TextView openDuration;
    TextView openDesc;
    TextView openSyllebus;
    TextView openCode;
    Button addCourse;
    private CourseList openCourse;

    CourseController myController = new CourseController(CourseList.COURSE_TABLE);
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_course_open);

        openTitle = (TextView) findViewById(R.id.opened_course_title);
        openDuration = (TextView) findViewById(R.id.opened_course_duration);
        openDesc = (TextView) findViewById(R.id.opened_course_desc);
        openSyllebus = (TextView) findViewById(R.id.opened_course_Syllebus);
        openCode = (TextView) findViewById(R.id.opened_course_code);


        Intent intent = getIntent();
        if(intent.hasExtra("course")){
            openCourse = (CourseList) intent.getSerializableExtra("course");
            openTitle.setText(openCourse.getCourse_title());
            openCode.setText(openCourse.getCourse_code());
            openDuration.setText("Course Duration: " + openCourse.getCourse_duration());
            openDesc.setText("Course Description: " + openCourse.getCourse_desc());
            openSyllebus.setText("Course Syllebus: " + openCourse.course_syllebus);
        }

        findViewById(R.id.add_course).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                addCourse();
            }
        });

        initToolbar();
    }

    private boolean addCourse(){

        //String whereClause = String.format("%s = 'YES'", CourseList.COL_COURSE_STATUS);
       // Toast.makeText(this,"Course Status : " + openCourse.getCourse_status(), Toast.LENGTH_LONG).show();
        if(openCourse.course_status.equals("YES")){
            Toast.makeText(this,"Course already in your list", Toast.LENGTH_LONG).show();
        }else{
            CourseList newCourse = new CourseList();
            newCourse.course_title = openCourse.getCourse_title();
            newCourse.course_code = openCourse.getCourse_code();
            newCourse.course_desc = openCourse.getCourse_desc();
            newCourse.course_status ="YES";
            newCourse.course_syllebus = openCourse.getCourse_syllebus();
            newCourse.course_duration = openCourse.getCourse_duration();
            newCourse.course_link = openCourse.getCourse_link();

            //CourseController.myCourse.add(newCourse);
            if(myController.save(newCourse)){
                Toast.makeText(this,"Course Added", Toast.LENGTH_LONG).show();

                /* Reload both my course and course list from the databas*/
              //  CourseController.allCourseList = null;
            //    CourseController.myCourse = null;
              //  CourseController.allCourseList.add(myController.load());
                CourseController.myCourse.add(newCourse);
                CourseController.allCourseList.clear();// = null;
               // Toast.makeText(this,"Course Allcourse Clear" + CourseController.allCourseList.size(), Toast.LENGTH_LONG).show();
                myController.load();

                Intent i = new Intent(ActivityAddCourse.this, ActivityMyCourse.class);
                startActivity(i);
                finish();

            }else {
                //Toast.makeText(this,"Trying to add course", Toast.LENGTH_LONG).show();
            }
        }
        //Toast.makeText(this,"Failled to add course", Toast.LENGTH_LONG).show();
        return true;
    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.add_course_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_message = (ImageView) findViewById(R.id.ima_back_add_course);
        bak_image_message.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityAddCourse.this, ActivityAllCourse.class);
                startActivity(i);
                finish();
            }
        });
    }

}
