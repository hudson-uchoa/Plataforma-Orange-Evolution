import Header from "../../components/Header/Header";
import AllModules from "../../components/AllModules/AllModules";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { getUsersParams } from "../../services/Api";
import ScrollUpButton from "../../components/ScrollUpButton/ScrollUpButton";

export default function TrailsContent() {
  const [user, setUser] = useState({});

  const idUser = localStorage.getItem("idUser");

  const handleReq = async () => {
    const response = await getUsersParams(idUser);
    setUser(response.usuario);
  };

  useEffect(() => {
    handleReq();
  }, []);
  return (
    <div>
      <ScrollUpButton showBelow={50} />
      <Header
        pages={["Inicio", "Trilhas"]}
        settings={["Meu dados", "Sair"]}
        userName={user.NOME_COMPLETO}
        url={[
          `/${localStorage.getItem("idUser")}`,
          `/trails/${localStorage.getItem("idUser")}`,
          `/profile/${localStorage.getItem("idUser")}`,
          "/",
        ]}
      />
      <AllModules />

      <Footer />
    </div>
  );
}
