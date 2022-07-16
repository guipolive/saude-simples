import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { CustomTextInput } from "../components/CustomTextInput";
import { HeaderLogo } from "../components/HeaderLogo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [cpf, setCpf] = useState<string>("");

  return (
    <div className="container">
      <Head>
        <title>Login</title>
        <meta name="description" content="Faça seu login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderLogo title="Login" />

      <main className={styles.main}>
        <CustomTextInput
          label="Digite seu CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />

        <div className="styles buttonsContainer">
          <CustomButton color="blue" text="Entrar" onClick={console.log} />
        </div>
      </main>
    </div>
  );
};

export default Home;
