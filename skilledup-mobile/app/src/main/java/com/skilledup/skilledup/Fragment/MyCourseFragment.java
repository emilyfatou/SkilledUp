package com.skilledup.skilledup.Fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import com.skilledup.skilledup.R;

/**
 * Created by User on 3/17/2017.
 */

public class MyCourseFragment extends android.support.v4.app.Fragment {

    View root;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, Bundle savedInstanceState) {
        root = inflater.inflate(R.layout.exam_list_view, container, false);
        return root;
    }
}
