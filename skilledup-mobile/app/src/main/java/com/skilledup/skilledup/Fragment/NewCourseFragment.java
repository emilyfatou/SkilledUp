package com.skilledup.skilledup.Fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.skilledup.skilledup.R;

/**
 * Created by User on 3/6/2017.
 */

public class NewCourseFragment extends Fragment {
    View root5;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        root5 = inflater.inflate(R.layout.activity_search, container , false);
        return root5;
    }
}
