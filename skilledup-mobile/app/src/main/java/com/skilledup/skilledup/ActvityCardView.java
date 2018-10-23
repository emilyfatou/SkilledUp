package com.skilledup.skilledup;

import android.content.Context;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.skilledup.skilledup.adapter.RecyclerAdapter;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.model.Course;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 4/14/2017.
 */

public class ActvityCardView extends AppCompatActivity {

    private RecyclerView.Adapter adapter;
    private List<Course> listitem;
    private String[] folderOption = {"documents","videos","audios"};

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.recycler_view);


        createFolders(folderOption, getApplicationContext());

        /*String appPath =  getApplicationInfo().dataDir;
        File myFolders = new File(getFilesDir() +  "/MyFolder");
        if(!myFolders.exists()){
            myFolders.mkdirs();
        }

        Context context = getApplicationContext();
        File folders = context.getDir("documents", context.MODE_PRIVATE);

        if(folders.exists()){
            String tt = folders.getAbsolutePath();
            Toast.makeText(this, "Exist" + tt, Toast.LENGTH_LONG).show();
        }
        else {
            Toast.makeText(this, "Not Exist", Toast.LENGTH_LONG).show();
        }

        File videofolders = context.getDir("videos", context.MODE_PRIVATE);

        if(videofolders.exists()){
            String ttt = videofolders.getAbsolutePath();
            Toast.makeText(this, "Exist" + ttt, Toast.LENGTH_LONG).show();
        }
        else {
            Toast.makeText(this, "Not Exist", Toast.LENGTH_LONG).show();
        }
        Toast.makeText(this, appPath, Toast.LENGTH_LONG).show();*/



        final RecyclerView recyclerView = (RecyclerView) findViewById(R.id.my_recycler_view);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(this));
        listitem = new ArrayList<>();

        for(int i=0; i<10; i++){
            Course course = new Course(
                    "Title for course" + (i+1),
                    "Desc for course" + (i+1),
                    "Added " + (i+1) + "Hours",
                    "Chapter" + (i+1),
                    "FndG7vyxPWc"
            );
            listitem.add(course);
        }
        adapter = new RecyclerAdapter(this, CourseController.myCourse);
        recyclerView.setAdapter(adapter);
        recyclerView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(ActvityCardView.this,"Brrrrrrrrrr",Toast.LENGTH_LONG).show();
            }
        });
    }

    public void createFolders(String []folderNames, Context context){

        for(int i = 0 ; i < folderNames.length; i++){
            File folders = context.getDir(folderNames[i], context.MODE_PRIVATE);
            if(folders.exists())
                d(folders.getAbsolutePath());
            else
                Toast.makeText(this,"Brrrrrrrrrr",Toast.LENGTH_LONG).show();
        }

    }

    public void d(String message){
        Log.d("Creating folder ",message);
    }
}
