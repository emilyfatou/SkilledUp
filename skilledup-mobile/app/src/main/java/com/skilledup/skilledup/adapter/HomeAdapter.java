package com.skilledup.skilledup.adapter;

import android.app.Activity;
import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.R;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;

/**
 * Created by User on 3/8/2017.
 */

public class HomeAdapter extends ArrayAdapter<CourseList> {

    private ArrayList<CourseList>my_course;
    private Activity activity;

    public HomeAdapter(Activity activity, ArrayList<CourseList>course) {
        super(activity, R.layout.activity_new_course_list ,course);
        this.my_course = course;
        this.activity = activity;
    }

     public static class ViewHolder{
         ImageView book_img;
         TextView title;
         //ImageView add_img;
    }

    @NonNull
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        CourseList singleItem = getItem(position);
        ViewHolder viewHolder;

        if(convertView == null){

            viewHolder = new ViewHolder();
            LayoutInflater layoutInflater =  LayoutInflater.from(getContext());
            convertView = layoutInflater.inflate(R.layout.activity_new_course_list, parent, false);


            viewHolder.book_img = (ImageView) convertView.findViewById(R.id.new_course_first_img);
            viewHolder.title = (TextView) convertView.findViewById(R.id.new_course_title);
            //viewHolder.book_img = (ImageView) convertView.findViewById(R.id.new_course_img);

            convertView.setTag(viewHolder);

           /* viewHolder.add_img.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    Toast.makeText(getContext(), "You tried to add this couese ", Toast.LENGTH_LONG).show();
                }
            });*/

        }else{
            viewHolder = (ViewHolder) convertView.getTag();
        }

        viewHolder.title.setText(singleItem.getCourse_title());

        return convertView;
    }
}
