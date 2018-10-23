package com.skilledup.skilledup;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.design.widget.TextInputLayout;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.backend.Api;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.controller.ProfilerController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.database.DatabaseController;
import com.skilledup.skilledup.database.DatabaseHelper;
import com.skilledup.skilledup.model.CourseList;
import com.skilledup.skilledup.model.User;
import com.skilledup.skilledup.utils.Prefs;

import java.util.regex.Pattern;
import java.util.regex.Matcher;


/**
 * Created by User on 2/28/2017.
 */

public class ActivitySignIn extends AppCompatActivity{

    TextInputLayout emailWrapper ;
    TextInputLayout passwordWrapper ;
    TextView forgotPassword;
    TextView signUp;
    private static final String EMAIL_PATTERN = "^[a-zA-Z0-9#_~!$&'()*+,;=:.\"(),:;<>@\\[\\]\\\\]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*$";
    private Pattern pattern = Pattern.compile(EMAIL_PATTERN);
    private Matcher matcher;

    private boolean API_RESULT ;
    //public static String API_ERROR = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sign_in);

        emailWrapper = (TextInputLayout) findViewById(R.id.email_address_rapper);
        passwordWrapper = (TextInputLayout) findViewById(R.id.password_rapper);
        forgotPassword = (TextView) findViewById(R.id.sign_in_forgot_pass);
        signUp = (TextView) findViewById(R.id.text_sign_up);

        emailWrapper.setHint("Email address");
        passwordWrapper.setHint("Password");

        Button btnSignIn = (Button) findViewById(R.id.btn_sign_in);
        btnSignIn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //doLogin();
                onSignIn(view);
            }
        });

         forgotPassword.setOnClickListener(new View.OnClickListener() {
             @Override
             public void onClick(View view) {
                 onForgotPassword(view);
             }
         });

        signUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                newSignUp(view);
            }
        });

    }

    public void newSignUp(View view){
        Intent i = new Intent(this, ActivitySignUp.class);
        startActivity(i);
    }

    public boolean validateEmail(String email) {
        matcher = pattern.matcher(email);
        return  matcher.matches();
    }

    public boolean validatePassword(String password) {
        return password.length() > 0;
    }

    public void onForgotPassword(View view){
        //Toast.makeText(getApplicationContext(), "Forgot Password Clicked", Toast.LENGTH_LONG).show();
        Intent forgot = new Intent(this, ActivityForgotPassword.class);
        startActivity(forgot);
    }
    public void onSignIn(View view) {

        String email = emailWrapper.getEditText().getText().toString();
        String password = passwordWrapper.getEditText().getText().toString();
        if (!validateEmail(email)) {
            emailWrapper.setError("Please enter a valid email address!");
        }
        else if (!validatePassword(password)) {
            passwordWrapper.setError("please input password!");
        }
        else {
            emailWrapper.setErrorEnabled(false);
            passwordWrapper.setErrorEnabled(false);
            //doLogin();
            doApiLogIn(email, password);
           //doDatabaseLogin(email, password);
        }
    }

    public boolean doDatabaseLogin(String email_address, String  password) {

        /*UserController userController = new UserController(User.USER_TABLE);
       // DatabaseHelper databaseHelper = DatabaseController.getDatabaseHelper();
       // databaseHelper.onCreate(userController.db);

        //String prefEmail = prefs.getEmail("email");

        String whereClause = String.format("%s = '%s'", User.COL_EMAIL, email_address);
        if(userController.exist(whereClause)){
            User u = userController.searchUser(whereClause);


            if(!password.equals(u.password)){

                passwordWrapper.setError("Incorrect Password");
                passwordWrapper.setErrorEnabled(true);
                //password.setError("Incorrect Password");
                return false;
            }
            else
            {
                Prefs prefs = new Prefs(this);
                prefs.setBoolean(Prefs.LOGIN_PREF,true);
                prefs.setEmail(Prefs.EMAIL, email_address);
                UserController.user = u;
              //  Toast.makeText(this, "User Id : " + prefs.getEmail(Prefs.EMAIL), Toast.LENGTH_LONG).show();
                Intent in = new Intent(this, ActivityDashboard.class);
                startActivity(in);
            }
        }
        else {
            Toast.makeText(this, "No record found with your email address", Toast.LENGTH_LONG).show();
            return false;
        }
*/
        return true;
    }
    public void doApiLogIn(final String uEmail, final String uPass){

        final ProgressDialog progressDialog = new ProgressDialog(this);
        progressDialog.setMessage("Logging in . . . .");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>(){

            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                progressDialog.show();
            }

            @Override
            protected Boolean doInBackground(Void... params) {
                return  Api.login(uEmail, uPass);
            }

            @Override
            protected void onPostExecute(Boolean aBoolean) {
                super.onPostExecute(aBoolean);
                progressDialog.dismiss();
                if(aBoolean){

                    Prefs prefs = new Prefs(ActivitySignIn.this);
                    prefs.setBoolean(Prefs.LOGIN_PREF,true);
                    prefs.setEmail(Prefs.EMAIL, UserController.user.getEmail());
                    prefs.setProfileId(Prefs.PROFILE_ID, ProfilerController.profile.getProfile_id());
                    //Toast.makeText(this, "User Id : " + prefs.getEmail(Prefs.EMAIL), Toast.LENGTH_LONG).show();
                    Intent in = new Intent(ActivitySignIn.this, ActivityDashboard.class);
                    startActivity(in);
                    finish();
                }
                else {
                    Toast.makeText(ActivitySignIn.this, "Invalid email or password. Login Failed !!", Toast.LENGTH_LONG).show();
                }
            }
        };
        asyncTask.execute();
    }

    private void doLogin(){

    }
}
