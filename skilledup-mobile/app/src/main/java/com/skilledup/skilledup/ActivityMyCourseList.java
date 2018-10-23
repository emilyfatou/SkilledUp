package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;

import com.skilledup.skilledup.adapter.MyCourseAdapter;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;

/**
 * Created by User on 4/19/2017.
 */

public class ActivityMyCourseList extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_course_list);

        initToolbar();
       // initList();
    }

   /* private void initList() {
        /* Create an arrayList of Profile_projects objects
        ArrayList<CourseList> items = new ArrayList<>();
        items.add(new CourseList("CODE AA","Gebeya ", "Application development for Gebeya Academy", "2 Weeks"));
        items.add(new CourseList("CODE AA","CheckOnMe", "Emergency service provider app", "2 Weeks"));
        items.add(new CourseList("CODE AA","SkilledUp", "Teaching learning platform", "2 Weeks"));
        items.add(new CourseList("CODE AA","Afrikik", "Football players app", "2 Weeks"));
        items.add(new CourseList("CODE AA","Gebeya ", "Application development for Gebeya Academy", "2 Weeks"));
        items.add(new CourseList("CODE AA","CheckOnMe", "Emergency service provider app", "2 Weeks"));
        items.add(new CourseList("CODE AA","SkilledUp", "Teaching learning platform", "2 Weeks"));
        items.add(new CourseList("CODE AA","Afrikik", "Football players app", "2 Weeks"));
        items.add(new CourseList("CODE AA","Gebeya ", "Application development for Gebeya Academy","2 Weeks"));
        items.add(new CourseList("CODE AA","CheckOnMe", "Emergency service provider app","2 Weeks"));
        items.add(new CourseList("CODE AA","SkilledUp", "Teaching learning platform","2 Weeks"));
        items.add(new CourseList("CODE AA","Afrikik", "Football players app","2 Weeks"));

        MyCourseAdapter adapter = new MyCourseAdapter(this, items);
        final ListView listView = (ListView) findViewById(R.id.my_course_list);
        listView.setAdapter(adapter);

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Intent viewIntent = new Intent(ActivityMyCourseList.this, ActivityPdfView.class);
                startActivity(viewIntent);
            }
        });
    }*/

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.my_course_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_my_course = (ImageView) findViewById(R.id.ima_back_my_course);
        bak_image_my_course.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityMyCourseList.this, ActivityDashboard.class);
                startActivity(i);
            }
        });
    }

}
