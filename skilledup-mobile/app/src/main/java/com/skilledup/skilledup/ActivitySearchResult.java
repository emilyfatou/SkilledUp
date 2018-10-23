package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import com.skilledup.skilledup.Fragment.SearchCourseFragment;
import com.skilledup.skilledup.adapter.HomeAdapter;
import com.skilledup.skilledup.adapter.MyCourseAdapter;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;

/**
 * Created by User on 4/10/2017.
 */

public class ActivitySearchResult extends AppCompatActivity {


    SearchCourseFragment myCourseFragment;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search_result);

        initToolbar();
        final ListView listView = (ListView)findViewById(R.id.search_result_list);


        Intent intent = getIntent();
        if(intent.hasExtra("result")){
            ArrayList<CourseList>myList = new ArrayList<>();
            CourseList myCourse = (CourseList) intent.getSerializableExtra("result");
            myList.add(myCourse);
            //HomeAdapter adapter = new HomeAdapter(ActivitySearchResult.this, myList);
            MyCourseAdapter adapter = new MyCourseAdapter(ActivitySearchResult.this, myList, 0);
            listView.setAdapter(adapter);

            listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                    CourseList oneCourse = (CourseList) listView.getItemAtPosition(i);
                    Intent intent = new Intent(ActivitySearchResult.this, ActivityAddCourse.class);
                    intent.putExtra("course", oneCourse);
                    startActivity(intent);
            }
        });
        }
    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.search_result_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_search = (ImageView) findViewById(R.id.ima_back_search_result);
        bak_image_search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivitySearchResult.this, ActivityCourseSearch.class);
                startActivity(i);
                finish();
            }
        });
    }
}
