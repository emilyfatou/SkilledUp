package com.skilledup.skilledup.Fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.skilledup.skilledup.R;
import com.skilledup.skilledup.adapter.RecyclerAdapter;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.model.Course;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 2/27/2017.
 */

public class SentFragment extends Fragment {

    private RecyclerView.Adapter adapter;
    private List<Course> listitem;
    private String[] folderOption = {"documents","videos","audios"};
    View root2;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        root2 = inflater.inflate(R.layout.recycler_view, container , false);
        return root2;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        final RecyclerView recyclerView = (RecyclerView) root2.findViewById(R.id.my_recycler_view);
        recyclerView.setHasFixedSize(true);
        recyclerView.setLayoutManager(new LinearLayoutManager(getContext()));
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
        adapter = new RecyclerAdapter(getContext(), CourseController.myCourse);
        recyclerView.setAdapter(adapter);
        recyclerView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getActivity(),"Brrrrrrrrrr",Toast.LENGTH_LONG).show();
            }
        });
    }
}
