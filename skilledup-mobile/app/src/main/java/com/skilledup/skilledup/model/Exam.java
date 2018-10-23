package com.skilledup.skilledup.model;

/**
 * Created by User on 5/2/2017.
 */

public class Exam {

    public String examQuestion;
    public String optionOne;
    public String optionTwo;
    public String optionThree;
    public String optionFour;

    public Exam(String examQuestion, String optionOne, String optionTwo, String optionThree, String optionFour) {
        this.examQuestion = examQuestion;
        this.optionOne = optionOne;
        this.optionTwo = optionTwo;
        this.optionThree = optionThree;
        this.optionFour = optionFour;
    }

    public String getExamQuestion() {
        return examQuestion;
    }

    public String getOptionOne() {
        return optionOne;
    }

    public String getOptionTwo() {
        return optionTwo;
    }

    public String getOptionThree() {
        return optionThree;
    }

    public String getOptionFour() {
        return optionFour;
    }
}
