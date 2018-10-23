package com.skilledup.skilledup;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.content.Intent;

//import android.support.design


public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_message_tab);


        Intent intent = new Intent(getApplicationContext(),ActivitySignIn.class);
        startActivity(intent);


   /*        Toolbar tlb = (Toolbar) findViewById(R.id.message_tool_bar);
        //setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
       // setSupportActionBar(tlb);
        tlb.setNavigationIcon(R.drawable.ic_keyboard_backspace_black_24dp);
        tlb.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                //drawerLayout.openDrawer(GravityCompat.START);
            }
        });


     Button inboxBtn = (Button) findViewById(R.id.inbox_btn);
        Button sentBtn = (Button) findViewById(R.id.sent_btn);
        Button archiveBtn = (Button) findViewById(R.id.archive_btn);

      inboxBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                messageFragmentManager(inboxFragment);

            }
        });

        sentBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                messageFragmentManager(sentFragment);

            }
        });

        archiveBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                messageFragmentManager(archiveFragment);

            }
        });/*  */
    }

    public void messageFragmentManager(Fragment fragment) {

        FragmentManager fragmentManager = getSupportFragmentManager();
        FragmentTransaction fragmentTransaction = fragmentManager.beginTransaction();
        fragmentTransaction.replace(R.id.message_holder_fragment,fragment);
        fragmentTransaction.commit();


    }

}
