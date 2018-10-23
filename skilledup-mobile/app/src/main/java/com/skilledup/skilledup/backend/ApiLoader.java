package com.skilledup.skilledup.backend;

import android.text.TextUtils;
import android.widget.ListView;

import java.io.IOException;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Created by User on 3/10/2017.
 */

public class ApiLoader {

    private OkHttpClient okHttpClient;
    String response;
    int statusCode;

    public String token;
    public String url;

    private String HTTP_METHOD;
    public static String POST = "post";
    public static String GET = "get";
    public static String DELETE = "delete";
    public static String PUT = "put";


    public ApiLoader(String url) {
        this.url = url;
        okHttpClient = new OkHttpClient();
    }

    public ApiLoader setToken(String token){
        this.token = token;
        return this;
    }

    public ApiLoader setHttpMethod(String httpMethod){
        this.HTTP_METHOD = httpMethod;
        return this;
    }

    /**
     * Check whether the request is successful
     * @return TRUE if code is between 200 & 300
     */
    public boolean isSuccessful(){
        return statusCode >= 200 && statusCode < 300;
    }

    public boolean loadJSON(String jsonString){

        Request.Builder builder = new Request.Builder();
        builder.url(url)
                .addHeader("Content-Type", "application/json");

        /* Add token, if it is set */
        if (!TextUtils.isEmpty(token)) {
            builder.addHeader("Authorization", "Bearer" + token);
        }

        /* Check if it is POST / GET */
        if (HTTP_METHOD.equals(POST)) {
            /* Create MediaType and Request Body */
            MediaType mediaType = MediaType.parse("application/json");
            RequestBody requestBody = RequestBody.create(mediaType, jsonString);

            builder.post(requestBody);

        }else if (HTTP_METHOD.equals(GET)) {
            builder.get();

        }

        /* Create Request */
        Request request = builder.build();

        try {
            Response r = okHttpClient.newCall(request).execute();
            response = r.body().string();

            Api.d(response);
            statusCode = r.code();
            return isSuccessful();

        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
    }
}
