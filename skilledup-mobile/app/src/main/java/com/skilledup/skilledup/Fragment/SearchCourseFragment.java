package com.skilledup.skilledup.Fragment;

import android.app.Fragment;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;

import com.skilledup.skilledup.R;

/**
 * Created by User on 3/20/2017.
 */

public class SearchCourseFragment extends android.support.v4.app.Fragment{

    View root;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {

        root = inflater.inflate(R.layout.my_course_open_fragment,container, false);
        return root;
    }


}
