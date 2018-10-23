package com.skilledup.skilledup.Fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import com.skilledup.skilledup.R;
import com.skilledup.skilledup.adapter.HomeAdapter;

/**
 * Created by User on 4/10/2017.
 */

public class SearchResultFragment extends Fragment {

    SearchCourseFragment myCourseFragment;
    View root;
    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        return root =  inflater.inflate(R.layout.activity_search_result, container, false); //, container, savedInstanceState);
    }
}
