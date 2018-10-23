package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

/**
 * Created by User on 3/4/2017.
 */

public class ActivityWelcome extends AppCompatActivity {

    Button signUpButton;
    Button signInButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);

        signInButton = (Button) findViewById(R.id.sign_in_btn);
        signUpButton = (Button) findViewById(R.id.sign_up_btn);

        signInButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                signIn();
            }
        });

        signUpButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                signUp();
            }
        });
    }

    public void signIn(){
        Intent i = new Intent(this, ActivitySignIn.class);
        startActivity(i);
        finish();

    }

    public void signUp(){
        Intent i = new Intent(this, ActivitySignUp.class);
        startActivity(i);
        finish();
    }
}
