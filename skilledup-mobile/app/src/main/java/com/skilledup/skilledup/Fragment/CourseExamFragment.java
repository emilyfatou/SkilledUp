package com.skilledup.skilledup.Fragment;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.skilledup.skilledup.R;
import com.skilledup.skilledup.adapter.ExamAdapter;
import com.skilledup.skilledup.adapter.TestAdapter;
import com.skilledup.skilledup.model.Exam;

import java.util.ArrayList;

/**
 * Created by User on 3/30/2017.
 */

public class CourseExamFragment extends Fragment {

    public static View root;
    Button submit;
    RadioGroup examGroup;
    RadioButton optionOne, optionTwo, optionThree, optionFour;
    //TextView question;
    Button next;

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

        root = inflater.inflate(R.layout.exam_list_view, container, false);
        return root;
    }

    @Override
    public void onActivityCreated(@Nullable Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        submit = (Button) root.findViewById(R.id.submit_exam);
        ArrayList<Exam> examData = new ArrayList<Exam>();


        examData.add(new Exam("What is the capital of Ethiopaia ?", "Addis Ababa","Nairobe","Kampala","Bahirdar"));
        examData.add(new Exam("What is the capital of America ?", "Washingto","Nairobe","California","Chicago"));
        examData.add(new Exam("What is the capital of Kenya ?", "Addis Ababa","Nairobe","Mombassa","Bahirdar"));
        examData.add(new Exam("What is the capital of Ethiopaia ?", "Addis Ababa","Nairobe","Kampala","Bahirdar"));
        examData.add(new Exam("What is the capital of Ethiopaia ?", "Addis Ababa","Nairobe","Kampala","Bahirdar"));

    class Viewhold{
            RadioGroup examGroup;
            RadioButton optionOne, optionTwo, optionThree, optionFour;
            TextView question;
            Button next;
        }
        Viewhold viewhold = new Viewhold();
        examGroup = (RadioGroup) root.findViewById(R.id.exam_group);
        optionOne = (RadioButton) root.findViewById(R.id.option_one);
        optionTwo = (RadioButton) root.findViewById(R.id.option_one);
        optionThree = (RadioButton) root.findViewById(R.id.option_one);
        optionFour = (RadioButton) root.findViewById(R.id.option_one);
        TextView question = (TextView) root.findViewById(R.id.question);
        question.setText("This is test");


/*         TextView question = (TextView) root.findViewById(R.id.question);


        for(int i = 0; i < examData.size(); i++){
            Exam sigleExam = examData.get(i);
            if(i == (examData.size() + 1)){
                next.setText("Submit");
            }
        }


           final ListView simpleList  = (ListView) root.findViewById(R.id.exam_list_view);
        final ExamAdapter adapter = new ExamAdapter(getActivity(), examData);
        simpleList.setAdapter(adapter);

        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getContext(), "Thank you for taking the exam !!", Toast.LENGTH_LONG).show();
            }
        });
*/
    }


}
