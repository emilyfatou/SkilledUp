package com.skilledup.skilledup;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.Toast;

import com.skilledup.skilledup.Fragment.SearchResultFragment;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.model.CourseList;

/**
 * Created by User on 2/28/2017.
 */

public class ActivityCourseSearch extends AppCompatActivity {

    SearchResultFragment searchResultFragment;
    ListView searchResult;
    EditText searchQuery;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_search);

        initToolbar();
        searchResultFragment = new SearchResultFragment();
        searchResult = (ListView) findViewById(R.id.search_result_list);
        ImageButton  searchButton = (ImageButton) findViewById(R.id.search_image);
        searchQuery = (EditText) findViewById(R.id.search_query);

        //String[] resulSearcht = {"Android mobile app development","Angular js", "Introduction to Node","Introduction to Linux", "Introduction to C#","Introduction to UI"};
        //HomeAdapter adapter = new HomeAdapter(this, resulSearcht);
        //searchResult.setAdapter(adapter);

        searchButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                String query = searchQuery.getText().toString().trim();
                //searchCourse(query);
                if(!query.isEmpty())
                    chkCourse(query);
                else
                    Toast.makeText(ActivityCourseSearch.this, "Please, enter course title to search", Toast.LENGTH_SHORT).show();

                //Toast.makeText(ActivityCourseSearch.this, "Searchiing for available courses", Toast.LENGTH_SHORT).show();
            }
        });

    }
    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.search_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_search = (ImageView) findViewById(R.id.ima_back_search);
        bak_image_search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityCourseSearch.this, ActivityDashboard.class);
                startActivity(i);
                finish();
            }
        });
    }

    private void searchCourse(String courseTitle) {

        CourseController searchController = new CourseController(CourseList.COURSE_TABLE);
        String searchquery = String.format("%s = 'BB'", CourseList.COL_COURSE_CODE);//, courseTitle);
        if (searchController.exist(searchquery)) {
            CourseList search = searchController.searchCourse(searchquery); //.allCourseList.get(i);
            if (search.getCourse_title() == courseTitle) {
                Intent searchIntent = new Intent(ActivityCourseSearch.this, ActivitySearchResult.class);
                searchIntent.putExtra("result", search);
                startActivity(searchIntent);
            }

        }
        else{
            Toast.makeText(this,"Nothing found with " + courseTitle,Toast.LENGTH_LONG).show();
        }
    }

    private void chkCourse(String courseTitle){

         for(int i = 0 ; i < CourseController.allCourseList.size(); i++){
            CourseList search = CourseController.allCourseList.get(i);
            if(search.getCourse_title().toLowerCase().contains(courseTitle.toLowerCase())){
                Intent searchIntent = new Intent(ActivityCourseSearch.this, ActivitySearchResult.class);
                searchIntent.putExtra ("result",search);
                startActivity(searchIntent);
                break;
            }
            else{
                Toast.makeText(this,"Nothing found with " + courseTitle,Toast.LENGTH_LONG).show();
            }
        }
    }

}
