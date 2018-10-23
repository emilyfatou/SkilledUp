package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.widget.Toast;

import com.google.android.youtube.player.YouTubeBaseActivity;
import com.google.android.youtube.player.YouTubeInitializationResult;
import com.google.android.youtube.player.YouTubePlayer;
import com.google.android.youtube.player.YouTubePlayerView;
import com.skilledup.skilledup.model.CourseList;

/**
 * Created by User on 4/18/2017.
 */

public class ActivityVideoPlayer extends  YouTubeBaseActivity implements YouTubePlayer.OnInitializedListener {

    private static final int RECOVERY_REQUEST = 1;
    private YouTubePlayerView youTubeView;
    public static final String YOUTUBE_API_KEY = "AIzaSyABwhiwACcIEABt7LpG65GXhappQQmBN24";
    private String VIDEO_ID;
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_video_palyer);

        Intent intent = getIntent();
        if(intent.hasExtra("video_id")){
            CourseList list = (CourseList) intent.getSerializableExtra("video_id");
            VIDEO_ID = list.getCourse_link();
          //  Toast.makeText(this, "Video ID : " + VIDEO_ID, Toast.LENGTH_LONG).show();
        }

      youTubeView = (YouTubePlayerView) findViewById(R.id.youtube_view);
       youTubeView.initialize(YOUTUBE_API_KEY, this);

        //YouTubePlayerView youTubePlayerView = (YouTubePlayerView) findViewById(R.id.youtube_view);
       // youTubePlayerView.initialize(YOUTUBE_API_KEY, this);
    }

/*
    @Override
    public void onInitializationFailure(YouTubePlayer.Provider provider, YouTubeInitializationResult result) {
        Toast.makeText(this, "Failured to Initialize!", Toast.LENGTH_LONG).show();
    }

    @Override
    public void onInitializationSuccess(YouTubePlayer.Provider provider, YouTubePlayer player, boolean wasRestored) {
        /** add listeners to YouTubePlayer instance
        player.setPlayerStateChangeListener(playerStateChangeListener);
        player.setPlaybackEventListener(playbackEventListener);

        /** Start buffering
        if (!wasRestored) {
            //player.cueVideo("FndG7vyxPWc");
            player.loadVideo("FndG7vyxPWc");
        }

        player.setPlayerStyle(YouTubePlayer.PlayerStyle.MINIMAL);
    }

    private YouTubePlayer.PlaybackEventListener playbackEventListener = new YouTubePlayer.PlaybackEventListener() {

        @Override
        public void onBuffering(boolean arg0) {
        }

        @Override
        public void onPaused() {
        }

        @Override
        public void onPlaying() {
        }

        @Override
        public void onSeekTo(int arg0) {
        }

        @Override
        public void onStopped() {
        }

    };

    private YouTubePlayer.PlayerStateChangeListener playerStateChangeListener = new YouTubePlayer.PlayerStateChangeListener() {

        @Override
        public void onAdStarted() {
        }

        @Override
        public void onError(YouTubePlayer.ErrorReason arg0) {
        }

        @Override
        public void onLoaded(String arg0) {
        }

        @Override
        public void onLoading() {
        }

        @Override
        public void onVideoEnded() {
        }

        @Override
        public void onVideoStarted() {
        }
    };*/


    @Override
    public void onInitializationSuccess(YouTubePlayer.Provider provider, YouTubePlayer youTubePlayer, boolean wasRestored) {

        if (!wasRestored) {
            //youTubePlayer.cueVideo(VIDEO_ID); // Plays https://www.youtube.com/watch?v=fhWaJi1Hsfo
            youTubePlayer.loadVideo(VIDEO_ID);
            //this.player = player;
            //player.loadVideo(VIDEO_ID)
            youTubePlayer.setPlayerStyle(YouTubePlayer.PlayerStyle.DEFAULT);


        }
    }

    @Override
    public void onInitializationFailure(YouTubePlayer.Provider provider, YouTubeInitializationResult errorReason) {
        if (errorReason.isUserRecoverableError()) {
            errorReason.getErrorDialog(this, RECOVERY_REQUEST).show();
        } else {
           // String error = String.format(getString(R.string.player_error), errorReason.toString());
            Toast.makeText(this, "Something goes wrong ", Toast.LENGTH_LONG).show();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == RECOVERY_REQUEST) {
            // Retry initialization if user performed a recovery action
            getYouTubePlayerProvider().initialize(YOUTUBE_API_KEY, this);
        }
    }

    protected YouTubePlayer.Provider getYouTubePlayerProvider() {
        return youTubeView;
    }
}
