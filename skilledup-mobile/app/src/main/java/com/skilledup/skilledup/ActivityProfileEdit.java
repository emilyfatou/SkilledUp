package com.skilledup.skilledup;

import android.Manifest;
import android.annotation.TargetApi;
import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.backend.Api;
import com.skilledup.skilledup.controller.ProfilerController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.database.DatabaseController;
import com.skilledup.skilledup.database.DatabaseHelper;
import com.skilledup.skilledup.model.Profile;
import com.skilledup.skilledup.model.User;
import com.skilledup.skilledup.utils.Utility;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by User on 4/22/2017.
 */

public class ActivityProfileEdit extends AppCompatActivity {


    private static final String EMAIL_PATTERN = "^[a-zA-Z0-9#_~!$&'()*+,;=:.\"(),:;<>@\\[\\]\\\\]+@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*$";
    private Pattern pattern = Pattern.compile(EMAIL_PATTERN);
    private Matcher matcher;
    private ImageView editDone;
    private ImageView editCancel;
    private ImageView userProfile;
    EditText f_name, l_name, email, password, c_pass;
    Spinner country,city,education;
    //TextView changePic;
    private boolean apiResult;
    private String userChoosenTask;
    private int REQUEST_CAMERA = 0, SELECT_FILE = 1;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edit_profile);

        editDone = (ImageView) findViewById(R.id.edit_done);
        editCancel = (ImageView) findViewById(R.id.edit_cancel);
        userProfile = (ImageView) findViewById(R.id.user_profile_image);
        f_name = (EditText) findViewById(R.id.f_name_edit);
        l_name = (EditText) findViewById(R.id.l_name_edit);
        email = (EditText) findViewById(R.id.email_edit);
        password = (EditText) findViewById(R.id.pass_edit);
        c_pass = (EditText) findViewById(R.id.c_pass_edit);
        country = (Spinner) findViewById(R.id.country_edit);
        city = (Spinner) findViewById(R.id.city_edit);
        education = (Spinner) findViewById(R.id.education_edit);


        findViewById(R.id.take_pic).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                changePicture();
            }
        });

        editCancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                editCancel();
            }
        });

        editDone.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                editDone();
            }
        });
    }

    public void chkUpdate(){
       // Toast.makeText(this, "Editing done. Saving to db", Toast.LENGTH_LONG).show();
        String fName = f_name.getText().toString().trim();
        String lName = l_name.getText().toString().trim();
        String newEmail = email.getText().toString().trim();
        String pass =  password.getText().toString();
        String confirmPass =  c_pass.getText().toString();
        String countryVal = country.getSelectedItem().toString();
        String cityVal = city.getSelectedItem().toString();
        String educationVal = education.getSelectedItem().toString();
        Toast.makeText(this, "Values" + fName + lName + newEmail + pass, Toast.LENGTH_LONG).show();
        updateDatabase(fName, lName, newEmail, pass, countryVal, cityVal, educationVal);
    }

    private void editDone(){

        String fName = f_name.getText().toString().trim();
        String lName = l_name.getText().toString().trim();
        String newEmail = email.getText().toString().trim();
        String pass =  password.getText().toString();
        String confirmPass =  c_pass.getText().toString();
        int countryPos = country.getSelectedItemPosition();
        int cityPos = city.getSelectedItemPosition();
        int eduPos = education.getSelectedItemPosition();

        if((!fName.isEmpty()) && (!lName.isEmpty()) && (!pass.isEmpty()) && (countryPos > 0) && (cityPos > 0) & (eduPos >0) &&(pass == confirmPass)){
            //updateDatabase(fName, lName, email, pass, country.getSelectedItem().toString(), city.getSelectedItem().toString(), education.getSelectedItem().toString());
        }else {
            Toast.makeText(this, "Please, fill out all information's", Toast.LENGTH_LONG).show();
        }
    }

    private void editDoneApi(){
        String fName = f_name.getText().toString().trim();
        String lName = l_name.getText().toString().trim();
        String newEmail = email.getText().toString().trim();
        int countryPos = country.getSelectedItemPosition();
        int eduPos = education.getSelectedItemPosition();

        if((!fName.isEmpty()) && (!lName.isEmpty())  && (countryPos > 0) && (!newEmail.isEmpty()) &&  (eduPos >0) ){
            //Update through the Api
            updateApi(fName, lName, newEmail, country.getSelectedItem().toString(), education.getSelectedItem().toString());
        }else {
            Toast.makeText(this, "Please, fill out all information's", Toast.LENGTH_LONG).show();
        }
    }
    public void editCancel(){
        Intent i = new Intent(ActivityProfileEdit.this, ActivityProfile.class);
        startActivity(i);
        finish();
    }

    private void changePicture(){
        final CharSequence[] items = { "Take Photo", "Choose from Library",
                "Cancel" };
        AlertDialog.Builder builder = new AlertDialog.Builder(ActivityProfileEdit.this);
        builder.setTitle("Add Photo!");
        builder.setItems(items, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int item) {
                boolean result= Utility.checkPermission(ActivityProfileEdit.this);
                if (items[item].equals("Take Photo")) {
                    userChoosenTask="Take Photo";
                    if(result)
                        cameraIntent();
                } else if (items[item].equals("Choose from Library")) {
                    userChoosenTask="Choose from Library";
                    if(result)
                        galleryIntent();
                } else if (items[item].equals("Cancel")) {
                    dialog.dismiss();
                }
            }
        });
        builder.show();
    }

    private void cameraIntent() {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(intent, REQUEST_CAMERA);
    }

    private void galleryIntent() {
        Intent intent = new Intent();
        intent.setType("image/*");
        intent.setAction(Intent.ACTION_GET_CONTENT);//
        startActivityForResult(Intent.createChooser(intent, "Select File"),SELECT_FILE);
    }

    public void checkFields(){


       /* if(fName == "")
            //firstNameWrapper.setError("Pleas input first name");
        if(lName == "")
           // lastNameWrapper.setError("Please input last name");
        if(!validateEmail(newEmail))
           // emailWrapper.setError("Please input valid email address");
        if(pass == "")
           // passwordWrapper.setError("Please input password");
        if(confirmPass == "")
           // passwordWrapper.setError("Please confirm password");
        if(! passwordMatch(pass,confirmPass))
           // passwordWrapper.setError("Password does not much");
        if((fName != "") && (lName != "") && (pass != "")){
            updateDatabase(fName, lName, newEmail, pass, countryVal, cityVal, educationVal);

        }*/
    }

    public boolean validateEmail(String email) {
        matcher = pattern.matcher(email);
        return  matcher.matches();
    }

    public boolean passwordMatch(String password, String passConfirm){

        return password == passConfirm;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        switch (requestCode) {
            case Utility.MY_PERMISSIONS_REQUEST_READ_EXTERNAL_STORAGE:
                if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                    if(userChoosenTask.equals("Take Photo"))
                        cameraIntent();
                    else if(userChoosenTask.equals("Choose from Library"))
                        galleryIntent();
                } else {
                    //code for deny
                }
                break;
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == Activity.RESULT_OK) {
            if (requestCode == SELECT_FILE)
                onSelectFromGalleryResult(data);
            else if (requestCode == REQUEST_CAMERA)
                onCaptureImageResult(data);
        }
    }

    private void onSelectFromGalleryResult(Intent data) {
        Bitmap bm=null;
        if (data != null) {
            try {
                bm = MediaStore.Images.Media.getBitmap(getApplicationContext().getContentResolver(), data.getData());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        userProfile.setImageBitmap(bm);
    }

    private void onCaptureImageResult(Intent data) {
        Bitmap thumbnail = (Bitmap) data.getExtras().get("data");
        ByteArrayOutputStream bytes = new ByteArrayOutputStream();
        thumbnail.compress(Bitmap.CompressFormat.JPEG, 90, bytes);
        File destination = new File(Environment.getExternalStorageDirectory(),
                System.currentTimeMillis() + ".jpg");
        FileOutputStream fo;
        try {
            destination.createNewFile();
            fo = new FileOutputStream(destination);
            fo.write(bytes.toByteArray());
            fo.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        //Bitmap roundBitmap = get getCroppedBitmap(thumbnail, w < h ? w : h);
        userProfile.setImageBitmap(thumbnail);
    }

    public void updateDatabase(String firstName, String lastName, String emailAddress, String password, String uCountry, String uCity, String uEducation){

        UserController controller = new UserController(User.USER_TABLE);
        //DatabaseHelper databaseHelper = DatabaseController.getDatabaseHelper();
        //databaseHelper.onCreate(controller.db);
       // String whereClause = String.format("%s = '%s'", User.COL_EMAIL, emailAddress);
        ProfilerController.profile.first_name = firstName;
        ProfilerController.profile.last_name = lastName;
        UserController.user.email = emailAddress;
       // UserController.user.password = password;
        ProfilerController.profile.country = uCountry;
       // UserController.user.city = uCity;
        ProfilerController.profile.education = uEducation;

       boolean saved = controller.save(UserController.user);
        if(saved){
            Toast.makeText(this, "Saving to db", Toast.LENGTH_LONG).show();
            Intent i = new Intent(ActivityProfileEdit.this, ActivityDashboard.class);
            startActivity(i);
            finish();
        } else {
            Toast.makeText(this, "Failled to Save to db", Toast.LENGTH_LONG).show();
        }


    }
    public void updateApi(final String firstName,final String lastName,final String emailAddress, final String uCountry,final String uEducation){

        final ProgressDialog progressDialog = new ProgressDialog(ActivityProfileEdit.this);
        progressDialog.setMessage("Checking in . . . .");

        AsyncTask<Void, Void, Boolean> asyncTask = new AsyncTask<Void, Void, Boolean>() {
            @Override
            protected Boolean doInBackground(Void... voids) {
                return Api.updateProfile(ProfilerController.profile.getProfile_id(), firstName, lastName, emailAddress,  uCountry, uEducation);
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
                apiResult = aBoolean;
            }
        };
    }

}

