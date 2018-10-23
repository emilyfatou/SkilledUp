package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.model.User;

/**
 * Created by User on 3/13/2017.
 */

public class ActivityVerfication extends AppCompatActivity {

    TextInputLayout newPass, conPass;
    Button btnReset;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.pin_verification);
        initToolbar();
        findViewById(R.id.reset_btn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                resetPassword();
            }
        });
    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.pin_verify_toolbar);
        setSupportActionBar(tlb);
        //tlb.setNavigationIcon(R.drawable.ic_arrow_back_white_24dp);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        tlb.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivityVerfication.this, ActivityForgotPassword.class);
                startActivity(i);
            }

        });
    }
    private void resetPassword(){
        newPass = (TextInputLayout) findViewById(R.id.reset_pass_rapper);
        conPass = (TextInputLayout) findViewById(R.id.reset_pass_conf_rapper);

        newPass.setHint("New password");
        conPass.setHint("Conform password");

        String password = newPass.getEditText().getText().toString();
        String conPassword = conPass.getEditText().getText().toString();
        if(password.isEmpty()){
           newPass.setError("Please type password");
        }
        if(conPassword.isEmpty()){
            conPass.setError("Please confirm password");
        }
        if(!password.equals(conPassword)){
            newPass.setError("Password does not match");
        }
        if((!password.isEmpty()) && (!conPassword.isEmpty()) && (password.equals(conPassword))){
            changePasswordDatabase(password);
        }
    }
    private void changePasswordDatabase(String changePass){
        UserController passController = new UserController(User.USER_TABLE);
        String whereClause = String.format("%s = '%s'", User.COL_EMAIL, UserController.user.getEmail());

        /*UserController.user.setPassword(changePass);
        if(passController.save(UserController.user)) {
            Toast.makeText(this, "password change succesfull", Toast.LENGTH_LONG).show();
            UserController.user = passController.searchUser(whereClause);

            Intent i = new Intent(ActivityVerfication.this, ActivitySignIn.class);
            startActivity(i);
            finish();
        }*/
    }
}
