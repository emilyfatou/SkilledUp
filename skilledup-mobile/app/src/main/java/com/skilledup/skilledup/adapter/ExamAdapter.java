package com.skilledup.skilledup.adapter;

import android.app.Activity;
import android.content.Context;
import android.support.annotation.LayoutRes;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

import com.skilledup.skilledup.R;
import com.skilledup.skilledup.model.Exam;

import java.util.ArrayList;

/**
 * Created by User on 5/2/2017.
 */

public class ExamAdapter extends ArrayAdapter<Exam> {

    Activity activity;
    ArrayList<Exam>exams;
    String[] questionsList;

    public ExamAdapter(Activity activity, ArrayList<Exam>exams) {
        super(activity, R.layout.activity_exam ,exams);
        this.exams = exams;
        this.activity = activity;
    }

    public static class ViewHolder{
        TextView title;
        RadioButton optionOne;
        RadioButton optionTwo;
        RadioButton optionThree;
        RadioButton optionFour;
        //ImageView add_img;
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {

        Exam singleExam = getItem(position);
        ViewHolder viewHolder;

        if(convertView == null){
            viewHolder = new ViewHolder();
            LayoutInflater inflater = LayoutInflater.from(getContext());
            convertView = inflater.inflate(R.layout.activity_exam, parent, false);

            viewHolder.title = (TextView) convertView.findViewById(R.id.question);
            viewHolder.optionOne = (RadioButton) convertView.findViewById(R.id.option_one);
            viewHolder.optionTwo = (RadioButton) convertView.findViewById(R.id.option_two);
            viewHolder.optionThree = (RadioButton) convertView.findViewById(R.id.option_three);
            viewHolder.optionFour = (RadioButton) convertView.findViewById(R.id.option_four);

            convertView.setTag(viewHolder);

        }
        else {
            viewHolder = (ViewHolder) convertView.getTag();
        }

        viewHolder.title.setText((position+1) + ". " + singleExam.getExamQuestion());
        viewHolder.optionOne.setText(singleExam.getOptionOne());
        viewHolder.optionTwo.setText(singleExam.getOptionTwo());
        viewHolder.optionThree.setText(singleExam.getOptionThree());
        viewHolder.optionFour.setText(singleExam.getOptionFour());

        return convertView;
    }
}
