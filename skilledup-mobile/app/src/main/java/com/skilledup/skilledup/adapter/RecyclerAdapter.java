package com.skilledup.skilledup.adapter;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.SearchView;
import android.view.GestureDetector;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.R;
import com.skilledup.skilledup.model.Course;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by User on 4/14/2017.
 */

public class RecyclerAdapter extends RecyclerView.Adapter<RecyclerAdapter.ViewHolder>{

    Context context;
    //List<Course> courseList;
    ArrayList<CourseList> courseList;

    public RecyclerAdapter(Context context, ArrayList<CourseList> courseList) {
        this.context = context;
        this.courseList = courseList;
    }
    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.card_view, parent, false);
        //view.setOnClickListener(this);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        CourseList list = courseList.get(position);

        holder.title.setText(list.getCourse_title());
        //holder.desc.setText(list.getCourse_desc());
        holder.time.setText(list.getCourse_duration());
        holder.chapter.setText(list.getCourse_code());
    }

    @Override
    public int getItemCount() {
        return courseList.size();
    }


    public class ViewHolder extends RecyclerView.ViewHolder {

        public TextView title;
        public TextView desc;
        public TextView time;
        public TextView chapter;

        public ViewHolder(View itemView) {
            super(itemView);

            title = (TextView) itemView.findViewById(R.id.card_title);
            desc = (TextView) itemView.findViewById(R.id.card_desc);
            time = (TextView) itemView.findViewById(R.id.card_time);
            chapter= (TextView) itemView.findViewById(R.id.card_chapter);
        }
    }
}
