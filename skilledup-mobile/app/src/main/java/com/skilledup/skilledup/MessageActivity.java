package com.skilledup.skilledup;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ImageView;

import com.skilledup.skilledup.Fragment.ArchiveFragment;
import com.skilledup.skilledup.Fragment.InboxFragment;
import com.skilledup.skilledup.Fragment.SentFragment;

/**
 * Created by User on 2/28/2017.
 */

public class MessageActivity extends AppCompatActivity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_message_tab);

        initViewPager();
        initToolbar();
    }

    private void initViewPager() {
        /*Creating an instance of the fragment on the tablayout*/
        InboxFragment inboxFragment = new InboxFragment();
        SentFragment sentFragment = new SentFragment();
        ArchiveFragment archiveFragment = new ArchiveFragment();

        /* Inflate the View pager and Tab Layout from the XML */
        ViewPager viewPager = (ViewPager) findViewById(R.id.message_viewpager);
        TabLayout tabLayout = (TabLayout) findViewById(R.id.mesasage_tablayout);
        /* Link the Tab Layout with the View Pager */
        tabLayout.setupWithViewPager(viewPager);
        /* Set the adapter on the view pager*/
        MessagePagerAdapter adapter = new MessagePagerAdapter(getSupportFragmentManager(), this, inboxFragment, sentFragment, archiveFragment );
        viewPager.setAdapter(adapter);
    }

    private void initToolbar() {
        /* Inflate the toolbar */
        Toolbar tlb = (Toolbar) findViewById(R.id.message_toolbar);
        setSupportActionBar(tlb);
        getSupportActionBar().setDisplayShowTitleEnabled(false);
        ImageView bak_image_message = (ImageView) findViewById(R.id.ima_back_message);
        bak_image_message.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(MessageActivity.this, ActivityDashboard.class);
                startActivity(i);
            }
        });

    }
}

