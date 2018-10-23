package com.skilledup.skilledup;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

/**
 * Created by User on 3/16/2017.
 */

public class ActivityForum extends AppCompatActivity{
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_comingsoon);

        initToolbar();
    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.forum_toolbar_coming);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_profile = (ImageView) findViewById(R.id.ima_back_forum_coming);
        bak_image_profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityForum.this, ActivityDashboard.class);
                startActivity(i);
                finish();
            }
        });
    }

}
