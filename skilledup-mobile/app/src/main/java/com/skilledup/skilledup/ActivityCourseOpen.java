package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ImageView;

import com.skilledup.skilledup.Fragment.CourseAssignmentFragment;
import com.skilledup.skilledup.Fragment.CourseExamFragment;
import com.skilledup.skilledup.Fragment.CourseMaterialFragment;
import com.skilledup.skilledup.adapter.MyCoursePagerAdapter;

/**
 * Created by User on 3/29/2017.
 */

public class ActivityCourseOpen extends AppCompatActivity{

    CourseMaterialFragment material;
    CourseExamFragment exam;
    CourseAssignmentFragment assignment;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_course_open);

        initViewPager();
        initToolbar();
    }

    private void initViewPager() {
        /*Creating an instance of the fragment on the tablayout*/
        material = new CourseMaterialFragment();
        exam = new CourseExamFragment();
        assignment = new CourseAssignmentFragment();

        /* Inflate the View pager and Tab Layout from the XML */
        ViewPager viewPager = (ViewPager) findViewById(R.id.my_course_open_viewpager);
        TabLayout tabLayout = (TabLayout) findViewById(R.id.my_course_open_tablayout);
        /* Link the Tab Layout with the View Pager */
        tabLayout.setupWithViewPager(viewPager);
        /* Set the adapter on the view pager*/
        MyCoursePagerAdapter adapter = new MyCoursePagerAdapter(getSupportFragmentManager(), this, material, exam, assignment);
        viewPager.setAdapter(adapter);
    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.my_course_open_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_message = (ImageView) findViewById(R.id.ima_back_my_course_open);
        bak_image_message.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityCourseOpen.this, ActivityMyCourse.class);
                startActivity(i);
                finish();
            }
        });

    }

}
