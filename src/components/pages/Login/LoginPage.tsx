/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { useNavigate } from "react-router";
import { getRequestT } from "../../../redux/tools/trelloSlice";
import { Login, LoginMain } from "./LoginStyle";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const user = useAppSelector((state) => state.trellRender.data);
  const dispatch = useAppDispatch();
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguage = (event: string | any) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  const notifyEr = () => toast.error("Заполните все поля!");

  const hadleAdd = () => {
    const findUser = user.find(
      (item) => item.name === inputName && item.password === inputPassword
    );

    if (findUser) {
      localStorage.setItem("userData", "" + findUser.id);
      navigate("/home");
    } else if (inputName === "" || inputPassword === "") {
      notifyEr();
    } else {
      alert("User is not found");
      console.log("User is not found");
    }
  };
  useEffect(() => {
    dispatch(getRequestT());
  }, [dispatch]);

  const navigateRegistration = () => {
    navigate("/registration");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "45px",
      }}
    >
      <Login>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
          alt=""
        />
        <LoginMain>
          <p>{t("about.title")}</p>

          <div className="Input">
            <input
              type="text"
              placeholder={t("about.inputOne")}
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              type="text"
              placeholder={t("about.inputTwo")}
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </div>
          <button onClick={hadleAdd}>{t("about.buttonOne")}</button>
          <button className="Two" onClick={navigateRegistration}>
            {t("about.buttonTwo")}
          </button>
          <SelectValue onChange={changeLanguage}>
            <option value="">языки</option>
            <option value="en">{t("about.selectOne")}</option>
            <option value="ru">{t("about.selectTwo")}</option>
          </SelectValue>
        </LoginMain>
      </Login>
      <ToastContainer />;
    </div>
  );
};
export default LoginPage;

const SelectValue = styled.select`
  border: none;
  outline: none;
  padding: 12px 1px;
  color: gray;
  option {
    color: #000000;
  }
`;
