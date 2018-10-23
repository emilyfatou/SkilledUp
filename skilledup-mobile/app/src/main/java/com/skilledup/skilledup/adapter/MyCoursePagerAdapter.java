package com.skilledup.skilledup.adapter;

import android.content.Context;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;

/**
 * Created by User on 3/29/2017.
 */

public class MyCoursePagerAdapter extends FragmentPagerAdapter {
    private Context context;
    private Fragment[] screens;

    public MyCoursePagerAdapter(FragmentManager fm, Context context, Fragment... screens) {
        super(fm);
        this.context = context;
        this.screens = screens;
    }


    @Override
    public Fragment getItem(int position) {
        return screens[position];
    }


    @Override
    public int getCount() {
        return screens.length;
    }

    @Override
    public CharSequence getPageTitle(int position) {
        switch (position) {
            case 0:

                return "Material";
            case 1:

                return "Exam";
            case 2:

                return "Assignment";
        }
        return null;
    }
}
