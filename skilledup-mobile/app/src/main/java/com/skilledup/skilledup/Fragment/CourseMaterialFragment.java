package com.skilledup.skilledup.Fragment;

import android.content.ClipData;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.skilledup.skilledup.ActivityPdfView;
import com.skilledup.skilledup.ActivityVideoPlayer;
import com.skilledup.skilledup.ActvityCardView;
import com.skilledup.skilledup.R;
import com.skilledup.skilledup.adapter.RecyclerAdapter;
import com.skilledup.skilledup.adapter.RecyclerTouchListener;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.model.Course;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 3/30/2017.
 */

public class CourseMaterialFragment extends Fragment {

    private RecyclerView.Adapter adapter;
    private ArrayList<CourseList> listitem;
    private String[] folderOption = {"documents","videos","audios"};
    private View root;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        root = inflater.inflate(R.layout.recycler_view, container, false);
        return root;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        final RecyclerView recyclerView = (RecyclerView) root.findViewById(R.id.my_recycler_view);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
        /*listitem = new ArrayList<>();

        for(int i=0; i<10; i++){
            Course course = new Course(
                    "Title for course" + (i+1),
                    "Desc for course" + (i+1),
                    "Added " + (i+1) + "Hours",
                    "Chapter" + (i+1),
                    "FndG7vyxPWc"
            );
            listitem.add(course);
        }*/
        adapter = new RecyclerAdapter(getContext(), CourseController.myCourse);
        recyclerView.setAdapter(adapter);

        recyclerView.addOnItemTouchListener(new RecyclerTouchListener(getContext(), recyclerView, new RecyclerTouchListener.ClickListener() {
            @Override
            public void onClick(View view, int position) {
                //Movie movie = movieList.get(position);
                CourseList list = CourseController.myCourse.get(position) ;// .get get(position)
               //if(list.course_material.equals("Video")){

                    Intent videoIntent = new Intent(getContext(), ActivityVideoPlayer.class);
                    //Toast.makeText(getContext(), "Video ID Before : " + list.getCourse_link(), Toast.LENGTH_LONG).show();
                    videoIntent.putExtra("video_id", list);
                    startActivity(videoIntent);
                   adapter.notifyDataSetChanged();
               // }
                /*else if(list.course_material.equals("Pdf")){
                    Intent pdfIntent = new Intent(getContext(), ActivityPdfView.class);
                    pdfIntent.putExtra("file_name",list);
                    startActivity(pdfIntent);
                   adapter.notifyDataSetChanged();

               }*/
               // else
               //     Toast.makeText(getContext(), "Got Nothing Man !! ", Toast.LENGTH_LONG).show();

            }

            @Override
            public void onLongClick(View view, int position) {

            }
        }));

    }
}
