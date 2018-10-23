package com.skilledup.skilledup.adapter;

import android.app.Activity;
import android.support.annotation.NonNull;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.MyCourseActivity;
import com.skilledup.skilledup.R;
import com.skilledup.skilledup.model.CourseList;

import java.util.ArrayList;

/**
 * Created by User on 3/17/2017.
 */

public class MyCourseAdapter  extends ArrayAdapter<CourseList>{

    private ArrayList<CourseList> courseLists = new ArrayList<>();
    private Activity activity;
    private int STATUS = 0;

    public MyCourseAdapter(Activity activity, ArrayList<CourseList> course, int status) {
        super(activity, R.layout.my_course_list_custome, course);

        this.activity = activity;
        this.courseLists = course;
        this.STATUS = status;
    }

    private static class ViewHolder {
        TextView courseTitle;
        TextView courseDesc;
        ImageView courseIcon;
    }

    @NonNull
    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        /* Get the allCourseList object for this position or index */
        CourseList courseList = getItem(position);
        ViewHolder viewHolder;

        if (convertView == null){
            /* There is no view to re-use. Now we need to inflate a new view for this view. */
            viewHolder = new ViewHolder();
            LayoutInflater inflater = LayoutInflater.from(getContext());
            convertView = inflater.inflate(R.layout.my_course_list_custome, parent, false);

            /* Instantiate all the view holder views */
            viewHolder.courseTitle = (TextView) convertView.findViewById(R.id.my_course_title);
            viewHolder.courseDesc = (TextView) convertView.findViewById(R.id.my_course_desc);
            viewHolder.courseIcon = (ImageView) convertView.findViewById(R.id.my_course_icon);
            /* Bind the Profiles_project object to the icon TextView */
            viewHolder.courseIcon.setTag(courseList);
            /* Create the click event handler for the icon TextView */
            /*viewHolder.courseIcon.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    CourseList p = (CourseList) view.getTag();
                    listener.onProjectSelected(p);
                    //Toast.makeText(activity, "Are you sure you want to view details of this view: " + p.course_title + "?", Toast.LENGTH_SHORT).show();
                }
            });*/
            /* Add the view holder to the cache, so that we will not need to re-initialize it for every row within the list view */
            convertView.setTag(viewHolder);
        }
        else{
            /* We are recycling the view, so we are just retrieving it from the tag we saved initially */
            viewHolder = (ViewHolder) convertView.getTag();
        }

        /* Now we have the view holder, it's time to set the data from the current Profile_projects object above */
        viewHolder.courseTitle.setText(courseList.getCourse_title());

           // viewHolder.courseDesc.setText(courseList.getCourse_duration());
            String subString = courseList.getCourse_desc().substring(0,100);
            viewHolder.courseDesc.setText(subString + " . . . .");

        /* We always have to return the completed View here */
        return convertView;
    }

    public interface OnProjectSelectedListener {
        void onProjectSelected(CourseList p);
    }

    private OnProjectSelectedListener listener;

    public void setListener(OnProjectSelectedListener listener) {
        this.listener = listener;
    }

}
