package com.skilledup.skilledup.backend;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import com.skilledup.skilledup.ActivityMyCourse;
import com.skilledup.skilledup.ActivitySignIn;
import com.skilledup.skilledup.controller.CourseController;
import com.skilledup.skilledup.controller.ProfilerController;
import com.skilledup.skilledup.controller.UserController;
import com.skilledup.skilledup.model.CourseList;
import com.skilledup.skilledup.model.Profile;
import com.skilledup.skilledup.model.User;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import okhttp3.OkHttpClient;

/**
 * Created by User on 3/10/2017.
 */

public class Api {

    public static final String BASE_URL = "http://skilledup-api.ett.gebeya.io";
    public static final String LOGIN_URL = BASE_URL + "/users/login";
    public static final String SIGN_UP_URL = BASE_URL + "/users/signup";
    public static final String LOG_OUT_URL = BASE_URL + "/users/logout";
    public static final String ALL_COURSE_URL = BASE_URL + "/courses/";
    public static final String EXAM_URL = BASE_URL + "/exams/";
    public static final String ASSIGN_URL = BASE_URL + "/assignments/";
    public static final String UPDATE_PROFILE_URL = "/profiles/";

    public static final String GET_PROFILE_URL = BASE_URL + "/profiles/";
    public static final String CHANGE_PASS_URL = "/users/updatePass/";


    public static final String EYOHATUBE = "http://www.eyohatube.com/api/v1/";
    public static final String NEW_VIDEO = EYOHATUBE + "new_videos";


    public static boolean login(String email, String password){

        JSONObject loginJson = new JSONObject();
        try {
            loginJson.put("email", email);
            loginJson.put("password", password);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }
        /* Call Loader and make http request */
        ApiLoader loader = new ApiLoader(LOGIN_URL)
                .setHttpMethod(ApiLoader.POST);
        boolean res = loader.loadJSON(loginJson.toString());
        if (!res){
            e(loader.response);
           // ActivitySignIn.API_ERROR = loader.response;
            return res;
        }

        else {

            /* Get the Response and Process it */
            String result = loader.response;
            d("login: Result: " + result);
		/* Create the user table in the database */
            UserController controller = new UserController(User.USER_TABLE);
            ProfilerController profilerController = new ProfilerController(Profile.PROFILE_TABLE);
            try {
		/* Add the user to the database */
                User u = new User();
                Profile p = new Profile();
                JSONObject o = new JSONObject(result);
                u.token = o.getString("token");
		/* Set the token in the Loader class for later requests to the API */
                loader.setToken(u.token);
                JSONObject user = o.getJSONObject("user");

                //Get data for user object
                u.user_id = user.getString("_id");
                u.email = user.getString("email");
                //Get data for profile
                JSONObject profile = user.getJSONObject("profile");
                p.profile_id = profile.getString("_id");
                p.first_name  = profile.getString("first_name");
                p.last_name = profile.getString("last_name");
                //p.country = profile.getString("country");

                controller.save(u);
                controller.load();
                profilerController.save(p);
                profilerController.load();
                // loads the user info from the database to the static 'user' field inside the UserController class.
                return true;
            } catch (JSONException e) {
                e.printStackTrace();
                return false;
            }
        }

    }
    public static boolean logout(String token){

        JSONObject logoutJson = new JSONObject();
        try {
            logoutJson.put("token", UserController.user.getToken());
            logoutJson.put("_id", UserController.user.getUser_id());
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        ApiLoader loader = new ApiLoader(LOG_OUT_URL)
                .setHttpMethod(ApiLoader.POST);
               // .setToken(token);

       // boolean res = loader.loadJSON(null);
        boolean res = loader.loadJSON(logoutJson.toString());
        String result = loader.response;

        d(logoutJson.toString());

        if (!res){
            //e(result);
            return res;
        }
        else {
            d(result);
        }
        return true;
    }
    public static boolean register(String fName, String lName, String email, String password){

        JSONObject b = new JSONObject();
        try {
            b.put("first_name", fName);
            b.put("last_name", lName);
            b.put("email", email);
            b.put("password", password);
            b.put("phone_number","+251912038172");
            b.put("country","Ethiopia");
            b.put("user_type", "trainee");
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        ApiLoader loader = new ApiLoader(SIGN_UP_URL)
                .setHttpMethod(ApiLoader.POST);
        boolean res = loader.loadJSON(b.toString());
        if (!res) {
            return res;
        }
        /* Get the Response and Process it */
        else {
            String result = loader.response;
            d("signUp: Result: " + result);
        }
        return true;
    }
    public static boolean getProfile(String profile_id){

        JSONObject b = new JSONObject();
        try {
            b.put("_id", profile_id);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        ApiLoader loader = new ApiLoader(GET_PROFILE_URL + profile_id);
        loader.setHttpMethod(ApiLoader.GET);
        boolean res = loader.loadJSON(b.toString());

        if (!res){
            e(loader.response);
            // ActivitySignIn.API_ERROR = loader.response;
            return res;
        }
        else {
            String result = loader.response;
            d(result);
        }

        return true;
    }


    public static boolean updateProfile(String profile_id, String firstName, String lastName, String emailAddress,  String uCountry, String uEducation){

        JSONObject b = new JSONObject();
        try {
            b.put("first_name", firstName);
            b.put("last_name", lastName);
            b.put("email", emailAddress);
            b.put("country",uCountry);
            b.put("education_level", uEducation);
        }catch (JSONException e) {
            e.printStackTrace();
            return false;
        }

        /* Call Loader and make http request */
        ApiLoader loader = new ApiLoader(SIGN_UP_URL)
                .setHttpMethod(ApiLoader.POST);
        boolean res = loader.loadJSON(b.toString());
        if (!res) {
            return res;
        }
        /* Get the Response and Process it */
        else {
            String result = loader.response;
            d("signUp: Result: " + result);
        }

        return true;
    }
    public static boolean getData(){
        ApiLoader loader = new ApiLoader(LOGIN_URL)
                .setHttpMethod(ApiLoader.GET);
        return true;
    }
    public static boolean forgotPassword(String emailAddress){
        return true;
    }
    public static boolean getAllCourse(){

        ApiLoader loader = new ApiLoader(ALL_COURSE_URL);
        loader.setHttpMethod(ApiLoader.GET);

        boolean result = loader.loadJSON(null);
        if(result) {
            String data = loader.response;
            try {
                JSONArray jsonArray = new JSONArray(data);
                for(int i = 0; i < 5; i++){
                    JSONObject o = jsonArray.getJSONObject(i);
                    //Api.d(o.getString("video_title"));
                    CourseList apiList = new CourseList();
                    apiList.course_title = o.getString("video_title");
                    // ActivityMyCourse.apiCourse.add(apiList);

                }
                //Api.d(Integer.toString(ActivityMyCourse.apiCourse.size()));

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        else {
            e("Failled !!");
            return false;
        }


        return true;
    }
    public static boolean getMyCourse(){

        return true;
    }
    public static boolean getExam(){

        return true;
    }
    public static boolean submitAssgnment(){

        return true;
    }
    public static boolean searchCourse(String searchKey){

        return true;
    }



    public static boolean getNewVideo(){

        ApiLoader loader = new ApiLoader(NEW_VIDEO);
        loader.setHttpMethod(ApiLoader.GET);

        boolean result = loader.loadJSON(null);
        if(result) {
            String data = loader.response;
            try {
                JSONArray jsonArray = new JSONArray(data);

                for(int i = 0; i < 5; i++){
                    JSONObject o = jsonArray.getJSONObject(i);
                    //Api.d(o.getString("video_title"));
                    CourseList apiList = new CourseList();
                    apiList.course_title = o.getString("video_title");
                   // ActivityMyCourse.apiCourse.add(apiList);

                }
                //Api.d(Integer.toString(ActivityMyCourse.apiCourse.size()));

            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        else {
            e("Failled !!");
            return false;
        }

        return true;
    }
    public static void d(String message){
        Log.d("Api Debug:",message);
    }
    public static void e(String message){
        Log.e("Api Error:", message);
    }
}
