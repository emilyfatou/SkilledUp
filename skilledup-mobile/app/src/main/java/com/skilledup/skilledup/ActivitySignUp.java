package com.skilledup.skilledup;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.adapter.ExamAdapter;
import com.skilledup.skilledup.backend.Api;
import com.skilledup.skilledup.controller.ProfilerController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.model.Profile;
import com.skilledup.skilledup.model.User;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 3/4/2017.
 */

public class ActivitySignUp extends AppCompatActivity {

    private static final String EMAIL_PATTERN = "^[a-zA-Z0-9#_~!$&'()*+,;=:.\"(),:;<>@\\[\\]\\\\]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*$";
    private Pattern pattern = Pattern.compile(EMAIL_PATTERN);
    private Matcher matcher;
    TextInputLayout emailWrapper ;
    TextInputLayout passwordWrapper ;
    TextInputLayout confirmPassWrapper;
    TextInputLayout firstNameWrapper ;
    TextInputLayout lastNameWrapper ;
    TextView alreaduMember;
    Button getStarted;
    Spinner country, city, education;
    CheckBox checkBox;
    private boolean API_RESULT = false;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_up);

        firstNameWrapper = (TextInputLayout) findViewById(R.id.first_name_rapper);
        lastNameWrapper = (TextInputLayout) findViewById(R.id.last_name_rapper);
        emailWrapper = (TextInputLayout) findViewById(R.id.email_rapper);
        passwordWrapper = (TextInputLayout) findViewById(R.id.pass_rapper);
        confirmPassWrapper = (TextInputLayout) findViewById(R.id.confirm_pass_rapper);
        getStarted = (Button) findViewById(R.id.signup_button);
        alreaduMember = (TextView) findViewById(R.id.already_member);
        country = (Spinner) findViewById(R.id.reg_country);
        city = (Spinner) findViewById(R.id.reg_city);
        education = (Spinner) findViewById(R.id.reg_education);
        checkBox = (CheckBox) findViewById(R.id.checkbox_reg);


        firstNameWrapper.setHint("First Name");
        lastNameWrapper.setHint("Last Name");
        emailWrapper.setHint("Email address");
        passwordWrapper.setHint("Password");
        confirmPassWrapper.setHint("Confirm password");

        getStarted.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                signUp(view);
            }
        });

        alreaduMember.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(ActivitySignUp.this, ActivitySignIn.class);
                startActivity(i);
                finish();
            }
        });
    }
    public boolean validateEmail(String email) {
        matcher = pattern.matcher(email);
        return  matcher.matches();
    }
    public boolean passwordMatch(String password, String passConfirm){

        return password == passConfirm;
    }
    public void signUp(View view){

        String fName = firstNameWrapper.getEditText().getText().toString();
        String lName = lastNameWrapper.getEditText().getText().toString();
        String email = emailWrapper.getEditText().getText().toString();
        String pass = passwordWrapper.getEditText().getText().toString();
        String cPass = confirmPassWrapper.getEditText().getText().toString();
        int countryPos = country.getSelectedItemPosition();
        int cityPos = city.getSelectedItemPosition();
        int eduPos = education.getSelectedItemPosition();

        if(fName.isEmpty())
            firstNameWrapper.setError("Pleas input first name");
        else
            firstNameWrapper.setErrorEnabled(false);
        if(lName.isEmpty())
            lastNameWrapper.setError("Please input last name");
        else
            lastNameWrapper.setErrorEnabled(false);
        if(!validateEmail(email))
            emailWrapper.setError("Please input valid email address");
        else
            emailWrapper.setErrorEnabled(false);
        if(pass.isEmpty())
            passwordWrapper.setError("Please input password");
        else
            passwordWrapper.setErrorEnabled(false);
        if(cPass.isEmpty())
            confirmPassWrapper.setError("Please confirm password");
        else
            confirmPassWrapper.setErrorEnabled(false);
        if(!pass.equals(cPass))
            //Toast.makeText(this,"Pass = " + pass + "Cpass = " + cPass,Toast.LENGTH_LONG).show();
            passwordWrapper.setError("Password does not much");
        else
            passwordWrapper.setErrorEnabled(false);

      if(checkBox.isChecked()){
          if((!fName.isEmpty()) && (!lName.isEmpty()) && (!pass.isEmpty()) && (countryPos > 0) && (cityPos > 0) & (eduPos >0)){
             //dbRegister(fName, lName, email, pass, country.getSelectedItem().toString(), city.getSelectedItem().toString(), education.getSelectedItem().toString());
              apiRegister(fName, lName, email, pass);
          }else {
              Toast.makeText(this, "Please, fill out all information's", Toast.LENGTH_LONG).show();
          }
      }
      else {
          Toast.makeText(this, "Please, agree to the term and condition of skilled up!", Toast.LENGTH_LONG).show();
      }
    }
    public void dbRegister(String first_name, String last_name, String email_address, String password, String userCountry, String userCity, String userEducation){

        UserController userController = new UserController(User.USER_TABLE);
        ProfilerController profilerController = new ProfilerController(Profile.PROFILE_TABLE);
        //DatabaseHelper databaseHelper = DatabaseController.getDatabaseHelper();
        //databaseHelper.onCreate(userController.db);

        String whereClause = String.format("%s = '%s'", User.COL_EMAIL, email_address);
        if(userController.exist(whereClause)){
            Toast.makeText(this, "User Already Exist !!", Toast.LENGTH_LONG).show();
        }
        else {
            User u = new User();
            Profile p = new Profile();
            p.first_name = first_name;
            p.last_name = last_name;
            u.email = email_address;
            //u.password = password;
            p.country = userCountry;
            //u.city = userCity;
            p.education = userEducation;

            //boolean result  = userController.save(u);
            if (userController.save(u) && profilerController.save(p)){
                //Toast.makeText(this, whereClause + "Registration Successful. Please Login to start",Toast.LENGTH_LONG).show();
                Intent i = new Intent(ActivitySignUp.this, ActivitySignIn.class);
                startActivity(i);
                finish();
            }

        }
    }
    private void apiRegister(final String fname, final String lname, final String email, final String pass){

        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("User Registration . . . .");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected Boolean doInBackground(Void... voids) {
                return Api.register(fname, lname, email, pass);
            }

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                progressDialog.show();
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);
                progressDialog.dismiss();
                if(aBoolean){
                    Intent i = new Intent(ActivitySignUp.this, ActivitySignIn.class);
                    startActivity(i);
                    finish();
                }
                else {
                    Toast.makeText(ActivitySignUp.this, "Registration Failed !!", Toast.LENGTH_LONG).show();
                }
            }
        };
        asyncTask.execute();
    }
}
