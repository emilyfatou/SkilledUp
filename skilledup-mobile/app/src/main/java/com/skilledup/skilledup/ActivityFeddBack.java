package com.skilledup.skilledup;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.controller.UserController;

/**
 * Created by User on 5/1/2017.
 */

public class ActivityFeddBack extends AppCompatActivity {

    EditText feedbackMsg;
    TextView feedbackUser;
    Button sendFeedback;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_fedback);

        initToolbar();
        feedbackUser = (TextView) findViewById(R.id.user_feedback);
       // feedbackUser.setText(UserController.user.getFirst_name() + " " + UserController.user.getLast_name());
      //  feedbackUser.setTextSize(18);
        feedbackMsg = (EditText) findViewById(R.id.feedback_message);
        feedbackUser.setEnabled(false);
        findViewById(R.id.feedback_send).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(!feedbackMsg.getText().toString().isEmpty()){
                    onFeedback();
                }else{
                    Toast.makeText(ActivityFeddBack.this,"Please fill out your feedback", Toast.LENGTH_LONG).show();
                }
            }
        });


    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.feedback_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_profile = (ImageView) findViewById(R.id.ima_back_feedback);
        bak_image_profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityFeddBack.this, ActivityDashboard.class);
                startActivity(i);
                finish();
            }
        });
    }

    private void onFeedback(){
        Toast.makeText(this,"Thank you for your feedback !!", Toast.LENGTH_LONG).show();
        Intent i = new Intent(ActivityFeddBack.this, ActivityDashboard.class);
        startActivity(i);
        finish();
    }

}
