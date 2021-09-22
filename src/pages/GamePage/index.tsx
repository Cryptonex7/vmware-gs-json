import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";
import "@cds/core/card/register.js";
import "@cds/core/divider/register.js";

import { withRouter, RouteComponentProps } from "react-router";

import {
  ClarityIcons,
  successStandardIcon,
  timesCircleIcon,
} from "@cds/core/icon";
import { useEffect, useState } from "react";
import TextField from "../../components/TextField";
import LogoCard from "../../components/LogoCard";
import { images } from "./images";
import axios from "axios";
import { API_URL } from "../../constants";

ClarityIcons.addIcons(successStandardIcon);
ClarityIcons.addIcons(timesCircleIcon);

interface Props extends RouteComponentProps {
  getLeaderboard: any;
}

const TestPage: React.FC<Props> = (props: Props) => {
  const MAX_TIME = 15;
  let indexFromStorage: string | null | number =
    sessionStorage.getItem("index");
  if (indexFromStorage === null) {
    indexFromStorage = 0;
  } else {
    indexFromStorage = parseInt(indexFromStorage);
  }

  let levelFromStorage: string | null | number =
    sessionStorage.getItem("level");
  if (levelFromStorage === null) {
    levelFromStorage = "1";
  }

  const [index, setIndex] = useState(indexFromStorage);
  const [time, setTime] = useState(MAX_TIME);
  const [answer, setAnswer] = useState("");
  const [level, setLevel] = useState(levelFromStorage);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [revealation, setRevealation] = useState(false);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && !isCorrect) {
      onSubmit();
    }
  };

  const getAndStoreScores = async (level: string, index: number) => {
    const response = await axios.get(API_URL + "/api/leaderboard");
    let scoreData: any[] = [];
    if (sessionStorage.getItem("scoreData") !== null) {
      scoreData = JSON.parse(sessionStorage.getItem("scoreData") || "[]");
    }
    // const users = response.data.map((user: any) => user.name);
    
    const datapoint: any = {
      name: "L" + level + " - " + index,
    };
    response.data.map((user: { name: string; score: number }) => {
      datapoint[user.name] = user.score;
    });
    
    scoreData.push(datapoint);
    


    console.log("Score Data: ", scoreData);
    sessionStorage.setItem("scoreData", JSON.stringify(scoreData));
  };

  const onSubmit = async () => {
    console.log(answer);
    if (
      images["level" + level][index].answers.findIndex(
        (ans: string) => ans.toLowerCase() === answer.toLowerCase()
      ) > -1
    ) {
      console.log("Correct!");
      setIsCorrect(true);
      const res = await axios.post(API_URL + "/api/score", {
        name: sessionStorage.getItem("prouser"),
        score: Math.floor((100 + (parseInt(level) / 10)) * (50 - MAX_TIME + time)),
      });
    } else setWrongAnswer(true);
  };

  useEffect(() => {
    if (level === "4") {
      setIsCorrect(false);
      setWrongAnswer(false);
      setRevealation(false);
      props.history.push("/results");
    } else if (index + 1 === images["level" + level]?.length) {
      setIndex(0);
      sessionStorage.setItem("index", index.toString());
      setLevel((parseInt(level) + 1).toString());
      sessionStorage.setItem("level", level.toString());
      setTime(10);
    }
    if (time === 0) {
      setIsCorrect(false);
      setWrongAnswer(false);
    }
    sessionStorage.setItem("level", level.toString());
    sessionStorage.setItem("index", index.toString());
  }, [time, isCorrect, wrongAnswer, index]);

  useEffect(() => {
    const x = setTimeout(() => {
      setTime(time - 1);
      if (time === 0) {
        if (
          level === "3" &&
          index + 1 === images["level" + level].length &&
          time === 0
        ) {
          setIsCorrect(false);
          setWrongAnswer(false);
          setRevealation(false);
          props.history.push("/results");
        }
        if (!revealation) {
          setRevealation(true);
          props.getLeaderboard();
          getAndStoreScores(level, index);
          setTime(5);
        } else {
          setIsCorrect(false);
          setWrongAnswer(false);
          props.getLeaderboard();
          setRevealation(false);
          setIndex(index + 1);
          sessionStorage.setItem("index", index.toString());
          setTime(MAX_TIME);
        }
      }
    }, 1000);
    return () => {
      clearTimeout(x);
    };
  }, [time]);

  return (
    <>
      {parseInt(level) < 4 && (
        <>
          {index !== 0 && (
            <div className="status-container flex-row just-sb full-width">
              <img
                className="levelBadge"
                src={images["level" + level][0].src}
                alt=""
              />
              <div className="status-text">
                Logo {index} / {images["level" + level].length - 2}
              </div>
              <div className="status-text">Level {level} / 3</div>
            </div>
          )}

          <div className="wrapper flex-row just-sa">
            {index === 0 ? (
              <>
                <LogoCard
                  imgUrl={images["level" + level][index].src}
                  hint={images["level" + level][index].answers[0]}
                  time={time}
                />
              </>
            ) : (
              <>
                {/* Image */}
                <div className="logo-display flex-row">
                  <LogoCard
                    imgUrl={images["level" + level][index].src}
                    hint=""
                    time={time}
                  />
                </div>
                <cds-divider
                  class="align-fs"
                  orientation="vertical"
                ></cds-divider>

                {/* Answer Sheet */}
                <div className="answer-sheet flex-col width-50">
                  {revealation ? (
                    <>
                      <LogoCard
                        imgUrl={images["level" + level][index].revealed}
                        hint={images["level" + level][index].answers[0]}
                        time={time}
                      />
                    </>
                  ) : (
                    <>
                      <TextField
                        label="Answer"
                        placeholder="Write the Name of the Company whose Logo is shown."
                        message="You can have unlimited tries till time runs out - you will only be scored if you make a correct guess!"
                        onChange={(e: any) => setAnswer(e.target.value)}
                        onKeyPress={handleKeyPress}
                      />
                      <br />
                      <br />
                      {isCorrect ? (
                        <cds-icon
                          shape="success-standard"
                          status="success"
                          size="xl"
                        ></cds-icon>
                      ) : (
                        <>
                          <cds-button block onClick={onSubmit}>
                            Submit
                          </cds-button>
                          <br />
                          <br />
                          {wrongAnswer && (
                            <cds-icon
                              shape="times-circle"
                              status="danger"
                              size="xl"
                            ></cds-icon>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default withRouter(TestPage);
