package com.skilledup.skilledup;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.BoolRes;
import android.support.annotation.Nullable;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import com.skilledup.skilledup.backend.Api;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.database.DatabaseController;
import com.skilledup.skilledup.database.DatabaseHelper;
import com.skilledup.skilledup.model.User;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 3/1/2017.
 */

public class ActivityForgotPassword extends AppCompatActivity {

    TextInputLayout recoveryEmail;
    Button resetButton;
    ImageView backImage;

    private static final String EMAIL_PATTERN = "^[a-zA-Z0-9#_~!$&'()*+,;=:.\"(),:;<>@\\[\\]\\\\]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*$";
    private Pattern pattern = Pattern.compile(EMAIL_PATTERN);
    private Matcher matcher;
    private boolean apiResult;


    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);

        toolbar();

        recoveryEmail = (TextInputLayout) findViewById(R.id.recovery_email_rapper);
        resetButton = (Button) findViewById(R.id.reset_btn);
        backImage = (ImageView) findViewById(R.id.ima_back);


        resetButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                onReset(view);
            }
        });
        backImage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                back();
            }
        });
    }

  public void onReset(View view){
      String email = recoveryEmail.getEditText().getText().toString();
      if(!validateEmail(email)) {
          recoveryEmail.setError("Please input a valid email address");
      }else{
          checkDatabase(email);
          //checkApi(email);
      }
  }


  public boolean validateEmail(String email){
      matcher = pattern.matcher(email);
      return  matcher.matches();
  }

  public void checkDatabase(String emailAddress){
      UserController controller = new UserController(User.USER_TABLE);
      //DatabaseHelper databaseHelper = DatabaseController.getDatabaseHelper();
      //databaseHelper.onCreate(controller.db);

      String whereClause = String.format("%s = '%s'", User.COL_EMAIL, emailAddress);
      if(controller.exist(whereClause)){
          UserController.user = controller.searchUser(whereClause);
          //Toast.makeText(this, "A Verification code has been sent to :  " + emailAddress, Toast.LENGTH_SHORT).show();
          Intent i = new Intent(ActivityForgotPassword.this, ActivityVerfication.class);
          startActivity(i);
          //startActivityForResult(i, RESULT_OK);
      } else {
          Toast.makeText(this, "No record found with : "  + emailAddress, Toast.LENGTH_LONG).show();
      }

  }

  public boolean checkApi(final String emailAddress){

      final ProgressDialog progressDialog = new ProgressDialog(this);
      progressDialog.setMessage("Checking in . . . .");
      boolean result;

      AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {

          @Override
          protected void onPreExecute() {
              super.onPreExecute();
              progressDialog.show();
          }

          @Override
          protected Boolean doInBackground(Void... voids) {
              return Api.forgotPassword(emailAddress);
          }

          @Override
          protected void onPostExecute(Boolean aBoolean) {
              super.onPostExecute(aBoolean);
              progressDialog.dismiss();
              apiResult = aBoolean;
          }
      };

      return apiResult;
  }


    public void toolbar(){
        Toolbar toolbar_reset = (Toolbar) findViewById(R.id.reset_toolbar);
        setSupportActionBar(toolbar_reset);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        toolbar_reset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                back();
            }
        });
    }

    public void back(){
        Intent i = new Intent(this, ActivitySignIn.class);
        startActivity(i);
        finish();
    }
}
