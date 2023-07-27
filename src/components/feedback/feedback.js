import { Statistics } from "components/Statistics/Statistics";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Notification } from "components/notification/notification";
import { useState } from "react";

export const Feedback = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const state = [good, neutral, bad];


    const handleClickFeedback = (key) => {

        switch (key) {
            case 'good':
                setGood(prevState => prevState + 1)
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1)
                break;
            case 'bad':
                setBad(prevState => prevState + 1)
                break;

            default:
                break;
        }
    };


    const countTotalFeedback = () => {

        return state.reduce((total, value) => total += value, 0);
    };

    const countPositiveFeedbackPercentage = (goodValue, total) => {

        return goodValue === 0 ? 0 : Math.round(((100 * goodValue) / total));
    };

    const total = countTotalFeedback();
    const positiveFeedback = countPositiveFeedbackPercentage(good, total);


    return (

        <div>
            <Section title='Pleas leave feedback'>
                {/* <FeedbackOptions options={[{ 'good': good }, { 'neutral': neutral }, { 'bad': bad }]} onLeaveFeedback={handleClickFeedback} /> */}
                <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleClickFeedback} />
            </Section>

            <Section title='Statistics'>
                {total === 0 ? (
                    <Notification message={"There is no feedback yet..."} />
                ) : (
                    <Statistics good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positiveFeedback={positiveFeedback} />
                )}
            </Section>

        </div>

    )

};


