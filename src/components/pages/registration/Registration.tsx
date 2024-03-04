import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { postRequestT } from "../../../redux/tools/trelloSlice";
import { useNavigate } from "react-router";
import "../../../i18n";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  useAppSelector((state) => state.trellRender.data);
  const dispatch = useAppDispatch();
  const [valueName, setValueName] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueImg, setValueImg] = useState("");
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeLanguage = (e: string | any) => {
    const selecedN = e.target.value;
    i18n.changeLanguage(selecedN);
  };
  const notifyEr = () => toast.error("Заполните все поля!");

  const handleAdd = () => {
    if (valueName === "" || valuePassword === "" || valueImg === "") {
      notifyEr();
    } else {
      const newData = {
        id: Math.random(),
        name: valueName,
        password: valuePassword,
        userImage: valueImg,
      };
      console.log(newData);
      dispatch(postRequestT(newData));

      navigate("/");
    }
  };
  return (
    <div>
      <RegisDiv>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
          alt="image"
        />
        <RegisMain>
          <p>{t("Two.called")}</p>
          <p className="Text">{t("Two.grayText")}</p>
          <a href="https://www.google.com/gmail/about/">{t("Two.aText")}</a>
          <input
            type="text"
            placeholder={t("Two.inputName")}
            value={valueName}
            onChange={(e) => setValueName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("Two.inputPassword")}
            value={valuePassword}
            onChange={(e) => setValuePassword(e.target.value)}
          />
          <input
            type="url"
            placeholder={t("Two.inputImage")}
            value={valueImg}
            onChange={(e) => setValueImg(e.target.value)}
          />
          <button onClick={handleAdd}>{t("Two.buttonOpen")}</button>
          <span>{t("Two.spanText")} </span>
          <a className="footer" href="/">
            {t("Two.aTextTwo")}
          </a>
          <select onChange={changeLanguage}>
            <option value="">языки</option>
            <option value="en">{t("Two.selectEn")}</option>
            <option value="re">{t("Two.selectRu")}</option>
          </select>
        </RegisMain>
      </RegisDiv>
      <ToastContainer />;
    </div>
  );
};

export default Registration;

const RegisDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-inline: auto;
  img {
    width: 280px;
  }
`;
const RegisMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(9, 30, 66, 0.15) 0px 0.5rem 1rem 0px;
  padding: 2rem;
  font-family: var(--font-family-text, "Charlie Text", sans-serif);
  p {
    font-size: 1.45rem;
    line-height: 1.2;
  }
  p.Text {
    font-size: 17px;
    color: gray;
  }
  a {
    font-size: 13px;
  }
  a.footer {
    font-size: 14.4px;
  }
  input {
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
    background-color: rgb(250, 251, 252);
    border: 2px solid rgb(223, 225, 230);
    border-radius: 0.3rem;

    &:focus {
      transition: all 1s ease-in-out;
      border: 2px solid rgb(0, 82, 204);
      outline: none;
    }
  }
  span {
    color: gray;
  }
  button {
    border-radius: 6px;
    border: none;
    outline: none;
    background-color: rgb(235, 236, 250) !important;
    color: rgb(122, 134, 154) !important;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
  }
  select {
    border: none;
    outline: none;
    padding: 12px 1px;
    color: gray;
    option {
      color: #000000;
    }
  }
`;
